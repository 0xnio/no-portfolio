<template>
  <div class="pointer-events-none">
    <div
      id="first"
      class="filter -left-4 bg-cyan-400 top-0 w-80 h-80 opacity-[9%]"
    ></div>
    <div
      id="second"
      class="filter left-60 bg-green-400 bottom-0 w-52 h-52 opacity-[8%]"
    ></div>
    <div
      id="third"
      class="filter left-96 bg-cyan-400 top-12 w-64 h-64 opacity-[6%]"
    ></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
#first,
#second,
#third {
  @apply absolute rounded-full mix-blend-multiply  blur-3xl;
}

#first,
#second,
#third {
  animation-name: move-animation;
  animation-iteration-count: infinite;
  animation-duration: 6s;
  animation-timing-function: ease-in-out;
}

#second {
  animation-duration: 8s;
  animation-delay: 1s;
}

#third {
  animation-duration: 9s;
  animation-delay: 1.5s;
  animation-direction: alternate;
}

@keyframes move-animation {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(90px, -60px) scale(1.2);
  }
  66% {
    transform: translate(-90px, 40px) scale(0.8);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
</style>
