<template>
  <swiper-container v-if="props.slides && props.slides.length > 0" ref="slider" class="gallery-slider" init="false">
    <swiper-slide
      v-for="(slide, idx) in props.slides"
      :key="idx"
      class="gallery-slider__slide"
    >
      <div class="gallery-slider__slide-img">
        <img :src="slide.img" alt="" format="webp" loading="lazy" />
      </div>
      <p v-if="slide.desc" class="gallery-slider__slide-desc">
        {{ slide.desc }}
      </p>
    </swiper-slide>
    <!-- eslint-disable-next-line -->
    <div slot="container-end">
      <UiSliderPagination class="gallery-slider__pagination" />
    </div>
  </swiper-container>
</template>

<script setup lang="ts">
import { Pagination } from "swiper";

interface Slide {
  img: string;
  desc: string;
}

interface Props {
  slides: Slide[];
}



let props = defineProps<Props>();

console.log(props.slides);

const slider = ref();

onMounted(() => {
  const params = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".slider-pagination",
      clickable: true,
    },
  };

  if(slider.value){
    Object.assign(slider.value, params);
    slider.value.initialize();
  }
});
</script>

<style scoped lang="scss">
.gallery-slider {
  position: relative;
  height: 64.2rem;
  @include r($md) {
    height: 44.2rem;
  }
  @include r($sm) {
    height: 25.6rem;
  }

  &__slide {
    &-img {
      position: relative;
      margin-bottom: 3.2rem;
      height: 59.2rem;
      width: 100%;

      &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(
          180deg,
          rgba(40, 40, 40, 0.1) 0%,
          rgba(40, 40, 40, 0.3) 100%
        );
        z-index: 1;
      }

      @include r($md) {
        height: 39.2rem;
      }
      @include r($sm) {
        height: 20.61rem;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &-desc {
      position: absolute;
      bottom: unset;
      max-width: 70rem;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      @include text16;
      color: var(--gray-500);
      @include r($md) {
        max-width: 58rem;
      }
      @include r($sm) {
        max-width: 29rem;
      }
    }
  }
  &__pagination {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 10;
  }
}
</style>
