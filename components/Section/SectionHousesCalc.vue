<template>
  <section class="pt-48 pb-48 bg-[url('/img/modular-houses/bg-green.png')] bg-cover">
    <div class="container">
      <div data-v-11a8998c=""  class="caps-1 section-name" v-html="data.section"></div>
      <div class="grid lg:grid-cols-6">
        <div class="w-full col-span-2">
          <svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_806_18637)">
              <rect y="0.445312" width="72" height="72" rx="36" fill="black" fill-opacity="0.2"/>
              <path d="M36 20.4229L55 28.6603V51.333H17V28.6603L36 20.4229Z" stroke="white" stroke-width="2"/>
              <path d="M24 35.333L26.5 37.833L32 32.333" stroke="white" stroke-width="2"/>
              <path d="M24 42.333L26.5 44.833L32 39.333" stroke="white" stroke-width="2"/>
            </g>
            <defs>
              <filter id="filter0_b_806_18637" x="-48" y="-47.5547" width="168" height="168" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="24"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_806_18637"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_806_18637" result="shape"/>
              </filter>
            </defs>
          </svg>
          <h2 class="section-form__title mt-12 mb-16 text-[#fff]" v-html="data.title"></h2>
          <p class="text-[#fff] text-4xl mb-12 lg:mb-0" v-html="data.desc"></p>
        </div>
        <ModuleCalcAlt :calculators="data.calculators"/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ModuleCalcAlt from "~/components/Module/ModulCalcAlt.vue";

interface Calculator {
  title: string;
  desc?: string;
  img?: string;
  section?: string;
  active: boolean;
}

interface Quiz {
  title: string;
  type: string;
  content: Calculator[];
}

interface Data {
  desc?: string;
  section?: string;
  title?: string;
  calculators: Quiz[];
}

interface Props {
  data: Data;
}

defineProps<Props>();
</script>

<style scoped>

</style>