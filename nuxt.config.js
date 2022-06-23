import colors from 'vuetify/es5/util/colors'

export default {
  head: {
    titleTemplate: '%s - calore-vue',
    title: 'Calore Vue | Point of Sale | Your Solution Cashier System',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL,
    apiUrl: process.env.API_URL,
    secretKey: process.env.SECRET_KEY,
  },

  loading: '@/components/Loading.vue',

  css: ['@/assets/scss/style.scss'],

  plugins: [
    { src: '@/plugins/axios' },
    { src: '@/plugins/overlay', ssr: false },
    { src: '@/plugins/vue-toast-notification', mode: 'client' },
  ],

  components: true,

  server: {
    host: '0.0.0.0',
    port: '4000',
  },

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module',
    '@pinia/nuxt',
  ],

  modules: [
    '@nuxtjs/axios',
    ['cookie-universal-nuxt', { alias: 'cookiz', parseJSON: false }],
  ],

  axios: {
    proxy: true,
  },
  proxy: {
    '/api/': {
      target: process.env.API_URL,
      pathRewrite: { '^/api/': '/' },
    },
  },

  vuetify: {
    customVariables: ['~/assets/styles/variables.scss'],

    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#704333',
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      })
    },
  },
}
