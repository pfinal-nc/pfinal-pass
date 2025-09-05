<template>
  <UNavbar class="border-b border-gray-200 dark:border-gray-700">
    <template #left>
      <UNavbarBrand>
        <UIcon name="i-heroicons-shield-check" class="w-6 h-6 text-primary-600" />
        <span class="ml-2 font-bold text-lg">Secure Password Generator</span>
      </UNavbarBrand>
    </template>
    
    <template #right>
      <UNavbarContent>
        <UNavbarItem 
          to="/" 
          :active="$route.path === '/'"
          class="hover:text-primary-600 dark:hover:text-primary-400"
        >
          Home
        </UNavbarItem>
        <UNavbarItem 
          to="/about" 
          :active="$route.path === '/about'"
          class="hover:text-primary-600 dark:hover:text-primary-400"
        >
          About
        </UNavbarItem>
        <UNavbarItem 
          to="/privacy" 
          :active="$route.path === '/privacy'"
          class="hover:text-primary-600 dark:hover:text-primary-400"
        >
          Privacy
        </UNavbarItem>
      </UNavbarContent>
    </template>
  </UNavbar>
</template>
