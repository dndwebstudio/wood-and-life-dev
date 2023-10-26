<template>
  <section class="pt-24 lg:pt-48 bg-[#fff]">
    <div class="container">
      <div data-v-11a8998c=""  class="caps-1 section-name" v-html="data.section"></div>
      <div class="">
        <div class="w-full">
          <h2 class="section-form__title mt-6 mb-12 lg:mt-12 lg:mb-24" v-html="data.title"></h2>
        </div>
        <div class="relative partner__slider--block">
          <swiper-container ref="ourPartnersSlider" init="false" class="credit__slider partner__slider flex gap-4 mb-36">
            <swiper-slide
              v-for="(slide, idx) in data.partnersList"
              :key="idx" class="w-full">
              <img class="w-full" :src="slide.url" alt="">
            </swiper-slide>
          </swiper-container>
          <UiSliderNavigation class="partner-slider__navigation" />
        </div>
        <swiper-container ref="heroSlider" init="false" class="home-hero-slider">
          <swiper-slide
            v-for="(slide, idx) in data.sliders"
            :key="idx"
            :style="{ backgroundImage: `url(${slide.img})` }"
            class="home-hero-slider__slide">
            <div class="container">
              <div class="home-hero-slider__slide-desc" v-html="slide.desc"></div>
            </div>

          </swiper-slide>
          <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
          <div slot="container-end" class="pointers__body">
            <UiSliderPagination class="home-hero-slider__pagination" />
          </div>

        </swiper-container>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Pagination, Navigation } from "swiper";
import {ref} from 'vue';
import useTooltips from '@/mixins/tooltipsMixin';

const { applyTooltips } = useTooltips();
const heroSlider = ref();
const ourPartnersSlider = ref();

interface Slider {
  title: string;
  desc?: string;
  img: string;
  modalType: string;
  modalData: object;
}

interface PartnersSlides {
  url: string
}

interface Data {
  section?: string;
  title?: string;
  sliders: Slider[];
  partnersList: PartnersSlides[];
}

interface Props {
  data: Data;
}

defineProps<Props>();



onMounted(() => {
  const params = {
    modules: [Pagination],
    pagination: {
      el: ".slider-pagination",
      clickable: true,
    },
  };
  const paramsPartners = {
    modules: [Navigation],
    navigation: {
      nextEl: ".partner-slider__navigation .slider-navigation__arrow_right",
      prevEl: ".partner-slider__navigation .slider-navigation__arrow_left",
    },
    breakpoints: {
      1: {
        slidesPerView: 3,
        spaceBetween: 8,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 8,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 8,
      },
      1600: {
        slidesPerView: 6,
        spaceBetween: 8,
      },
      1900: {
        slidesPerView: 7,
        spaceBetween: 8,
      },
    },
  };
  nextTick(() => {
    applyTooltips();
  });

  
  Object.assign(heroSlider.value, params);
  heroSlider.value.initialize();
  if(ourPartnersSlider.value){
    Object.assign(ourPartnersSlider.value, paramsPartners);
    ourPartnersSlider.value.initialize();
  }

});

</script>

<style scoped lang="scss">
.pointers__body{
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 200;
  right: 0;
  width: 100vw;
  bottom: 40px;
  height: 35px;
  justify-content: flex-end;
  // @include r($md) {
  //   justify-content: flex-start;
  // }
}
.home-hero-slider {
  position: relative;
  color: #fff;
  padding-bottom: 85px;
}
.home-hero-slider__slide {
  // padding: 6.4rem 0;
  position: relative;
  height: auto;
  z-index: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // min-height: 78.1rem;
  // overflow: hidden; /* clearfix */
  clear: both;
  @include r($md) {
    // min-height: 73rem;
  }
  @include r($sm) {
    // padding: 3.4rem 0 8.1rem;
    // min-height: 25rem;
  }
  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        180deg,
        rgba(40, 40, 40, 0.4) 0%,
        rgba(40, 40, 40, 0.7) 100%
    );
    z-index: -1;
  }

  &::before{
    content: "";
    padding-top: 56.25%;
    float: left;
  }

  &-label {
    position: relative;
    display: inline-flex;
    @include r($xs) {
      height: 5.14rem;
    }
    .nuxt-icon {
      position: absolute;
      right: -1.5rem;
      z-index: 10;
      height: 100%;
      @include r($sm) {
        right: -1.4rem;
      }
      :deep(svg) {
        width: 100%;
        height: 100%;
      }
    }
    &::after{
      content: "";
      display: inline-block;
      width: 2.2rem;
      // height: 5.2rem;
      background: url("../../assets/icons/label-price.svg") no-repeat center;
      background-size: contain;
      @include r($xs) {
        height: 5.14rem;
        width: 2.11rem;
      }

    }

  }
  &-label-price {
    position: relative;
    padding: 0.9rem 0.8rem;
    display: inline-block;
    @include text28;
    font-weight: 500;
    color: var(--gray-600);
    background-color: #fff;
    border-radius: 0.4rem 0 0 0.4rem;
    z-index: 5;
    box-shadow: 4px 0px 0px 0px white;
    @include r($md) {
      font-size: 28px;
    }
    @include r($sm) {
      font-size: 16px;
      padding: 1.6rem 0.8rem;
    }


  }

  :deep(.home-hero-slider__slide-title) {
    margin-bottom: 2.4rem;
    max-width: 142.4rem;



    span {
      color: var(--accent-color);
      text-decoration: underline dashed 2.5%;
      text-underline-offset: 1rem;
      cursor: pointer;
      position: relative;

    }
    br {
      @include r($sm) {
        display: none;
      }
    }
  }

  &-desc {
    margin-bottom: 0.4rem;
    max-width: 105.2rem;
    font-size: 16px;
    font-weight: 400;
    p {
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
    }
  }

  &-header {
    margin-bottom: 17.4rem;
    max-width: 37rem;
    @include text16;
    @include r($md) {
      margin-bottom: 11.4rem;
    }
    @include r($sm) {
      margin-bottom: 7.6rem;
    }
  }
  &-footer {
    margin-top: 4.8rem;
  }
}

.home-hero-slider__pagination {
  // position: absolute;
  z-index: 10;
  height: 35px;
  padding-left: 16px;
  background-color: #FFFFFF;
  // right: 16rem;
  // bottom: 6.4rem;
  @include r($md) {
    // right: 50%;
    // bottom: 3.8rem;
    // transform: translateX(-50%);
  }
  @include r($sm) {
    bottom: 2.7rem;
  }
}

.home-hero-slider__slide-btn {
  @include r($sm) {
    padding: 1.75rem 3rem 1.75rem 2.8rem;
  }
}
.swiper, swiper-container {

}

.home-hero-slider__slide-desc {
  position: absolute;
  bottom: -44px;
  color: #000;
}

.partner__slider{
  margin-left: 3rem;
  margin-right: 3rem;
}
</style>