import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // colorMode: {
  //   preference: "light",
  // },
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
