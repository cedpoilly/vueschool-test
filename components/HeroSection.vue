<script lang="ts" setup>
const title = {
  preEm: "Complete ",
  em: "Vue.js training",
  postEm: " solutions for companies",
}

const description =
  "Training solutions designed for companies, agencies and organisations with developers using or who are considering using the Vue.js framework"
const buttonLabel = "Talk to sales"
</script>

<template>
  <section class="grid gap-y-12 justify-center">
    <div class="text-center grid gap-y-6 justify-center md:max-w-xl">
      <h1 class="text-[40px] leading-[47.4px] md:text-6xl font-bold">
        {{ title.preEm }} <em class="em">{{ title.em }}</em> {{ title.postEm }}
      </h1>
      <p class="md:text-[22px] md:leading-[30px] md:mb-10">{{ description }}</p>
      <button
        class="btn btn-primary w-fit mx-auto px-10 py-5 h-auto md:text-base"
      >
        {{ buttonLabel }}
      </button>
    </div>

    <img
      src="/assets/images/hero-illustration.svg"
      alt="Illustration"
      class="mx-auto"
    />
  </section>
</template>

<style scoped>
em.em {
  color: #0bd88f;
  font-style: normal;
}
</style>
