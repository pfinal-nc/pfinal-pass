<template>
  <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
    <div class="container mx-auto px-4 py-8">
      <div class="text-center">
        <div class="flex items-center justify-center mb-4">
          <UIcon name="i-heroicons-shield-check" class="w-5 h-5 text-primary-600 mr-2" />
          <span class="font-semibold text-gray-900 dark:text-white">pfinal-pass</span>
        </div>
        
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
          &copy; 2024 pfinal-pass. Local generation, safe and reliable.
        </p>
        
        <div class="flex justify-center space-x-6 text-sm">
          <NuxtLink 
            to="/privacy" 
            class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            Privacy Policy
          </NuxtLink>
          <span class="text-gray-400">•</span>
          <NuxtLink 
            to="/about" 
            class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            About Us
          </NuxtLink>
        </div>
        
        <div class="mt-4 text-xs text-gray-500 dark:text-gray-500">
          <p>Completely local generation, no data collection, protecting your privacy and security</p>
        </div>
      </div>
    </div>
  </footer>
</template>
