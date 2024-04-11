<script lang="ts" setup></script>

<template>
  <section
    class="custom-border grid justify-center text-center md:text-left gap-y-6 rounded-t-[30px] md:grid-cols-[152px_1fr] md:px-6 md:py-10 md:gap-x-6"
  >
    <div class="grid justify-center md-w-[152px]">
      <img
        src="/assets/images/vueschool-logo-only.svg"
        alt="Vue School icon"
        class="w-[112px] h-auto"
      />
    </div>

    <div class="grid gap-y-4 px-6 md:px-0">
      <h2
        class="font-bold text-2xl md:text-[40px] md:leading-[47.4px] leading-[28.44px] text-[#FFFFFF]"
      >
        About Vue School corporate training
      </h2>

      <p
        class="text-[14px] leading-6 text-[#F3F5FF] md:text-[22px] md:leading-[30px]"
      >
        School is the #1 training resource for Vue.js and has provided the most
        comprehensive Vue.js video library in the world to over 140,000
        developers. Private individuals and small to enterprise companies have
        used our services to develop their skills since 2016.
      </p>
    </div>
  </section>
</template>

<style scoped>
.custom-border {
  border: 1px solid rgba(255, 255, 255, 0.122);
  border-bottom: none;
  /* Currently struggling with that part, so I will come back to it later. */

  /* border-image-source: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 100%
  ); */
}
</style>
