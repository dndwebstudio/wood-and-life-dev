<template>
  <div class="banner">
    <div class="banner__col banner__col_info">
      <div class="banner__title" v-html="data?.title" />
      <div v-if="data?.subtitle" class="banner__subtitle">
        <nuxt-icon name="arrow-right-thin" filled />
        <p v-html="data.subtitle" />
      </div>
    </div>
    <div class="banner__col">
      <div class="banner__img">
        <img :src="data?.img" format="webp" loading="lazy" />
      </div>
      <UiButtonRound
        v-if="data.videoLink"
        class="banner__el"
        name="play-in-circle"
        type="button"
        @click="openModalVideo"
      />
      <UiButtonRound v-else class="banner__el" name="tick-in-circle" />
    </div>
    <SvgCircles class="banner__bg" />
  </div>
</template>

<script setup lang="ts">
import { useModal } from "vue-final-modal";
import ModalVideo from "@/components/Modal/ModalVideo.vue";

interface Data {
  title?: string;
  subtitle?: string;
  videoLink?: string;
  icon?: string;
  img?: string;
}

interface Props {
  data: Data;
}

const props = defineProps<Props>();

const { open: openModalVideo } = useModal({
  component: ModalVideo,
  attrs: {
    videoLink: props.data.videoLink,
  },
});
</script>

<style lang="scss">
.banner {
  position: relative;
  padding: 3.2rem;
  min-height: 17.4rem;
  overflow: hidden;
  background-color: var(--gray-100);
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
  @include r($sm) {
    padding: 1.2rem 1.6rem;
  }

  &_dark {
    color: #fff;
    background-color: var(--gray-700);

    .banner__bg {
      path {
        stroke: #fff;
      }
    }
  }

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    @include r($sm) {
      width: auto;
    }
  }

  &__col {
    &_info {
      max-width: 52.8rem;
      @include r($sm) {
        max-width: 22.8rem;
      }
    }
  }

  &__title {
    @include text20;
    font-weight: 700;
    @include r($sm) {
      font-size: 20px;
    }
  }

  &__subtitle {
    margin-top: 1.2rem;
    @include text16;
    color: var(--gray-400);

    display: flex;
    align-items: center;

    .nuxt-icon {
      margin-right: 1.9rem;
      display: block;
    }
  }

  &__img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    height: 100%;
    max-width: 30rem;

    img {
      width: 100%;
      object-fit: cover;
    }
    @include r($sm) {
      max-width: 15rem;
    }
  }
}
</style>
