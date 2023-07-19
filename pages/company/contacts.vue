<template>
  <div>
    <div class="container">
      <h2 class="text-9xl pt-48">Контакты</h2>
    </div>
    <section class="pb-48 pt-48">
      <div class="container">
        <div class="flex justify-between">
          <div class="flex flex-col gap-5 w-full max-w-[528px] ">
            <a class="text-6xl text-[#009767] font-medium" href="tel:88006007214">8 (800) 600-72-14</a>
            <a class="text-6xl text-[#009767] font-medium" href="tel:89993332853">8 (999) 333-28-53</a>
            <div class="mb-6">
              Работаем ежедневно с 9:00 до 18:00 (по мск)
            </div>
            <div class="flex gap-6 items-center uppercase font-medium text-[#009767] mb-8">
              Перезвоните мне
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4L2 6C2 8.20914 3.79086 10 6 10L17 10" stroke="#009767" stroke-width="2"/>
                <path d="M13 5L18 10L13 15" stroke="#009767" stroke-width="2"/>
              </svg>
            </div>
            <div class="flex gap-6 mb-8">
              <a href="">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M42.6693 7.99805L5.33594 23.998L14.6693 27.998L18.6693 39.998L25.3359 34.6647L37.3359 42.6647L42.6693 7.99805Z" fill="black"/>
                </svg>
              </a>
              <a href="">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.759 39.0873C18.3614 40.4927 21.1807 41.2495 24.3253 41.2495C34.0843 41.2495 42 33.4657 42 23.736C42 14.0063 34.0843 6.22247 24.3253 6.22247C14.5663 6.22247 6.6506 14.0063 6.6506 23.736C6.6506 27.0873 7.51807 30.2225 9.14458 32.8171L6 42.2225L15.759 39.0873ZM21.6705 18.9196L23.3676 17.2227L19.9737 13.8284L18.2766 15.5253C14.708 19.0935 14.7078 24.8791 18.2762 28.4475L20.3189 30.4902C23.812 33.9833 29.4754 33.9833 32.9685 30.4902L34.6656 28.7932L31.2714 25.3991L29.5744 27.0961C27.9558 28.7147 25.3316 28.7147 23.713 27.0961L21.6703 25.0534C19.9765 23.3596 19.9766 20.6134 21.6705 18.9196Z" fill="black"/>
                </svg>
              </a>
            </div>
            <div>
              <div class="flex items-center uppercase font-bold mb-8">Подписывайтесь на нас</div>
              <div class="flex gap-6 mb-8">
                <a href="">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.6971 36C12.7139 36 5.30856 26.991 5 12H11.5034C11.7171 23.003 16.5116 27.6637 20.3092 28.6246V12H26.4329V21.4895C30.183 21.0811 34.1231 16.7568 35.4522 12H41.5759C41.075 14.467 40.0766 16.8028 38.6431 18.8614C37.2096 20.92 35.3719 22.6571 33.2449 23.964C35.6191 25.1581 37.7162 26.8483 39.3978 28.923C41.0793 30.9977 42.3071 33.4098 43 36H36.2592C35.6372 33.7502 34.373 31.7362 32.6249 30.2106C30.8769 28.6849 28.7229 27.7153 26.4329 27.4234V36H25.6971Z" fill="black"/>
                  </svg>
                </a>
                <a href="">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.2997 15.0682C39.9076 13.4776 38.7593 12.2235 37.303 11.7953C34.6424 11 23.9999 11 23.9999 11C23.9999 11 13.3575 11 10.6969 11.7647C9.26852 12.1929 8.09225 13.4776 7.70016 15.0682C7 17.9741 7 24 7 24C7 24 7 30.0565 7.70016 32.9318C8.09225 34.5224 9.24052 35.7765 10.6969 36.2047C13.3855 37 23.9999 37 23.9999 37C23.9999 37 34.6424 37 37.303 36.2353C38.7593 35.8071 39.9076 34.5529 40.2997 32.9624C40.9999 30.0565 40.9999 24.0306 40.9999 24.0306C40.9999 24.0306 41.0279 17.9741 40.2997 15.0682ZM20.6111 29.5671V18.4329L29.4612 24L20.6111 29.5671Z" fill="black"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="p-24 shadow flex flex-col max-w-[912px]">
            <div class="text-[#333] text-3xl">Обратная связь</div>
            <div class="text-4xl py-5 text-[#007550] font-medium">Напишите и мы ответим</div>
            <textarea class="w-full p-7 bg-[#F5F5F5] mb-6" name="" id="" rows="5" placeholder="Текст сообщения"></textarea>
            <input class="w-full p-7 bg-[#F5F5F5] mb-6" type="text" placeholder="Как к вам обращаться?">
            <div class="flex gap-6">
              <input class="w-full p-7 bg-[#F5F5F5] mb-6" type="text" placeholder="e-mail">
              <input class="w-full p-7 bg-[#F5F5F5] mb-6" type="text" placeholder="+7 (___) ___-__-__">
            </div>
            <button class="self-start justify-self-start btn home-hero-slider__slide-btn btn_green" type="button" data-v-inspector="components/Ui/Button/UiButtonPrimary.vue:13:3" data-v-aa1c64d2="" data-v-43f32aca=""><a href="#bathouse-calculator" data-v-inspector="components/Ui/Button/UiButtonPrimary.vue:14:5" data-v-43f32aca="">Отправить сообщение</a><span class="nuxt-icon" data-v-inspector="node_modules/nuxt-icons/dist/runtime/components/nuxt-icon.vue:2:3" data-v-43f32aca=""><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 4.07812L2 6.07812C2 8.28726 3.79086 10.0781 6 10.0781L17 10.0781" stroke="white" stroke-width="2"></path>
              <path d="M13 5.07812L18 10.0781L13 15.0781" stroke="white" stroke-width="2"></path>
              </svg>
              </span>
            </button>
            <span class="text-[#838383] mt-6">
            Нажимая на кнопку, вы даете согласие на обработку своих персональных данных и соглашаетесь с Политикой конфиденциальности
          </span>
          </div>
        </div>
      </div>
    </section>
    <LazySectionMap :data="mapData" :shops="mapData.shops" />
    <SectionChoose :data="choose" />

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const choose = ref ({
  title: "Выберите, что хотите построить",
  desc: "Ответьте на несколько вопросов, и мы рассчитаем стоимость",
  chooses: [
    {
      img: "/img/choose/1.png",
      title: "Баня бочка",
    },
    {
      img: "/img/choose/2.png",
      title: "А-фрейм",
    },
    {
      img: "/img/choose/3.png",
      title: "Модульный дом",
    },
    {
      img: "/img/choose/4.png",
      title: "Каркасные бани",
    },
    {
      img: "/img/choose/5.png",
      title: "Дачный домик из мини-бруса",
    },
    {
      img: "/img/choose/6.png",
      title: "Дом из двойного бруса",
    },
    {
      img: "/img/choose/7.png",
      title: "Беседка",
    },
    {
      img: "/img/choose/8.png",
      title: "Гриль-домик",
    },
    {
      img: "/img/choose/9.png",
      title: "Дачный комплекс",
    },
    {
      img: "/img/choose/10.png",
      title: "Хозяйственные постройки",
    },
  ]

})

const mapData = ref({
  title: "Приезжайте на наши <br/> выставочные площадки",
  zoom: "4",
  coords: [64.731901, 88.422488],
  regions: [
    {
      letter: "А",
      data: [
        { name: "Алтайский край", zoom: "15", coords: [56.841506, 60.593128] },
        {
          name: "Архангельская область",
          zoom: "12",
          coords: [61.906169, 73.111711],
        },
        {
          name: "Астраханская область",
          zoom: "11",
          coords: [60.835356, 76.813008],
        },
      ],
    },
    {
      letter: "С",
      data: [
        {
          name: "Саратовская область",
          zoom: "10",
          coords: [63.614624, 66.743304],
        },
        {
          name: "Сахалинская область",
          zoom: "9",
          coords: [62.679137, 84.542186],
        },
        {
          name: "Свердловская область",
          zoom: "5",
          coords: [56.609015, 60.510974],
        },
      ],
    },
    {
      letter: "С",
      data: [
        {
          name: "Саратовская область",
          zoom: "10",
          coords: [63.614624, 66.743304],
        },
        {
          name: "Сахалинская область",
          zoom: "9",
          coords: [62.679137, 84.542186],
        },
        {
          name: "Свердловская область",
          zoom: "5",
          coords: [56.609015, 60.510974],
        },
      ],
    },
    {
      letter: "С",
      data: [
        {
          name: "Саратовская область",
          zoom: "10",
          coords: [63.614624, 66.743304],
        },
        {
          name: "Сахалинская область",
          zoom: "9",
          coords: [62.679137, 84.542186],
        },
        {
          name: "Свердловская область",
          zoom: "5",
          coords: [56.609015, 60.510974],
        },
      ],
    },
    {
      letter: "С",
      data: [
        {
          name: "Саратовская область",
          zoom: "10",
          coords: [63.614624, 66.743304],
        },
        {
          name: "Сахалинская область",
          zoom: "9",
          coords: [62.679137, 84.542186],
        },
        {
          name: "Свердловская область",
          zoom: "5",
          coords: [56.609015, 60.510974],
        },
      ],
    },
    {
      letter: "С",
      data: [
        {
          name: "Саратовская область",
          zoom: "10",
          coords: [63.614624, 66.743304],
        },
        {
          name: "Сахалинская область",
          zoom: "9",
          coords: [62.679137, 84.542186],
        },
        {
          name: "Свердловская область",
          zoom: "5",
          coords: [56.609015, 60.510974],
        },
      ],
    },
  ],
  shops: {
    shopList: [
      {
        id: "1",
        coords: [56.841506, 60.593128],
        region: "Алтайский край",
        name: "Магазин «Новый&nbsp;дом»",
        address: "с. Нечаевка, ул. Рубежная 62",
        time: "Пн-Пт 10:00-20:00, Сб-Вс 10:00-22:00",
        img: "/img/map/house1.jpg",
      },
      {
        id: "2",
        coords: [61.906169, 73.111711],
        region: "Алтайский край",
        name: "Название площадки",
        address: "г .Семилуки, Российская улица 6",
        time: "Пн-Пт 10:00-20:00, Сб-Вс 10:00-22:00",
        img: "/img/map/house2.jpg",
      },
      {
        id: "3",
        coords: [60.835356, 76.813008],
        region: "Саратовская область",
        name: "Название площадки",
        address: "г. Семилуки, Российская улица 6",
        time: "Пн-Пт 10:00-20:00, Сб-Вс 10:00-22:00",
        img: "/img/map/house3.jpg",
      },
      {
        id: "4",
        coords: [63.614624, 66.743304],
        region: "Сахалинская область",
        name: "Название площадки",
        address: "г.Семилуки, Российская улица 6",
        time: "Пн-Пт 10:00-20:00, Сб-Вс 10:00-22:00",
        img: "/img/map/house4.jpg",
      },
      {
        id: "5",
        coords: [62.679137, 84.542186],
        region: "Свердловская область",
        name: "Магазин «Новый&nbsp;дом»",
        address: "с. Нечаевка, ул. Рубежная 62",
        time: "Пн-Пт 10:00-20:00, Сб-Вс 10:00-22:00",
        img: "/img/map/house1.jpg",
      },
      {
        id: "6",
        coords: [58.065743, 65.736334],
        region: "Архангельская область",
        name: "Название площадки",
        address: "г.Семилуки, Российская улица 6",
        time: "Пн-Пт 10:00-20:00, Сб-Вс 10:00-22:00",
        img: "/img/map/house2.jpg",
      },
      {
        id: "7",
        coords: [56.609015, 60.510974],
        region: "Астраханская область",
        name: "Название площадки",
        address: "г.Семилуки, Российская улица 6",
        time: "Пн-Пт 10:00-20:00, Сб-Вс 10:00-22:00",
        img: "/img/map/house3.jpg",
      },
      {
        id: "8",
        coords: [57.950175, 56.102077],
        region: "Алтайский край",
        name: "Название площадки",
        address: "г.Семилуки, Российская улица 6",
        time: "Пн-Пт 10:00-20:00, Сб-Вс 10:00-22:00",
        img: "/img/map/house4.jpg",
      },
    ],
  },
});

</script>


<style scoped>
 .shadow {
   box-shadow: 0px 24px 48px 0px rgba(145, 158, 171, 0.24), 0px 0px 4px 0px rgba(145, 158, 171, 0.24);
 }
</style>