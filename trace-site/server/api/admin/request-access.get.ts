import type { RequestAccessListResponse } from '~~/types/site'
import { listRequestAccessRecords } from '../../services/requestAccess'

const csvHeaders = [
  'id',
  'name',
  'email',
  'path',
  'organization',
  'focus',
  'receivedAt',
  'userAgent',
]

const getBearerToken = (authorization = '') => {
  const [scheme, token] = authorization.split(' ')

  return scheme?.toLowerCase() === 'bearer' ? token || '' : ''
}

const escapeCsvValue = (value: unknown) => {
  const text = String(value ?? '')

  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text
}

const recordsToCsv = (
  records: RequestAccessListResponse['records'],
) => [
  csvHeaders.join(','),
  ...records.map((record) =>
    csvHeaders
      .map((header) =>
        escapeCsvValue(record[header as keyof typeof record]),
      )
      .join(','),
  ),
].join('\n')

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const adminToken = String(config.requestAccessAdminToken || '')

  if (!adminToken) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Not found',
    })
  }

  const token =
    getBearerToken(getHeader(event, 'authorization')) ||
    String(getHeader(event, 'x-admin-token') || '')

  if (token !== adminToken) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Admin token required.',
    })
  }

  const query = getQuery(event)
  const limit =
    typeof query.limit === 'string' && query.limit
      ? Number.parseInt(query.limit, 10)
      : 100
  const records = await listRequestAccessRecords(limit)
  const format = typeof query.format === 'string' ? query.format : ''
  const acceptsCsv = getHeader(event, 'accept')?.includes('text/csv') ?? false

  if (format === 'csv' || acceptsCsv) {
    setHeader(event, 'content-type', 'text/csv; charset=utf-8')
    setHeader(
      event,
      'content-disposition',
      'attachment; filename="trace-request-access.csv"',
    )

    return `${recordsToCsv(records)}\n`
  }

  return {
    ok: true,
    count: records.length,
    records,
  }
})
