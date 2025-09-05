<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <AppNavbar />
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
