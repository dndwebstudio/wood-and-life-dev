<template>
  <div class="pt-48 pb-48 team-section">
    <div class="container">
      <h2 class="mb-6" v-html="data.title"></h2>
      <p class="text-4xl font-medium mb-24" v-html="data.desc"></p>
      <div class="flex gap-16">
        <div class="relative" v-for="(el, idx) in data.list" :key="idx">
          <img class="w-full" :src="el.img" alt="">
          <div class="absolute inset-12 flex flex-col items-start justify-end  text-[#fff]">
            <div class="text-5xl font-medium" v-html="el.title"></div>
            <p  class="text-3xl" v-html="el.desc"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Data {

}

interface Props {
  data: Data;
}

defineProps<Props>();
</script>


<style scoped>

</style>