<template>
    <section class="">
        <div class="container">
            <div class="grid grid-cols-3 gap-16 pb-48">
                <div class="grid col-span-3 lg:col-span-2">
                    <h4 class="mb-12 text-8xl">Оплата</h4>
                    <div class="text-3xl mb-12">
                        <div class="font-medium mb-6">Наличный расчет</div>
                        <p>Оплачивайте заказ у нас в офисе при заключении договора или онлайн переводом при оформлении
                            договора онлайн.</p>
                    </div>
                    <div class="text-3xl mb-12">
                        <div class="font-medium mb-6">Безналичный расчет</div>
                        <p>Бухгалтера, в кратчайшие сроки, подготовят необходимые документы для проведения банковского
                            платежа. Оригиналы документов вы получите в офисе или непосредственно после монтажа на площадке.
                        </p>
                    </div>
                    <div class="text-3xl mb-12">
                        <div class="font-medium mb-6">Оформить кредит или рассрочку</div>
                        <p>Мы являемся аккредитованным партнером банков. У нас вы можете оформить кредит или рассрочку на
                            льготных условиях.</p>
                    </div>
                    <!-- <div class="credit__slider flex gap-4 w-full mb-12">
                        <img class="w-full" src="/img/credit/1.png" alt="">
                        <img class="w-full" src="/img/credit/2.png" alt="">
                        <img class="w-full" src="/img/credit/3.png" alt="">
                        <img class="w-full" src="/img/credit/4.png" alt="">
                        <img class="w-full" src="/img/credit/5.png" alt="">
                    </div> -->
                    <swiper-container ref="creditSlider" class="credit__slider flex gap-4 w-full mb-12" init="false">
                        <swiper-slide v-for="(slide, idx) in slides" :key="idx" class="credit-slider__slide">
                            <img class="w-full" :src="slide" alt="">
                        </swiper-slide>
                    </swiper-container>
                    <div class="text-3xl mb-12">
                        <p>Чтобы получить дополнительную информацию о способах оплаты, а также выбрать наиболее подходящий
                            для Вас вариант, узнать расчетный счет компании для перевода денежных средств или получить
                            консультацию о производимой нашей компанией продукции оставьте заявку.</p>
                    </div>
                    <button class="justify-self-start btn home-hero-slider__slide-btn btn_green" type="button"
                        data-v-inspector="components/Ui/Button/UiButtonPrimary.vue:13:3" data-v-aa1c64d2=""
                        data-v-43f32aca="" @click="openModalInstallments">Получить
                            консультацию<span class="nuxt-icon"
                            data-v-inspector="node_modules/nuxt-icons/dist/runtime/components/nuxt-icon.vue:2:3"
                            data-v-43f32aca=""><svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 4.07812L2 6.07812C2 8.28726 3.79086 10.0781 6 10.0781L17 10.0781" stroke="white"
                                    stroke-width="2"></path>
                                <path d="M13 5.07812L18 10.0781L13 15.0781" stroke="white" stroke-width="2"></path>
                            </svg>
                        </span>
                    </button>
                </div>
                <div class="col-span-3 lg:col-span-1">
                    <div class="text-5xl font-medium mb-12">Работаем по договору <br />
                        с предоплатой от 10 000 руб.</div>
                    <div class="flex">
                        <svg class="mr-4" width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 4L2 6C2 8.20914 3.79086 10 6 10L17 10" stroke="#333333" />
                            <path d="M12 5L17 10L12 15" stroke="#333333" />
                        </svg>
                        <div>
                            Для иногородних клиентов <span class="text-[#009767]">заключаем договор онлайн,</span>
                            обмениваемся оригиналами при установке бани
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-16 pb-48">
                <div class="grid col-span-3 lg:col-span-2">
                    <h4 class="mb-12 text-8xl">Доставка</h4>
                    <div class="text-3xl mb-12">
                        <p>
                            Цена на сайте указана без доставки. Она рассчитывается в зависимости от района доставки и
                            согласно тарифам.
                            <br />
                            <br />
                            Чаще мы доставляем бани в разобранном виде и собираем на участке клиента за 1-2 дня в
                            зависимости от сложности бани. Т.е. в 85% случаев манипулятор не может достать до нужного места
                            установки бани.
                            <br />
                            <br />
                            <b>Важно:</b> размер манипулятора может составлять до 9 м — нужно заранее продумать, как он
                            будет въезжать на участок (убрать секцию забора, расширить ворота и т.п.)
                        </p>
                    </div>
                </div>
                <div class="col-span-3 lg:col-span-1">
                    <div class="text-5xl font-medium mb-12">Доставляем своим
                        транспортом <span class="text-[#009767]">дешевле, чем конкуренты</span></div>
                    <div class="flex">
                        <svg class="mr-4" width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 4L2 6C2 8.20914 3.79086 10 6 10L17 10" stroke="#333333" />
                            <path d="M12 5L17 10L12 15" stroke="#333333" />
                        </svg>
                        <div>
                            Свой автопарк: низкорамные тралы, еврофуры и манипуляторы
                        </div>
                    </div>
                </div>
            </div>
            <SectionCallback/>

    </div>
</section>
</template>

<script setup lang="ts">
import { Navigation } from "swiper";
import { ref } from "vue";
import { useModal } from "vue-final-modal";
import ModalForm from "@/components/Modal/ModalForm.vue";
import SectionCallback from "~/components/Section/SectionCallback.vue";

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

const slides = ref<string[]>(
    [
        "/img/credit/1.png",
        "/img/credit/2.png",
        "/img/credit/3.png",
        "/img/credit/4.png",
        "/img/credit/5.png",
        "/img/credit/1.png",
        "/img/credit/2.png",
        "/img/credit/3.png",
        "/img/credit/4.png",
        "/img/credit/5.png",
    ]
)

const creditSlider = ref();

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