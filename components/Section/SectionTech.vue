<template>
<div class="bg-[#1c1c1c]">
    <div class="">
      <div class="bg-[url('/img/home/factory-banner.png')] bg-cover p-14 lg:p-28 flex flex-col text-white" :style="{backgroundImage: `url(${data.img})`}">
        <div class="text-5xl md:text-7xl lg:text-9xl font-medium mb-10" v-html="data.title"></div>
        <div class="text-2xl md:text-4xl mb-10" v-html="data.subtitle"></div>
        <div class="flex bg-[#1c1c1c] w-fit p-12 text-4xl items-center gap-20 font-medium">
          <div v-html="data.blockText"></div>
          <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.1" cx="56" cy="56" r="56" fill="#007550"/>
            <circle opacity="0.3" cx="56" cy="56" r="46" fill="#007550"/>
            <circle cx="56" cy="56.0005" r="36" fill="#007550"/>
            <g clip-path="url(#clip0_140_22567)">
              <circle cx="55.9985" cy="55.9995" r="16.5" stroke="white" stroke-width="2"/>
              <path d="M63.75 55.1335C64.4167 55.5184 64.4167 56.4806 63.75 56.8655L52.875 63.1442C52.2083 63.5291 51.375 63.048 51.375 62.2782L51.375 49.7208C51.375 48.951 52.2083 48.4699 52.875 48.8548L63.75 55.1335Z" stroke="white" stroke-width="2"/>
            </g>
            <defs>
              <clipPath id="clip0_140_22567">
                <rect width="36" height="36" fill="white" transform="translate(38 38)"/>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TechData } from "~/dto/interfaces/tech";
interface Props {
  data: TechData;
}

let props = defineProps<Props>();


</script>

<style></style>