<template>
  <section class="choose pb-48 pt-48 text-[#fff]">
    <div class="container">
      <h2 class="h2 info-simple__title mb-6" v-html="data.title"></h2>
      <p class="text-4xl mb-24" v-html="data.desc"></p>
      <div class="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-5 gap-6 sm:gap-16">
        <div class="relative section-choose-item" v-for="(choose, idx) in data.chooses" :key="idx">
          <img class="w-full" alt="" :src="choose.img">
          <div class="absolute inset-4 text-2xl md:inset-12 flex items-end md:text-5xl font-medium text-[#fff]" v-html="choose.title"></div>
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
.section-choose-item{
  border: 2px solid transparent;
  transition: 0.3px;
  cursor: pointer;
}
.section-choose-item:hover{
  border-color: #007550;
}
</style>