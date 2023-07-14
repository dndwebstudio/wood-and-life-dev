<template>
  <div class="project-additions">
    <p class="project-additions__info" v-html="data.desc"></p>
    <div class="project-additions__img">
      <nuxt-img :src="data.img" :alt="data.alt" format="webp" loading="lazy" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Data {
  desc: string;
  img: string;
  alt?: string;
}

interface Props {
  data: Data;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.project-additions {
  position: relative;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 4px rgba(145, 158, 171, 0.24),
    0px 24px 48px rgba(145, 158, 171, 0.24);
  z-index: 1;
  @include r($sm) {
    flex-direction: column;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: url("@/assets/img/svg/bg-circles-1.svg") 0 / contain no-repeat;
    z-index: -1;
  }
  &__info {
    position: relative;
    padding: 4.8rem 3.2rem;
    @include text20;
    @include r($sm) {
      padding: 2.8rem 1.2rem;
      font-size: 20px;
    }
  }
  &__img {
    flex: 0 0 40.2%;
    @include r($md) {
      flex: 0 0 37.4%;
    }
    @include r($sm) {
      flex: unset;
      height: 18rem;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
