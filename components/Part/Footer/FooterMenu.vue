<template>
  <nav class="footer-menu">
    <ul v-for="(list, idx) in menu.list" :key="idx" class="footer-menu__list">
      <li v-for="item in list" :key="item.name" class="footer-menu__item">
        <a :href="item.link">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
interface Menu {
  list: any[];
}

interface Props {
  menu: Menu;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.footer-menu {
  display: flex;
  flex-wrap: wrap;
  gap: 7.1rem;
  @include r($md) {
    gap: 4.8rem;
  }
  @include r($sm) {
    flex-direction: column;
    gap: 1.6rem;
  }
}

.footer-menu__list {
  width: 34rem;
  @include r($md) {
    width: auto;
    flex: 1;
  }
}
.footer-menu__item {
  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }
  @include text14;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  transition: color 0.3s ease;
  &:hover {
    color: var(--accent-color);
  }
  a {
    color: inherit;
  }
}
</style>
