const strapiBaseUri = process.env.BASE_URI || 'https://servicehub-strapi.herokuapp.com'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Service Hub',
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
      { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
      { rel: 'stylesheet', href: '/assets/css/style.css' },
      { rel: 'stylesheet', href: '/assets/css/skins/skin-demo-4.css' },
      { rel: 'stylesheet', href: '/assets/css/demos/demo-4.css' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js' },
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/node_modules/bootstrap/dist/css/bootstrap.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', mode: 'client' },
    { src: 'plugins/owl.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-paystack',
    'bootstrap-vue/nuxt'
  ],

  bootstrapVue: {
    icons: true
  },
  strapi: {
    url: process.env.BASE_URI || 'https://servicehub-strapi.herokuapp.com/api',
    entities: ['products', 'orders', 'subscribers']
  },
  http: {
    baseURL: `${strapiBaseUri}/api`,
    browserBaseURL: `${strapiBaseUri}/api`
  },

  env: {
    STRAPI_URL: process.env.BASE_URI || 'https://servicehub-strapi.herokuapp.com/api',
    PAYSTACK_KEY: process.env.PAYSTACK_KEY
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URI || 'https://servicehub-strapi.herokuapp.com'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /*
     ** Run ESLint on save
     */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
