// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    layoutTransition: { name: "page", mode: "out-in" },
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      charset: "UTF-8",
      script: [
        {
          src: "https://api-maps.yandex.ru/2.1/?lang=ru_RU",
          tagPosition: "bodyClose",
          type: "text/javascript",
          async: true,
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "",
        },
      ],
      noscript: [{ children: "Javascript is required" }],
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("swiper-"),
    },
  },
  css: [
    "@/assets/styles/index.scss",
    "vue-final-modal/style.css",
    "tippy.js/dist/tippy.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxt/devtools",
    "@nuxt/image-edge",
    "nuxt-icons",
    "@pinia/nuxt",
    "@vueuse/nuxt",
  ],

  plugins: [
    // ...
    { src: "~/plugins/floating-vue", mode: "client" },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import '@/assets/styles/_vars/_vars.scss';
          @import '@/assets/styles/_mixins/_media.scss';
          @import '@/assets/styles/_mixins/_font-face.scss';
          @import '@/assets/styles/_mixins/_typography.scss';
        `,
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      apiBase: "http://localhost:1337",
    },
  },
});
