<script lang="ts" setup>
type Props = {
  titleText: string
  titleIconURL: string
  pricePerMonth: number
  featuresLabel: string
  features: {
    label: string
    tooltip?: string
    disabled: boolean
    highlighted?: boolean
  }[]
  discount: number
  seatCount: number
  primaryCTA: { label: string; url: string }
  secondaryCTA: { label: string; url: string }
  insertSection?: {
    label: string
    courseTitle: string
    courseURL: string
    courseImageURL: string
  }
}
const props = defineProps<Props>()

const INITIAL_SEAT_COUNT = 12
const seats = ref(INITIAL_SEAT_COUNT)
const priceForSeats = computed(() => props.pricePerMonth * seats.value)
</script>

<template>
  <article
    class="custom-border rounded-[30px] bg-[#2B2F44E5]/90 px-6 py-10 md:w-[640px] md:p-10 lg:w-[370px]"
  >
    <header
      class="flex gap-4 items-center text-[22px] font-bold leading-[30px] mb-8"
    >
      <img :src="props.titleIconURL" :alt="props.titleText" />
      <h3>{{ props.titleText }}</h3>
    </header>

    <main class="grid gap-y-6 mb-8">
      <section>
        <p class="text-primary mb-6">{{ props.featuresLabel }}</p>
        <ul class="grid gap-y-4">
          <li
            v-for="feature in props.features"
            :key="feature.label"
            :class="{
              'opacity-20': feature.disabled,
            }"
            class="flex gap-4 text-sm text-[#F3F5FF]"
          >
            <img
              v-if="!feature.disabled"
              src="/images/feature-enabled-icon.svg"
            />
            <img v-else src="/images/feature-disabled-icon.svg" />
            <span :class="{ 'font-bold': feature.highlighted }">
              {{ feature.label }}
            </span>
          </li>
        </ul>
      </section>

      <section class="bg-[#212435] custom-border rounded-2xl py-6 px-[16px]">
        <h4 class="flex items-center mb-6">
          <em class="font-bold text-[40px] text-white leading-[50.6px]">
            ${{ priceForSeats }}
          </em>
          <span class="font-normal leading-[19.36px] text-[#A0A8C3]">
            &nbsp; / seat / month
          </span>
        </h4>

        <form class="px-0 md:mb-4">
          <label
            class="font-bold text-base text-white leading-[18.96px] mb-4 block"
            for="seat-count"
          >
            How many licenses do you need?
          </label>
          <input
            id="seat-count"
            type="range"
            min="0"
            max="100"
            value="40"
            class="range range-success"
          />

          <div class="w-full flex justify-between text-xs px-2">
            <span class="text-[#737B98] text-sm leading-[16.94px]">5</span>
            <span class="text-[#737B98] text-sm leading-[16.94px]">20</span>
          </div>
        </form>

        <div
          class="grid grid-flow-col justify-between md:justify-start md:gap-x-5"
        >
          <div
            class="grid grid-flow-col items-center justify-between gap-x-[10px] px-[14px] py-[4px] rounded-lg bg-[#0E0E1033]/20"
          >
            <img src="/images/seats-icon__people.svg" alt="Seats icon" />
            <span class="text-[26px] leading-[30.81px] font-bold">
              {{ props.seatCount }}
            </span>
            <span class="leading-[18.96px] text-[#979FAD]">seats</span>
          </div>

          <div class="text-primary flex items-center font-medium">
            <span class="leading-[18.96px]"> {{ props.discount }}%</span>
            <span class="leading-[18.96px]">&nbsp;discount</span>
          </div>
        </div>
      </section>
    </main>

    <footer class="grid gap-y-2">
      <NuxtLink
        :to="primaryCTA.url"
        class="btn btn-primary px-10 py-5 h-auto leading-none text-base"
        >{{ primaryCTA.label }}
      </NuxtLink>
      <NuxtLink
        :to="secondaryCTA.url"
        class="btn btn-ghost text-primary px-10 py-5 h-auto leading-none text-base"
      >
        {{ secondaryCTA.label }}
      </NuxtLink>
    </footer>
  </article>
</template>

<style scoped>
.custom-border {
  border: 1px solid rgba(255, 255, 255, 0.122);
  border-bottom: none;
}
</style>
