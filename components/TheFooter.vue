<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__top">
          <div class="footer__col footer__col_left">
            <div class="footer__col-item">
              <div class="footer__col-item-name">
                {{ menu.services.name }}
              </div>
              <PartFooterMenu  :menu="menu.services" />
            </div>
          </div>
          <div class="footer__col footer__col_right">
            <div class="footer__col-item">
              <div class="footer__col-item-name">
                {{ menu.about.name }}
              </div>
              <PartFooterMenu :menu="menu.about" />
            </div>
            <div class="footer__col-wrap">
              <div class="footer__col-item">
                <div class="footer__col-item-name">
                  {{ menu.contacts.name }}
                </div>
                <PartFooterContacts :menu="menu.contacts" />
              </div>
              <div class="footer__col-item footer__col-item_socials">
                <div class="footer__col-item-name">
                  {{ menu.socials.name }}
                </div>
                <PartFooterSocials :menu="menu.socials" />
              </div>
            </div>
          </div>
        </div>
        <div class="footer__bottom">
          <div class="footer__bottom-col footer__bottom-col_left">
            <a class="footer-policy" href="#">Политика конфиденциальности</a>
            <span class="footer-not-public-offer">
              Информация, размещенная на сайте, не является публичной офертой
            </span>
          </div>
          <div class="footer__bottom-col footer__bottom-col_right">
            <div class="footer-created-by">
              <span class="footer-created-by__text">Разработка сайта</span>
              <a class="footer-created-by__logo" href="#">
                <nuxt-icon name="n8-logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const menu = ref({
  services: {
    name: "Услуги",
    list: [
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
          name: "Бани Леший",
          link: "#",
        },
        {
          name: "Готовые проекты",
          link: "#",
        },
      ],
    ],
  },
  about: {
    name: "О компании",
    list: [
      [
        {
          name: "Выполненные проекты",
          link: "#",
        },
        {
          name: "О компании",
          link: "#",
        },
        {
          name: "Производство",
          link: "#",
        },
        {
          name: "Гарантии",
          link: "#",
        },
        {
          name: "Отзывы",
          link: "#",
        },
        {
          name: "Контакты",
          link: "#",
        },
        {
          name: "FAQ",
          link: "#",
        },
      ],
    ],
  },
  contacts: {
    name: "Контакты",
    tels: [
      {
        num: "8 (800) 600-72-14",
      },
      {
        num: "8 (999) 333-28-53",
      },
    ],
    workingHours: "Работаем ежедневно с 9:00 до 18:00 (по мск)",
    communication: [
      {
        name: "telegram",
        link: "#",
      },
      {
        name: "whatsapp",
        link: "#",
      },
    ],
  },
  socials: {
    name: "Подписывайтесь на нас",
    list: [
      {
        name: "vk",
        link: "#",
      },
      {
        name: "youtube",
        linl: "#",
      },
    ],
  },
});
</script>

<style lang="scss" scoped>
.footer {
  padding: 12rem 0 4rem;
  background-color: var(--bg-color);
  border-top: 1px solid var(--white-10);
  @include r($md) {
    padding-top: 6rem;
  }
  @include r($md) {
    padding: 4rem 0 2rem;
  }
}
.footer__top {
  display: flex;
  gap: 7.3rem;
  @include r($md) {
    flex-direction: column;
    gap: 4.2rem;
  }
}
.footer__bottom {
  margin-top: 6.4rem;
  display: flex;
  justify-content: space-between;
  gap: 6.174rem;
  @include text14;
  &-col {
    &_right {
      align-self: flex-end;
      @include r($sm) {
        align-self: unset;
      }
    }
  }
  @include r($md) {
    margin-top: 4.2rem;
  }
  @include r($sm) {
    flex-direction: column;
    gap: 2rem;
  }
}
.footer-created-by {
  display: flex;
  align-items: center;
  gap: 1.6rem;
  color: var(--white-40);
}
.footer-created-by__logo {
  display: block;
  font-size: 33px;
  color: var(--white-40);
  transition: color 0.3s ease;
  a {
    color: inherit;
  }
  &:hover {
    color: var(--accent-color);
  }
  .nuxt-icon {
    display: block;
  }
}
.footer-policy {
  margin-bottom: 1.6rem;
  display: block;
  color: var(--white-40);
  text-decoration: underline;
  transition: color 0.3s ease;
  a {
    color: inherit;
  }
  &:hover {
    color: var(--accent-color);
  }
}
.footer-not-public-offer {
  display: block;
  color: var(--white-20);
}
.footer__col {
  &_right {
    display: flex;
    gap: 7.3rem;
    @include r($md) {
      gap: 6.4rem;
    }
    @include r($sm) {
      flex-direction: column;
      gap: 4.2rem;
    }
  }
}
.footer__col-item {
  @include r($md) {
    flex: 1;
  }
  &:not(:last-child) {
    margin-bottom: 3.2rem;
    @include r($sm) {
      margin-bottom: 0;
    }
  }
  &-name {
    margin-bottom: 2.4rem;
    @include text14;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white-20);
  }
  &_socials {
    .footer__col-item-name {
      margin-bottom: 1rem;
    }
  }
}
</style>
