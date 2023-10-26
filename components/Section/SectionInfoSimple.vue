<template>
  <section class="info-simple">
    <div class="container">
      <PartSectionName :name="data.sectionName" />
      <div class="info-simple__content">
        <div class="info-simple__col info-simple__col_right">
          <img
            class="info-simple__img"
            :src="data.src"
            format="webp"
            loading="lazy"
          />
          <slot name="banner"></slot>
        </div>
        <div class="info-simple__col info-simple__col_left">
          <div class="info-simple__info">
            <h2 class="h2 info-simple__title" v-html="data.title" />
            <div class="info-simple__desc">
              <slot name="desc"></slot>
            </div>
          </div>
          <PartInfoSimpleQuote v-if="data.quote" :data="data.quote" />
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import useTooltips from '@/mixins/tooltipsMixin';

const { applyTooltips } = useTooltips();

interface Data {
  sectionName: string;
  title: string;
  src: string;
  quote: {
    author: string;
    text: string;
  };
}

interface Props {
  data: Data;
}

defineProps<Props>();


onMounted(() => {

  nextTick(() => {
  
  applyTooltips();

  });

});

</script>

<style scoped lang="scss">
.info-simple {
  padding: 12rem 0;
  @include r($md) {
    padding: 6rem 0;
  }
  @include r($sm) {
    padding: 4rem 0;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 4.8rem;
    @include r($md) {
      grid-template-columns: auto;
    }
  }

  &__img {
    width: 100%;
    height: 51.7rem;
    object-fit: cover;
    @include r($md) {
      height: 46.37rem;
    }
    @include r($sm) {
      height: 24.38rem;
    }
    &:not(:last-child) {
      margin-bottom: 3.2rem;
    }
  }

  &__col {
    &_left {
    }
  }

  &__info {
  }

  &__title {
    margin-bottom: 3.2rem;
  }

  &__desc {
    max-width: 66.8rem;
    @include text20;
    :deep(p) {
      &:not(:last-child) {
        margin-bottom: 3.2rem;
      }
      span {
        cursor: pointer;
        color: var(--accent-color);
        text-decoration: underline dashed;
      }
    }
  }
}
</style>
