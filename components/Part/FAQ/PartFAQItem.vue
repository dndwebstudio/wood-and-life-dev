<template>
  <div :class="['faq-item', { active: isActive }]">
    <div class="faq-item__header" @click="showItem">
      <span v-html="item.title" />
      <nuxt-icon class="faq-item__header-icon" name="chevron" />
    </div>
    <div class="faq-item__body">
      <div class="faq-item__content" v-html="item.desc" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Item {
  title: string;
  desc: string;
}

interface Props {
  item: Item;
}

defineProps<Props>();

const isActive = ref(false);

const showItem = () => {
  isActive.value = !isActive.value;
};
</script>

<style scoped lang="scss">
.faq-item {
  box-shadow: 0 1px 0 0 var(--gray-200);
  &.active {
    box-shadow: none;
    .faq-item__header-icon {
      color: #fff;
      background-color: var(--green-500);
      transform: rotate(-180deg);
    }
    .faq-item__body {
      height: auto;
      opacity: 1;
      visibility: visible;
    }
  }

  &__header {
    padding: 2.4rem 0;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    @include text24;
    font-weight: 500;
    cursor: pointer;

    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3.2rem;
      min-width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
      transition: background-color 0.3s ease, color 0.3s ease,
        transform 0.3s ease;
      background-color: var(--gray-200);

      border-radius: 50%;
      :deep(svg) {
        height: 0.8rem;
      }
    }
  }

  &__body {
    @include text20;
    color: var(--gray-500);
    height: 0;
    opacity: 0;
    visibility: hidden;
    @include r($sm) {
      font-size: 14px;
      line-height: 1.2;
    }
  }

  &__content {
    margin-bottom: 3.2rem;
    padding: 3.2rem;
    background-color: #fff;
    box-shadow: 0px 0px 4px rgba(145, 158, 171, 0.24),
      0px 24px 48px rgba(145, 158, 171, 0.24);
    @include r($sm) {
      margin-bottom: 2.5rem;
      padding: 2.2rem 2rem;
    }
  }
}
</style>
