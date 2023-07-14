<template>
  <div class="bg-white col-span-4 w-full py-16 px-20 pb-20 shrink-1">
    <div class="flex gap-12 items-center mb-12">
      <div class="relative font-bold	text-[#333] py-2 px-4 whitespace-nowrap ">
        ЭТАП 1/4
      </div>
      <div class="grid grid-cols-4 gap-2 w-full">
        <div class="h-[4px] w-full min-w-[160px] bg-[#009767] rounded"></div>
        <div class="h-[4px] w-full min-w-[160px] bg-[#E3E3E3] rounded"></div>
        <div class="h-[4px] w-full min-w-[160px] bg-[#E3E3E3] rounded"></div>
        <div class="h-[4px] w-full min-w-[160px] bg-[#E3E3E3] rounded"></div>
      </div>
    </div>
    <div class="text-6xl font-medium mb-16" v-for="calculator in calculators" :key="calculator.title">
      <div class="mb-12" v-html="calculator.title"></div>
      <ModuleCalcContent :contents="calculator.content" />
    </div>
    <div class="flex justify-between">
      <button class="flex text-[#808080] font-medium uppercase px-12 py-6 rounded-full bg-[#e3e3e3] gap-8 items-center" type="button" data-v-inspector="components/Ui/Button/UiButtonPrimary.vue:21:3" data-v-c9574704="" data-v-43f32aca="">
              <span class="nuxt-icon">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 4.77881L18 6.77881C18 8.98795 16.2091 10.7788 14 10.7788L3 10.7788" stroke="#808080" stroke-width="2"/>
                  <path d="M8 5.77881L3 10.7788L8 15.7788" stroke="#808080" stroke-width="2"/>
                </svg>
              </span>
        Назад
      </button>
      <button class="flex text-black font-medium uppercase px-12 py-6 rounded-full bg-[#e3e3e3] gap-8 items-center" type="button" data-v-inspector="components/Ui/Button/UiButtonPrimary.vue:21:3" data-v-c9574704="" data-v-43f32aca="">
        Далее
        <span class="nuxt-icon">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4.07812L2 6.07812C2 8.28726 3.79086 10.0781 6 10.0781L17 10.0781" stroke="black" stroke-width="2"></path>
                <path d="M13 5.07812L18 10.0781L13 15.0781" stroke="black" stroke-width="2"></path>
              </svg>
            </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

import ModuleCalcContent from "~/components/Module/ModuleCalcContent.vue";

interface Calculator {
  icon?: string;
  title: string;
  desc?: string;
  img: string;
  section?: string;
}

interface Props {
  calculators: Calculator[];
}

defineProps<Props>();
</script>

<style scoped>

</style>