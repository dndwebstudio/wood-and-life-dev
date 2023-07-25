<template>
  <div class="project-gallery">
    <swiper-container
      ref="galleryMainSlider"
      class="project-gallery-main"
      thumbs-swiper=".project-gallery-thumbs"
      init="false"
    >
      <swiper-slide
        v-for="(item, idx) in data.gallery"
        :key="idx"
        class="project-gallery-main__slide"
      >
        <img
          :src="item.img"
          :alt="data.title"
          format="webp"
          loading="lazy"
        />
      </swiper-slide>
      <div slot="container-end">
            <UiSliderNavigation :class="[`reviews-photos__nav`]" />
          </div>
    </swiper-container>
    <swiper-container
      ref="galleryThumbsSlider"
      class="project-gallery-thumbs"
      init="false"
    >
      <swiper-slide
        v-for="(item, idx) in data.gallery"
        :key="idx"
        class="project-gallery-thumbs__slide"
      >
        <img
          :src="item.img"
          :alt="data.title"
          format="webp"
          loading="lazy"
        />
      </swiper-slide>
      <!-- <div slot="container-end">
            <UiSliderNavigation :class="['reviews-photos__nav', `reviews-photos__nav`]" />
          </div> -->
    </swiper-container>
  </div>
</template>

<script setup lang="ts">
import { useBreakpoints } from "@vueuse/core";
import { Navigation, Thumbs } from "swiper";

interface GalleryItem {
  img: string;
}

interface Data {
  gallery?: GalleryItem[];
  title: string;
}

interface Props {
  data: Data;
}

const galleryMainSlider = ref();
const galleryThumbsSlider = ref();

// const { width } = useWindowSize();

const breakpoints = useBreakpoints({
  mobile: 767,
});

const isMobile = breakpoints.smallerOrEqual("mobile");

onMounted(() => {
  const galleryMainSliderParamsForMobile = {
    slidesPerView: 1,
    spaceBetween: 0,
    modules: [Thumbs, Navigation],
    navigation: {
        nextEl: `.reviews-photos__nav` + " .slider-navigation__arrow_right",
        prevEl: `.reviews-photos__nav` + " .slider-navigation__arrow_left",
      }
  };

  // const galleryMainSliderParams = {
  //   slidesPerView: 1,
  //   spaceBetween: 0,
  //   modules: [Thumbs]
  // };

  const galleryThumbsSliderParams = {
    slidesPerView: "auto",
    spaceBetween: 0,
    modules: [Thumbs],
  };

  
 
  Object.assign(galleryThumbsSlider.value, galleryThumbsSliderParams);
  Object.assign(galleryMainSlider.value, galleryMainSliderParamsForMobile);

  galleryMainSlider.value.initialize();
  galleryThumbsSlider.value.initialize();
  
  if (!isMobile.value) {
    galleryThumbsSlider.value.swiper.init();
  } else {
    galleryThumbsSlider.value.swiper.destroy();

  }
});

defineProps<Props>();

defineExpose({
  galleryMainSlider,
  galleryThumbsSlider,
});
</script>

<style scoped lang="scss">
.project-gallery {
  position: relative;
}
.project-gallery-main {
  &__slide {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @include r($md) {
      height: 43.37rem;
    }
    @include r($sm) {
      height: 29.38rem;
    }
  }
  .slider-navigation{
      display: none;
        @include r($sm) {
        display: block;
      }
  }

  
}

.project-gallery-main.swiper-initialized.swiper-horizontal.swiper-backface-hidden{

  :deep(.slider-navigation__arrow){
    width: 4rem;
    height: 5.6rem;
  }
  // &.slider-navigation__arrow.slider-navigation__arrow_right{
  //   width: 4rem;
  //   height: 5.6rem;
  // }
}
.project-gallery-thumbs {
  padding: 0.4rem;
  position: absolute;
  left: 50%;
  bottom: 1.967rem;
  transform: translateX(-50%);

  max-width: 30rem;
  height: 7.2rem;
  background-color: rgba(#000, 0.7);
  border-radius: 0.4rem;

  // @include r($md) {
  //   bottom: -3.033rem;
  // }
  @include r($sm) {
    display: none;
  }

  &__slide {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 0.2rem;
    cursor: pointer;
    margin-right: 0.4rem;
    &:last-of-type {
      margin-right: 0;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
    }

    &.swiper-slide-thumb-active {
      box-shadow: 0 0 0 0.4rem var(--accent-color);
    }
  }
}
</style>
