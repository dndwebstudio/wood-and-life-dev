<template>
  <div class="info-simple-quote">
    <div class="info-simple-quote__header">
      <nuxt-icon name="commas" />
      <span class="info-simple-quote__author">
        {{ data.author }}
      </span>
    </div>
    <div class="info-simple-quote__body" v-html="data.text"></div>
  </div>
</template>

<script setup lang="ts">
interface Data {
  author: string;
  text: string;
}

interface Props {
  data: Data;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.info-simple-quote {
  margin-top: 3.837rem;
  padding: 3.2rem;
  word-break: break-word;
  box-shadow: 0px 0px 4px rgba(145, 158, 171, 0.24),
    0px 24px 48px rgba(145, 158, 171, 0.24);
  background: url("@/assets/img/svg/bg-circles-3.svg") 100% / cover no-repeat;
  @include r($md) {
    padding: 3.2rem 1.2rem;
  }

  &__header {
    margin-bottom: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    .nuxt-icon {
      color: var(--green-500);
      width: 3.8rem;
      height: 2.8rem;
      flex-shrink: 0;

      :deep(svg) {
        width: 100%;
        height: 100%;
      }
    }
  }
  &__author {
    @include text18;
    font-weight: 500;
    color: var(--gray-400);
  }

  &__body {
    padding: 0 3.2rem;
    @include text20;
  }
}
</style>
