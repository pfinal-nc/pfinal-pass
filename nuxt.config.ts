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
      title: 'Password Generator - Create Secure & Random Passwords Online Free',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Free online password generator to create secure, random passwords. Completely local generation with no data collection. Customize length and character types for strong passwords.' },
        { name: 'keywords', content: 'password generator, secure password generator, random password generator, online password generator, free password generator, strong password generator, password creator, password maker, local password generator, browser password tool, password generator no download, customizable password generator, strong password creator tool, safe password generation online, unique password generator free, wifi password generator, account password creator, temporary password generator, client side password generator, javascript password generator, offline password tool' },
        { name: 'author', content: 'pfinal-nc' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Free Online Password Generator - Create Secure Random Passwords Instantly' },
        { property: 'og:description', content: 'Generate secure random passwords online for free. Local browser-based password creation with no data storage or transmission. Create strong passwords instantly.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://pwd.friday-go.icu' },
        { property: 'og:image', content: '/og-image.png' },
        { property: 'og:site_name', content: 'pfinal-pass' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Free Password Generator - Create Secure Passwords Online' },
        { name: 'twitter:description', content: 'Generate strong, secure passwords for free. Browser-based password generator with complete privacy protection. No data collection or storage.' },
        { name: 'twitter:image', content: '/og-image.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://pwd.friday-go.icu' }
      ],
      script: [
        {
          innerHTML: `(function(s){s.dataset.zone='9828579',s.src='https://vemtoutcheeg.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://pwd.friday-go.icu'
    }
  }
})
