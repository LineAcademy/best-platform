// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    app: {
        head: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          link: [
            { rel: 'shortcut icon', type: 'image/x-icon', href: '/assets/images/favicon.png' },
            { rel: 'stylesheet', href: '/assets/css/vendor/bootstrap.min.css' },
            { rel: 'stylesheet', href: '/assets/css/vendor/slick.css' },
            { rel: 'stylesheet', href: '/assets/css/vendor/slick-theme.css' },
            { rel: 'stylesheet', href: '/assets/css/plugins/sal.css' },
            { rel: 'stylesheet', href: '/assets/css/plugins/feather.css' },
            { rel: 'stylesheet', href: '/assets/css/plugins/fontawesome.min.css' },
            { rel: 'stylesheet', href: '/assets/css/plugins/euclid-circulara.css' },
            { rel: 'stylesheet', href: '/assets/css/plugins/swiper.css' },
            { rel: 'stylesheet', href: '/assets/css/plugins/magnify.css' },
            { rel: 'stylesheet', href: '/assets/css/plugins/odometer.css' },
            { rel: 'stylesheet', href: '/assets/css/plugins/animation.css' },
            { rel: 'stylesheet', href: '/assets/css/plugins/bootstrap-select.min.css' },
            { rel: 'stylesheet', href: '/assets/css/plugins/jquery-ui.css' },
            { rel: 'stylesheet', href: '/assets/css/plugins/magnigy-popup.min.css' },
            { rel: 'stylesheet', href: '/assets/css/style.css' },

        ],
        script: [
          { src: '/assets/js/yt.js', body: true },
        ],
        },
      },
      // plugins: ['~/plugins/vue-content-placeholders.js'],
      /*
       ** Nuxt.js dev-modules
       */
       image: {
        provider: 'cloudinary',
        cloudinary: {
          baseURL: 'https://res.cloudinary.com/drcfigqqr/image/upload/v1687758537/',
        },
      },
      /*
       ** Nuxt.js modules
       */
       modules: ['@nuxt/image', '@nuxt/content'],
       content: {
        markdown: {
          toc: {
            depth: 3,
            searchDepth: 3,
          },
        },
        highlight: {
          theme: "dracula-soft",
        },
      },
      /*
       ** Custom additions configuration
       */
      router: {

      }
})