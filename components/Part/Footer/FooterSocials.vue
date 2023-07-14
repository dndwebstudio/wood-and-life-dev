<template>
  <div class="footer-socials">
    <ul class="footer-socials__list">
      <li
        v-for="(item, idx) in menu.list"
        :key="idx"
        class="footer-socials__item"
      >
        <a :href="item.link">
          <nuxt-icon :name="item.name" />
          <span class="screen-reader">
            {{ item.name }}
          </span>
        </a>
      </li>
    </ul>
  </div>
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

<style scoped lang="scss">
.footer-socials__list {
  display: flex;
  align-items: center;
  gap: 1.6rem;
}
.footer-socials__item {
  width: 4.8rem;
  height: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    .nuxt-icon {
      width: 3.6rem;
      height: 3.6rem;
      :deep(svg) {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
