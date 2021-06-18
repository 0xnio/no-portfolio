<template>
  <span class="highlight">
    <span><slot /></span>
  </span>
</template>

<script>
export default {}
</script>

<style scoped lang="postcss">
span.highlight {
  @apply relative;
}

span.highlight > span {
  @apply relative z-50;
}

span.highlight::before {
  @apply absolute w-full h-full;
  bottom: 5px;
  content: '';
  box-shadow: inset 0 -0.38em 0 0 theme('colors.cyan.800');
}
</style>
