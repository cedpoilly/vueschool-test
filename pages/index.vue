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
        <PriceList class="mb-[120px]" />
        <WorkShops class="mb-[100px] md:mb-[140px]" />
      </main>
      <TheFooter />
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
