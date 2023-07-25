<template>
  <section class="credit">
    <div class="container">
      <div class="credit__wrap">
        <PartSectionName name="Кредит" />
        <div class="credit__content">
          <div class="credit__col credit__col_img">
            <div class="credit__img">
              <picture>
                <source :srcset="data.img.imgSM" media="(max-width: 991px)" />
                <img :src="data.img.img" alt="" format="webp" loading="lazy" />
              </picture>
            </div>
          </div>
          <div class="credit__col credit__col_info">
            <h2 class="h2 credit__title" v-html="data.title" />
            <div class="credit__slider">
              <div class="credit__slider-title">Банки-партнеры</div>
              <swiper-container ref="creditSlider" class="credit-slider" init="false">
                <swiper-slide v-for="(slide, idx) in data.slides" :key="idx" class="credit-slider__slide">
                  <mg :src="slide.img" :alt="slide.name" format="webp" loading="lazy" />
                </swiper-slide>
              </swiper-container>
              <UiSliderNavigation class="credit-slider__navigation" />
            </div>
            <UiButtonPrimary class="btn_green credit__btn" name="Получить консультацию" @click="openModalInstallments" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Navigation } from "swiper";
import { useModal } from "vue-final-modal";
import ModalForm from "@/components/Modal/ModalForm.vue";

interface Data {
  img: {
    img: string;
    imgSM: string;
  };
  title: string;
  slides: any[];
}

interface Props {
  data: Data;
}

defineProps<Props>();

const creditSlider = ref();

const { open: openModalInstallments } = useModal({
  component: ModalForm,
  attrs: {
    formName: "Получить консультацию",
    suptitle: "Оставьте свой номер",
    title:
      "С вами свяжется менеджер и расскажет как приобрести дачный комплекс в кредит",
    btnName: "Получить консультацию",
    policyLink: "#",
    successModal: {
      title: "спасибо, мы приняли вашу заявку!",
      desc: "В течение 30 минут с вами свяжется менеджер, уточнит детали",
    },
  },
});

onMounted(() => {
  const params = {
    spaceBetween: 8,
    modules: [Navigation],
    navigation: {
      nextEl: ".credit-slider__navigation .slider-navigation__arrow_right",
      prevEl: ".credit-slider__navigation .slider-navigation__arrow_left",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 5,
      },
    },
  };

  Object.assign(creditSlider.value, params);
  creditSlider.value.initialize();
});
</script>

<style scoped lang="scss">
.credit {
  padding: 12rem 0;
  background: var(--green-500) url("@/assets/img/svg/bg-circles-4.svg") center / cover no-repeat;

  @include r($md) {
    padding: 6rem 0;
  }

  @include r($sm) {
    padding: 4rem 0;
  }

  &__wrap {
    padding: 0 13.7rem;

    @include r($md) {
      padding: 0;
    }

    .section-name {
      color: rgba(#fff, 0.4);
    }
  }

  &__content {
    display: grid;
    grid-template-columns: minmax(0, 0.61fr) minmax(0, 1fr);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.24),
      0 24px 48px rgba(0, 0, 0, 0.24);

    @include r($md) {
      grid-template-columns: auto;
    }
  }

  &__col {
    &_img {}

    &_info {
      padding: 6.4rem;
      background-color: #fff;
      overflow: hidden;

      @include r($sm) {
        padding: 2.4rem 1.2rem;
      }
    }
  }

  &__img {
    width: 100%;
    height: 100%;

    @include r($md) {
      height: 26.9rem;
    }

    @include r($sm) {
      height: 19.7rem;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: left;
    }
  }

  &__title {
    margin-bottom: 4.8rem;

    @include r($sm) {
      margin-bottom: 2.4rem;
    }
  }

  &__slider {
    position: relative;
    margin-bottom: 4.8rem;

    @include r($sm) {
      margin-bottom: 2.4rem;
    }

    &-title {
      margin-bottom: 1.6rem;
      @include text14;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--gray-400);
    }

    :deep(.slider-navigation__arrow_right) {
      right: 0;
      transform: translateY(0%);
    }

    :deep(.slider-navigation__arrow_left) {
      left: 0;
      transform: translateY(0%);
    }
  }

  &__btn {
    @include r($sm) {
      width: 100%;
    }
  }
}

.credit-slider {
  margin: 0 3rem;

  &__slide {
    padding: 1.1rem;
    height: 10.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid var(--gray-200);

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
