export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - اعتباریتو',
    title: 'اعتباریتو',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.css', '@/assets/materialdesignicons.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/helpers.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://auth.nuxtjs.org/guide/setup
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://46.209.4.108/api/v1/'
  },
  auth: {
    redirect: {
      login: '/auth/login',
      logout: '/auth/login',
      callback: '/jamstack',
      home: '/dashboard'
    },
    strategies: {
      local: {
        scheme: '~/schemes/customLocal',
        token: {
          property: 'token',
          global: true,
          required: true,
          type: 'Bearer'
        },
        user: {
          property: false,
          autoFetch: false
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          logout: { url: '/auth/logout', method: 'get' },
          user: { url: '/auth/me', method: 'get' }
        }
      }
    }
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    optionsPath: '~/plugins/vuetify.options.js',
    treeShake: true,
    defaultAssets: {
      font: false,
      icons: false
    },
    customVariables: ['~/assets/variables.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
