// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-01',
  devtools: { enabled: true },

  // Static site generation for AWS VM deploy
  ssr: true,
  nitro: {
    preset: 'static',
  },

  css: ['~/assets/css/styles.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'Botfood — CCTV untuk outlet online Anda · GrabFood, GoFood & ShopeeFood',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Pantau status outlet online Anda di GrabFood, GoFood & ShopeeFood dalam 1 dashboard real-time. Deteksi outlet tutup, menu nonaktif, dan rating turun — sebelum customer Anda tahu.' },
        { name: 'keywords', content: 'botfood, monitoring outlet online, GrabFood, GoFood, ShopeeFood, dashboard restoran, monitoring menu, multi-outlet F&B, cloud kitchen, online ordering' },
        { name: 'author', content: 'Botfood' },
        { name: 'theme-color', content: '#007B1B' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Botfood' },
        { property: 'og:locale', content: 'id_ID' },
        { property: 'og:url', content: 'https://botfood.id/' },
        { property: 'og:title', content: 'Botfood — CCTV untuk outlet online Anda' },
        { property: 'og:description', content: 'Pantau GrabFood, GoFood & ShopeeFood dalam 1 dashboard. Real-time, 0–30 menit refresh. Free trial 7 hari.' },
        { property: 'og:image', content: '/og_image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Dashboard Botfood — pantau outlet GrabFood, GoFood & ShopeeFood dalam 1 layar' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Botfood — CCTV untuk outlet online Anda' },
        { name: 'twitter:description', content: 'Pantau GrabFood, GoFood & ShopeeFood dalam 1 dashboard. Real-time, free trial 7 hari.' },
        { name: 'twitter:image', content: '/og_image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/favicon-64.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap' },
      ],
    },
  },
});
