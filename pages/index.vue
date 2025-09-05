<template>
  <div class="min-h-screen flex items-center justify-center py-12">
    <div class="w-full max-w-md">
      <PasswordGenerator />
      
      <!-- Features -->
      <div class="mt-8 grid grid-cols-1 gap-4">
        <UCard class="text-center">
          <div class="flex items-center justify-center mb-2">
            <UIcon name="i-heroicons-shield-check" class="w-5 h-5 text-green-600 mr-2" />
            <span class="font-medium text-sm">Completely Local</span>
          </div>
          <p class="text-xs text-gray-600 dark:text-gray-400">
            Passwords generated in your browser, no server involved
          </p>
        </UCard>
        
        <UCard class="text-center">
          <div class="flex items-center justify-center mb-2">
            <UIcon name="i-heroicons-eye-slash" class="w-5 h-5 text-blue-600 mr-2" />
            <span class="font-medium text-sm">Privacy Protection</span>
          </div>
          <p class="text-xs text-gray-600 dark:text-gray-400">
            No data collection, no storage, no transmission, protecting your privacy
          </p>
        </UCard>
        
        <UCard class="text-center">
          <div class="flex items-center justify-center mb-2">
            <UIcon name="i-heroicons-bolt" class="w-5 h-5 text-yellow-600 mr-2" />
            <span class="font-medium text-sm">Fast & Convenient</span>
          </div>
          <p class="text-xs text-gray-600 dark:text-gray-400">
            One-click generation, one-click copy, real-time strength assessment
          </p>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO Configuration
useSeoMeta({
  title: 'Secure Password Generator - Fast & Local Password Creation Tool',
  ogTitle: 'Secure Password Generator - Local Generation, Safe & Reliable',
  description: 'A minimal, secure, and lightweight online password generator. Supports custom length and character types, completely local generation, protecting your privacy and security.',
  ogDescription: 'Completely local password generation tool with no data breach risk. Supports custom rules and one-click secure password generation.',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Secure Password Generator',
  twitterDescription: 'Safe, fast, and local password generation tool',
  twitterImage: '/og-image.png'
})

// Structured Data
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Secure Password Generator',
        description: 'A minimal, secure, and lightweight online password generator',
        url: 'https://pwd.friday-go.icu',
        applicationCategory: 'SecurityApplication',
        operatingSystem: 'Web Browser',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        },
        creator: {
          '@type': 'Person',
          name: 'pfinal-nc',
          url: 'https://github.com/pfinal-nc'
        }
      })
    }
  ]
})
</script>
