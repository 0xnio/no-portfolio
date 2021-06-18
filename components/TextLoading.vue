<template>
  <div class="block">
    <div class="loading-text-mask" :class="{ ready: ready }">
      <div
        class="loading-text-overlay"
        :style="{
          'animation-delay': delay + 'ms',
          'animation-duration': duration + 'ms',
        }"
      ></div>
      <div
        class="slot"
        :style="{ 'transition-delay': delay + duration / 2 + 'ms' }"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    delay: {
      type: Number,
      default: 1000,
    },
  },
  data: () => ({
    ready: false,
    duration: 1300,
  }),
  mounted() {
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
  transform: translateX(-105%);
}

.slot {
  opacity: 0;
}

.ready .slot {
  opacity: 1;
}

.ready .loading-text-overlay {
  animation-name: slide-animation;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.694, 0.048, 0.335, 1);
}

@keyframes slide-animation {
  0% {
    transform: translateX(-105%);
  }
  30% {
    transform: translateX(0);
  }
  70% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(105%);
  }
}
</style>
