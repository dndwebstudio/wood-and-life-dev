<template>
  <div class="steps-banner">
    <h4 class="h4 steps-banner__title" v-html="data.title" />
    <p class="steps-banner__desc">
      {{ data.desc }}
    </p>
    <div class="steps-banner__img">
      <nuxt-img :src="data.img" any="" format="webp" loading="lazy" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Data {
  title: string;
  desc: string;
  img: string;
}

interface Props {
  data: Data;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.steps-banner {
  position: relative;
  padding: 6.4rem;
  color: #fff;
  background: var(--gray-700) url("@/assets/img/svg/bg-circles-5.svg") center /
    cover no-repeat;
  z-index: 1;
  @include r($md) {
    margin-left: -$padding-left-md;
    margin-right: -$padding-right-md;
  }
  @include r($sm) {
    margin-left: -$padding-left-sm;
    margin-right: -$padding-right-sm;
    padding: 4rem 1.2rem;
  }

  &__title,
  &__desc {
    max-width: 69.6rem;
    @include r($md) {
      max-width: 53rem;
    }
  }

  &__title {
    margin-bottom: 4.8rem;
    @include r($sm) {
      margin-bottom: 3rem;
    }
  }

  &__desc {
    @include text20;
    color: var(--white-90);
  }

  &__img {
    width: 47rem;
    position: absolute;
    right: 2rem;
    top: -2rem;
    z-index: -1;
    @include r($md) {
      opacity: 0.2;
      width: 40.8rem;
      right: -10rem;
      top: -1rem;
    }
    @include r($sm) {
      width: 31.8rem;
      right: -12.3rem;
      top: -0.1rem;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
