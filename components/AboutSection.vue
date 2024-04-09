<script lang="ts" setup></script>

<template>
  <section
    class="custom-border grid justify-center text-center gap-y-6 rounded-t-[30px]"
  >
    <div class="grid justify-center">
      <img src="/assets/images/vueschool-logo-only.svg" alt="Vue School icon" />
    </div>

    <div class="grid gap-y-4 px-6">
      <h2 class="font-bold text-2xl leading-[28.44px] text-[#FFFFFF]">
        About Vue School corporate training
      </h2>

      <p class="text-[14px] leading-6 text-[#F3F5FF]">
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
