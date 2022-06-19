<template>
  <div class="wrapper" :class="{ isReady: isReady }">
    <StickyInfo v-motion-slide-bottom :delay="3000" />
    <client-only>
      <Galaxy />
    </client-only>
    <Navbar v-motion-slide-top :delay="3000" />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  data: () => ({
    isReady: false,
  }),
  mounted() {
    this.isReady = true;
  },
};
</script>

<style lang="postcss">
body {
  @apply min-h-full overflow-x-hidden bg-gray-900;
}
</style>

<style lang="postcss" scoped>
.wrapper {
  @apply min-h-screen flex flex-col bg-gray-900 text-gray-300;
  opacity: 0;
}

.isReady.wrapper {
  opacity: 1;
}

main {
  @apply flex flex-grow items-stretch;
  @apply md:items-center;
}
</style>
