<template>
<div class="bg-[#1c1c1c]">
    <div class="">
      <div class="bg-[url('/img/home/factory-banner.png')] bg-cover py-14 px-5 md:px-14 lg:p-28 flex flex-col text-white" :style="{backgroundImage: `url(${data.img})`}">
        <div class="text-5xl md:text-7xl lg:text-9xl font-medium mb-10" v-html="data.title"></div>
        <div class="text-2xl md:text-4xl mb-10" v-html="data.subtitle"></div>
        <div class="flex items-start flex-col md:flex-row md:items-center bg-[#1c1c1c] w-fit px-12 py-8 md:py-12 text-4xl gap-2 md:gap-20 font-medium bg-center bg-[url('/img/svg/bg-sec-tech.svg')] bg-cover">
          <div class="st--desc-block text-3xl md:text-4xl mb-5 md:mb-0" v-html="data.blockText"></div>
          <button class="st--play-btn btn-round ">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="17.9985" cy="17.999" r="16.5" stroke="white" stroke-width="2"/>
<path d="M25.75 17.133C26.4167 17.5179 26.4167 18.4801 25.75 18.865L14.875 25.1437C14.2083 25.5286 13.375 25.0475 13.375 24.2777L13.375 11.7203C13.375 10.9505 14.2083 10.4694 14.875 10.8543L25.75 17.133Z" stroke="white" stroke-width="2"/>
</svg>

          </button>
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

<style>
@media screen and (max-width: 767px) {
  .st--desc-block>br{
    display: none;
  }
}
@media screen and (max-width: 1024px) and (min-width: 767px) {
  .st--desc-block>br{
    display: none;
  }
  .st--desc-block{
    max-width: 365px;
  }
}
.st--play-btn>svg{
  z-index: 2;
  position: relative;
}
.st--play-btn::before{
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 7.2rem;
      height: 7.2rem;
      opacity: 1;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--green-500);
      animation: 1.7s infinite ripple;
      z-index: 1;
}

@keyframes ripple {
  0% {
    width: 100%;
    height: 100%;
    opacity: 0.7;
  }

  100% {
    width: 140%;
    height: 140%;
    opacity: 0;
  }
}
</style>