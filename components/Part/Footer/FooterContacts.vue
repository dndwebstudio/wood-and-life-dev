<template>
  <div class="footer-contacts">
    <div class="footer-tels">
      <ul class="footer-tels__list">
        <li
          v-for="(tel, idx) in menu.tels"
          :key="idx"
          class="footer-tels__item"
        >
          <a :href="`tel:${tel.num.replace(/[^\d]/g, '')}`">
            {{ tel.num }}
          </a>
        </li>
      </ul>
      <span class="footer-working-hours">
        {{ menu.workingHours }}
      </span>
    </div>
    <div class="footer-communication">
      <div class="footer-communication__label" @click="openModalInstallments">
        <span >Перезвоните мне</span>
        <nuxt-icon name="arrow-right-bold" filled />
      </div>
      <ul class="footer-communication__list">
        <li
          v-for="(item, idx) in menu.communication"
          :key="idx"
          class="footer-communication__item"
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
  </div>
</template>

<script setup lang="ts">
import { useModal } from "vue-final-modal";
import ModalForm from "@/components/Modal/ModalForm.vue";
interface Menu {
  tels: any[];
  workingHours: string;
  communication: any[];
}

interface Props {
  menu: Menu;
}

defineProps<Props>();


const { open: openModalInstallments } = useModal({
  component: ModalForm,
  attrs: {
    formName: "Получить консультацию",
    suptitle: "Оставьте свой номер",
    title:
      "С вами свяжется менеджер и ответит на все интересующие вас вопросы по баням",
    btnName: "Получить консультацию",
    policyLink: "#",
    successModal: {
      title: "спасибо, мы приняли вашу заявку!",
      desc: "В течение 30 минут с вами свяжется менеджер, уточнит детали",
    },
  },
});
</script>

<style lang="scss" scoped>
.footer-tels {
  margin-bottom: 2.4rem;
}
.footer-tels__list {
  margin-bottom: 0.8rem;
  @include text32;
  font-weight: 500;
}
.footer-tels__item {
  color: #fff;
  transition: color 0.3s ease;
  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }
  &:hover {
    color: var(--accent-color);
  }
  a {
    color: inherit;
  }
}
.footer-working-hours {
  @include text14;
  color: var(--white-40);
}
.footer-communication {
  margin-bottom: 3.2rem;
  color: #fff;
}
.footer-communication__label {
  cursor: pointer;
  margin-bottom: 2.4rem;
  margin-right: 1.6rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  &:hover{
    color: var(--accent-color);
    .nuxt-icon {
        :deep(svg) {
          path {
            stroke: var(--accent-color);
          }
        }
      }
  }
  // span{
    
  // }

  @include text14;
  font-weight: 700;
  text-transform: uppercase;
  .nuxt-icon {
    width: 2rem;
    height: 2rem;
  }
}
.footer-communication__list {
  display: flex;
  align-items: center;
  gap: 1.6rem;
}
.footer-communication__item {
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
