<template>
  <div class="flex gap-12">
    <div class="relative cursor-pointer w-full" v-for="content in contents" :key="content.title">
      <nuxt-icon
        v-if="content.icon"
        class="calc__icon"
        :name="content.icon"
        filled
      />
      <img v-if="content.active" class="w-full border-solid border-b-4 border-[#009767]" :src="content.img" alt="">
      <img v-else class="w-full" :src="content.img" alt="">
      <div class="absolute text-4xl text-[#fff] inset-12 flex items-end" v-html="content.title"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Content {
  icon?: string;
  title: string;
  desc?: string;
  img: string;
  active: string;
  section?: string;
}

interface Props {
  contents: Content[];
}

defineProps<Props>();
</script>

<style scoped>
  .calc__icon {
    position: absolute;
    left: 3rem;
    top: 3rem;
  }
</style>