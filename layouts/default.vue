<template>
  <div class="wrapper">
    <StickyInfo v-motion-slide-bottom :delay="3000" />
    <Navbar v-motion-slide-top :delay="3000" />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<style lang="postcss" scoped>
body {
  @apply min-h-full overflow-x-hidden;
}

.wrapper {
  @apply min-h-screen flex flex-col bg-gray-900 text-gray-300;
}

main {
  @apply flex flex-grow items-center;
}
</style>
