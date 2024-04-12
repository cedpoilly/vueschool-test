// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    componentIslands: true,
  },

  modules: ["@nuxtjs/sanity"],

  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,
    useCdn: true,
    apiVersion: process.env.NUXT_SANITY_API_VERSION || "2024-03-15",
    visualEditing: {
      studioUrl: process.env.NUXT_SANITY_STUDIO_URL || "http://localhost:3333",
      token: process.env.NUXT_SANITY_API_READ_TOKEN,
      stega: true,
    },
  },

  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
  },
})
