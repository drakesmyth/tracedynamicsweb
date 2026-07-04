import type {
  RequestAccessPath,
  RequestAccessRecord,
  RequestAccessRequest,
  RequestAccessResponse,
} from '~~/types/site'
import { submitRequestAccessRecord } from '../services/requestAccess'

const accessPaths: RequestAccessPath[] = [
  'hardware',
  'researcher',
  'contributor',
]

const rateLimitWindowMs = 60_000
const maxRequestsPerWindow = 5
const rateLimits = new Map<string, { count: number, resetAt: number }>()

const sanitize = (value: unknown, maxLength: number) =>
  typeof value === 'string'
    ? value.trim().replace(/\s+/g, ' ').slice(0, maxLength)
    : ''

const isRequestAccessPath = (value: unknown): value is RequestAccessPath =>
  typeof value === 'string' && accessPaths.includes(value as RequestAccessPath)

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 160

const consumeRateLimit = (key: string) => {
  const now = Date.now()
  const current = rateLimits.get(key)

  if (!current || current.resetAt <= now) {
    rateLimits.set(key, { count: 1, resetAt: now + rateLimitWindowMs })
    return
  }

  if (current.count >= maxRequestsPerWindow) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Too many requests. Please wait a moment and try again.',
    })
  }

  current.count += 1
}

const validateStartedAt = (value: unknown) => {
  if (typeof value !== 'string') {
    return
  }

  const startedAt = Date.parse(value)

  if (Number.isNaN(startedAt)) {
    return
  }

  const elapsedMs = Date.now() - startedAt

  if (elapsedMs >= 0 && elapsedMs < 800) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please take a moment to complete the form.',
    })
  }
}

export default defineEventHandler(async (event): Promise<RequestAccessResponse> => {
  const body = await readBody<Partial<RequestAccessRequest>>(event)
  const ip = getRequestIP(event, { xForwardedFor: true }) || 'unknown'

  consumeRateLimit(ip)

  if (sanitize(body.website, 120)) {
    return {
      ok: true,
      requestId: crypto.randomUUID(),
      message: 'Thanks. Your request has been received.',
    }
  }

  validateStartedAt(body.startedAt)

  const name = sanitize(body.name, 80)
  const email = sanitize(body.email, 160).toLowerCase()
  const organization = sanitize(body.organization, 120)
  const focus = sanitize(body.focus, 1200)

  if (name.length < 2) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please enter your name.',
    })
  }

  if (!isValidEmail(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please enter a valid email address.',
    })
  }

  if (!isRequestAccessPath(body.path)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please choose an access path.',
    })
  }

  if (focus.length < 10) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please share a little more about what you need.',
    })
  }

  const requestId = crypto.randomUUID()
  const record: RequestAccessRecord = {
    id: requestId,
    name,
    email,
    path: body.path,
    organization,
    focus,
    receivedAt: new Date().toISOString(),
    userAgent: getHeader(event, 'user-agent') || '',
  }

  await submitRequestAccessRecord(record)

  return {
    ok: true,
    requestId,
    message: 'Thanks. Your request has been received.',
  }
})
