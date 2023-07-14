<template>
  <header ref="header" class="header" @mouseleave="mouseLeave">
    <div class="header-main">
      <div class="container-fluid">
        <div class="header-main__content">
          <div class="header-main__item header-main__item_menu">
            <div
              v-for="(item, idx) in menu"
              :key="idx"
              :class="[
                'header-main__menu-btn',
                {
                  active: currentSubMenu && currentSubMenu?.name === item.name,
                },
              ]"
              @mouseover="openSubMenu(item)"
            >
              <span class="header-main__menu-btn-name">
                {{ item.name }}
              </span>
              <nuxt-icon name="chevron" />
            </div>

            <transition name="slide-fade" mode="out-in">
              <PartHeaderMenu v-if="currentSubMenu" :menu="currentSubMenu" />
            </transition>

            <nav class="header-mobile-menu">
              <ul class="header-mobile-menu__list"></ul>
            </nav>

            <button
              class="header-menu-btn"
              type="button"
              @click="openMenu"
            >
              <span></span>
            </button>
          </div>
          <div class="header-main__item header-main__item_logo">
            <NuxtLink class="header-main__item-logo" to="/">
              <picture>
                <source srcset="/img/logo-sm.svg" media="(max-width: 767px)" />
                <source srcset="/img/logo-md.svg" media="(max-width: 991px)" />
                <img src="/img/logo.svg" alt="Wood and Life" />
              </picture>
            </NuxtLink>
          </div>
          <div class="header-main__item header-main__item_info">
            <ul class="header-main__communication">
              <li
                v-for="item in communication"
                :key="item.name"
                class="header-main__communication-item"
              >
                <a :href="item.link">
                  <nuxt-icon :name="item.name" />
                  <span class="screen-reader">
                    {{ item.name }}
                  </span>
                </a>
              </li>
            </ul>
            <ul class="header-main__tels">
              <li
                v-for="(tel, idx) in tels"
                :key="idx"
                class="header-main__tels-item"
              >
                <a :href="`tel:${tel.num.replace(/[^\d]/g, '')}`">
                  {{ tel.num }}
                </a>
              </li>
            </ul>
            <!-- <button 
            class="header-main__tels-btn"
            @click="openTelMenu"
            >
              <nuxt-icon name="phone" />
            </button> -->
            <ModuleTelMenu :tels="tels" />
          </div>
        </div>
      </div>
    </div>
    <PartHeaderNav :nav="nav"/>
    <PartHeaderMobileMenu :menu="menu" :tels="tels" :social="communication" :nav="nav" :active="isMenuActive" @close="openMenu"/>
  </header>
</template>

<script setup lang="ts">
const emit = defineEmits(["toggleOverlay"]);



const menu = ref([
  {
    name: "О компании",
    list: {
      name: "О компании",
      arr: [
        [
          {
            name: "О компании",
            link: "#",
          },
          {
            name: "Производство",
            link: "#",
          },
          {
            name: "Выполненные проекты",
            link: "#",
          },
          {
            name: "Доставка и оплата",
            link: "#",
          },
          {
            name: "Блог",
            link: "#",
          },
          {
            name: "Ответы на вопросы",
            link: "#",
          },
          {
            name: "Контакты",
            link: "#",
          },
        ],
      ],
    },
  },
  {
    name: "Каталог",
    list: {
      name: "Каталог",
      arr: [
        [
          {
            name: "Бани-бочки",
            link: "#",
          },
          {
            name: "Модульные дома",
            link: "#",
          },
          {
            name: "Дачные домики",
            link: "#",
          },
          {
            name: "А-Фреймы",
            link: "#",
          },
          {
            name: "Беседки",
            link: "#",
          },
          {
            name: "Домики из мини-бруса",
            link: "#",
          },
          {
            name: "Дома из двойного бруса",
            link: "#",
          },
        ],
        [
          {
            name: "Гриль-домики",
            link: "#",
          },
          {
            name: "Хозяйственные постройки",
            link: "#",
          },
          {
            name: "Бани из мини-бруса",
            link: "#",
          },
          {
            name: "Бани Леший",
            link: "#",
          },
        ],
      ],
    },
  },
]);

const nav = ref([
  {
    name: "Проекты бань",
    link: "#projects",
  },
  {
    name: "Технологии",
    link: "#technologies",
  },
  {
    name: "Конфигуратор",
    link: "#bathouse-calculator",
  },
  {
    name: "Отзывы",
    link: "#reviews",
  },
  {
    name: "Установка",
    link: "#mounting",
  },
  {
    name: "Доставка",
    link: "#delivery",
  },
  {
    name: "Кредит",
    link: "#credit",
  },
  {
    name: "Производство",
    link: "#production",
  },
  {
    name: "Оплата",
    link: "#payment",
  },
  {
    name: "Вопрос – ответ",
    link: "#faq",
  },
]);


const communication = ref([
  {
    name: "telegram",
    link: "#",
  },
  {
    name: "whatsapp",
    link: "#",
  },
]);

const tels = ref([
  {
    num: "8 (800) 600-72-14",
  },
  {
    num: "8 (999) 333-28-53",
  },
]);

const isMenuActive = ref(false);
const isSubMenuActive = ref(false);
const currentSubMenu = ref();
const header = ref();
// const isHeaderShowing = ref(true);
// const lastScrollPosition = ref(0);

const openMenu = () => {
  isMenuActive.value = !isMenuActive.value;
};

const openSubMenu = (item) => {
  currentSubMenu.value = null;

  const selectedItem = menu.value.find((menu) => menu.name === item.name);

  if (!selectedItem) return closeSubMenu();

  currentSubMenu.value = selectedItem.list;
  emit("toggleOverlay", true);
  isSubMenuActive.value = true;
};

const closeSubMenu = () => {
  isSubMenuActive.value = false;
  emit("toggleOverlay", false);
};

const mouseLeave = () => {
  currentSubMenu.value = null;
  closeSubMenu();
};

onMounted(() => {
  // window.addEventListener("scroll", onScroll);
});

// const onScroll = () => {
//   const currentScrollPosition =
//     window.scrollY || document.documentElement.scrollTop;

//   if (currentScrollPosition < 0) return;

//   if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) return;

//   isHeaderShowing.value = currentScrollPosition < lastScrollPosition.value;

//   lastScrollPosition.value = currentScrollPosition;
// };
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;

  background-color: #fff;
  // transition: transform 0.3s ease-out;
  // transform: translate3d(0, 0, 0);
  z-index: 200;
  // &.hidden {
  //   transform: translate3d(0, -100%, 0);
  // }
}

.header-main {
  position: relative;
  min-height: 6.8rem;
  z-index: 150;
  background-color: inherit;
  @include r($sm) {
    min-height: 5.6rem;
  }
}
.header-main__content {
  display: flex;
  @include r($md) {
    height: 6.8rem;
  }
}

.header-main__item {
  flex: 1;
  &_menu {
    width: 17%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  &_logo {
    width: 66%;
  }
  &_info {
    width: 17%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
}

.header-main__item-logo {
  display: block;
  height: 6.2rem;
  @include r($md) {
    height: 5.8rem;
  }
  @include r($sm) {
    height: 4.3rem;
  }

  img {
    margin: 0 auto;
    height: 100%;
    object-fit: cover;
  }
}

.header-main__item_info {
  margin-right: 1.6rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  @include r($md) {
    margin-right: 0;
  }
  @include r($sm) {
    margin-right: 0;
    gap: 0.6rem;
  }
}

.header-main__communication {
  display: flex;
  align-items: center;
  @include r($md) {
    gap: 1.8rem;
  }
  @include r($sm) {
    gap: 0.6rem;
  }
}

.header-main__communication-item {
  width: 4.8rem;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.6rem;
  @include r($md) {
    width: 2.6rem;
    height: 2.4rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #000;
    transition: color 0.3s ease;
  }
  &:hover {
    a {
      color: var(--accent-color);
    }
  }
}
.header-main__tels {
  display: flex;
  flex-direction: column;
  align-items: center;
  @include text14;
  font-weight: 700;
  @include r($md) {
    display: none;
  }
}

.header-main__tels-item {
  a {
    color: #000;
    transition: color 0.3s ease;
  }
  &:hover {
    a {
      color: var(--accent-color);
    }
  }
}

.header-main__tels-btn {
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @include rmin($md) {
    display: none;
  }

  .nuxt-icon {
    width: 1.4rem;
    height: 1.4rem;

    :deep(svg) {
      width: 100%;
      height: 100%;
    }
  }
}

.header-main__menu-btn {
  padding: 1.4rem 1.9rem 1.4rem 1.6rem;
  display: flex;
  align-items: center;
  height: 100%;

  @include text14;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  transition: color 0.3s ease;
  @include r($md) {
    display: none;
  }

  &-name {
    margin-right: 1.1rem;
  }
  .nuxt-icon {
    transition: transform 0.3s ease;
  }
  &:hover,
  &.active {
    color: var(--accent-color);
    .nuxt-icon {
      transform: rotate(180deg);
    }
  }
}

.header-main__menu-wrap {
  @include r($md) {
    display: none;
  }
}

.header-menu {
  // display: none;
  @include r($md) {
    display: none;
  }
}

.header-mobile-menu {
  @include rmin($md) {
    display: none;
  }
}

.header-menu-btn {
  width: 2.8rem;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @include rmin($md) {
    display: none;
  }

  span {
    position: relative;
    width: 2.8rem;
    height: 2px;
    background-color: #000;
    transition: background-color 0.4s ease;
    @include r($sm) {
      width: 2.4rem;
    }

    --line-padding: 0.9rem;
    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: inherit;
      height: inherit;
      background-color: #000;
      transition: background-color 0.4s ease;
    }

    &::before {
      top: var(--line-padding);
    }

    &::after {
      bottom: var(--line-padding);
    }
  }
  &:hover {
    & span {
      background: var(--green-500);
      &:before,
      &:after {
        background: var(--green-500);
      }
    }
  }
}
</style>
