import pkg from './package'

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description,
      },
      {
        name: 'msapplication-TileColor',
        content: '#d9333f',
      },
      {
        name: 'theme-color',
        content: '#d9333f',
      },
    ],
    script: [
      {
        src: '/typekit.js',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#d9333f',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: false,

  /*
   ** Global CSS
   */
  css: [
    '~/assets/style/ress.css',
    '~/assets/style/variable.scss',
    '~/assets/style/mixin.scss',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/sleep',
    {
      src: '~/plugins/routerOption',
      ssr: false,
    },
    {
      src: '~/plugins/vuexWatcher',
      ssr: false,
    },
    '~/plugins/firebase',
    '~/plugins/uuid',
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    [
      '@nuxtjs/google-analytics',
      {
        dev: false,
      },
    ],
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },

  /**
   * sass resources
   */
  styleResources: {
    scss: ['~/assets/style/variable.scss', '~/assets/style/mixin.scss'],
  },

  /**
   * google analytics
   */
  googleAnalytics: {
    id: 'UA-138695918-1',
  },
}
