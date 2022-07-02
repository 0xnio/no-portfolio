const description =
  'Frontend-Developer & UI/UX Designer aus Bielefeld | Vue.js - Nuxt.js - WordPress'
const color = '#1e293b'
const name = 'Niklas Oberwoerder'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: `${name} | Frontend & UI/UX Design`,
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.pcss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://www.npmjs.com/package/@nuxtjs/google-fonts
    '@nuxtjs/google-fonts',
    // https://pwa.nuxtjs.org
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-use-motion'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile:["three"]
  },

  // Google Fonts https://www.npmjs.com/package/@nuxtjs/google-fonts
  googleFonts: {
    families: {
      Poppins: [400, 700],
      'Fira+Code': [400],
    },
    display: 'swap',
  },

  loading: false,

  pwa: {
    meta: {
      appleStatusBarStyle: 'black-translucent',
      name,
      author: name,
      description,
      theme_color: color,
      lang: 'de',
    },
    manifest: {
      name,
      short_name: 'NO',
      lang: 'de',
      description,
      background_color: color,
    },
    workbox: {
      enabled: false,
    },
  },
}
