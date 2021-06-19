<template>
  <Container>
    <TextLoading>
      <h1 class="text-[28px] md:text-4xl font-bold text-gray-200 lg:text-6xl">
        Seite nicht gefunden
      </h1>
    </TextLoading>
    <div v-motion-fade :delay="2500" class="mt-6">
      <p class="max-w-2xl leading-loose text-gray-400 mr-7 md:mr-0">
        Verlaufen? Die Seite die Du suchst gibt es nicht.
      </p>
      <Button :to="{ path: '/' }" class="inline-block mt-8 lg:mt-10">
        zur Startseite
      </Button>
    </div>
  </Container>
</template>

<script>
export default {}
</script>
