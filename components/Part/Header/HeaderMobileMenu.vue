<template>
  <div class="mobile-menu" :class="{ __show: active}">
    <div class="mobile-menu__inner">
      <div class="mobile-menu__cross" @click="$emit('close')"></div>
      <div class="mobile-menu__left">
        <template v-for="(item, idx) in menu" :key="idx">
          <button class="mobile-menu__menu-btn" :class="{ __active: currentMenu === item.name }" @click="showMenu(item.name)">{{ item.name }} <span></span></button>
          <Collapse :when="currentMenu === item.name" class="v-collapse">
            <ul class="mobile-menu__menu-list" v-for="(arr, idx) in item.list.arr" :key="idx">
              <li class="mobile-menu__menu-item" v-for="(menuItem, idx) in arr" :key="idx" >
                <NuxtLink class="mobile-menu__menu-link" :to="menuItem.link" @click="$emit('close')">
                  {{ menuItem.name }}
                </NuxtLink>
              </li>
            </ul>
          </Collapse>
        </template>

        <div class="mobile-menu__contacts-block">
          <ul class="mobile-menu__social-list">
            <li
              v-for="item in social"
              :key="item.name"
              class="mobile-menu__social-item"
            >
              <a :href="item.link">
                <nuxt-icon :name="item.name" />
                <span class="screen-reader">
                  {{ item.name }}
              </span>
              </a>
            </li>
          </ul>
          <ul class="mobile-menu__phone-list">
            <li
              v-for="(tel, idx) in tels"
              :key="idx"
              class="mobile-menu__phone-item"
            >
              <a :href="`tel:${tel.num.replace(/[^\d]/g, '')}`">
                {{ tel.num }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mobile-menu__right">
        <h5 class="mobile-menu__page-name">Бани-бочки</h5>
        <nav>
          <ul class="mobile-menu__nav-list">
            <li v-for="item in nav" :key="item.name" class="mobile-menu__nav-item">
              <NuxtLink :to="{ path: '/', hash: item.link }" @click="$emit('close')">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Collapse } from 'vue-collapsed'
interface Props {
  menu: {
    arr: any[];
  };
  nav: {
    arr: any[];
  };
  tels: {
    arr: any[];
  }
  social: {
    arr: any[];
  }
 
  active: boolean;

}

defineProps<Props>();
const currentMenu = ref(null)
const showMenu = (name) => {
  if (name === currentMenu.value) {
    currentMenu.value = null
  } else {
    currentMenu.value = name
  }
}
</script>

<style scoped lang="scss">
.mobile-menu {
  position: fixed;
  width: 100%;
  min-height: 500px;
  background-color: #FFF;
  z-index: 300;
  transform: translateY(-100%);
  padding: 32px;
  opacity: 0;
  top: 0;
  left: 0;
  transition: transform 0.4s ease, opacity 0.4s ease;
  overflow: scroll;
  height: 100vh;
  &.__show {
    transform: translateY(0);
    opacity: 1;
  }
}

.mobile-menu__inner {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  @include r($xs) {
    flex-direction: column-reverse;
    justify-content: flex-end;
    gap: 0;
  }
}

.mobile-menu__cross {
  position: absolute;
  top: 1rem;
  right: 1rem;
  height: 4.8rem;
  width: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:after,
  &:before {
    position: absolute;
    content: "";
    width: 2rem;
    height: 0.2rem;
    background: var(--text-color);
    transition: background-color 0.4s ease;
    transform: rotate(-45deg);
  }
  &:before {
    transform: rotate(45deg);
  }
  &:hover {
    &:before,
    &:after {
      background-color: var(--green-500);
    }
  }
  @include r($xs) {
    top: 10px;
    right: 10px;
    width: 48px;
    height: 48px;
    &:after,
    &:before {
      width: 20px;
      height: 2px;
    }
  }
}

.mobile-menu__left {
  width: 46%;
  @include r($xs) {
    width: 100%;
    padding: 32px 0 0;
  }
}

.mobile-menu__menu-btn {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.2rem;
  margin-bottom: 1.6rem;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 120%;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  transition: color 0.4s ease;
  @include r($xs) {
    height: 32px;
    margin-bottom: 16px;
    font-size: 14px;
  }
  & span {
    position: absolute;
    right: 0;
    width: 1.6rem;
    height: 1.6rem;
    &:before {
      position: absolute;
      content: '';
      width: 0.7rem;
      height: 0.7rem;
      border-left: 2px solid #000;
      border-bottom: 2px solid #000;
      transform: rotate(-45deg);
      left: 0.4rem;
      top: 0.3rem;
      transition: border 0.4s ease, top 0.4s ease;
    }
    @include r($xs) {
      width: 16px;
      height: 16px;
      &:before {
        width: 7px;
        height: 7px;
        left: 4px;
        top: 3px;
      }
    }
  }
  &.__active {
    color: var(--green-500);
    & span {
      &:before {
        top: 0.7rem;
        border-top: 2px solid var(--green-500);
        border-right: 2px solid var(--green-500);
        border-left-color: transparent;
        border-bottom-color: transparent;
        @include r($xs) {
          top: 7px;
        }
      }
    }
  }
}

.mobile-menu__menu-item {
  font-size: 1.4rem;
  line-height: 1.2;
  margin-bottom: 2.4rem;
  @include r($xs) {
    font-size: 14px;
    margin-bottom: 24px;
  }
}

.v-collapse {
  transition: height var(--vc-auto-duration) cubic-bezier(0.33, 1, 0.68, 1);
}

.mobile-menu__contacts-block {
  display: flex;
  gap: 0.7rem;
  margin-top: 3.2rem;
  @include r($xs) {
    margin-top: 32px;
    padding-top: 32px;
    border-top: 1px solid var(--gray-200);
    gap: 7px;
  }
}

.mobile-menu__social-list {
  display: flex;
  gap: 0.7rem;
  @include r($xs) {
    gap: 7px;
  }
}

.mobile-menu__social-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.8rem;
  height: 4.8rem;
  @include r($xs) {
    width: 48px;
    height: 48px;
  }
}

.mobile-menu__phone-list {
  width: 100%;
}

.mobile-menu__phone-item {
  text-align: right;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.7;
  letter-spacing: 0.04em;
  @include r($xs) {
    font-size: 14px;
  }
}


.mobile-menu__right {
  width: 46%;
  @include r($xs) {
    width: 100%;
    padding-bottom: 32px;
    border-bottom: 1px solid var(--gray-200);
  }
}

.mobile-menu__page-name {
  font-size: 2.2rem;
  line-height: 1.2;
  margin-bottom: 3.2rem;
  font-weight: 500;
  @include r($xs) {
    font-size: 22px;
    margin-bottom: 32px;
  }
}
.mobile-menu__nav-item {
  margin-bottom: 2.4rem;
  font-size: 1.4rem;
  line-height: 1.2;
  &:last-child {
    margin-bottom: 0;
  }
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
  @include r($xs) {
    font-size: 14px;
    margin-bottom: 24px;
  }
}
</style>
