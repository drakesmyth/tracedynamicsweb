import type { CheckoutRequest } from '~~/types/site'

export default defineEventHandler(async (event) => {
  const body = await readBody<CheckoutRequest>(event)
  const config = useRuntimeConfig()

  if (!body?.lines?.length) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Checkout requires at least one line item.',
    })
  }

  if (!config.shopifyDomain || !config.shopifyStorefrontToken) {
    throw createError({
      statusCode: 501,
      statusMessage: 'Shopify checkout is not configured yet.',
    })
  }

  throw createError({
    statusCode: 501,
    statusMessage: 'Shopify checkout implementation is planned for Phase 3.',
  })
})

