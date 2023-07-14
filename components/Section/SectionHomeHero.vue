<!-- eslint-disable vue/no-v-html -->
<template>
  <section class="home-hero">
    <swiper-container ref="heroSlider" init="false" class="home-hero-slider">
      <swiper-slide
        v-for="(slide, idx) in slides"
        :key="idx"
        :style="{ backgroundImage: `url(${slide.img})` }"
        class="home-hero-slider__slide"
      >
      
        <div class="container">
          <div class="home-hero-slider__slide-header">
            {{ slide.header }}
          </div>
          <div class="home-hero-slider__slide-body">
            <h1
              class="h1 home-hero-slider__slide-title"
              
              v-html="slide.titleBlock" 
            >
          </h1>

            <div class="home-hero-slider__slide-desc" v-html="slide.desc">

            </div>
            <div class="home-hero-slider__slide-label">
              <span v-if="slide.labelPrice" class="home-hero-slider__slide-label-price">
                {{ slide.labelPrice }}
              </span>
              <!-- <nuxt-icon name="label-price" /> -->
            </div>
          </div>
          <div class="home-hero-slider__slide-footer">
            <UiButtonPrimary
              :name="slide.button.name"
              class="home-hero-slider__slide-btn btn_green"
              :link="`#bathouse-calculator`"
            />
          </div>
        </div>
        
      </swiper-slide>
      <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
      <div slot="container-end" class="pointers__body">
        <UiSliderPagination class="home-hero-slider__pagination" />
      </div>
      
    </swiper-container>
  </section>
</template>

<script setup lang="ts">
import { Pagination } from "swiper";
import {ref} from 'vue'

import useTooltips from '@/mixins/tooltipsMixin';

const { applyTooltips } = useTooltips();

const heroSlider = ref();

// const instance = getCurrentInstance()


const slides = ref([
  {
    header: "Производим, доставляем и устанавливаем бани-бочки с 2014 года",
    titleBlock: `Баня-бочка под ключ
            <br />
              <span class="tooltip-custom" tooltip-content='<div><svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 8.33398L21 4.33398L25 8.33398" stroke="#009767"/>
        <path d="M21 8.33398L21 26.334" stroke="#009767" stroke-dasharray="1 1"/>
        <path d="M17 26.334L21 30.334L25 26.334" stroke="#009767"/>
        <rect x="1" y="1.33398" width="32" height="32" stroke="#009767" stroke-width="2"/>
        <path d="M8 13.334L4 17.334L8 21.334" stroke="#009767"/>
        <path d="M10 17.334H24" stroke="#009767" stroke-dasharray="1 1"/>
        <path d="M26 13.334L30 17.334L26 21.334" stroke="#009767"/>
    </svg></div><p>Стоимость односекционной бани-бочки из ели размером 2х2 м</p>'>от&nbsp;149&nbsp;000&nbsp;руб.</span> в Воронеже
            <br />
            напрямую от производителя`,
    desc: `<p>Соберем бесплатно на участке за 1–3 дня или доставим готовую</p>`,
    modalType: "tooltip",
    modalData: {text: '', img: ''},
    labelPrice: "Предоплата всего 10 000 руб.",
    img: "/img/home-hero/image-1.jpg",
    button: {
      name: "Подобрать баню",
      link: "#",
    },
  },
  {
    header: "Производим, доставляем и устанавливаем \n" +
      "дачные домики с 2014 года",
    titleBlock: `Готовые дачные и рыбацкие домики <br />
                 в Ростове-на-Дону от производителя
        <br />
              <span class="tooltip-custom" tooltip-content='<div><svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 8.33398L21 4.33398L25 8.33398" stroke="#009767"/>
        <path d="M21 8.33398L21 26.334" stroke="#009767" stroke-dasharray="1 1"/>
        <path d="M17 26.334L21 30.334L25 26.334" stroke="#009767"/>
        <rect x="1" y="1.33398" width="32" height="32" stroke="#009767" stroke-width="2"/>
        <path d="M8 13.334L4 17.334L8 21.334" stroke="#009767"/>
        <path d="M10 17.334H24" stroke="#009767" stroke-dasharray="1 1"/>
        <path d="M26 13.334L30 17.334L26 21.334" stroke="#009767"/>
    </svg></div><p>Стоимость односекционной бани-бочки из ели размером 2х2 м</p>'>От&nbsp;490&nbsp;000&nbsp;руб.</span>
            <br />`,
    desc: `<p>Производим из мини-бруса и собираем на участке за 1–7 дней</p>`,
    modalType: "tooltip",
    modalData: {text: '', img: ''},
    labelPrice: "",
    img: "/img/modular-houses/banner.png",
    button: {
      name: "Подобрать домик",
      link: "#",
    },
  },
  {
    header: "Производим, доставляем и устанавливаем \n" +
      "модульные дома с 2014 года",
    titleBlock: `Модульные дома под ключ <br />
                 в Воронеже от производителя <br />
                 для круглогодичного <br />
               проживания. <span class="tooltip-custom" tooltip-content=''>От&nbsp;920&nbsp;000&nbsp;руб.</span>
            <br />`,
    desc: `<p>Собираем на участке за 1–7 дней</p>`,
    modalType: "tooltip",
    modalData: {text: '', img: ''},
    labelPrice: "",
    img: "/img/home-hero/main-slider.png",
    button: {
      name: "Подобрать модульный дом",
      link: "#",
    },
  },
  {
    header: "Производим, доставляем и устанавливаем \n" +
      "дома A-frame с 2014 года",
    titleBlock: `Строим энергоэффективные и <br />
                 уютные дома A-frame <br />
                  <span class="tooltip-custom" tooltip-content=''>От 1&nbsp;390&nbsp;000&nbsp;руб.</span>
            <br />`,
    desc: `<p>«Под ключ» за 60 дней. С гарантией 5 лет по договору!</p>`,
    modalType: "tooltip",
    modalData: {text: '', img: ''},
    labelPrice: "",
    img: "/img/home-hero/main-slider.png",
    button: {
      name: "Подобрать A-Фрейм",
      link: "#",
    },
  },
]);




onMounted(() => {
  const params = {
    modules: [Pagination],
    pagination: {
      el: ".slider-pagination",
      clickable: true,
    },
  };
  nextTick(() => {
  
  applyTooltips();

  });

  Object.assign(heroSlider.value, params);
  heroSlider.value.initialize();

});



</script>

<style scoped lang="scss">

.pointers__body{
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 200;
  bottom: 4rem;
  width: 100vw;
  bottom: 4rem;
  justify-content: center;
  // @include r($md) {
  //   justify-content: flex-start;
  // }
}
.home-hero-slider {
  position: relative;
  color: #fff;
}
.home-hero-slider__slide {
  padding: 6.4rem 0;
  position: relative;
  height: auto;
  z-index: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 78.1rem;
  @include r($md) {
    min-height: 73rem;
  }
  @include r($sm) {
    padding: 3.4rem 0 8.1rem;
    min-height: 55rem;
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
    @include text28;
    font-weight: 500;
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

   
  
   
</style>
