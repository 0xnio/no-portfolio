<template>
  <nuxt-link v-if="isNuxtLink" class="btn" :to="to">
    <slot />
  </nuxt-link>

  <a v-else-if="isAnchor" class="btn" :href="href">
    <slot />
  </a>

  <button v-else class="btn" @click="handleClick">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    to: { type: Object, default: null },
    href: { type: String, default: '' },
  },
  computed: {
    isNuxtLink() {
      return Boolean(this.to)
    },
    isAnchor() {
      return Boolean(this.href)
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    },
  },
}
</script>

<style lang="postcss" scoped>
.btn {
  @apply rounded-[3px] border border-cyan-400 px-5 py-2 text-cyan-400;
  @apply hover:bg-cyan-400 hover:text-cyan-900;
  @apply transition-colors duration-300 ease-out;
}

a {
  @apply hover:no-underline;
}
</style>
