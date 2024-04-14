<script lang="ts" setup>
const title = {
  preEm: "Discounted ",
  em: "Corporate Training ",
  postEm: " Bundles",
}

import groq from "groq"
import type { PriceCardItem } from "~/types"

const query = groq`
  *[_type == "pricing-item"] {
    reference,
    position,
    title,
    features
  }
`

const { data } = await useSanityQuery<PriceCardItem[]>(query)
if (!data.value?.length) {
  throw new Error("No Stats data found")
}

const stats = ref(data.value!)

const priceList = computed(() => {
  const baseData = [
    {
      id: 1,
      reference: "1-basic",
      titleText: "Basic",
      titleIconURL: "/images/basic-icon__leaf.svg",
      pricePerMonth: 10,
      featuresLabel: "Includes 1 year access to:",
      features: [],
      discount: 26,
      seatCount: 12,
      primaryCTA: { label: "Start Learning", url: "/buy/pro" },
      secondaryCTA: { label: "Refer your manager", url: "/learn/pro" },
    },

    {
      id: 2,
      titleText: "Professional",
      reference: "2-professional",
      titleIconURL: "/images/professional-icon__rocket-launch.svg",
      pricePerMonth: 199,
      featuresLabel: "Includes 1 year access to:",
      features: [],
      discount: 26,
      seatCount: 12,
      primaryCTA: { label: "Start Learning", url: "/buy/basic" },
      secondaryCTA: { label: "Refer your manager", url: "/learn/basic" },
    },

    {
      id: 3,
      reference: "3-basic",
      titleText: "Basic (the other one)",
      titleIconURL: "/images/basic-icon__bolt.svg",
      pricePerMonth: 99,
      featuresLabel: "Includes 1 year access to:",
      features: [],
      discount: 26,
      seatCount: 12,
      primaryCTA: { label: "Start Learning", url: "/buy/basic" },
      secondaryCTA: { label: "Refer your manager", url: "/learn/basic" },
    },
  ]

  const priceList = baseData
    .map((item) => {
      const statItem = stats.value.find((stat) => {
        debugger
        return stat.reference.trim() === item.reference.trim()
      })

      const features = statItem?.features || []
      return {
        ...item,
        reference: statItem?.title,
        features,
        position: statItem?.position,
      }
    })
    .sort((a, b) => a.position! - b.position!)

  console.log(priceList)
  debugger

  return priceList
})
</script>

<template>
  <section class="w-[345px] mx-auto md:w-full">
    <header class="text-center mb-14">
      <h2
        class="text-[40px] leading-[47.4px] font-bold md:text-6xl md:leading-[71.1px] md:mb-[72px] lg:max-w-[752px] lg:mx-auto lg:mb-[120px]"
      >
        {{ title.preEm }}
        <em class="not-italic title-gradient">{{ title.em }}</em>
        {{ title.postEm }}
      </h2>
    </header>

    <main>
      <ul
        class="grid gap-y-6 justify-center xl:grid-cols-3 lg:w-fit lg:mx-auto lg:gap-x-[30px]"
      >
        <li
          v-for="priceItem in priceList"
          :key="priceItem.id"
          class="xl:w-[370px]"
        >
          <PriceListCard v-bind="priceItem" />
        </li>
      </ul>
    </main>
  </section>
</template>

<style scoped>
em.em {
  font-style: normal;
}

.text-gradient {
  background-image: linear-gradient(90deg, #0bd88f 0%, #00f0ff 96.56%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.title-gradient {
  background-image: linear-gradient(90deg, #01f0fd 1%, #01f0fd 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
