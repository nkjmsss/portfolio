import pkg from './package'
import ogp from './assets/config/ogp'

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
    },
    titleTemplate: `%s | ${ogp.title}`,
    title: ogp.title,
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'msapplication-TileColor',
        content: '#d9333f',
      },
      {
        name: 'theme-color',
        content: '#d9333f',
      },
      // OGP
      {
        hid: 'description',
        name: 'description',
        content: ogp.description,
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: ogp.title,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: ogp.url,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: ogp.title,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: ogp.description,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: ogp.image,
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: 1200,
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: 630,
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
