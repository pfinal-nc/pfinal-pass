<template>
  <div class="min-h-screen flex items-center justify-center py-12">
    <div class="w-full max-w-md">
      <PasswordGenerator />
      
      <!-- Features -->
      <div class="mt-8 grid grid-cols-1 gap-4">
        <UCard class="text-center">
          <div class="flex items-center justify-center mb-2">
            <UIcon name="i-heroicons-shield-check" class="w-5 h-5 text-green-600 mr-2" />
            <span class="font-medium text-sm">Client-Side Generation</span>
          </div>
          <p class="text-xs text-gray-600 dark:text-gray-400">
            Passwords generated locally in your browser with no server involved - offline password tool
          </p>
        </UCard>
        
        <UCard class="text-center">
          <div class="flex items-center justify-center mb-2">
            <UIcon name="i-heroicons-eye-slash" class="w-5 h-5 text-blue-600 mr-2" />
            <span class="font-medium text-sm">Privacy Protection</span>
          </div>
          <p class="text-xs text-gray-600 dark:text-gray-400">
            No data collection, storage or transmission - privacy focused password generator
          </p>
        </UCard>
        
        <UCard class="text-center">
          <div class="flex items-center justify-center mb-2">
            <UIcon name="i-heroicons-bolt" class="w-5 h-5 text-yellow-600 mr-2" />
            <span class="font-medium text-sm">Fast & Customizable</span>
          </div>
          <p class="text-xs text-gray-600 dark:text-gray-400">
            One-click secure password generation with customizable length and character types
          </p>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO Configuration optimized for high traffic keywords
useSeoMeta({
  title: 'Password Generator - Create Secure & Random Passwords Online Free',
  ogTitle: 'Free Online Password Generator - Create Secure Random Passwords Instantly',
  description: 'Free online password generator to create secure, random passwords. Completely local generation with no data collection. Customize length and character types for strong passwords.',
  ogDescription: 'Generate secure random passwords online for free. Local browser-based password creation with no data storage or transmission. Create strong passwords instantly.',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Free Password Generator - Create Secure Passwords Online',
  twitterDescription: 'Generate strong, secure passwords for free. Browser-based password generator with complete privacy protection. No data collection or storage.',
  twitterImage: '/og-image.png',
  // Additional meta tags for better SEO
  keywords: 'password generator, secure password generator, random password generator, online password generator, free password generator, strong password generator, password creator, password maker, local password generator, password generator no download, customizable password generator, strong password creator tool, safe password generation online, unique password generator free, wifi password generator, account password creator, temporary password generator, client side password generator, javascript password generator, offline password tool'
})

// Structured Data
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Free Online Password Generator',
        description: 'Free online password generator to create secure, random passwords. Completely local generation with no data collection.',
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
        },
        // Additional structured data for better SEO
        featureList: [
          'Completely Local Generation',
          'Privacy Protection',
          'Customizable Password Length',
          'Multiple Character Types',
          'Real-time Strength Assessment',
          'One-click Copy Function'
        ]
      })
    }
  ]
})
</script>
