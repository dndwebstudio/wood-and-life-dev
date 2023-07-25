<template>
  <section class="complex">
    <div class="container">
      <h2 class="h2 complex__title">Дачный комплекс со скидкой 10%</h2>
      <div class="complex__content">
        <div class="complex__col">
          <div class="complex__header">Вместе дешевле!</div>
          <div class="complex__body">
            <ul class="complex__list">
              <li
                v-for="(item, idx) in data.complexList"
                :key="idx"
                class="complex__list-item"
              >
                <img
                  class="complex__list-item-img"
                  :src="item.img"
                  :alt="item.desc"
                  format="webp"
                  loading="lazy"
                />
                <div class="complex__list-item-desc">
                  {{ item.desc }}
                </div>

                <span class="complex__list-item-divider">
                  <nuxt-icon name="plus" />
                </span>
              </li>
            </ul>
          </div>
          <div class="complex__footer">
            <UiButtonPrimary
              class="btn_green complex__btn"
              name="узнать стоимость"
              @click="openModalInstallments"
            />
          </div>
        </div>
        <div class="complex__col complex__col_slider">
          <ModuleGallerySlider :slides="data.slides" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useModal } from "vue-final-modal";
import ModalForm from "@/components/Modal/ModalForm.vue";

interface Slide {
  img: string;
  desc: string;
}

interface Data {
  complexList: any[];
  slides: Slide[];
}

interface Props {
  data: Data;
}

defineProps<Props>();

const { open: openModalInstallments } = useModal({
  component: ModalForm,
  attrs: {
    formName: "Узнать стоимость",
    suptitle: "Оставьте свой номер",
    title:
      "С вами свяжется менеджер и расскажет как приобрести дачный комплекс со скидкой 10%",
    btnName: "Узнать стоимость",
    policyLink: "#",
    successModal: {
      title: "спасибо, мы приняли вашу заявку!",
      desc: "В течение 30 минут с вами свяжется менеджер, уточнит детали",
    },
  },
});
</script>

<style scoped lang="scss">
.complex {
  padding: 12rem 0;
  @include r($md) {
    padding: 6rem 0;
  }
  @include r($sm) {
    padding: 4rem 0;
  }

  &__title {
    margin-bottom: 6.4rem;
    max-width: 60.6rem;
    @include r($sm) {
      margin-bottom: 4rem;
      width: 100%;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: minmax(0, 0.474fr) minmax(0, 1fr);
    gap: 4.8rem;
    @include r($md) {
      grid-template-columns: auto;
      gap: 3rem;
    }
  }

  &__col {
    &_slider {
      overflow: hidden;
    }
  }

  &__header {
    margin-bottom: 3.2rem;
    @include text24;
    font-weight: 500;
  }

  &__body {
    margin-bottom: 3.2rem;
  }

  &__list {
    @include text20;
    @include r($sm) {
      font-size: 18px;
      line-height: 1.2;
    }
    &-item {
      position: relative;
      padding: 2rem 0;
      display: flex;
      align-items: center;
      gap: 1.6rem;

      &:first-child {
        padding-top: 0.8rem;
        padding-bottom: 2rem;
      }
      &:last-child {
        padding-bottom: 0.8rem;

        .complex__list-item-divider {
          display: none;
        }
      }
    }

    &-item-divider {
      position: absolute;
      left: 50%;
      bottom: -1.3rem;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      width: 100%;
      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 45%;
        height: 1px;
        background-color: var(--gray-300);
      }

      &::before {
        left: 0;
      }
      &::after {
        right: 0;
      }

      .nuxt-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 50%;
        background-color: #fff;
        border: 1px solid var(--gray-300);

        :deep(svg) {
          width: 1rem;
          height: 1rem;
        }
      }
    }

    &-item-img {
      width: 8.8rem;
      height: 8.8rem;
      @include r($sm) {
        width: 6rem;
        height: 6rem;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-item-desc {
    }
  }

  &__footer {
  }

  &__btn {
    @include r($sm) {
      width: 29rem;
    }
  }
}
</style>
