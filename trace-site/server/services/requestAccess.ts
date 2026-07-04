import { mkdir, appendFile, readFile } from 'node:fs/promises'
import { dirname, isAbsolute, resolve } from 'node:path'
import type { RequestAccessRecord } from '~~/types/site'

type RequestAccessDestination = 'email' | 'file' | 'log'

const validDestinations: RequestAccessDestination[] = ['email', 'file', 'log']

const resolveStorePath = (filePath: string) =>
  isAbsolute(filePath) ? filePath : resolve(process.cwd(), filePath)

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

const formatPathLabel = (path: RequestAccessRecord['path']) => ({
  contributor: 'Contributor',
  hardware: 'Hardware',
  researcher: 'Researcher',
}[path])

const getConfiguredDestinations = () => {
  const config = useRuntimeConfig()
  const configured = String(config.requestAccessDestinations || '')
  const destinations = configured
    .split(',')
    .map((destination) => destination.trim().toLowerCase())
    .filter(Boolean)

  if (!destinations.length) {
    return ['log'] satisfies RequestAccessDestination[]
  }

  return destinations.map((destination) => {
    if (
      validDestinations.includes(destination as RequestAccessDestination)
    ) {
      return destination as RequestAccessDestination
    }

    throw new Error(
      `Unsupported REQUEST_ACCESS_DESTINATIONS entry: ${destination}`,
    )
  })
}

const appendJsonLine = async (filePath: string, record: RequestAccessRecord) => {
  const resolvedPath = resolveStorePath(filePath)

  await mkdir(dirname(resolvedPath), { recursive: true })
  await appendFile(resolvedPath, `${JSON.stringify(record)}\n`, 'utf8')

  return resolvedPath
}

const getConfiguredFilePath = () => {
  const config = useRuntimeConfig()

  return String(config.requestAccessFilePath || '.data/request-access.jsonl')
}

const buildEmailText = (record: RequestAccessRecord) => [
  'New TRACE request access submission',
  '',
  `Name: ${record.name}`,
  `Email: ${record.email}`,
  `Path: ${formatPathLabel(record.path)}`,
  `Organization: ${record.organization || 'Independent'}`,
  `Received: ${record.receivedAt}`,
  '',
  'Focus:',
  record.focus,
  '',
  `Request ID: ${record.id}`,
].join('\n')

const buildEmailHtml = (record: RequestAccessRecord) => {
  const fields: Array<[string, string]> = [
    ['Name', record.name],
    ['Email', record.email],
    ['Path', formatPathLabel(record.path)],
    ['Organization', record.organization || 'Independent'],
    ['Received', record.receivedAt],
    ['Request ID', record.id],
  ]

  return `
    <div style="font-family: Inter, Arial, sans-serif; color: #10233f;">
      <h1 style="margin: 0 0 16px; font-size: 24px;">New TRACE request access submission</h1>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        ${fields
          .map(
            ([label, value]) => `
              <tr>
                <th style="border-bottom: 1px solid #d8e4ef; padding: 10px 0; text-align: left; width: 140px;">${escapeHtml(label)}</th>
                <td style="border-bottom: 1px solid #d8e4ef; padding: 10px 0;">${escapeHtml(value)}</td>
              </tr>
            `,
          )
          .join('')}
      </table>
      <h2 style="margin: 24px 0 8px; font-size: 16px;">Focus</h2>
      <p style="max-width: 640px; white-space: pre-line; line-height: 1.6;">${escapeHtml(record.focus)}</p>
    </div>
  `
}

const sendRequestAccessEmail = async (record: RequestAccessRecord) => {
  const config = useRuntimeConfig()
  const provider = String(config.requestAccessEmailProvider || 'resend')
  const apiKey = String(config.resendApiKey || '')
  const from = String(config.requestAccessEmailFrom || '')
  const to = String(config.requestAccessEmailTo || '')
  const recipients = to
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean)

  if (provider !== 'resend') {
    throw new Error(
      `Unsupported REQUEST_ACCESS_EMAIL_PROVIDER: ${provider}`,
    )
  }

  const missing = [
    !apiKey && 'RESEND_API_KEY',
    !from && 'REQUEST_ACCESS_EMAIL_FROM',
    !recipients.length && 'REQUEST_ACCESS_EMAIL_TO',
  ].filter(Boolean)

  if (missing.length) {
    throw new Error(
      `Email delivery is missing ${missing.join(', ')}`,
    )
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: recipients,
      reply_to: record.email,
      subject: `TRACE request access: ${formatPathLabel(record.path)} - ${record.name}`,
      text: buildEmailText(record),
      html: buildEmailHtml(record),
    }),
  })

  if (!response.ok) {
    const message = await response.text()

    throw new Error(
      `Resend email failed (${response.status}): ${message.slice(0, 500)}`,
    )
  }

  console.info('[request-access] emailed', {
    id: record.id,
    path: record.path,
    recipients,
    receivedAt: record.receivedAt,
  })
}

export const submitRequestAccessRecord = async (
  record: RequestAccessRecord,
) => {
  const destinations = getConfiguredDestinations()
  const deliveredTo: RequestAccessDestination[] = []

  for (const destination of destinations) {
    if (destination === 'email') {
      await sendRequestAccessEmail(record)
      deliveredTo.push(destination)
      continue
    }

    if (destination === 'file') {
      const filePath = await appendJsonLine(
        getConfiguredFilePath(),
        record,
      )

      console.info('[request-access] saved', {
        id: record.id,
        path: record.path,
        filePath,
        receivedAt: record.receivedAt,
      })

      deliveredTo.push(destination)
      continue
    }

    console.info('[request-access] accepted', {
      id: record.id,
      path: record.path,
      organization: record.organization || undefined,
      receivedAt: record.receivedAt,
    })
    deliveredTo.push(destination)
  }

  return {
    delivered: true,
    destination: deliveredTo.join(','),
  }
}

export const listRequestAccessRecords = async (limit = 100) => {
  const filePath = resolveStorePath(getConfiguredFilePath())
  const numericLimit = Number.isFinite(limit) ? Math.trunc(limit) : 100
  const safeLimit = Math.min(Math.max(numericLimit, 1), 500)

  try {
    const contents = await readFile(filePath, 'utf8')

    return contents
      .split('\n')
      .filter(Boolean)
      .slice(-safeLimit)
      .map((line) => JSON.parse(line) as RequestAccessRecord)
      .reverse()
  } catch (error) {
    if (
      typeof error === 'object' &&
      error &&
      'code' in error &&
      error.code === 'ENOENT'
    ) {
      return []
    }

    throw error
  }
}
