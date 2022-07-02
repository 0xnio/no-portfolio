<template>
  <div class="relative isolate">
    <BlurredCircle v-motion-fade :delay="1000" />
    <div class="
        relative
        py-12
        space-y-6
        lg:space-y-10
        pt-[var(--navbar-height)]
        mt-2
        md:pt-0
      ">
      <div v-motion-fade class="block font-mono text-cyan-400" :delay="1500">
        Hey <span class="wave" aria-hidden="true">👋</span>, Ich bin
      </div>
      <header>
        <TextLoading>
          <h1 class="text-[28px] md:text-4xl font-bold text-gray-200 lg:text-6xl">
            Niklas Oberwoerder
          </h1>
        </TextLoading>
        <TextLoading :delay="1300">
          <h2 class="mt-1 text-xl font-semibold text-gray-300 lg:mt-3 lg:text-3xl">
            ein <Underline>Frontend-Developer</Underline> und
            <Underline>UI/UX Designer</Underline>.
          </h2>
        </TextLoading>
      </header>
      <div v-motion-fade :delay="2500">
        <p class="max-w-[80ch] leading-loose text-gray-400 mr-7 md:mr-0">
          Mein Fokus liegt auf Gestaltung und Entwicklung von benutzerfreundlichen, ansprechenden und modernen Web-Projekten. Dafür nutze ich gerne <a href="https://www.vuejs.org/" rel="noopener" title="Vue.js Website aufrufen" class="font-mono" target="_blank">Vue.js</a>
          oder
          <a href="https://www.nuxtjs.org/" rel="noopener" title="Nuxt.js Website aufrufen" class="font-mono" target="_blank">Nuxt.js</a> - bin aber auch erfahren mit Content-Management-Systemen (CMS) wie z.B. <a href="https://wordpress.org/" rel="noopener" title="WordPress Website aufrufen" class="font-mono" target="_blank">WordPress</a>. Ich arbeite in einer Agentur in Bielefeld.
        </p>
        <Button href="mailto:mail@niklas-oberwoerder.de" class="inline-block mt-8 lg:mt-10">
          Sag mal hallo!
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
