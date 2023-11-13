<template>
  <div>
    <SectionHomeHero />
    <SectionAdvantages :data="advantagesData1" />
    <SectionWhatProduce :items="produceData"/>
    <SectionFeatures :data="featuresData" />
    <SectionTech :data="techData"/>
    <SectionProductionShort id="production" :data="productionData" />
    <SectionChoose :data="choose" />
    <SectionHappyClients/>
    
    <LazySectionMap :data="mapData" :shops="mapData.shops" />
    <section class="">
        <div class="container">
          <SectionCallback/>
        </div>
    </section>
    
    
    <SectionHomePreviewBlog/>
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
import SectionWhatProduce from "~/components/Section/SectionWhatProduce.vue";
import SectionTech from "~/components/Section/SectionTech.vue";
import SectionCallback from "~/components/Section/SectionCallback.vue";
import SectionHomePreviewBlog from "~/components/Section/SectionHomePreviewBlog.vue";
import SectionProjects from "~/components/Section/SectionProjects.vue";
import SectionForm from "~/components/Section/SectionForm.vue";
import WhatsAppTab from "~/components/Part/Form/Communication/FormCommunicationTabWhatsApp.vue";
import TelegramTab from "~/components/Part/Form/Communication/FormCommunicationTabTelegram.vue";
import SectionInfoSimple from "~/components/Section/SectionInfoSimple.vue";
import SectionFeatures from "~/components/Section/SectionFeatures.vue";
import SectionHousesCalc from "~/components/Section/SectionHousesCalc.vue";
import SectionHousesInterior from "~/components/Section/SectionHousesInterior.vue";
import { ICommunicationTabsExpanded } from "~/dto/interfaces/tabs";
import { TechData } from "~/dto/interfaces/tech";
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

const techData = ref<TechData>({
    title: "Соблюдаем <br>технологии <br>производства",
    subtitle: "Все элементы строений производятся на современном <br> высокоточном и автоматизированном оборудовании в заводских<br> условиях, при идеальной температуре и влажности",
    blockText: "Тем самым достигается высокая <br>степень подгонки и отсутствие дефектов<br>в конструкциях",
    img: '/img/home/factory-banner.png'
})

let produceData = ref<ProduceItem[]>([
  {
    title: 'Бани-бочки',
    description: 'С парной, помывочной, комнатой отдыха и мощной печкой — <br>прогреваются за 20–30 минут',
    img: '/img/home/img.png',
  },
  {
    title: 'А-фреймы',
    description: 'С парной, помывочной, комнатой отдыха и мощной печкой — <br>прогреваются за 20–30 минут',
    img: '/img/home/img2.png',
  },
  {
    title: 'Модульные дома',
    description: 'Хороший вариант для тех, кто хочет через 2–3 месяца получить дом без <br>стройки на участке',
    img: '/img/home/img3.png',
  },
  {
    title: 'Дачные домики из мини-бруса',
    description: 'Идеальное решение, когда нужно сэкономить на строительстве <br>и при этом получить небольшой, крепкий и уютный домик',
    img: '/img/home/img4.png',
  },
  {
    title: 'Дома из двойного бруса',
    description: 'Теплый, «дышащий» деревянный дом, который стоит <br> на 30–50% дешевле, чем дома из оцилиндрованного<br> бревна и клееного бруса',
    img: '/img/home/img5.png',
  },
  {
    title: 'Каркасные бани',
    description: 'Текст описани для каркасных бань',
    img: '/img/home/img4.png',
  },
  {
    title: 'Беседки',
    description: 'Формы и размеры под любой запрос',
    img: '/img/home/img7.png',
  },
  {
    title: 'Гриль-домики',
    description: 'Вариант организации барбекю-зоны для дачи',
    img: '/img/home/img8.png',
  },
  {
    title: 'Хозяйственные постройки',
    description: 'Хозблоки, дровники, душ, туалет',
    img: '/img/home/img9.png',
  },
]);

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
            "Срок службы строений более<br> <span class='text-7xl font-medium mt-2 flex'>30-50 лет</span>",
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