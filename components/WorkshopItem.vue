<script lang="ts" setup>
type Props = {
  workshop: {
    id: number
    header: {
      text: string
      iconURL: string
    }
    courseInfo: {
      type: {
        label: string
        icon: string
      }
      duration: {
        label: string
        icon: string
      }
    }
    courseTitle: string
    courseDescription: string

    author: {
      name: string
      avatarURL: string
    }
  }
}

const props = defineProps<Props>()
</script>

<template>
  <article
    class="w-[calc(100vw-2rem)] bg-[#2B2F44E5]/90 rounded-[30px] overflow-hidden"
  >
    <header class="header-gradient grid grid-flow-col font-medium py-6 px-4">
      <img :src="props.workshop.header.iconURL" alt="Workshop Header" />
      <h3>{{ props.workshop.header.text }}</h3>
    </header>

    <main class="py-[35px] px-4">
      <div>
        <section class="flex items-center gap-9 mb-5">
          <div class="flex items-center gap-3">
            <img
              :src="props.workshop.courseInfo.type.icon"
              alt="Workshop Type"
            />
            <span class="text-[#737B98] text-sm mt-1">
              {{ props.workshop.courseInfo.type.label }}
            </span>
          </div>

          <div class="flex items-center gap-3">
            <img
              :src="props.workshop.courseInfo.duration.icon"
              alt="Workshop Duration"
            />
            <span class="text-[#737B98] text-sm mt-1">
              {{ props.workshop.courseInfo.duration.label }}
            </span>
          </div>
        </section>

        <section class="mb-5">
          <h4 class="font-medium text-2xl text-[#F3F5FF] mb-3">
            {{ props.workshop.courseTitle }}
          </h4>
          <p class="text-[#737B98]">
            {{ props.workshop.courseDescription }}
          </p>
        </section>
      </div>

      <div class="flex items-center">
        <img
          :src="props.workshop.author.avatarURL"
          alt="Author Avatar"
          class="rounded-full w-6 h-6"
        />
        <span class="text-[#737B98] text-sm font-normal ml-3 mt-0.5">
          {{ props.workshop.author.name }}
        </span>
      </div>
    </main>
  </article>
</template>

<style scoped>
.header-gradient {
  background: linear-gradient(
    90deg,
    rgba(79, 8, 230, 0.5) 0%,
    rgba(255, 73, 117, 0.5) 96.56%
  );
}
</style>
