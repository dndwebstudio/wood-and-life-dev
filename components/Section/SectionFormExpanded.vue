<template>
  <section class="section-form-expanded">
    <div class="container">
      <div class="section-form-expanded__content">
        <div class="section-form-expanded__col section-form-expanded__col_info">
          <nuxt-icon
            class="section-form-expanded__icon"
            name="message-with-heart"
            filled
          />
          <div class="section-form-expanded__info">
            <h2 class="h2 section-form-expanded__title">
              {{ data?.title }}
            </h2>
            <p class="section-form-expanded__desc">
              {{ data?.subtitle }}
            </p>
          </div>
        </div>
        <div v-if="data && data?.form" class="section-form-expanded__col section-form-expanded__col_form">
          <ModuleSimpleForm
            class="section-form-expanded__form"
            :data="data?.form"
            :tabs="tabs"
          />
        </div>
      </div>
    </div>
    <picture class="section-form-expanded__img">
      <source :srcset="data?.img?.imgMd" media="(max-width: 991px)" />
      <img :src="data?.img?.img" alt="" format="webp" loading="lazy" />
    </picture>
  </section>
</template>

<script setup lang="ts">
interface Data {
  img: {
    img: string;
    imgMd: string;
  };
  title: string;
  subtitle: string;
  form: {
    title: string;
    btnName: string;
    policyLink: string;
    textarea?: {
      placeholder: string;
      name: string;
    };
  };
}

interface Tabs {
  currentTab: any;
  tabs: any[];
}

interface Props {
  data: Data;
  tabs: Tabs;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.section-form-expanded {
  padding: 12rem 0;
  position: relative;
  color: #fff;
  background-color: #1b1b1b;
  z-index: 1;
  @include r($md) {
    padding: 6rem 0;
  }
  @include r($sm) {
    padding: 4rem 0;
  }

  &__img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgba(40, 40, 40, 0.1) 0%,
        rgba(40, 40, 40, 0.3) 100%
      );
      z-index: 10;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 0.94fr);
    background: rgba(51, 51, 51, 0.9);
    z-index: 10;
    @include r($md) {
      display: block;
    }
  }

  &__icon {
    margin-bottom: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7.2rem;
    height: 7.2rem;
    border-radius: 50%;
    background-color: var(--gray-700);
    @include r($sm) {
      margin-bottom: 2.1rem;
    }

    :deep(svg) {
      width: 4rem;
      height: 4rem;
    }
  }

  &__col {
    &_info {
      padding: 12.5rem 6.4rem;
      @include r($md) {
        padding: 6.4rem;
      }
      @include r($sm) {
        padding: 3rem 2rem;
      }
    }

    &_form {
    }
  }

  &__info {
  }

  &__title {
    margin-bottom: 3.2rem;
    @include r($sm) {
      margin-bottom: 2rem;
    }
  }

  &__desc {
    @include text24;
  }
}

.section-form-expanded__form {
}
</style>
