<template>
  <VueFinalModal
    content-class="popup-content"
    :content-transition="'vfm-slide-down'"
    swipe-to-close="down"
    @update:model-value="(val: boolean) => emit('update:modelValue', val)"
  >
    <div
      class="popup-inner"
      @click.self="() => emit('update:modelValue', false)"
    >
      <div class="popup-wrap">
        <button
          class="btn-close-popup"
          @click="() => emit('update:modelValue', false)"
        >
          <nuxt-icon name="close" />
          <span class="screen-reader">Закрыть</span>
        </button>
        <slot />
      </div>
    </div>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";

const emit = defineEmits<{
  (e: "update:modelValue", modelValue: boolean): void;
}>();
</script>

<style lang="scss">
.popup-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.popup-inner {
  height: 100%;
  overflow: hidden;

  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @include r($sm) {
    padding: 0;
    width: 100%;
    position: absolute;
  }
}

.popup-wrap {
  margin: auto;
  position: relative;
  overflow-y: auto;
  padding: 6rem;

  // next rules are optional
  border-radius: 0.6rem;
  background-color: #fff;
  max-width: 900px;
  @include r($md){
    height: fit-content;
    margin: auto;
    // height: 74rem;
    width: 70rem;
    padding: 2rem;
  }
  @include r($sm) {
    // height: 100%;
    height: fit-content;
    margin: auto;
    width: 52rem;

    // next rules are optional
    // margin-top: 8rem;
    padding: 2rem;
    padding-left: $padding-right-sm;
    padding-right: $padding-right-sm;
  }
  @include r($xs){
    height: fit-content;
    // height: 69rem;
    width: 47rem;
    // margin-top: 11rem;
  }
}

.btn-close-popup {
  position: absolute;
  top: 2rem;
  right: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 4.8rem;
  min-width: 4.8rem;
  height: 4.8rem;

  background: transparent;

  @include r($sm) {
    top: 1rem;
    right: 1rem;
  }

  &:hover {
    .nuxt-icon {
      color: var(--accent-color);
    }
  }

  .nuxt-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.3s ease;

    svg {
      width: 1.6rem;
      min-width: 1.6rem;
      height: 1.6rem;
    }

    @include r($sm) {
      svg {
        width: 14px;
        min-width: 14px;
        height: 14px;
      }
    }
  }
}
</style>
