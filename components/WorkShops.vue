<script lang="ts" setup>
const workshops = ref([
  {
    id: 1,

    header: {
      text: "December 14th - 11:00 AM (GMT-3)",
      iconURL: "images/workshop-calendar-icon.svg",
    },

    courseInfo: {
      type: {
        label: "LIVE Training",
        icon: "images/workshop-type-live-icon.svg",
      },
      duration: {
        label: "15 Hours",
        icon: "images/workshop-duration-icon.svg",
      },
    },

    courseTitle: "Vue.js Fundamentals",
    courseDescription:
      "A progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally...",

    author: {
      name: "Steve Popoola",
      avatarURL: "images/steve-popoola-avatar.png",
    },
  },

  {
    id: 2,

    header: {
      text: "December 14th - 11:00 AM (GMT-3)",
      iconURL: "images/workshop-calendar-icon.svg",
    },

    courseInfo: {
      type: {
        label: "LIVE Training",
        icon: "images/workshop-type-live-icon.svg",
      },
      duration: {
        label: "15 Hours",
        icon: "images/workshop-duration-icon.svg",
      },
    },

    courseTitle: "Vue 3 and Composition API",
    courseDescription:
      "Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...",

    author: {
      name: "Steve Popoola",
      avatarURL: "images/steve-popoola-avatar.png",
    },
  },
  {
    id: 3,

    header: {
      text: "December 14th - 11:00 AM (GMT-3)",
      iconURL: "images/workshop-calendar-icon.svg",
    },

    courseInfo: {
      type: {
        label: "LIVE Training",
        icon: "images/workshop-type-live-icon.svg",
      },
      duration: {
        label: "15 Hours",
        icon: "images/workshop-duration-icon.svg",
      },
    },

    courseTitle: "Vue.js Fundamentals",
    courseDescription:
      "A progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally...",

    author: {
      name: "Steve Popoola",
      avatarURL: "images/steve-popoola-avatar.png",
    },
  },
])
</script>

<template>
  <section>
    <article>
      <header class="text-center">
        <h2
          class="font-bold text-[40px] text-white text-center leading-[47.4px] mb-14 md:text-6xl md:leading-[71.1px] md:mb-[72px]"
        >
          Available Workshops
        </h2>
      </header>

      <main class="mb-10 md:mb-12">
        <div
          class="carousel carousel-center max-w-[calc(100vw-2rem)] space-x-4 rounded-box md:space-x-[30px]"
        >
          <div
            v-for="workshopItem in workshops"
            :key="workshopItem.id"
            :id="'item' + workshopItem.id"
            class="carousel-item"
          >
            <WorkshopItem :workshop="workshopItem" />
          </div>
        </div>

        <div class="flex justify-center w-full py-2 gap-2">
          <a href="#item1" class="btn btn-xs">1</a>
          <a href="#item2" class="btn btn-xs">2</a>
          <a href="#item3" class="btn btn-xs">3</a>
        </div>
      </main>

      <footer class="grid justify-center">
        <button
          class="btn btn-primary text-[#212435] py-5 px-10 h-14 md:text-base md:h-16"
        >
          See all the workshops
        </button>
      </footer>
    </article>
  </section>
</template>
