<template>
    <div >
        <div class="relative">
            <swiper-container ref="heroSlider" init="false" class="h-[236px]">
                <swiper-slide
                    v-for="(slide, idx) in item.img"
                    :key="idx">
                    <div>
                        <img class="w-full h-[236px] object-cover object-top" :src="slide" alt="">
                    </div>
                </swiper-slide>
            </swiper-container>
            <UiSliderNavigation :class="'partner-slider__navigation__'+componentID" />
        </div>
        <div class="grid grid-cols-3 justify-between p-4 border-b border-[#E3E3E3]">
            <div class="flex justify-center items-center flex-col border-r border-[#E3E3E3]">
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12.832" cy="9.83362" r="2.75" stroke="#009767" stroke-width="1.5" />
                    <path
                        d="M19.582 9.83362C19.582 10.7352 19.3056 11.8711 18.8152 13.0999C18.3287 14.3187 17.6508 15.5814 16.8944 16.7225C16.1363 17.8663 15.3147 18.8646 14.5509 19.5672C14.1688 19.9187 13.8162 20.1821 13.5073 20.3541C13.1915 20.5298 12.9687 20.5836 12.832 20.5836C12.6953 20.5836 12.4726 20.5298 12.1568 20.3541C11.8478 20.1821 11.4953 19.9187 11.1132 19.5672C10.3493 18.8646 9.52779 17.8663 8.76967 16.7225C8.01323 15.5814 7.33537 14.3187 6.84891 13.0999C6.35846 11.8711 6.08203 10.7352 6.08203 9.83362C6.08203 6.1057 9.10411 3.08362 12.832 3.08362C16.56 3.08362 19.582 6.1057 19.582 9.83362Z"
                        stroke="#009767" stroke-width="1.5" />
                    <path
                        d="M6.33203 20.3336V21.3336C6.33203 22.4382 7.22746 23.3336 8.33203 23.3336H17.332C18.4366 23.3336 19.332 22.4382 19.332 21.3336V20.3336"
                        stroke="#009767" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span class="text-center leading-7">{{item.city}}</span>
            </div>
            <div class="flex justify-center items-center flex-col border-r border-[#E3E3E3]">
                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.55556 1.33362C5.81482 2.07436 4.40163 3.89735 4.88889 6.33362C5.44444 9.1114 4.33333 15.2225 1 17.4447M10.4444 1.33362C10.4444 2.62991 11 5.66695 13.2222 5.22251C15.4444 4.77806 16.7407 2.25954 17.1111 1.33362M21 3.00028C18.4074 6.14843 18.2222 8.55584 12.1111 9.66695C6.64517 10.6608 7.66667 14.1114 4.33333 21.3336M11 21.3336C10.8148 19.8521 10.7778 17.4447 12.1111 17.4447C13.7778 17.4447 17.1111 16.8892 17.1111 18.5558C17.1111 19.8892 18.963 20.7781 19.8889 21.3336M21 10.2225C18.7778 11.8892 14 15.2225 10.4444 15.2225"
                        stroke="#009767" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                {{item.wood}}
            </div>
            <div class="flex justify-center items-center flex-col">
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M23.6641 24.0836C24.0783 24.0836 24.4141 23.7478 24.4141 23.3336L24.4141 16.5836C24.4141 16.1694 24.0783 15.8336 23.6641 15.8336C23.2498 15.8336 22.9141 16.1694 22.9141 16.5836L22.9141 22.5836L16.9141 22.5836C16.4998 22.5836 16.1641 22.9194 16.1641 23.3336C16.1641 23.7478 16.4998 24.0836 16.9141 24.0836L23.6641 24.0836ZM3.66406 2.58362C3.24985 2.58362 2.91406 2.9194 2.91406 3.33362L2.91406 10.0836C2.91406 10.4978 3.24985 10.8336 3.66406 10.8336C4.07827 10.8336 4.41406 10.4978 4.41406 10.0836L4.41406 4.08362L10.4141 4.08362C10.8283 4.08362 11.1641 3.74783 11.1641 3.33362C11.1641 2.9194 10.8283 2.58362 10.4141 2.58362L3.66406 2.58362ZM24.1944 22.8033L4.19439 2.80329L3.13373 3.86395L23.1337 23.8639L24.1944 22.8033Z"
                        fill="#009767" />
                    <path
                        d="M11.1944 16.8639C11.4873 16.5711 11.4873 16.0962 11.1944 15.8033C10.9015 15.5104 10.4266 15.5104 10.1337 15.8033L11.1944 16.8639ZM2.91406 23.3336C2.91406 23.7478 3.24985 24.0836 3.66406 24.0836L10.4141 24.0836C10.8283 24.0836 11.1641 23.7478 11.1641 23.3336C11.1641 22.9194 10.8283 22.5836 10.4141 22.5836L4.41406 22.5836L4.41406 16.5836C4.41406 16.1694 4.07828 15.8336 3.66406 15.8336C3.24985 15.8336 2.91406 16.1694 2.91406 16.5836L2.91406 23.3336ZM8.71214 19.3462L11.1944 16.8639L10.1337 15.8033L7.65148 18.2855L8.71214 19.3462ZM4.19439 23.8639L6.64439 21.4139L5.58373 20.3533L3.13373 22.8033L4.19439 23.8639ZM6.64439 21.4139L8.71214 19.3462L7.65148 18.2855L5.58373 20.3533L6.64439 21.4139Z"
                        fill="#009767" />
                    <path
                        d="M24.4141 3.33362C24.4141 2.9194 24.0783 2.58362 23.6641 2.58362L16.9141 2.58362C16.4998 2.58362 16.1641 2.9194 16.1641 3.33362C16.1641 3.74783 16.4998 4.08362 16.9141 4.08362H22.9141V10.0836C22.9141 10.4978 23.2498 10.8336 23.6641 10.8336C24.0783 10.8336 24.4141 10.4978 24.4141 10.0836L24.4141 3.33362ZM16.1337 9.80329C15.8408 10.0962 15.8408 10.5711 16.1337 10.8639C16.4266 11.1568 16.9015 11.1568 17.1944 10.8639L16.1337 9.80329ZM21.7121 6.3462L24.1944 3.86395L23.1337 2.80329L20.6515 5.28554L21.7121 6.3462ZM17.1944 10.8639L19.6444 8.41395L18.5837 7.35329L16.1337 9.80329L17.1944 10.8639ZM19.6444 8.41395L21.7121 6.3462L20.6515 5.28554L18.5837 7.35329L19.6444 8.41395Z"
                        fill="#009767" />
                </svg>
                {{item.size}}
            </div>
        </div>
        <div class="p-10 text-[14px]" v-html="item.description"></div>
    </div>
</template>

<script setup lang="ts">
import { Pagination, Navigation } from "swiper";
import { ref, computed } from "vue";

interface PortfolioItem {
    img: string[];
    city: string;
    wood: string;
    size: string;
    description: string;
    section: string
}
interface Props {
    item: PortfolioItem
}

let props = defineProps<Props>()

let item = props.item

const heroSlider = ref();

function generateGUID() {
  var guid = "";
  for (var i = 0; i < 32; i++) {
    guid += Math.floor(Math.random() * 16).toString(16);
  }
  return guid;
}

const componentID = generateGUID()

onMounted(() => {
  const paramsAlt = {
    loop: true, 
    modules: [Navigation],
    navigation: {
      nextEl: ".partner-slider__navigation__"+componentID+" .slider-navigation__arrow_right",
      prevEl: ".partner-slider__navigation__"+componentID+" .slider-navigation__arrow_left",
    },
  };
  
  Object.assign(heroSlider.value, paramsAlt);
  heroSlider.value.initialize();
});

</script>

<style scoped>
</style>