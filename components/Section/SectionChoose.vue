<template>
  <section class="choose pb-48 pt-48 text-[#fff]">
    <div class="container">
      <h2 class="h2 info-simple__title mb-6" v-html="data.title"></h2>
      <p class="text-4xl mb-24" v-html="data.desc"></p>
      <div class="grid grid-cols-5 gap-16">
        <div class="relative" v-for="(choose, idx) in data.chooses" :key="idx">
          <img class="w-full" alt="" :src="choose.img">
          <div class="absolute inset-12 flex items-end text-5xl font-medium text-[#fff]" v-html="choose.title"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Choose {
  img?: string;
  title?: string;
}

interface Data {
  title?: string;
  desc?: string;
  chooses: Choose[];
}

interface Props {
  data: Choose;
}

defineProps<Props>();


</script>

<style scoped lang="scss">
.choose {
  background-color: var(--bg-color);
}
</style>