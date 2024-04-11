<script lang="ts" setup>
useHead({
  title: "Vue School | The #1 source for learning Vue.js from experts",
})
</script>

<template>
  <div class="grid justify-center overflow-x-hidden">
    <div class="container mx-auto">
      <TheNavBar class="md:mb-12" />
      <main class="px-[15px] mb-[100px] md:px-10 lg:grid lg:justify-center">
        <HeroSection class="mb-[104px]" />
        <AboutSection class="mb-[120px] md:mb-[140px] lg:mb-[304px]" />
        <StatsSection class="mb-[120px] md:mb-[140px] lg:mb-[200px]" />
        <PriceList class="mb-[120px] lg:mb-[160px]" />
        <WorkShops class="mb-[100px] md:mb-[140px] lg:mb-[200px]" />
      </main>
      <TheFooter />
      <div
        class="absolute overflow-hidden bg-cover w-full h-full bg-no-repeat inset-0 opacity-10 mt-[813px] md:mt-[1153px] lg:mt-[696.69px] -z-50"
        style="background-image: url(http://localhost:3000/images/bg-2.svg)"
      ></div>

      <div
        class="absolute overflow-hidden bg-cover w-full h-full bg-no-repeat inset-0 opacity-30 mt-[813px] md:mt-[1153px] lg:mt-[665px] -z-50"
        style="background-image: url(http://localhost:3000/images/bg-1.svg)"
      ></div>

      <div
        class="absolute overflow-hidden bg-cover w-full h-full bg-no-repeat inset-0 opacity-40 mt-[2023px] md:mt-[2554px] lg:mt-[1886px] -z-50"
        style="background-image: url(http://localhost:3000/images/bg-3.svg)"
      ></div>

      <div
        class="absolute overflow-hidden bg-cover w-full h-full bg-no-repeat inset-0 opacity-30 mt-[2383px] md:mt-[2914px] lg:mt-[2245.81px] -z-50"
        style="background-image: url(http://localhost:3000/images/bg-4.svg)"
      ></div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");

.rubik-font {
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

body {
  font-family: "Rubik", sans-serif;
  font-size: 16px;
}
</style>
