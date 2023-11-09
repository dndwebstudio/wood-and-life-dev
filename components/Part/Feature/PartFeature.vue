<template>
  <div ref="content" class="feature" v-if="data.title">
    <div class="feature__col feature__col_imgs">
      <div v-for="(img, idx) in data.imgs" :key="idx" class="feature__img">
        <img :src="img.img" alt="" format="webp" loading="lazy" />
        <span v-if="img.text" class="feature__img-text">
          {{ img.text }}
        </span>
      </div>
    </div>
    <div class="feature__col feature__col_info">
      <h4 class="h4 feature__item feature__title" v-html="data.title"></h4>
      <div v-if="data.info" class="feature__item feature__info">
        <div
          v-for="(item, idx) in data.info"
          :key="idx"
          class="feature__info-text"
        >
          <p v-html="item.text" />
          <div v-if="item.additional" class="feature__info-additional">
            <nuxt-icon name="arrow-right-thin" filled />
            <div class="feature__info-additional-text">
              <nuxt-icon :name="item.additional.icon" />
              <p class="flex items-center" v-html="item.additional.text" />
            </div>
          </div>
        </div>
      </div>
      <ul v-if="data.list" class="feature__item feature__list">
        <li
          v-for="(item, idx) in data.list"
          :key="idx"
          class="feature__list-item"
        >
          <nuxt-icon name="tick" filled />
          <span v-html="item.text"></span>
        </li>
      </ul>
      <div v-if="data.banner" class="feature__item feature__banner">
        <ModuleBanner class="banner_dark" :data="data.banner" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});

const content = ref(null);


</script>

<style scoped lang="scss">
.feature {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 4.8rem;
  @include r($md) {
    grid-template-columns: auto;
  }

  &_imgs-right {
    .feature__col_imgs {
      order: 2;
    }
  }

  &__col {
    &_imgs {
      display: flex;
      gap: 0.8rem;
      width: 100%;
    }

    &_info {
    }
  }

  &__item {
    &:not(:last-child) {
      margin-bottom: 3.2rem;
    }
  }

  &__img {
    position: relative;
    flex: 1;
    height: 51.7rem;
    z-index: 1;
    @include r($md) {
      height: 46.37rem;
    }
    @include r($sm) {
      height: 21.86rem;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
      background: linear-gradient(
        180deg,
        rgba(40, 40, 40, 0.1) 0%,
        rgba(40, 40, 40, 0.3) 100%
      );
    }
    &-text {
      padding: 4.8rem;
      position: absolute;
      bottom: 0;
      width: 100%;
      @include text32;
      font-weight: 500;
      z-index: 10;
      
      @include r($sm) {
        padding: 2rem;
        font-size: 18px;
        line-height: 1.2;
      }
    }
  }

  &__title {
    margin-bottom: 3.2rem;
    @include r($sm) {
      margin-bottom: 3rem;
    }
  }

  &__info-text {
    @include text20;
    @include r($sm) {
      font-size: 16px;
    }
    :deep(span:not(.nuxt-icon)) {
      color: var(--accent-color);
      text-decoration: underline dashed;
      text-decoration-thickness: 8%;
      cursor: pointer;
    }
    &:not(:last-child) {
      margin-bottom: 3.2rem;
    }
  }

  &__info-additional {
    margin-top: 2rem;
    display: flex;
    .nuxt-icon {
      display: block;
      margin-right: 1.7rem;
    }
  }

  &__info-additional-text {
    display: flex;
    gap: 1.3rem;
    @include text16;
    color: var(--white-40);

    @include r($sm) {
      max-width: 28.2rem;
      flex-direction: column;
      gap: 1.5rem;
      font-size: 16px;
    }
    .nuxt-icon {
      display: block;
      width: 2.6rem;
      min-width: 2.6rem;
      height: 3rem;

      :deep(svg) {
        width: 100%;
        height: 100%;
      }
    }
  }

  &__list {
    @include text20;
    @include r($sm) {
      font-size: 16px;
      line-height: 1.2;
    }
    &-item {
      padding: 2.4rem 0;
      display: flex;
      gap: 1.6rem;
      border-bottom: 1px solid var(--white-20);
      .nuxt-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.8rem;
        min-width: 2.8rem;
        height: 2.8rem;
        border-radius: 0.4rem;
        background-color: var(--green-500);
      }
    }
  }

  &__banner {
    margin-top: 4.8rem;
    @include r($sm) {
      margin-top: 3rem;
    }
  }
}
</style>
