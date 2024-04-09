<script lang="ts" setup>
useHead({
  title: "Vue School | The #1 source for learning Vue.js from experts",
})
</script>

<template>
  <TheNavBar />
  <main class="px-[15px]">
    <HeroSection />
    <AboutSection />
    <StatsSection />
    <PriceList />
    <WorkShops />
  </main>
  <TheFooter />
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
