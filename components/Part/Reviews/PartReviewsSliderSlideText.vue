<template>
  <div class="reviews-slider-slide-text">
    <nuxt-icon name="commas" />
    <div
      :class="['reviews-slider-slide-text__text', { expanded: isExpanded }]"
      v-html="review.text"
    />
    <button
      v-if="review.text.length >= 500"
      class="reviews-slider-slide-text__expand-btn"
      type="button"
      @click="expandText"
    >
      {{ isExpanded ? "Свернуть отзыв" : "Показать весь отзыв" }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  review: {
    type: Object,
    default: () => ({}),
  },
});

const isExpanded = ref(false);

const expandText = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<style scoped lang="scss">
.reviews-slider-slide-text {
  padding-top: 2.4rem;
  position: relative;
  .nuxt-icon {
    display: inline-block;
    width: 6rem;
    height: 6rem;
    position: absolute;
    top: 0;
    left: 0;
    color: var(--green-500);
    opacity: 0.2;
    z-index: -1;

    :deep(svg) {
      width: 100%;
      height: 100%;
    }
  }

  :deep(p) {
    &:not(:last-child) {
      margin-bottom: 1.8rem;
    }
  }

  &__expand-btn {
    margin-top: 1.6rem;
    color: var(--gray-400);
    transition: color 0.3s ease;
    &:hover {
      color: var(--accent-color);
    }
  }

  &__text {
    height: 17rem;
    overflow-y: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 8;
    @include text18;
    &.expanded {
      -webkit-line-clamp: unset;
      height: auto;
    }
  }
}
</style>
