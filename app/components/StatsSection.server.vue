<script lang="ts" setup>
import groq from "groq"
import type { Stats } from "~/types"

const query = groq`
  *[_type == "stats-section"] {
    lessonsCount,
    coursesCount,
    totalDuration
  }
`

const { data } = await useSanityQuery<Stats[]>(query)

if (!data.value?.length) {
  throw new Error("No Stats data found")
}

const stats = ref(data.value![0])

const title = {
  preEm: "Full Stack ",
  em: "Vue Training",
  postEm: " Solutions",
}
</script>

<template>
  <section
    class="text-center grid gap-y-8 w-[345px] mx-auto md:mx-auto md:w-full md:max-w-[570px] lg:max-w-screen-xl lg:grid-cols-2 lg:justify-center lg:items-center lg:gap-x-10 lg:w-auto lg:text-left"
  >
    <header class="lg:grid lg:max-w-fit lg:justify-end">
      <h3
        class="text-gradient font-medium mb-3 md:text-2xl md:leading-[28.44px]"
      >
        YOUR #1 SOURCE OF VUE.JS COURSES
      </h3>
      <h2
        class="text-[40px] leading-[47.4px] font-bold md:text-6xl md:leading-[71.1px] lg:w-[570px]"
      >
        {{ title.preEm }}
        <em class="not-italic title-gradient">{{ title.em }}</em>
        {{ title.postEm }}
      </h2>
    </header>

    <main class="lg:w-min">
      <ul
        class="grid grid-flow-col justify-between md:justify-center md:gap-x-[61px]"
      >
        <li class="grid justify-center">
          <h4
            class="text-gradient stat-val-color font-medium text-[64px] leading-[75.84px] mb-3 md:text-[90px]"
          >
            {{ stats.lessonsCount }}
          </h4>

          <span class="flex gap-[11px]">
            <img
              class="h-5 w-5"
              src="/images/stats-video-icon.svg"
              alt="Video lessons icon"
            />
            <p>Video lessons</p>
          </span>
        </li>

        <li class="grid justify-center">
          <h4
            class="text-gradient stat-val-color font-medium text-[64px] leading-[75.84px] mb-3 md:text-[90px]"
          >
            {{ stats.coursesCount }}
          </h4>

          <span class="flex gap-[11px]">
            <img
              class="h-5 w-5"
              src="/images/stats-lesson-icon.svg"
              alt="courses icon"
            />
            <p>Courses</p>
          </span>
        </li>

        <li class="grid justify-center">
          <h4
            class="text-gradient stat-val-color font-medium text-[64px] leading-[75.84px] mb-3 md:text-[90px]"
          >
            {{ stats.totalDuration }}
          </h4>

          <span class="flex gap-[11px]">
            <img
              class="h-5 w-5"
              src="/images/stats-time-icon.svg"
              alt="time icon"
            />
            <p>Hours</p>
          </span>
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
