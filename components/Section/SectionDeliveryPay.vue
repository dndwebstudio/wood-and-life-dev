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
                    <div class="credit__slider flex gap-4 w-full mb-12">
                        <img class="w-full" src="/img/credit/1.png" alt="">
                        <img class="w-full" src="/img/credit/2.png" alt="">
                        <img class="w-full" src="/img/credit/3.png" alt="">
                        <img class="w-full" src="/img/credit/4.png" alt="">
                        <img class="w-full" src="/img/credit/5.png" alt="">
                    </div>
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
            <div class="flex flex-col lg:flex-row mb-20">
                <img class="w-full max-w-[776px]" src="/img/delivery/banner.png" alt="">
                <div class="mt-32">
                    <div class="text-5xl font-medium mb-12">Меня зовут Анна, я руководитель отдела продаж <br />Wood and
                        Life</div>
                    <div class="font-medium mb-6">Свяжитесь со мной и расскажите, что хотите построить</div>
                    <div class="flex gap-4 items-center py-6 border-b border-[#D9D9D9]">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="28" height="28" rx="4" fill="#007550" />
                            <path d="M8 12.6328L13 17.6328L21 9.63281" stroke="white" stroke-width="2" />
                        </svg>
                        <span>Расскажу о деталях строительства</span>
                    </div>
                    <div class="flex gap-4 items-center py-6 border-b border-[#D9D9D9]">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="28" height="28" rx="4" fill="#007550" />
                            <path d="M8 12.6328L13 17.6328L21 9.63281" stroke="white" stroke-width="2" />
                        </svg>
                        <span>Сориентирую по стоимости и доставке</span>
                    </div>
                    <div class="flex gap-4 items-center py-6 border-b border-[#D9D9D9]">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="28" height="28" rx="4" fill="#007550" />
                            <path d="M8 12.6328L13 17.6328L21 9.63281" stroke="white" stroke-width="2" />
                    </svg>
                    <span>Отвечу на ваши вопросы</span>
                </div>
                <div class="text-4xl lg:text-8xl mt-16 mb-16">
                    <a href="tel:89000001122">8 (900) 000-11-22</a>
                </div>
                <button class="!py-6 !px-14 btn btn_transparent" type="button"
                    data-v-inspector="components/Ui/Button/UiButtonPrimary.vue:21:3" data-v-092d6082=""
                    data-v-43f32aca=""  @click="openModalInstallments">Перезвоните мне <span class="nuxt-icon"
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
        </div>
    </div>
</section></template>

<script setup lang="ts">
import { ref } from "vue";
import { useModal } from "vue-final-modal";
import ModalForm from "@/components/Modal/ModalForm.vue";

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