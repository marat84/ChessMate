const defaultLang = 'uz';
const mainUrl = 'https://chess.tashkent.uz';

let defaultTitle = 'Tashkent open - международный шахматный турнир';
let defaultDesc = 'Сайт посвященный международному шахматному турниру проходящему в городе Ташкенте при содействии хокимията города';

if (defaultLang === 'uz') {
  defaultTitle = 'Tashkent open - xalqaro shaxmat turniri';
  defaultDesc = 'Toshkent shahrida shahar hokimligi ko‘magida o‘tkazilayotgan xalqaro shaxmat turniriga bag‘ishlangan sayt';
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: defaultTitle,
    htmlAttrs: {
      lang: (defaultLang === 'oz') ? 'uz' : defaultLang
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: defaultDesc},
      {name: 'format-detection', content: 'telephone=no'},
      {name: "msapplication-TileColor", content: "#000"},
      {name: "theme-color", content: "#000"},

      {property: "og:type", content: "website"},
      {property: "og:image:width", content: "1351"},
      {property: "og:image:height", content: "707"},
      {property: "og:title", title: defaultTitle},
      {property: "og:description", content: defaultDesc},
      // {property: "og:image", content: mainUrl + "images/form-bg.jpg"},
      {property: "og:url", content: mainUrl}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"},
      {rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"},
      {rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"},
      {rel: "manifest", href: "/site.webmanifest"},
      {rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5"},
      {rel: "prefetch", href: "/fonts/raleway-regular.woff2", type: "font/woff2", as: "font", crossorigin: "anonymous"}
    ]
  },

  loading: {
    color: '#FEC43E',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/base/_afonts.scss',
    '~/assets/styles/base/_atomicCSS.scss',
    '~/assets/styles/base/_container.scss',
    '~/assets/styles/base/_global.scss',
    '~/assets/styles/base/_hidden.scss',
    '~/assets/styles/base/_reset.scss',
    '~/assets/styles/base/_typography.scss',

    '~/assets/styles/components/_button.scss',
    '~/assets/styles/components/_checkbox.scss',
    '~/assets/styles/components/_input.scss',
    '~/assets/styles/components/_errors.scss',

    '~/assets/styles/main.scss',
    '@fancyapps/ui/dist/fancybox.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/MyPlugins/utilsNative.js', mode: 'client'},

    '~/plugins/v-mask.js',
    '~/plugins/axios.js',

    {src: '~/plugins/fancyapps.js', mode: "client"},
    {src: '~/plugins/vue-marquee.js', mode: "client"},
    {src: "~/plugins/vue-tiny-slider.js", mode: 'client'},
    {src: "~/plugins/infiniteloading.js", mode: 'client'},

    {src: '~/plugins/MyPlugins/fileUpload.js', mode: 'client'},
    {src: '~/plugins/MyPlugins/message.js', mode: 'client'},

    '~/plugins/MyPlugins/utils.js',
    '~/plugins/MyPlugins/getStatusError.js',
    '~/plugins/MyPlugins/prettyDate.js',
    '~/plugins/MyPlugins/prettyDate2.js',
    '~/plugins/MyPlugins/addClassModification.js',
    '~/plugins/MyPlugins/errorHandler.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify'
  ],

  vuetify: {
    theme: {disable: true},
    treeShake: true,
    breakpoint: {
      thresholds: {
        md: 1320
      }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-vuex-localstorage',
    'vue-social-sharing/nuxt',
    '@nuxtjs/i18n',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '91067311',
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
        // useCDN:false,
      }
    ]
  ],

  i18n: {
    locales: [
      {code: 'rus', file: "rus.js"},
      {code: 'uz', file: "uz.js"}
    ],
    defaultLocale: defaultLang,
    langDir: '~/lang',
    lazy: true,
    vueI18n: {
      fallbackLocale: defaultLang
    }
  },

  styleResources: {
    scss: [
      '~/assets/styles/helpers/_functions.scss',
      '~/assets/styles/helpers/_mixins.scss',
      '~/assets/styles/helpers/_variables.scss',
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: mainUrl
    // credentials: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    extend(config, ctx) {
    }, // blah blah
    babel: {
      'presets': [
        [
          '@babel/preset-env',
          {
            targets: {
              esmodules: true
            },
            'loose': true,
            'shippedProposals': true
          }
        ]
      ]
    }
  },

  router: {
    scrollBehavior: function (to, from, savedPosition) {
      if (to.path.includes('/lists/'))
        return false;

      return {x: 0, y: 0}
    }
  },

  server: {
    port: "5000",
    host: "0.0.0.0"
  }
}
