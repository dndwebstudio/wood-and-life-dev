<template>
  <div class="preview-video-mini" :class="{ __active: isOpen, __preprice: popupStore.prePriceOpen && popupStore.summ.num}">
    <button class="preview-video-mini__btn-close" @click="isOpen = false">
      <nuxt-icon name="close" />
      <span class="screen-reader">Закрыть</span>
    </button>
    <div class="preview-video-mini__img-block">
      <nuxt-img :src="data.img" format="webp" loading="lazy" />
      <div class="preview-video-mini__img-overlay"></div>
      <div class="preview-video-mini__play-block" @click="openModalVideo">
        <div class="preview-video-mini__play-icon"></div>
      </div>
    </div>
    <div class="preview-video-mini__text-block">
      <p>Узнайте о Wood and Life за 3 минуты</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModal } from "vue-final-modal";
import ModalVideo from "~/components/Modal/ModalVideo.vue";

import {usePopupStore} from '~/store/popup'
const popupStore = usePopupStore();



const isOpen = ref(true)

interface Data {
  text: string;
  videoLink?: string;
  img: string;
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

<style scoped lang="scss">
.preview-video-mini {
  display: none;
  position: fixed;
  left: 3vw;
  bottom: 3vh;
  max-width: 22rem;
  width: 100%;
  z-index: 50;
  min-height: 20.5rem;
  background-color: #fff;
  border-radius: 0.8rem;
  box-shadow: 0 20px 40px -4px rgba(0, 0, 0, 0.24);
  overflow: hidden;
  &.__active {
    display: block;
    &.__preprice{
      @include r($md) {
        bottom: 15vh;
      }
    }
  }
  // @include r($lg){
  //   top: 69%;
  // }
  @include r($md) {
    bottom: 2vh;
    max-width: 19rem;
    height: 21rem;
    // display: none;
    // &.__active {
    //   display: none;
    // }
  }
  @include r($xs){
    bottom: 2vh;
  }
}

.preview-video-mini__btn-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  cursor: pointer;
  position: absolute;
  border-radius: 50%;
  top: 0.3rem;
  right: 0.3rem;
  z-index: 100;
  transition: background-color 0.4s ease;

  .nuxt-icon {
    width: 1.6rem;
    min-width: 1.6rem;
    height: 1.6rem;
    color: #fff;

    :deep(svg) {
      width: 100%;
      height: 100%;
    }
  }
  &:hover {
    background-color: var(--green-500);
  }
}
.preview-video-mini__img-block {
  position: relative;
  width: 100%;
  height: 14.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.preview-video-mini__img-overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(40, 40, 40, 0.3) 0%, rgba(40, 40, 40, 0.6) 100%);
}

.preview-video-mini__play-block {
  position: absolute;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  transition: background-color 0.4s ease;
  &:hover {
    background: var(--green-500);
  }
}

.preview-video-mini__play-icon {
  border: 1.2rem solid transparent;
  border-left: 2rem solid #FFF;
  left: 40%;
  position: absolute;
}

.preview-video-mini__text-block {
  padding: 1.6rem;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 110%;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
</style>
