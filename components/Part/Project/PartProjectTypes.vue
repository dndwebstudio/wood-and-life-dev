<template>
  <div class="project-types">
    <div class="caps-12-16 project-types__title">Проекты</div>
    <swiper-container ref="projectTypesSlider" init="false" class="project-types-slider">
      <swiper-slide 
      v-for="(config, idx) in data" :key="config.type.name" :class="[
        'project-types-slider__slide',
        { active: idx === projectIndex },
      ]" @click="$emit('updateIndex', idx)">
        <nuxt-img 
        class="project-types-slider__slide-img" :src="config.type.img" :alt="config.type.name" format="webp"
          loading="lazy" />
        <span class="caps-12-16 project-types-slider__slide-title">
          {{ config.type.name }}
        </span>
      </swiper-slide>
      <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
      <div slot="container-end">
        <UiSliderNavigation class="project-types-slider__navigation" />
      </div>
    </swiper-container>
  </div>
</template>

<script setup lang="ts">
import { Navigation } from "swiper";
const projectTypesSlider = ref();

defineEmits(["updateIndex"]);

onMounted(() => {
  const params = {
    spaceBetween: 8,
    modules: [Navigation],
    navigation: {
      nextEl: ".project-types-slider__navigation .slider-navigation__arrow_right",
      prevEl: ".project-types-slider__navigation .slider-navigation__arrow_left",
    },
    breakpoints: {
      320: {
        slidesPerView: 2.01,
      },
      768: {
        slidesPerView: 4.03,
      },
      992: {
        slidesPerView: 8,
      },
    },
  };

  Object.assign(projectTypesSlider.value, params);
  projectTypesSlider.value?.initialize();
});

interface Config {
  type: {
    img: string;
    name: string;
  };
}

interface Props {
  data: Config[];
  projectIndex: number;
}

withDefaults(defineProps<Props>(), {
  data: () => [],
  projectIndex: 0,
});

defineExpose({
  projectTypesSlider,
});
</script>

<style scoped lang="scss">
.project-types {
  padding: 0.8rem 3.2rem 3.2rem;
  background-color: var(--gray-700);

  @include r($md) {
    overflow: hidden;
  }

  @include r($sm) {
    padding: 1rem 3.2rem 2.5rem;
  }

  &__title {
    margin-bottom: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white-40);
  }

  &-slider {
    position: relative;

    @include r($md) {
      overflow: visible;
    }

    &__slide {
      position: relative;
      overflow: hidden;
      @include text14;
      font-weight: 700;
      text-transform: uppercase;
      color: #fff;
      border-radius: 0.2rem;
      // max-height: 10.393rem;
      z-index: 1;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      cursor: pointer;

      &.active {
        &::after {
          border-bottom: 0.4rem solid var(--accent-color);
        }
      }

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg,
            rgba(40, 40, 40, 0.05) 50%,
            rgba(40, 40, 40, 0.7) 100%);
        z-index: -1;
      }

      &-img {
        width: 100%;
        object-fit: cover;
        z-index: -1;
      }

      &-title {
        padding: 0.8rem;
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }

    &__navigation {
      @include r($md) {
        display: none;
      }
    }
  }
}
</style>
