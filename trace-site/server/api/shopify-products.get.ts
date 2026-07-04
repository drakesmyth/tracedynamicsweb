import type { ShopifyProduct } from '~~/types/site'

export default defineEventHandler(() => {
  const config = useRuntimeConfig()

  if (!config.shopifyDomain || !config.shopifyStorefrontToken) {
    return {
      source: 'placeholder',
      products: [] as ShopifyProduct[],
      message: 'Shopify credentials are not configured yet.',
    }
  }

  throw createError({
    statusCode: 501,
    statusMessage: 'Shopify product sync is planned for Phase 3.',
  })
})

