<template>
  <ul class="sticky-info">
    <li>
      <a href="#">
        <svg viewBox="0 0 24.773 19.111">
          <path
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1.387 4.667L11.03 11.1a2.444 2.444 0 002.713 0l9.644-6.433M3.831 18.111h17.112a2.444 2.444 0 002.444-2.444V3.444A2.444 2.444 0 0020.943 1H3.831a2.444 2.444 0 00-2.444 2.444v12.223a2.444 2.444 0 002.444 2.444z"
          />
        </svg>
      </a>
    </li>
    <li>
      <a href="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20.142">
          <path
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M23 1.088a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 1.088z"
          />
        </svg>
      </a>
    </li>
    <li>
      <a href="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.713 23.049">
          <path
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.213 19.049c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.439 5.439 0 00-1.5-3.749 5.07 5.07 0 00-.09-3.771s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48a5.07 5.07 0 00-.09 3.77 5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v3.87"
          />
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.sticky-info {
  @apply fixed w-10 right-5 bottom-0 left-auto z-10 flex flex-col items-center justify-center;
  @apply text-gray-400;
  @apply space-y-5;
  @apply lg:right-6;
}

.sticky-info::after {
  @apply w-px h-12 bg-gray-500 block mt-5;
  @apply lg:h-32;
  content: '';
}

svg {
  @apply stroke-current w-5;
}

a {
  @apply text-gray-400 transform-gpu block transition-all duration-300 ease-out;
  @apply hover:text-cyan-400 hover:-translate-y-1;
}
</style>
