<script lang="ts" setup>
const title = {
  preEm: "Discounted ",
  em: "Corporate Training ",
  postEm: " Bundles",
}

const priceList = ref([
  {
    id: 1,
    titleText: "Basic",
    titleIconURL: "/images/basic-icon__leaf.svg",
    pricePerMonth: 10,
    featuresLabel: "Includes 1 year access to:",
    features: [
      {
        label: "All Video Courses",
        tooltip: "Something something",
        enabled: true,
      },
      {
        label: "Vue.Js Master class",
        tooltip: "Something something",
        enabled: true,
      },
      {
        label: "Developer assist Slack channel",
        tooltip: "Something something",
        enabled: true,
      },
      {
        label: "Live Weekly QnA",
        tooltip: "Something something",
        enabled: false,
      },
      {
        label: "1x ws ticket per license",
        tooltip: "Something something",
        enabled: false,
      },
    ],
    discount: 26,
    seatCount: 12,
    primaryCTA: { label: "Start Learning", url: "/buy/pro" },
    secondaryCTA: { label: "Refer your manager", url: "/learn/pro" },
  },

  {
    id: 2,
    titleText: "Professional",
    titleIconURL: "/images/professional-icon__rocket-launch.svg",
    pricePerMonth: 199,
    featuresLabel: "Includes 1 year access to:",
    features: [
      {
        label: "All Video Courses",
        tooltip: "Something something",
        enabled: true,
      },
      {
        label: "Vue.Js Master class",
        tooltip: "Something something",
        enabled: true,
      },
      {
        label: "Developer assist Slack channel",
        tooltip: "Something something",
        enabled: true,
      },
      {
        label: "Live Weekly QnA",
        tooltip: "Something something",
        enabled: true,
        highlighted: true,
      },
      {
        label: "1x ws ticket per license",
        tooltip: "Something something",
        enabled: true,
        highlighted: true,
      },
    ],
    discount: 26,
    seatCount: 12,
    primaryCTA: { label: "Start Learning", url: "/buy/basic" },
    secondaryCTA: { label: "Refer your manager", url: "/learn/basic" },
  },

  {
    id: 3,
    titleText: "Basic",
    titleIconURL: "/images/basic-icon__bolt.svg",
    pricePerMonth: 99,
    featuresLabel: "Includes 1 year access to:",
    features: [
      {
        label: "All Video Courses",
        tooltip: "Something something",
        enabled: true,
      },
      {
        label: "Vue.Js Master class",
        tooltip: "Something something",
        enabled: true,
      },
      {
        label: "Developer assist Slack channel",
        tooltip: "Something something",
        enabled: true,
      },
      {
        label: "Live Weekly QnA",
        tooltip: "Something something",
        enabled: true,
        highlighted: true,
      },
      {
        label: "4x ws ticket per license",
        tooltip: "Something something",
        enabled: true,
        highlighted: true,
      },
    ],
    discount: 26,
    seatCount: 12,
    primaryCTA: { label: "Start Learning", url: "/buy/basic" },
    secondaryCTA: { label: "Refer your manager", url: "/learn/basic" },
  },
])
</script>

<template>
  <section>
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
        class="grid gap-y-6 justify-center lg:grid-cols-3 lg:w-fit lg:mx-auto lg:gap-x-[30px]"
      >
        <li
          v-for="priceItem in priceList"
          :key="priceItem.id"
          class="lg:w-[370px]"
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
