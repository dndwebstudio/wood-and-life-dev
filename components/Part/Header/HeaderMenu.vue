<template>
  <nav class="header-menu">
    <ul v-for="(list, idx) in menu?.arr" :key="idx" class="header-menu__list">
      <li v-for="item in list" :key="item.name" class="header-menu__item">
        <NuxtLink class="header-menu__item-link" :to="item.link">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
interface Props {
  menu: {
    arr: any[];
  };
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.header-menu {
  padding: 4rem 6.4rem;
  display: flex;
  gap: 12rem;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: -1;
  background-color: #fff;

  &__item {
    @include text18;
    font-weight: 700;
    text-transform: uppercase;
    transition: color 0.3s ease;
    &:hover {
      color: var(--accent-color);
    }
    &:not(:last-child) {
      margin-bottom: 1.6rem;
    }
    &-link {
    }
  }
}
</style>
