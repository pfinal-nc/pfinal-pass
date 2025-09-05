<template>
  <div class="max-w-4xl mx-auto">
    <UCard>
      <template #header>
        <div class="text-center">
          <UIcon name="i-heroicons-information-circle" class="w-8 h-8 mx-auto mb-4 text-primary-600" />
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">About pfinal-pass</h1>
          <p class="text-gray-600 dark:text-gray-400 mt-2">
            Learn about our mission and commitment
          </p>
        </div>
      </template>
      
      <div class="prose prose-gray dark:prose-invert max-w-none">
        <h2>Project Overview</h2>
        <p>
          pfinal-pass is a minimal, secure, and lightweight online password generator.
          We focus on providing the safest and most convenient password generation service,
          running completely in your browser locally, ensuring your password data never leaves your device.
        </p>
        
        <h2>Core Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <UCard>
            <div class="flex items-start">
              <UIcon name="i-heroicons-shield-check" class="w-6 h-6 text-green-600 mr-3 mt-1" />
              <div>
                <h3 class="font-semibold mb-1">Completely Local Generation</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  All passwords are generated in your browser without going through any server
                </p>
              </div>
            </div>
          </UCard>
          
          <UCard>
            <div class="flex items-start">
              <UIcon name="i-heroicons-eye-slash" class="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 class="font-semibold mb-1">No Data Collection</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  We do not collect, store, or transmit any of your information
                </p>
              </div>
            </div>
          </UCard>
          
          <UCard>
            <div class="flex items-start">
              <UIcon name="i-heroicons-cog-6-tooth" class="w-6 h-6 text-purple-600 mr-3 mt-1" />
              <div>
                <h3 class="font-semibold mb-1">Custom Rules</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Support for custom password length and character types
                </p>
              </div>
            </div>
          </UCard>
          
          <UCard>
            <div class="flex items-start">
              <UIcon name="i-heroicons-chart-bar" class="w-6 h-6 text-orange-600 mr-3 mt-1" />
              <div>
                <h3 class="font-semibold mb-1">Strength Assessment</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Real-time password strength display to help you generate more secure passwords
                </p>
              </div>
            </div>
          </UCard>
        </div>
        
        <h2>Technology Stack</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
          <UCard class="text-center">
            <UIcon name="i-simple-icons-nuxtdotjs" class="w-8 h-8 mx-auto mb-2 text-green-600" />
            <h3 class="font-semibold text-sm">Nuxt 4</h3>
            <p class="text-xs text-gray-600 dark:text-gray-400">Modern Vue.js framework</p>
          </UCard>
          
          <UCard class="text-center">
            <UIcon name="i-simple-icons-tailwindcss" class="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <h3 class="font-semibold text-sm">Nuxt UI 3.3</h3>
            <p class="text-xs text-gray-600 dark:text-gray-400">Beautiful UI component library</p>
          </UCard>
          
          <UCard class="text-center">
            <UIcon name="i-simple-icons-typescript" class="w-8 h-8 mx-auto mb-2 text-blue-500" />
            <h3 class="font-semibold text-sm">TypeScript</h3>
            <p class="text-xs text-gray-600 dark:text-gray-400">Type-safe development experience</p>
          </UCard>
          
          <UCard class="text-center">
            <UIcon name="i-simple-icons-github" class="w-8 h-8 mx-auto mb-2 text-gray-600" />
            <h3 class="font-semibold text-sm">GitHub Pages</h3>
            <p class="text-xs text-gray-600 dark:text-gray-400">Free static website hosting</p>
          </UCard>
        </div>
        
        <h2>Use Cases</h2>
        <ul class="space-y-2">
          <li class="flex items-center">
            <UIcon name="i-heroicons-check" class="w-4 h-4 text-green-600 mr-2" />
            Temporary account password generation
          </li>
          <li class="flex items-center">
            <UIcon name="i-heroicons-check" class="w-4 h-4 text-green-600 mr-2" />
            Test environment password creation
          </li>
          <li class="flex items-center">
            <UIcon name="i-heroicons-check" class="w-4 h-4 text-green-600 mr-2" />
            Quick secure password generation
          </li>
          <li class="flex items-center">
            <UIcon name="i-heroicons-check" class="w-4 h-4 text-green-600 mr-2" />
            Password policy validation
          </li>
        </ul>
        
        <h2>Security Commitment</h2>
        <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 my-6">
          <div class="flex items-start">
            <UIcon name="i-heroicons-shield-check" class="w-6 h-6 text-green-600 mr-3 mt-1" />
            <div>
              <h3 class="font-semibold text-green-800 dark:text-green-200 mb-2">Our Commitment</h3>
              <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>• All password generation is completely local on your device</li>
                <li>• We never send your password data to any server</li>
                <li>• We never store any generated passwords in your browser</li>
                <li>• We never collect any user information or usage data</li>
                <li>• Open source and transparent, code is completely public and auditable</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h2>Contact Us</h2>
        <p>
          If you have any questions, suggestions, or feedback, please feel free to contact us through the following methods:
        </p>
        <div class="flex flex-wrap gap-4 my-4">
          <UButton 
            to="https://github.com/pfinal-nc/pfinal-pass" 
            target="_blank"
            color="gray"
            variant="outline"
            icon="i-simple-icons-github"
          >
            GitHub
          </UButton>
          <UButton 
            to="mailto:lampxiezi@gmail.com"
            color="gray"
            variant="outline"
            icon="i-heroicons-envelope"
          >
            Email
          </UButton>
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'About Us - Secure Password Generator',
  description: 'Learn about the pfinal-pass project background, features, and technical implementation. Experience the safest local password generation service.',
  ogTitle: 'About pfinal-pass - Secure Password Generator',
  ogDescription: 'Learn about our mission, technology stack, and security commitment. Experience completely local password generation service.'
})
</script>