<template>
  <div class="project-info">
    <div class="project-info__title">
      {{ data.title }}
    </div>
    <div class="project-info__price">
      <span>{{ data.price }}</span>
      <span class="project-info__price-popup" @click="openModalPopup">Что входит в стоимость?</span>
    </div>
    <div class="project-info__features">
      <div class="project-info__features-title">Характеристики</div>
      <div class="project-info__features-items">
        <div
          v-for="feature in data.features"
          :key="feature.name"
          class="project-info__features-item"
        >
          <span class="project-info__features-item-name">
            {{ feature.name }}
          </span>
          <span class="project-info__features-item-value">
            {{ feature.value }}
          </span>
        </div>
      </div>
    </div>
    <div class="project-info__controls">
      <UiButtonPrimary
        class="btn_green"
        name="Рассчитать стоимость"
        @click="openModalFormPayment"
      />
      <UiButtonPrimary
        class="btn_gray"
        name="рассчитать рассрочку"
        @click="openModalFormInstallments"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModal } from "vue-final-modal";
import ModalForm from "@/components/Modal/ModalForm.vue";
import ModalPopup from "@/components/Modal/ModalPopup.vue";
import { IitemProps } from "~/dto/interfaces/items";

interface Feature {
  name: string;
  value: string;
}

interface Data {
  title: string;
  price: string;
  popup: {
    title: string;
    listItems: string[]
  };
  features: Feature[];

}

interface Props {
  data: Data;
}

const props = defineProps<Props>();

const nameItem = computed(() => props.data.popup.title);
const listItem = computed(() => props.data.popup.listItems)


const itemProp = computed((): IitemProps => ({
  name: nameItem.value,
  list: listItem.value
}));

const { open: openModalPopup } = useModal({
  component: ModalPopup,
  attrs: {
    itemProp: computed(() => itemProp.value),
  },
});

const { open: openModalFormPayment } = useModal({
  component: ModalForm,
  attrs: {
    formName: "Рассчитать стоимость",
    suptitle: "Оставьте свой номер",
    title:
      "Получите детальный расчет стоимости бани, которая подойдет именно вам",
    subtitle: "Какой способ связи вам удобнее?",
    btnName: "Рассчитать стоимость",
    policyLink: "#",
    successModal: {
      title: "спасибо, мы приняли вашу заявку!",
      desc: "В течение 30 минут с вами свяжется менеджер, уточнит детали и озвучит стоимость вашей бани.",
    },
  },
});

const { open: openModalFormInstallments } = useModal({
  component: ModalForm,
  attrs: {
    formName: "Рассчитать рассрочку",
    suptitle: "Оставьте свой номер",
    title: "С вами свяжется менеджер и проконсультирует по вопросам рассрочки",
    subtitle: "Какой способ связи вам удобнее?",
    btnName: "Рассчитать рассрочку",
    policyLink: "#",
    successModal: {
      title: "спасибо, мы приняли вашу заявку!",
      desc: "В течение 30 минут с вами свяжется менеджер и проконсультирует по вопросам рассрочки.",
    },
  },
});
</script>

<style scoped lang="scss">
.project-info {
  &__title {
    padding: 2.4rem 0;
    @include text24;
    font-weight: 500;
    border-bottom: 1px solid var(--gray-200);
    @include r($sm) {
      padding-bottom: 1.5rem;
      font-size: 24px;
    }
  }

  &__price {
    padding: 2.4rem 0 1.5rem;
    @include text32;
    font-weight: 500;
    border-bottom: 1px solid var(--gray-200);
    @include r($md) {
      padding-bottom: 2.5rem;
    }
    @include r($sm) {
      padding: 1.4rem 0;
      font-size: 32px;
    }
    &-popup {
      margin-bottom: 0.8rem;
      display: inline-block;
      @include text18;
      color: var(--accent-color);
      text-decoration: underline dashed;
      cursor: pointer;
      transition: color 0.3s ease;
      @include r($md) {
        margin-top: 0.8rem;
        margin-bottom: 0;
        display: block;
      }
      @include r($sm) {
        text-underline-offset: 26%;
      }

      &:hover {
        color: var(--green-600);
      }
    }
  }

  &__features {
    margin-top: 2.4rem;
    &-title {
      margin-bottom: 1.6rem;
      @include text24;
      font-weight: 500;
    }

    &-items {
      @include text18;
      @include r($sm) {
        font-size: 14px;
      }
    }

    &-item {
      padding: 0.8rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      @include r($sm) {
        padding: 1.05rem 0;
      }

      &-name {
        display: flex;
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &::after {
          content: "";
          flex: 1;
          border-bottom: 1px dotted var(--gray-400);
        }
      }

      &-value {
        font-weight: 500;
      }
    }
  }

  &__controls {
    margin-top: 4.8rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.6rem;
    @include r($md) {
      margin-bottom: 4.8rem;
      flex-direction: row;
      justify-content: space-between;
    }
    @include r($sm) {
      margin: 3.3rem 0 1.9rem;
      flex-direction: column;
      button {
        width: 100%;
      }
    }
  }
}
</style>
