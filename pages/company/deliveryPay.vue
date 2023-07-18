<template>
  <div>
    <HeaderContainer :title="'Доставка и оплата'"/>
    <section class="pb-48">
      <div class="container">
        <div class="grid grid-cols-3">
          <div class="grid">
            <h4 class="mb-20">Оплата</h4>
            <div class="text-3xl mb-20">
              <div class="font-medium mb-6">Наличный расчет</div>
              <p>Оплачивайте заказ у нас в офисе при заключении договора или онлайн переводом при оформлении договора онлайн.</p>
            </div>
            <div class="text-3xl mb-20">
              <div class="font-medium mb-6">Безналичный расчет</div>
              <p>Бухгалтера, в кратчайшие сроки, подготовят необходимые документы для проведения банковского платежа. Оригиналы документов вы получите в офисе или непосредственно после монтажа на площадке.</p>
            </div>
            <div class="text-3xl mb-20">
              <div class="font-medium mb-6">Оформить кредит или рассрочку</div>
              <p>Мы являемся аккредитованным партнером банков. У нас вы можете оформить кредит или рассрочку на льготных условиях.</p>
            </div>
            <div class="credit__slider flex gap-4 w-full mb-20">
              <img class="w-full" src="/img/credit/1.png" alt="">
              <img class="w-full" src="/img/credit/2.png" alt="">
              <img class="w-full" src="/img/credit/3.png" alt="">
              <img class="w-full" src="/img/credit/4.png" alt="">
              <img class="w-full" src="/img/credit/5.png" alt="">
            </div>
            <div class="text-3xl mb-20">
              <p>Чтобы получить дополнительную информацию о способах оплаты, а также выбрать наиболее подходящий для Вас вариант, узнать расчетный счет компании для перевода денежных средств или получить консультацию о производимой нашей компанией продукции оставьте заявку.</p>
            </div>
            <button class="btn home-hero-slider__slide-btn btn_green" type="button" data-v-inspector="components/Ui/Button/UiButtonPrimary.vue:13:3" data-v-aa1c64d2="" data-v-43f32aca=""><a href="#bathouse-calculator" data-v-inspector="components/Ui/Button/UiButtonPrimary.vue:14:5" data-v-43f32aca="">Получить консультацию</a><span class="nuxt-icon" data-v-inspector="node_modules/nuxt-icons/dist/runtime/components/nuxt-icon.vue:2:3" data-v-43f32aca=""><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 4.07812L2 6.07812C2 8.28726 3.79086 10.0781 6 10.0781L17 10.0781" stroke="white" stroke-width="2"></path>
              <path d="M13 5.07812L18 10.0781L13 15.0781" stroke="white" stroke-width="2"></path>
              </svg>
              </span>
            </button>
          </div>
          <div>
            <div>Работаем по договору <br/>
              с предоплатой от 10 000 руб.</div>
            <div class="flex">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4L2 6C2 8.20914 3.79086 10 6 10L17 10" stroke="#333333"/>
                <path d="M12 5L17 10L12 15" stroke="#333333"/>
              </svg>
              <div>
                Для иногородних клиентов <span class="text-[#009767]">заключаем договор онлайн,</span> обмениваемся оригиналами при установке бани
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
name: "deliveryPay"
}
</script>

<style setup lang="ts">
import HeaderContainer from "~/components/Ui/HeaderContainer.vue";

</style>