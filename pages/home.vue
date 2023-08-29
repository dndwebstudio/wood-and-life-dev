<template>
  <div>
    <SectionHomeHero />
    <SectionAdvantages :data="advantagesData1" />
    <div class="container py-48 bg-[#171717]">
      <div class="caps-1 section-name">
        Что производим
      </div>
      <div class="flex flex-col gap-y-20">
        <div class="bg-[url('/img/home/img.png')] bg-cover h-[512px] p-16 text-white flex justify-between items-end">
          <div>
            <div class="text-9xl font-medium mb-6">Бани-бочки</div>
            <div class="text-4xl leading-normal text-[##ffffffe6]">С парной, помывочной, комнатой отдыха и мощной печкой — <br>прогреваются за 20–30 минут</div>
          </div>
          <div>
            <button class="text-4xl font-semibold flex gap-6 items-center border rounded-full border-white px-16 py-8">
              Подробнее
              <span class="nuxt-icon">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4.07812L2 6.07812C2 8.28726 3.79086 10.0781 6 10.0781L17 10.0781" stroke="white" stroke-width="2"></path>
                <path d="M13 5.07812L18 10.0781L13 15.0781" stroke="white" stroke-width="2"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div class="flex gap-x-16 flex-shrink">
          <div class="basis-1/2">
            <img class="object-contain" src="/img/home/img2.png" alt="">
          </div>
          <div class="basis-1/2 text-white flex flex-col justify-center">
            <div>
              <div class="text-9xl font-medium mb-6">А-фреймы</div>
              <div class="text-4xl leading-normal text-[##ffffffe6] mb-20">С парной, помывочной, комнатой отдыха и мощной печкой — <br>прогреваются за 20–30 минут</div>
            </div>
            <div>
              <button class="text-4xl font-semibold flex gap-6 items-center border rounded-full border-white px-16 py-8">
                Подробнее
                <span class="nuxt-icon">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4.07812L2 6.07812C2 8.28726 3.79086 10.0781 6 10.0781L17 10.0781" stroke="white" stroke-width="2"></path>
                <path d="M13 5.07812L18 10.0781L13 15.0781" stroke="white" stroke-width="2"></path>
                </svg>
              </span>
              </button>
            </div>
          </div>
        </div>
        <div class="bg-[url('/img/home/img3.png')] bg-cover h-[512px] p-16 text-white flex justify-between items-end">
          <div>
            <div class="text-9xl font-medium mb-6">Модульные дома</div>
            <div class="text-4xl leading-normal text-[##ffffffe6]">Хороший вариант для тех, кто хочет через 2–3 месяца получить дом без <br>стройки на участке</div>
          </div>
          <div>
            <button class="text-4xl font-semibold flex gap-6 items-center border rounded-full border-white px-16 py-8">
              Подробнее
              <span class="nuxt-icon">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4.07812L2 6.07812C2 8.28726 3.79086 10.0781 6 10.0781L17 10.0781" stroke="white" stroke-width="2"></path>
                <path d="M13 5.07812L18 10.0781L13 15.0781" stroke="white" stroke-width="2"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div class="flex flex-shrink gap-x-16">
          <div class="basis-1/2">
            <img class="object-contain" src="/img/home/img4.png" alt="">
          </div>
          <div class="basis-1/2 text-white flex flex-col justify-center">
            <div>
              <div class="text-9xl font-medium mb-6">Дачные домики из мини-бруса</div>
              <div class="text-4xl leading-normal text-[##ffffffe6] mb-20">Идеальное решение, когда нужно сэкономить на строительстве <br>и при этом получить небольшой, крепкий и уютный домик</div>
            </div>
            <div>
              <button class="text-4xl font-semibold flex gap-6 items-center border rounded-full border-white px-16 py-8">
                Подробнее
                <span class="nuxt-icon">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4.07812L2 6.07812C2 8.28726 3.79086 10.0781 6 10.0781L17 10.0781" stroke="white" stroke-width="2"></path>
                <path d="M13 5.07812L18 10.0781L13 15.0781" stroke="white" stroke-width="2"></path>
                </svg>
              </span>
              </button>
            </div>
          </div>
        </div>
        <div class="bg-[url('/img/home/img5.png')] bg-cover h-[512px] p-16 text-white flex justify-between items-end">
          <div>
            <div class="text-9xl font-medium mb-6">Дома из двойного бруса</div>
            <div class="text-4xl leading-normal text-[##ffffffe6]">Теплый, «дышащий» деревянный дом, который стоит <br>
              на 30–50% дешевле, чем дома из оцилиндрованного<br>
              бревна и клееного бруса</div>
          </div>
          <div>
            <button class="text-4xl font-semibold flex gap-6 items-center border rounded-full border-white px-16 py-8">
              Подробнее
              <span class="nuxt-icon">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4.07812L2 6.07812C2 8.28726 3.79086 10.0781 6 10.0781L17 10.0781" stroke="white" stroke-width="2"></path>
                <path d="M13 5.07812L18 10.0781L13 15.0781" stroke="white" stroke-width="2"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div class="flex gap-x-16 flex-shrink">
          <div class="basis-1/2">
            <img class="object-contain" src="/img/home/img4.png" alt="">
          </div>
          <div class="basis-1/2 text-white flex flex-col justify-center">
            <div>
              <div class="text-9xl font-medium mb-6">Каркасные бани</div>
              <div class="text-4xl leading-normal text-[##ffffffe6] mb-20">Текст описани для каркасных бань</div>
            </div>
            <div>
              <button class="text-4xl font-semibold flex gap-6 items-center border rounded-full border-white px-16 py-8">
                Подробнее
                <span class="nuxt-icon">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4.07812L2 6.07812C2 8.28726 3.79086 10.0781 6 10.0781L17 10.0781" stroke="white" stroke-width="2"></path>
                <path d="M13 5.07812L18 10.0781L13 15.0781" stroke="white" stroke-width="2"></path>
                </svg>
              </span>
              </button>
            </div>
          </div>
        </div>
        <div class="flex gap-16">
          <div class="basis-1/3 bg-[url('/img/home/img7.png')] bg-cover h-[670px] w-full p-16 text-white flex flex-col justify-end">
            <div class="text-7xl mb-2">
              Беседки
            </div>
            <div class="mb-10 text-4xl">
              Формы и размеры под любой запрос
            </div>
            <button class="w-fit text-4xl font-semibold flex gap-6 items-center border rounded-full border-white px-16 py-8">
              Подробнее
              <span class="nuxt-icon">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4.07812L2 6.07812C2 8.28726 3.79086 10.0781 6 10.0781L17 10.0781" stroke="white" stroke-width="2"></path>
                <path d="M13 5.07812L18 10.0781L13 15.0781" stroke="white" stroke-width="2"></path>
                </svg>
              </span>
            </button>
          </div>
          <div class="basis-1/3 bg-[url('/img/home/img8.png')] bg-cover h-[670px] w-full p-16 text-white flex flex-col justify-end">
            <div class="text-7xl mb-2">
              Гриль-домики
            </div>
            <div class="mb-10 text-4xl">
              Вариант организации барбекю-зоны для дачи
            </div>
            <button class="w-fit text-4xl font-semibold flex gap-6 items-center border rounded-full border-white px-16 py-8">
              Подробнее
              <span class="nuxt-icon">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4.07812L2 6.07812C2 8.28726 3.79086 10.0781 6 10.0781L17 10.0781" stroke="white" stroke-width="2"></path>
                <path d="M13 5.07812L18 10.0781L13 15.0781" stroke="white" stroke-width="2"></path>
                </svg>
              </span>
            </button>
          </div>
          <div class="basis-1/3 bg-[url('/img/home/img9.png')] bg-cover h-[670px] w-full p-16 text-white flex flex-col justify-end">
            <div class="text-7xl mb-2">
              Хозяйственные постройки
            </div>
            <div class="mb-10 text-4xl">
              Хозблоки, дровники, душ, туалет
            </div>
            <button class="w-fit text-4xl font-semibold flex gap-6 items-center border rounded-full border-white px-16 py-8">
              Подробнее
              <span class="nuxt-icon">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4.07812L2 6.07812C2 8.28726 3.79086 10.0781 6 10.0781L17 10.0781" stroke="white" stroke-width="2"></path>
                <path d="M13 5.07812L18 10.0781L13 15.0781" stroke="white" stroke-width="2"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <SectionFeatures :data="featuresData" />
    <div class="bg-[#1c1c1c]">
      <div class="container">
        <div class="bg-[url('/img/home/factory-banner.png')] bg-cover p-28 flex flex-col text-white">
          <div class="text-9xl font-medium mb-10">
            Соблюдаем <br>технологии <br>производства
          </div>
          <div class="text-4xl mb-10">
            Все элементы строений производятся на современном <br>
            высокоточном и автоматизированном оборудовании в заводских<br> условиях, при идеальной температуре и влажности
          </div>
          <div class="flex bg-[#1c1c1c] w-fit p-12 text-4xl items-center gap-20 font-medium">
            Тем самым достигается высокая <br>
            степень подгонки и отсутствие дефектов<br>
            в конструкциях
            <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.1" cx="56" cy="56" r="56" fill="#007550"/>
              <circle opacity="0.3" cx="56" cy="56" r="46" fill="#007550"/>
              <circle cx="56" cy="56.0005" r="36" fill="#007550"/>
              <g clip-path="url(#clip0_140_22567)">
                <circle cx="55.9985" cy="55.9995" r="16.5" stroke="white" stroke-width="2"/>
                <path d="M63.75 55.1335C64.4167 55.5184 64.4167 56.4806 63.75 56.8655L52.875 63.1442C52.2083 63.5291 51.375 63.048 51.375 62.2782L51.375 49.7208C51.375 48.951 52.2083 48.4699 52.875 48.8548L63.75 55.1335Z" stroke="white" stroke-width="2"/>
              </g>
              <defs>
                <clipPath id="clip0_140_22567">
                  <rect width="36" height="36" fill="white" transform="translate(38 38)"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <SectionProduction id="production" :data="productionData" />

    <SectionChoose :data="choose" />
    <SectionHappyClients/>
    <section class="">
      <div class="container">

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
    </section>
    <div class="bg-[#171717] text-white">
      <div class="container">
        <div class="caps-1 section-name">
          Блог
        </div>
        <div class="text-5xl mb-20">
          Читайте экспертные материалы по теме <span class="text-[#009767]">#строительство из дерева</span> в нашем блоге
        </div>
      </div>
      <SectionBlog/>
      <div class="container">
        <button class="w-fit text-4xl font-semibold flex gap-6 items-center border rounded-full border-white px-16 py-8">
          Другие материалы
          <span class="nuxt-icon">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4.07812L2 6.07812C2 8.28726 3.79086 10.0781 6 10.0781L17 10.0781" stroke="white" stroke-width="2"></path>
                <path d="M13 5.07812L18 10.0781L13 15.0781" stroke="white" stroke-width="2"></path>
                </svg>
              </span>
        </button>
      </div>
    </div>
  </div>
</template>
<style>
.section-name {
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 6.4rem;
  text-transform: uppercase;
  color: var(--gray-400);
  letter-spacing: 0.06em;
}
</style>
<script setup lang="ts">
import { ref } from "vue";
import SectionHomeHero from "~/components/Section/SectionHomeHero.vue";
import SectionAdvantages from "~/components/Section/SectionAdvantages.vue";
import SectionProjects from "~/components/Section/SectionProjects.vue";
import SectionForm from "~/components/Section/SectionForm.vue";
import WhatsAppTab from "~/components/Part/Form/Communication/FormCommunicationTabWhatsApp.vue";
import TelegramTab from "~/components/Part/Form/Communication/FormCommunicationTabTelegram.vue";
import SectionInfoSimple from "~/components/Section/SectionInfoSimple.vue";
import SectionFeatures from "~/components/Section/SectionFeatures.vue";
import SectionHousesCalc from "~/components/Section/SectionHousesCalc.vue";
import SectionHousesInterior from "~/components/Section/SectionHousesInterior.vue";
import { ICommunicationTabsExpanded } from "~/dto/interfaces/tabs";
import PhoneTab from "~/components/Part/Form/Communication/FormCommunicationTabPhone.vue";

const advantagesData1 = ref({
  advantages: [
    {
      title: "Собственный <br>производственный <br>комплекс 5 500 м²",
      img: "/img/aframe/img.png",
      icon: "/icons/saw.svg"
    },
    {
      title: "За 9 лет построили более 5 000 объектов",
      img: "/img/aframe/img-1.png",
      icon: "/icons/menu.svg"
    },
    {
      title: "Доставляем своим транспортом по всей России",
      img: "/img/aframe/img-2.png",
      icon: "/icons/delivery-2.svg"
    },
  ],
});

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

const sectionFormExpandedData = ref({
  img: {
    img: "/img/forms/bg-form-houses-2.png",
    imgMd: "/img/forms/bg-form-houses-2.png",
  },
  title: "Не нашли подходящий\n" +
      "дом в стиле А-фрейм?",
  subtitle:
      "Пришлите нам фото понравившегося дома в WhatsApp или Telegram. Мы все посчитаем и вам перезвоним.",
  form: {
    title: "Какой способ связи вам удобен?",
    btnName: "Рассказать, о какой домике я мечтаю",
    policyLink: "#",
    textarea: {
      name: "",
      placeholder: "Расскажите, о каком домике вы мечтаете",
    },
  },
});

const communicationTabsExpanded: Ref<ICommunicationTabsExpanded> = shallowRef({
  currentTab: PhoneTab,
  tabs: [
    {
      name: "Звонок",
      icon: "phone",
      component: PhoneTab,
    },
    {
      name: "whatsapp",
      icon: "whatsapp",
      component: WhatsAppTab,
    },
    {
      name: "telegram",
      icon: "telegram",
      component: TelegramTab,
    },
  ],
});

const featuresData = ref({
  section: "Производство",
  features: [
    {
      title: "Используем древесину \n" +
          "камерной сушки",
      imgs: [
        {
          img: "/img/home/factory.png",
        },
      ],
      list: [
        {
          text: "Имеет минимальное количество трещин, сколов и деформаций",
        },
        {
          text: "Сохраняет привлекательный вид долгие годы",
        },
        {
          text: "Изделия дают меньшую усадку",
        },
        {
          text: "В высушенной древесине нет влаги — среды для микробов и бактерий",
        },
      ],
      banner: {
        title:
            "Срок службы строений более<br> <span class='text-5xl mt-2 flex'>30-50 лет</span>",
        img: "/img/elements/bath.svg",
        icon: "",
      },
      info: [
        {
          additional: {
            icon: "not-water",
            text: `Лишняя влага удаляется из древесины с помощью специального
термообрабатывающего оборудования`,
          },
        },
      ],
    },
  ],
});

const productionData = ref({
  production: {
    director: "Евгений Киселев",
    status: "Генеральный директор Wood and Life",
    title: "Изготавливаем <br>из дерева с 2014 года. Качественно и в срок",
    productionText: [
      "За эти годы мы изучили все особенности и свойства материалов, знаем все нюансы технологии строительства, что позволяет нам без потери качества воплощать любые идеи.",
      "<b>Несем ответственность за каждый объект:</b> с момента <br>заключения договора до установки зданий и строений, и в течение всего гарантийного срока.",
    ],
  },
  team: {
    title: "Команда",
    desc: "Компания это не только оборудование и материалы, но и люди, которые работают в ней",
    list: [
      {
        img: "/img/team/1.png",
        title: "Алексей Попов",
        desc: "Начальник производства",
      },
      {
        img: "/img/team/2.png",
        title: "Роман Иванов",
        desc: "Главный инженер",
      },
      {
        img: "/img/team/3.png",
        title: "Александр Борискин",
        desc: "Начальник клиентского сервиса",
      },
      {
        img: "/img/team/4.png",
        title: "Алексей Смелов",
        desc: "Начальник установки и доставки",
      }
    ]
  },
  bath: {
    title: "Производство",
    subtitle: "Цифры и факты о нашем производстве",
    facts: [
      {
        icon: "area",
        name: "5 500 м²",
        desc: "Площадь производственных цехов",
      },
      {
        icon: "warehouse",
        name: "3 склада",
        desc: "Большие запасы материалов, соблюдение норм хранения",
      },
      {
        icon: "cpu",
        name: "ЧПУ станки",
        desc: "Изготавливаем с точность до десятых долей миллиметра",
      },
    ],
    banner: {
      title: "Лучше один раз увидеть",
      subtitle: "4 минуты видео расскажут <br> все о нашем производстве",
      videoLink: "https://youtu.be/b9McVO9hpUE",
      img: "/img/elements/stove-white.png",
    },
    slides: [
      {
        img: "/img/production/slides/image-1.jpg",
        desc: "Баня мечты",
      },
      {
        img: "/img/production/slides/image-1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam purus, mollis quis facilisis in, faucibus at elit. Nullam vulputate congue magna in dapibus. Aliquam hendrerit odio est. Vivamus porta, odio eu pulvinar fringilla, dui est ultrices risus, sit amet elementum leo lacus sit amet enim. Aenean dictum, nisi vel consequat imperdiet, lacus ligula tincidunt diam, et molestie neque sem sit amet dolor. Ut nulla velit, mattis quis nisi nec, condimentum tempor mi. Duis feugiat maximus ipsum viverra pharetra.",
      },
      {
        img: "/img/production/slides/image-1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam purus, mollis quis facilisis in, faucibus at elit.",
      },
    ],
  },
});
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

</script>

<style scoped>

</style>