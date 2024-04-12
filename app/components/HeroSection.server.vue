<script lang="ts" setup>
import groq from "groq"
import type { Hero } from "~/types"

const query = groq`
  *[_type == "hero-section"] {
    title,
    description,
    ctaLabel
  }
`
const { data } = await useSanityQuery<Hero[]>(query)

if (!data.value?.length) {
  throw new Error("No HERO data found")
}

const title = ref(data.value![0].title)
const description = ref(data.value![0].description)
const ctaLabel = ref(data.value![0].ctaLabel)
</script>

<template>
  <section
    class="grid gap-y-12 justify-center lg:grid-cols-[auto_auto] lg:items-center lg:justify-center lg:gap-x-[52px]"
  >
    <!-- <pre>{{ data }}</pre> -->
    <div
      class="text-center grid gap-y-6 justify-center mx-auto md:max-w-xl lg:max-w-xl lg:gap-y-10 lg:text-left lg:justify-center"
    >
      <h1 class="text-[40px] leading-[47.4px] md:text-6xl font-bold">
        {{ title.pre }} <em class="em">{{ title.em }}</em> {{ title.post }}
      </h1>
      <p class="md:text-[22px] md:leading-[30px] md:mb-10 lg:mb-0">
        {{ description }}
      </p>
      <button
        class="btn btn-primary w-fit mx-auto px-10 py-5 h-auto leading-none text-base lg:mx-0"
      >
        {{ ctaLabel }}
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
