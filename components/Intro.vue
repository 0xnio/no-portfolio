<template>
  <div class="pt-10 py-12 relative isolate">
    <BlurredCircle />
    <div class="relative space-y-10">
      <div class="font-mono text-cyan-400 block">
        Hey Du <span class="wave" aria-hidden="true">👋</span>, Ich bin
      </div>
      <header>
        <h1 class="text-6xl font-bold text-gray-200">Niklas Oberwoerder</h1>
        <h3 class="text-3xl font-semibold text-gray-300 mt-5">
          ein <Underline>Frontend-Developer</Underline> und
          <Underline>UI/UX Designer</Underline>.
        </h3>
      </header>
      <p class="text-gray-400 leading-loose max-w-2xl">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros. <a href="#">HOTSUSHI</a> Nullam malesuada
        erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit,
        posuere a, pede.
      </p>
      <Button href="mailto:mail@niklas-oberwoerder.de" class="inline-block">
        Sag ma' hallo!
      </Button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
