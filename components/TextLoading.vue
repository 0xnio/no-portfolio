<template>
  <div class="block">
    <div class="loading-text-mask" :class="{ ready: ready }">
      <div
        class="loading-text-overlay"
        :style="{ 'animation-delay': delay + 'ms' }"
      ></div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    delay: {
      type: String,
      default: '1000',
    },
  },
  data: () => ({
    ready: false,
  }),
  mounted() {
    console.log('mounted')
    this.ready = true
  },
}
</script>

<style lang="postcss" scoped>
.loading-text-mask {
  @apply relative overflow-hidden inline-block;
}
.loading-text-overlay {
  @apply block absolute bg-cyan-400 inset-0 -top-2 z-50;
}

.ready .loading-text-overlay {
  animation-name: slide-animation;
  animation-fill-mode: forwards;
  /* animation-delay: 1000; */
  animation-duration: 0.65s;
  animation-timing-function: cubic-bezier(0.694, 0.048, 0.335, 1),
    cubic-bezier(0.694, 0.048, 0.335, 1);
}

@keyframes slide-animation {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(105%);
  }
}
</style>
