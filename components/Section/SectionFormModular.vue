<template>
  <section class="pb-2 lg:pb-48 pt-20 lg:pt-48 form-houses sfm--block">
    <div class="container">
      <h2 data-v-eae7218d="" class="h2 info-simple__title mb-12" >Вы получите готовый дом через <br/> 2–3 месяца — заезжайте и живите</h2>
      <div class="grid grid-cols-6 gap-24">
        <img class="col-span-6 lg:col-span-4" src="/img/modular-houses/form-img.png" alt="">
        <div class="col-span-6 lg:col-span-2">
          <form class="simple-form" data-v-4da383d2="" data-v-63f20d4b="">
            <div class="title text-5xl text-[#fff] font-medium mb-12">Модульный дом 110 м² с просторной террасой</div>
            <div class="flex mb-12">
              <div class="text-[#fff] ">Оставьте свой номер и с вами свяжется один из наших менеджеров</div>
              <img class="max-w-[112px] object-contain" src="/img/modular-houses/manager.png" alt="">
            </div>
            <div class="simple-form__title font-medium" data-v-63f20d4b="">Какой способ связи вам удобен?</div>
            <div class="simple-form__body" data-v-63f20d4b="">
              <div class="form-communication simple-form__tabs" data-v-63f20d4b="" data-v-372cbae0="">
                
                <PartFormCommunicationTabs
                  v-if="tabs"
                  class="simple-form__tabs"
                  :current-tab="currentTab"
                  :tabs="tabs"
                />
                <div class="input-wrap form-input mt-[2.4rem]" data-v-372cbae0="" data-v-efb5f00e="">
                  <input class="input" maxlength="32" name="whatsapp" value="" placeholder="Имя" >
                </div>
              </div>
            </div>
            <div class="simple-form__footer" data-v-63f20d4b="">
              <button class="btn btn_green w-full" type="submit" data-v-63f20d4b="" data-v-43f32aca="">Хочу такой дом
                <span class="nuxt-icon" data-v-43f32aca="">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4.07812L2 6.07812C2 8.28726 3.79086 10.0781 6 10.0781L17 10.0781" stroke="white" stroke-width="2"></path>
                    <path d="M13 5.07812L18 10.0781L13 15.0781" stroke="white" stroke-width="2"></path>
                  </svg>
                </span>
              </button>
              <p class="simple-form__privacy" data-v-63f20d4b=""> Нажимая на кнопку, вы даете согласие на обработку своих персональных данных и соглашаетесь с <a href="#" data-v-inspector="components/Module/ModuleSimpleForm.vue:29:11" data-v-63f20d4b="">Политикой конфиденциальности</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  tabs: any[];
  currentTab: object;
}

const props = defineProps<Props>();

const activeTab = shallowRef(props.currentTab);
</script>

<style>
.form-houses {
  border-top: 1px solid var(--gray-200);
}

.sfm--block .form-communication__btn{
  font-size: 1.2rem;
    padding: 1.6rem 1rem;
}
</style>