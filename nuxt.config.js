import { TYPE } from 'vue-toastification'
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
    '~/plugins/axios.js',
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
    '@nuxtjs/auth-next',
    'vue-toastification/nuxt'
  ],
  toast: {
    position: 'top-left',
    transition: 'Vue-Toastification__slideBlurred',
    maxToasts: 3,
    newestOnTop: true,
    closeOnClick: true,
    timeout: 5000,
    pauseOnHover: true,
    showCloseButtonOnHover: false,
    closeButton: 'button',
    toastDefaults: {
      [TYPE.SUCCESS]: {
        icon: {
          iconClass: 'v-icon notranslate mdi mdi-check'
        }
      },
      [TYPE.WARNING]: {
        icon: {
          iconClass: 'v-icon notranslate mdi mdi-shield-alert-outline'
        }
      },
      [TYPE.ERROR]: {
        icon: {
          iconClass: 'v-icon notranslate mdi mdi-shield-alert-outline'
        }
      }
    },
    rtl: true,
    filterBeforeCreate: (toast, toasts) => {
      if (toasts.filter(t => t.type === toast.type).length !== 0) {
        // Returning false discards the toast
        return false
      }
      // You can modify the toast if you want
      return toast
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.baseURL ?? 'http://46.209.4.108/api/v1/'
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
          property: 'data',
          autoFetch: true
        },
        endpoints: {
          login: { url: '/authentication/login/password/', method: 'post' },
          logout: { url: '/authentication/logout', method: 'get' },
          user: { url: '/accounts/profiles/', method: 'get' }
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
