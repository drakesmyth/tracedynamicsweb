export default defineNuxtConfig({
  compatibilityDate: '2026-06-29',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@tresjs/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      titleTemplate: '%s | TRACE Dynamics',
      meta: [
        {
          name: 'description',
          content:
            'TRACE Dynamics is building the missing data layer for embodied AI.',
        },
        { name: 'theme-color', content: '#fbfaf6' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'TRACE Dynamics' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  runtimeConfig: {
    requestAccessAdminToken: process.env.REQUEST_ACCESS_ADMIN_TOKEN || '',
    requestAccessDestinations:
      process.env.REQUEST_ACCESS_DESTINATIONS ||
      process.env.REQUEST_ACCESS_STORE ||
      (process.env.NODE_ENV === 'production' ? 'log' : 'file'),
    requestAccessEmailFrom: process.env.REQUEST_ACCESS_EMAIL_FROM || '',
    requestAccessEmailProvider:
      process.env.REQUEST_ACCESS_EMAIL_PROVIDER || 'resend',
    requestAccessEmailTo: process.env.REQUEST_ACCESS_EMAIL_TO || '',
    requestAccessFilePath:
      process.env.REQUEST_ACCESS_FILE_PATH || '.data/request-access.jsonl',
    requestAccessStore:
      process.env.REQUEST_ACCESS_STORE ||
      (process.env.NODE_ENV === 'production' ? 'log' : 'file'),
    resendApiKey: process.env.RESEND_API_KEY || '',
    shopifyDomain: process.env.SHOPIFY_DOMAIN || '',
    shopifyStorefrontToken: process.env.SHOPIFY_STOREFRONT_TOKEN || '',
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    },
  },
  nitro: {
    preset: 'vercel',
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
  },
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'gsap',
        'gsap/ScrollTrigger',
        'lenis',
        'three',
      ],
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
})
