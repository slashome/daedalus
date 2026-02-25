export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  ssr: false,
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'fr', file: 'fr.json' },
      { code: 'es', file: 'es.json' },
      { code: 'pt', file: 'pt.json' },
      { code: 'da', file: 'da.json' },
      { code: 'it', file: 'it.json' },
      { code: 'de', file: 'de.json' },
    ],
    lazy: true,
    langDir: '../i18n/locales/',
    defaultLocale: 'en',
  },
})
