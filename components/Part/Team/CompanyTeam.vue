<template>
  <div class="pt-48 pb-48 team-section" v-if="data.title">
    <div class="container">
      <h2 class="mb-6" v-html="data.title"></h2>
      <p class="text-4xl font-medium mb-24" v-html="data.desc"></p>
      <!-- <div class="flex gap-16 flex-col lg:flex-row">
        <div class="relative" v-for="(el, idx) in data.list" :key="idx">
          <img class="w-full" :src="el.img" alt="">
          <div class="absolute inset-12 flex flex-col items-start justify-end  text-[#fff]">
            <div class="text-5xl font-medium" v-html="el.title"></div>
            <p  class="text-3xl" v-html="el.desc"></p>
          </div>
        </div>
      </div> -->
      <swiper-container ref="creditSlider" init="false" class="flex gap-16 flex-col lg:flex-row" style="
        padding-bottom: 26px;
    ">
        <swiper-slide
          v-for="(el, idx) in data.list"
          :key="idx"
          class="relative">
          <img class="w-full" :src="el.img" alt="">
          <div class="absolute inset-12 flex flex-col items-start justify-end  text-[#fff]">
            <div class="text-5xl font-medium lg:text-[32px] sm:text-[22px] text-[18px] lg:leading-[35px] sm:leading-[26px] leading-[21px]" v-html="el.title"></div>
            <p  class="text-3xl lg:text-[18px] sm:text-[14px] text-[14px] lg:leading-[21px] sm:leading-[17px] leading-[17px]" v-html="el.desc"></p>
          </div>

        </swiper-slide>
        <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
        <div slot="container-end" class="pointers__body" style="
display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transform: translateY(20px);
    position: absolute;
    bottom: 22px;
    width: 100%;
    align-content: center;
    align-items: center;
        ">
          <UiSliderPagination class="home-hero-slider__pagination" />
        </div>

      </swiper-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Pagination } from "swiper";

interface Data {

}

interface Props {
  data: Data;
}

defineProps<Props>();

const creditSlider = ref();

onMounted(() => {
  const params = {
    spaceBetween: 8,
    modules: [Pagination],
    pagination: {
      el: ".slider-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
    },
  };

  if(!!creditSlider.value){
  Object.assign(creditSlider.value, params);
  creditSlider.value.initialize();
  }
});
</script>


<style scoped>

</style>