<template>
  <div class="slider-pagination" />
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.slider-pagination {
  display: flex;
  align-items: center;
  :deep(.swiper-pagination-bullet) {
    margin: 0 1.2rem;
    width: 1.2rem;
    height: 1.2rem;
    display: inline-block;
    border-radius: 50%;
    background-color: var(--gray-300);
    cursor: pointer;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  :deep(.swiper-pagination-bullet-active) {
    background: var(--green-500);
  }
}
</style>
