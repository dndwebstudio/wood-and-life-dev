<template>
  <div class="header-nav">
    <div class="container-fluid" v-if="$route.fullPath && !$route.fullPath.includes('/home')">
      <div class="header-nav__content">
        <ul class="header-nav__list">
          <li v-for="item in nav" :key="item.name" class="header-nav__item">
            <NuxtLink :to="{ path: '/', hash: item.link }">
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  nav: {
    nav: any[];
  };
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.header-nav {
  @include r($md) {
    display: none;
  }
}
.header-nav__content {
  padding: 1.55rem;
}
.header-nav__list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
}
.header-nav__item {
  @include text14;
  font-weight: 500;
  text-transform: uppercase;

  a {
    color: #000;
    transition: color 0.3s ease;
  }
  &:hover,
  &.active {
    a {
      color: var(--accent-color);
    }
  }
}
</style>
