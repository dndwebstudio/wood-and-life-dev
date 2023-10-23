<template>
  <section class="features">
    <div class="container">
      <div class="mb-24 text-[#838383] text-3xl font-bold uppercase features--title" v-html="data.section"></div>
      <h2 class="h2 features__title" v-html="data.title" />
      <div class="features__content">
        <PartFeature :data="data.features[0]" class="features__feature features__feature_main" />
        <PartFeature :data="data.features[1]" class="features__feature feature_imgs-right" />
        <PartFeature :data="data.features[2]" class="features__feature" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Feature {
  section?: string
}

interface Data {
  section?: string;
  feauteres: Feature[];
}

interface Props {
  data: Data;
}

defineProps({
  data: {
    type: Object,

    default: () => ({}),
  },
});
</script>

<style scoped lang="scss">
.features {
  padding: 12rem 0;
  color: #fff;
  background-color: var(--bg-color);

  @include r($md) {
    padding: 6rem 0;
  }

  @include r($sm) {
    padding: 4rem 0;
  }

  :deep(.features__title) {
    margin-bottom: 6.4rem;

    @include r($sm) {
      margin-bottom: 4rem;
    }

    span {
      color: var(--accent-color);
      text-decoration: underline dashed;
      text-underline-offset: 1.3rem;
      text-decoration-thickness: 4%;
      cursor: pointer;
      transition: color 0.3s ease;

      @include r($sm) {
        text-underline-offset: 0.5rem;
      }

      &:hover {
        color: var(--green-500);
      }
    }
  }

  &__feature {
    &:not(:last-child) {
      margin-bottom: 6.4rem;

      @include r($sm) {
        margin-bottom: 4rem;
      }
    }

    &_main {
      &:not(:last-child) {
        margin-bottom: 12rem;

        @include r($md) {
          margin-bottom: 15rem;
        }

        @include r($sm) {
          margin-bottom: 6rem;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .features--title{
      font-size: 1.5rem;
    }
  }
}
</style>
