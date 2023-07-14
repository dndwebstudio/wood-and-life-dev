<template>
  <section class="reviews">
    <div class="container">
      <div class="reviews__content">
        <PartSectionName name="Отзывы" />
        <div class="reviews__quote">
          <nuxt-icon class="reviews__quote-icon" name="commas" />
          <h2 class="h2 reviews__quote-text">
            {{ quote.text }}
          </h2>
          <div class="reviews__quote-author">- {{ quote.author }}</div>
        </div>
        <PartReviewsSlider />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useReviewsStore } from "@/store/reviews";

const store = useReviewsStore();

const { quote } = storeToRefs(store);

defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style scoped lang="scss">
.reviews {
  padding: 12rem 0;
  overflow: hidden;
  @include r($md) {
    padding: 6rem 0 5rem;
  }
  @include r($sm) {
    padding: 4rem 0;
  }

  &__content {
    padding: 0 13.7rem;
    @include r($md) {
      padding: 0;
    }
  }

  &__quote {
    margin-bottom: 6.4rem;
    @include r($sm) {
      margin-bottom: 4.4rem;
    }
    &-icon {
      margin-bottom: 2.4rem;
      display: inline-block;
      width: 4rem;
      height: 4rem;
      color: var(--green-500);
      @include r($md) {
        margin-bottom: 1.7rem;
      }

      :deep(svg) {
        width: 100%;
        height: 100%;
      }
    }

    &-text {
      margin-bottom: 2.4rem;
      max-width: 93.2rem;
    }

    &-author {
      @include text24;
    }
  }
}
</style>
