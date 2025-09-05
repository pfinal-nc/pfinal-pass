export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  ui: {
    global: true,
    icons: ['heroicons', 'lucide']
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  },
  css: ['~/assets/css/main.css'],
  nitro: {
    prerender: {
      routes: ['/', '/about', '/privacy']
    }
  },
  app: {
    head: {
      title: 'Secure Password Generator - Fast & Local Password Creation Tool',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A minimal, secure, and lightweight online password generator. Supports custom length and character types, completely local generation, protecting your privacy and security.' },
        { name: 'keywords', content: 'password generator,secure password,online tool,privacy protection,local generation,random password,strong password,pfinalclub password' },
        { name: 'author', content: 'PFinalClub' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Secure Password Generator - Local Generation, Safe & Reliable' },
        { property: 'og:description', content: 'Completely local password generation tool with no data breach risk. Supports custom rules and one-click secure password generation.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://pwd.friday-go.icu' },
        { property: 'og:image', content: '/og-image.png' },
        { property: 'og:site_name', content: 'pfinal-pass' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Secure Password Generator' },
        { name: 'twitter:description', content: 'Safe, fast, and local password generation tool' },
        { name: 'twitter:image', content: '/og-image.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://pwd.friday-go.icu' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://pwd.friday-go.icu'
    }
  }
})
