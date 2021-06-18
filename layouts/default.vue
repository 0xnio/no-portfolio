<template>
  <div class="wrapper">
    <StickyInfo />
    <Navbar />
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
