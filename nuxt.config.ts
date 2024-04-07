// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  image: {
    format: ["webp"],
  },
  devtools: { enabled: true },

  modules: ["@nuxt/image", "nuxt-icon", "@nuxt/ui"],
});
