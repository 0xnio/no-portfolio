<template>
  <div class="relative py-12 pt-10 isolate">
    <BlurredCircle v-motion-fade :delay="1000" />
    <div class="relative space-y-10">
      <div v-motion-fade class="block font-mono text-cyan-400" :delay="1500">
        Hey Du <span class="wave" aria-hidden="true">👋</span>, Ich bin
      </div>
      <header>
        <TextLoading>
          <h1 class="text-6xl font-bold text-gray-200">Niklas Oberwoerder</h1>
        </TextLoading>
        <TextLoading delay="1300">
          <h3 class="mt-3 text-3xl font-semibold text-gray-300">
            ein <Underline>Frontend-Developer</Underline> und
            <Underline>UI/UX Designer</Underline>.
          </h3>
        </TextLoading>
      </header>
      <div v-motion-fade :delay="2500">
        <p class="max-w-2xl leading-loose text-gray-400">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. <a href="#">HOTSUSHI</a> Nullam
          malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper
          suscipit, posuere a, pede.
        </p>
        <Button
          href="mailto:mail@niklas-oberwoerder.de"
          class="inline-block mt-10"
        >
          Sag ma' hallo!
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
