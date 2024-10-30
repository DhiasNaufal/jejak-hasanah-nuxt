import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "PT. Jejak Hasanah - Transportasi dan Periklanan",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "id",
      },
      meta: [
        {
          name: "description",
          content:
            "Jejak Hasanah adalah perusahaan di Indonesia yang menawarkan solusi transportasi lengkap, mulai dari kendaraan ringan hingga bus, sekaligus dikenal sebagai penyedia produk LED dan layanan media periklanan berkualitas tinggi untuk memenuhi berbagai kebutuhan industri dan mobilitas. Berlokasi Di Tasikmalaya, Jawa Barat",
        },
      ],
      bodyAttrs: {
        id: "app-root",
        class: "theme-default",
      },
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  image: {
    presets: {
      cover: {
        modifiers: {
          fit: "cover",
          format: "webp",
          width: 300,
          height: 200,
        },
      },
    },

    format: ["webp"],
  },
  devtools: { enabled: true },

  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    // "@nuxt/ui",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
