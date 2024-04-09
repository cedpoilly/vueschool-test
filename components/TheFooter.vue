<script lang="ts" setup>
const socialMediaItems = ref([
  {
    id: 1,
    alt: "facebook",
    icon: "images/footer-icon-fb.svg",
    url: "https://www.facebook.com/vueschool",
  },
  {
    id: 2,
    alt: "twitter",
    icon: "images/footer-icon-tw.svg",
    url: "https://twitter.com/VueSchool_io",
  },
  {
    id: 3,
    alt: "youtube",
    icon: "images/footer-icon-yt.svg",
    url: "https://www.youtube.com/@vueschool",
  },
  {
    id: 4,
    alt: "github",
    icon: "images/footer-icon-gh.svg",
    url: "https://github.com/vueschool",
  },
  {
    id: 5,
    alt: "linkedin",
    icon: "images/footer-icon-in.svg",
    url: "https://www.linkedin.com/company/vueschool",
  },
])

const products = ref([
  {
    id: 1,
    label: "Courses",
    url: "https://vueschool.io/courses",
  },

  {
    id: 2,
    label: "Workshops",
    url: "https://vueschool.io/workshops",
  },

  {
    id: 3,
    label: "Vue Masterclass",
    url: "https://vueschool.io/vue-masterclass",
  },
  {
    id: 4,
    label: "Mastering Nuxt",
    url: "https://masteringnuxt.com",
  },
])

const corporate = ref([
  {
    id: 1,
    label: "Corporate Training",
    url: "https://vueschool.io/corporate-training",
  },
  {
    id: 2,
    label: "Developer Recruitment",
    url: "https://vueschool.io/developer-recruitment",
  },
  {
    id: 3,
    label: "Course Development",
    url: "https://vueschool.io/course-development",
  },

  {
    id: 4,
    label: "On-site Workshops",
    url: "https://vueschool.io/on-site-workshops",
  },

  {
    id: 5,
    label: "Consulting",
    url: "https://vueschool.io/consulting",
  },
  {
    id: 6,
    label: "Affiliate Programs",
    url: "https://vueschool.io/affiliate-programs",
  },
])

const connect = ref([
  {
    id: 1,
    label: "About Us",
    url: "https://vueschool.io/about",
  },
  {
    id: 2,
    label: "Careers",
    url: "https://vueschool.io/careers",
  },
  {
    id: 3,
    label: "Contact Us",
    url: "https://vueschool.io/contact",
  },
])

const events = ref([
  {
    id: 1,
    label: "Vue.js Nation",
    url: "https://vueschool.io/vuejs-nation",
  },
  {
    id: 2,
    label: "Nuxt Nation",
    url: "https://vueschool.io/nuxt-nation",
  },
  {
    id: 3,
    label: "Vue.js Forge",
    url: "https://vueschool.io/vuejs-forge",
  },
])

const resources = ref([
  // Articles
  {
    id: 1,
    label: "Articles",
    url: "https://vueschool.io/articles",
  },
])

const pricing = ref([
  {
    id: 1,
    label: "Plans",
    url: "https://vueschool.io/plans",
  },
])
</script>

<template>
  <footer class="grid px-4 mb-[131px] gap-y-12">
    <section class="grid gap-y-9 justify-center text-center">
      <img
        class="block mx-auto"
        src="@/assets/images/vueschool-footer-logo.svg"
        alt="Vue School logo"
      />
      <p class="text-white">
        Thanks to fine people like you, Vue School can proudly sponsor Evan and
        the future of Vue.js by being a Platinum Patreon
      </p>

      <div class="grid gap-y-5">
        <h2 class="text-[#737B98] font-medium text-[22px]">
          FOLLOW US IN SOCIAL MEDIA
        </h2>
        <ul class="flex justify-between">
          <li v-for="media in socialMediaItems" :key="media.id">
            <NuxtLink :to="media.url">
              <img :src="media.icon" :alt="media.alt" class="h-[60px] block" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <section class="grid gap-y-8 justify-center text-center">
      <div class="grid gap-y-5">
        <h3 class="text-[#737B98] text-[22px] leading-[30px] font-medium">
          PRODUCTS
        </h3>

        <ul class="grid gap-y-[14px]">
          <li v-for="link in products" :key="link.id">
            <NuxtLink
              :to="link.url"
              class="text-white leading-6 hover:underline"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="grid gap-y-5">
        <h3 class="text-[#737B98] text-[22px] leading-[30px] font-medium">
          CORPORATE
        </h3>

        <ul class="grid gap-y-[14px]">
          <li v-for="link in corporate" :key="link.id">
            <NuxtLink
              :to="link.url"
              class="text-white leading-6 hover:underline"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="grid gap-y-5">
        <h3 class="text-[#737B98] text-[22px] leading-[30px] font-medium">
          CONNECT WITH US
        </h3>

        <ul class="grid gap-y-[14px]">
          <li v-for="link in connect" :key="link.id">
            <NuxtLink
              :to="link.url"
              class="text-white leading-6 hover:underline"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="grid gap-y-5">
        <h3 class="text-[#737B98] text-[22px] leading-[30px] font-medium">
          EVENTS
        </h3>

        <ul class="grid gap-y-[14px]">
          <li v-for="link in events" :key="link.id">
            <NuxtLink
              :to="link.url"
              class="text-white leading-6 hover:underline"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="grid gap-y-5">
        <h3 class="text-[#737B98] text-[22px] leading-[30px] font-medium">
          RESOURCES
        </h3>

        <ul class="grid gap-y-[14px]">
          <li v-for="link in resources" :key="link.id">
            <NuxtLink
              :to="link.url"
              class="text-white leading-6 hover:underline"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="grid gap-y-5">
        <h3 class="text-[#737B98] text-[22px] leading-[30px] font-medium">
          PRICING
        </h3>

        <ul class="grid gap-y-[14px]">
          <li v-for="link in pricing" :key="link.id">
            <NuxtLink
              :to="link.url"
              class="text-white leading-6 hover:underline"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>
  </footer>
</template>
