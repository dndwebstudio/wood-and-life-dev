<template>
  <button
    v-if="type === 'button'"
    class="btn-round btn-round_play"
    type="button"
  >
    <nuxt-icon :name="name" filled />
    <span class="screen-reader">посмотреть видео</span>
  </button>
  <div v-else>
    <span class="btn-round">
      <nuxt-icon :name="name" filled />
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  type?: string;
  name: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.btn-round {
  position: relative;
  width: 7.2rem;
  height: 7.2rem;
  border-radius: 50%;
  background-color: var(--green-500);

  display: flex;
  align-items: center;
  justify-content: center;

  &_play {
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 7.2rem;
      height: 7.2rem;
      opacity: 1;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--green-500);
      animation: 1.7s infinite ripple;
      z-index: -1;
    }
  }

  .nuxt-icon {
    width: 3.3rem;
    height: 3.3rem;

    :deep(svg) {
      width: 100%;
      height: 100%;
    }
  }

  @keyframes ripple {
    0% {
      width: 100%;
      height: 100%;
      opacity: 0.7;
    }

    100% {
      width: 140%;
      height: 140%;
      opacity: 0;
    }
  }
}
</style>
