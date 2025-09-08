<template>
  <div class="max-w-4xl mx-auto">
    <UCard>
      <template #header>
        <div class="text-center">
          <UIcon name="i-heroicons-shield-check" class="w-8 h-8 mx-auto mb-4 text-green-600" />
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
          <p class="text-gray-600 dark:text-gray-400 mt-2">
            We are committed to protecting your privacy and data security
          </p>
        </div>
      </template>
      
      <div class="prose prose-gray dark:prose-invert max-w-none">
        <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
          <div class="flex items-start">
            <UIcon name="i-heroicons-information-circle" class="w-6 h-6 text-green-600 mr-3 mt-1" />
            <div>
              <h3 class="font-semibold text-green-800 dark:text-green-200 mb-2">Important Notice</h3>
              <p class="text-green-700 dark:text-green-300">
                pfinal-pass is a completely local password generation tool. We do not collect, store, or transmit any of your data.
                All password generation processes are completed in your browser, ensuring maximum protection of your privacy.
              </p>
            </div>
          </div>
        </div>
        
        <h2>Data Collection</h2>
        <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 my-4">
          <h3 class="font-semibold text-red-800 dark:text-red-200 mb-2">We Do Not Collect Any Data</h3>
          <ul class="text-red-700 dark:text-red-300 text-sm space-y-1">
            <li>• No personal identification information</li>
            <li>• No generated passwords</li>
            <li>• No usage statistics</li>
            <li>• No device information</li>
            <li>• No browsing behavior data</li>
          </ul>
        </div>
        
        <h2>Local Processing</h2>
        <p>
          All password generation processes are completed locally in your browser:
        </p>
        <ul class="space-y-2">
          <li class="flex items-start">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-600 mr-2 mt-0.5" />
            <span>Password generation algorithms run completely on your device</span>
          </li>
          <li class="flex items-start">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-600 mr-2 mt-0.5" />
            <span>No password data is sent to any server</span>
          </li>
          <li class="flex items-start">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-600 mr-2 mt-0.5" />
            <span>No generated passwords are stored locally</span>
          </li>
          <li class="flex items-start">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-600 mr-2 mt-0.5" />
            <span>All operations are performed in memory, data is automatically cleared after page refresh</span>
          </li>
        </ul>
        
        <h2>Third-Party Services</h2>
        <p>
          We use the following third-party services to provide website functionality:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <UCard>
            <h3 class="font-semibold mb-2">GitHub Pages</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Used for website hosting, GitHub may collect basic access logs
            </p>
            <UButton 
              to="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" 
              target="_blank"
              size="xs"
              variant="outline"
            >
              View GitHub Privacy Policy
            </UButton>
          </UCard>
          
          <UCard>
            <h3 class="font-semibold mb-2">CDN Services</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Used to load static resources, may collect basic access information
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-500">
              These services do not affect password generation functionality
            </p>
          </UCard>
        </div>
        
        <h2>Cookie Usage</h2>
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 my-4">
          <h3 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">We Use Minimal Cookies</h3>
          <p class="text-blue-700 dark:text-blue-300 text-sm">
            We only use necessary technical cookies to ensure the website functions properly, not for tracking or analyzing user behavior.
            These cookies do not contain any personal information and do not affect password generation functionality.
          </p>
        </div>
        
        <h2>Data Security</h2>
        <p>
          Since we do not collect any data, there is no risk of data breaches:
        </p>
        <ul class="space-y-2">
          <li class="flex items-start">
            <UIcon name="i-heroicons-shield-check" class="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
            <span>No server storage of your data</span>
          </li>
          <li class="flex items-start">
            <UIcon name="i-heroicons-shield-check" class="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
            <span>No database storage of your information</span>
          </li>
          <li class="flex items-start">
            <UIcon name="i-heroicons-shield-check" class="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
            <span>No third-party services access your passwords</span>
          </li>
          <li class="flex items-start">
            <UIcon name="i-heroicons-shield-check" class="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
            <span>All operations are completed on your device</span>
          </li>
        </ul>
        
        <h2>Your Rights</h2>
        <p>
          Since we do not collect any personal data, you have the following rights:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <UCard>
            <div class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-green-600 mr-3 mt-1" />
              <div>
                <h3 class="font-semibold mb-1">Complete Control</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  You have complete control over your data and password generation process
                </p>
              </div>
            </div>
          </UCard>
          
          <UCard>
            <div class="flex items-start">
              <UIcon name="i-heroicons-eye-slash" class="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 class="font-semibold mb-1">Privacy Protection</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  We cannot access or view any passwords you generate
                </p>
              </div>
            </div>
          </UCard>
        </div>
        
        <h2>Policy Updates</h2>
        <p>
          We may update this privacy policy from time to time. Any changes will be posted on this page.
          Since we do not collect any data, these updates mainly involve technical improvements and transparency enhancements.
        </p>
        
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this privacy policy, please contact us through the following methods:
        </p>
        <div class="flex flex-wrap gap-4 my-4">
          <UButton 
            to="https://github.com/pfinal-nc/pfinal-pass/issues" 
            target="_blank"
            color="gray"
            variant="outline"
            icon="i-simple-icons-github"
          >
            GitHub Issues
          </UButton>
          <UButton 
            to="mailto:lampxiezi@gmail.com"
            color="gray"
            variant="outline"
            icon="i-heroicons-envelope"
          >
            Privacy Email
          </UButton>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mt-8">
          <p class="text-sm text-gray-600 dark:text-gray-400 text-center">
            Last updated: January 1, 2024
          </p>
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Privacy Policy - Secure Password Generator with No Data Collection',
  description: 'Learn about our strict privacy policy. Our password generator works completely locally with zero data collection, storage or transmission. Maximum privacy protection.',
  ogTitle: 'Privacy Policy - Local Password Generator with Zero Data Collection',
  ogDescription: 'Discover our commitment to privacy protection. Password generation happens entirely in your browser with no data collection, storage or server transmission.',
  // Additional meta tags for better SEO
  keywords: 'password generator privacy, no data collection password tool, local password generation, secure password privacy policy, browser based password generator, client side password generator, javascript password generator, offline password tool, privacy focused password tool, secure password privacy policy'
})

// Structured Data
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Privacy Policy - Secure Password Generator',
        description: 'Our privacy policy for the secure password generator with zero data collection.',
        url: 'https://pwd.friday-go.icu/privacy',
        mainEntity: {
          '@type': 'PrivacyPolicy',
          name: 'Password Generator Privacy Policy',
          description: 'Privacy policy for our secure, local password generation tool with no data collection.'
        }
      })
    }
  ]
})
</script>