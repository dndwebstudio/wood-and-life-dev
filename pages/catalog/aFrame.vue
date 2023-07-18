<template>
  <div>
    <SectionHomeHero />
    <SectionAdvantages :data="advantagesData1" />
    <SectionProjects id="projects" :data="projectsData" />
    <SectionForm :data="sectionFormData1" :tabs="communicationTabs" />
    <SectionInfoSimple id="technologies" :data="techData">
      <template #desc>
        <p>
          Названия каркасного дома, который внешне напоминает палатку или букву «А».
          <br>
          <br>
          <b>Дом имеет уникальную конструкцию, у него нет фасадов - стен, их заменяет
            крыша до самого пола.</b>
        </p>
      </template>
    </SectionInfoSimple>
    <SectionFeatures :data="featuresData" />
    <SectionHousesCalc :data="info" />
    <SectionHousesInterior :data="slides"/>
    <SectionAdvantages id="advantagesInterior" :data="advantagesData2" />
    <SectionReviews id="reviews" />
    <SectionInfoSimple id="technologies" :data="techData2">
      <template #banner>
        <ModuleBanner :data="techData2.banner" />
      </template>
      <template #desc>
        <p>
          — быстровозводимые А-дома собираются из деревянного каркаса, утеплителя
          толщиной от 100 мм до 200 мм и крыши.
          <br>
          <br>
          Если вы строите дом для сезонного проживания на даче, можно сэкономить на цене А-образного дома под ключ, не подключая водопровод и канализацию, устанавливая более простые окна и двери, но это скажется на удобстве и энергоэффективности.
          <br>
          <br>
          <b>Утепление соответствует ГОСТу 22853-86</b>
        </p>
      </template>
    </SectionInfoSimple>
    <SectionForm :data="sectionFormData2" :tabs="communicationTabs2" />
    <SectionMounting id="mounting" :data="mountingData" />
    <SectionComplex id="complex" :data="sectionComplexData" />
    <SectionCredit id="credit" :data="creditData" />
    <SectionProduction id="production" :data="productionData" />
    <SectionSteps id="payment" :data="stepsData" :banner="stepsData.banner" />
    <SectionFAQ id="faq" :data="faqData" />
    <LazySectionMap :data="mapData" :shops="mapData.shops" />
    <SectionFormExpanded :data="sectionFormExpandedData" :tabs="communicationTabsExpanded" />

  </div>
</template>

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
      title: "Экономия на материале  <br/>для стен",
      desc: "По сути стены всего две, все остальное пространство занимает крыша",
      img: "/img/aframe/img.png",
    },
    {
      title: "Быстрый сход осадков",
      desc: "Основной плюс такой конструкции для зимнего времени",
      img: "/img/aframe/img-1.png",
    },
    {
      title: "В любой сезон",
      desc: "Строить каркасники можно в любой сезон, при необходимости расширения площади можно пристроить модуль",
      img: "/img/aframe/img-2.png",
    },
  ],
});

const projectsData = ref({
  sectionTitle: "Проекты А-фрейм домов",
  title: "В нашем каталоге можно найти и <br/>" +
    "большой, и компактный дом для<br/>" +
    "любых целей",
  subtitle: "",
});

const sectionFormData1 = ref({
  img: "/img/aframe/bg-aframe-form-1.png",
  title: "Получите детальный расчет стоимости А-фрейма по вашим пожеланиям",
  subtitle: "Свяжемся с вами для уточнения деталей и пришлем <br/>расчет стоимости",
  form: {
    title: "Какой способ связи вам удобен?",
    btnName: "Получить детальный расчет",
    policyLink: "#",
  },
});

const communicationTabs = shallowRef({
  currentTab: WhatsAppTab,
  tabs: [
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

const techData = ref({
  sectionName: "Что такое А-фрейм",
  title:
    "Дом А-фрейма, дом-шалаш или треугольный дом —",
  banner: {
    title: "Прогреваются за 20–30 минут — до 95С°",
    subtitle: "В теплое время года",
    videoLink: "https://youtu.be/yELJDIN1w6Q",
    img: "/img/elements/stove-white.png",
  },
  src: "/img/aframe/adv-aframe-4.png",
  quote: {
    author: "Ксения",
    text: "<i><b>«Все отлично. Для детей это просто радость непередаваемая.</b> Они каждый раз с нетерпением ждут приезда в  наш “шалаш”».</i>",
  },
});

const featuresData = ref({
  section: "Преимущества домиков А-фрейм",
  title: `Вы получите качественный А-<br/>фрейм и существенно сэкономите<br/> бюджет`,
  features: [
    {
      title: "Единственный дом, крышу которого не нужно постоянно чистить от снега",
      imgs: [
        {
          img: "/img/aframe/frame-adv-1.png",
        },
        {
          img: "/img/aframe/frame-adv-2.png",
        },
      ],
      info: [
        {
          text: "Снег не скапливается на крыше, никакой снеговой нагрузки и травмоопасных сосулек. Весной там не собирается вода.",
          additional: {
            icon: "isolation",
            text: `За счет угла кровли в 45-70°`,
          },
        },
      ],
    },
    {
      title: "Больше воздуха и пространства <br/>" +
        "за счет панорамного остекления <br/>" +
        "и второго света в базовой планировке",
      imgs: [
        {
          img: "/img/aframe/frame-adv-3.png",
        },
      ],
      list: [
        {
          text: "Даже дом маленькой площади наполнен светом в любое время года. Это возможно благодаря большим окнам и высокому потолку.",
        },
        {
          text: "Удобен для перепланировки, внутри жилого пространства можно быстро создать любую конфигурацию комнат.",
        },
      ],
    },
    {
      title:
        "Вы получите качественный А-фрейм и существенно сэкономите бюджет",
      imgs: [
        {
          img: "/img/aframe/frame-adv-4.png",
        },
      ],
      list: [
        {
          text: "Не является капитальным объектом. Возводится без разрешения на строительство.",
        },
        {
          text: "Не требует дорогостоящего фундамента. Достаточно свай, со сроком монтажа 1-2 дня.",
        },
        {
          text: "Подходит для любых участков и грунтов.",
        },
      ],
    },
  ],
});

const info = ref({
  section: "Калькулятор",
  title:
    "Соберите дом в <br/>стиле А-фрейм <br/>под ваши <br/>параметры",
  desc: "И получите точный расчет стоимости с учетом доставки до вашего региона",
  calculators: [{
    title: "Выберите площадь дома",
    type: "img",
    content: [
      {
        title: "до 40 м2",
        img: "/img/modular-houses/calc-img-1.png",
        icon: "quiz-check-enable",
        active: true
      },
      {
        title: "40 - 56 м2",
        img: "/img/modular-houses/calc-img-2.png",
        icon: "quiz-check-disable",
        active: false
      },
      {
        title: "56 - 70 м2",
        img: "/img/modular-houses/calc-img-3.png",
        icon: "quiz-check-disable",
        active: false
      },
      {
        title: "больше 70 м2",
        img: "/img/modular-houses/calc-img-3.png",
        icon: "quiz-check-disable",
        active: false
      },
      {
        title: "больше 70 м2",
        img: "/img/modular-houses/calc-img-3.png",
        icon: "quiz-check-disable",
        active: false
      }
    ],
  },
  {
    title: "Выберите площадь дома",
    type: "text",
    content: [
      {
        title: "до 40 м2",
        desc: "Какой-то под-текст",
        img: "/img/modular-houses/calc-img-1.png",
        icon: "quiz-check-enable",
        active: true
      },
      {
        title: "40 - 56 м2",
        desc: "Какой-то под-текст",
        img: "/img/modular-houses/calc-img-2.png",
        icon: "quiz-check-disable",
        active: false
      },
      {
        title: "56 - 70 м2",
        desc: "Какой-то под-текст",
        img: "/img/modular-houses/calc-img-3.png",
        icon: "quiz-check-disable",
        active: false
      },
      {
        title: "больше 70 м2",
        desc: "Какой-то под-текст",
        img: "/img/modular-houses/calc-img-3.png",
        icon: "quiz-check-disable",
        active: false
      }
    ],
  },{
    title: "Выберите площадь дома",
    type: "img",
    content: [
      {
        title: "до 40 м2",
        img: "/img/modular-houses/calc-img-1.png",
        icon: "quiz-check-enable",
        active: true
      },
      {
        title: "40 - 56 м2",
        img: "/img/modular-houses/calc-img-2.png",
        icon: "quiz-check-disable",
        active: false
      },
      {
        title: "56 - 70 м2",
        img: "/img/modular-houses/calc-img-3.png",
        icon: "quiz-check-disable",
        active: false
      },
    ],
  },
  {
    title: "Выберите площадь дома",
    type: "text",
    content: [
      {
        title: "до 40 м2",
        desc: "Какой-то под-текст",
        img: "/img/modular-houses/calc-img-1.png",
        icon: "quiz-check-enable",
        active: true
      },
      {
        title: "40 - 56 м2",
        desc: "Какой-то под-текст",
        img: "/img/modular-houses/calc-img-2.png",
        icon: "quiz-check-disable",
        active: false
      },
      {
        title: "56 - 70 м2",
        desc: "Какой-то под-текст",
        img: "/img/modular-houses/calc-img-3.png",
        icon: "quiz-check-disable",
        active: false
      }
    ],
  },{
    title: "Выберите площадь дома",
    type: "img",
    content: [
      {
        title: "до 40 м2",
        img: "/img/modular-houses/calc-img-1.png",
        icon: "quiz-check-enable",
        active: true
      },
      {
        title: "40 - 56 м2",
        img: "/img/modular-houses/calc-img-2.png",
        icon: "quiz-check-disable",
        active: false
      },
      {
        title: "56 - 70 м2",
        img: "/img/modular-houses/calc-img-3.png",
        icon: "quiz-check-disable",
        active: false
      },
      {
        title: "больше 70 м2",
        img: "/img/modular-houses/calc-img-3.png",
        icon: "quiz-check-disable",
        active: false
      },
    ],
  },
  {
    title: "Выберите площадь дома",
    type: "text",
    content: [
      {
        title: "до 40 м2",
        desc: "Какой-то под-текст",
        img: "/img/modular-houses/calc-img-1.png",
        icon: "quiz-check-enable",
        active: true
      },
      {
        title: "40 - 56 м2",
        desc: "Какой-то под-текст",
        img: "/img/modular-houses/calc-img-2.png",
        icon: "quiz-check-disable",
        active: false
      },
      {
        title: "56 - 70 м2",
        desc: "Какой-то под-текст",
        img: "/img/modular-houses/calc-img-3.png",
        icon: "quiz-check-disable",
        active: false
      },
      {
        title: "больше 70 м2",
        desc: "Какой-то под-текст",
        img: "/img/modular-houses/calc-img-3.png",
        icon: "quiz-check-disable",
        active: false
      },
      {
        title: "56 - 70 м2",
        desc: "Какой-то под-текст",
        img: "/img/modular-houses/calc-img-3.png",
        icon: "quiz-check-disable",
        active: false
      },
      {
        title: "больше 70 м2",
        desc: "Какой-то под-текст",
        img: "/img/modular-houses/calc-img-3.png",
        icon: "quiz-check-disable",
        active: false
      }
    ],
  },
  ],
});

const advantagesData2 = ref({
  title: "Высокая двухскатная крыша <br/>" +
    "от фундамента и отсутствие фасадов",
  advantages: [
    {
      title: "Домик передается без внешней и внутренней отделки <br/>",
      img: "/img/aframe/adv-aframe-1.png",
      desc: "Наружные стены не нужно ежегодно подкрашивать.",
    },
    {
      title: "Кровля от пола до потолка<br/>",
      img: "/img/aframe/adv-aframe-2.png",
      desc: "Металлочерепица или мягкая кровля",
    },
    {
      title: "Ощущение безопасности<br/>",
      img: "/img/aframe/adv-aframe-3.png",
      desc: "Даже при панорамном остеклении за счет уникальной конструкции",

    },
  ],
});

const slides = ref({
  section: "Домики внутри",
  title: "Не нужно ждать месяцы, прежде <br/> чем начинать ремонт",
  sliders: [
    {
      desc: `<p>Текст для слайдера</p>`,
      modalType: "popup",
      modalData: {text: ''},
      img: "/img/aframe/bg-slider.png",
    },
    {
      desc: `<p>Текст для слайдера 2</p>`,
      modalType: "popup",
      modalData: {text: ''},
      img: "/img/aframe/bg-slider.png",
    },
    {
      desc: `<p>Текст для слайдера 3</p>`,
      modalType: "popup",
      modalData: {text: ''},
      img: "/img/aframe/bg-slider.png",
    }
    ]
})

const techData2 = ref({
  title:
    "Применяем каркасную технологию производства",
  banner: {
    title: "Каркас дома изготовим на собственном производстве\n" +
      "в течение 2х месяцев",
    videoLink: "https://youtu.be/yELJDIN1w6Q",
    img: "/img/aframe/aframe.png",
  },
  src: "/img/aframe/adv-aframe-5.png",
});

const sectionFormData2 = ref({
  img: "/img/aframe/bg-aframe-form-2.png",
  title: "Дома в стиле А-фрейм <br/> для бизнеса",
  subtitle:
    "Стильные быстровозводимые домики —<br/>" +
    "тренд последних лет. <br/><br/>" +
    "Откройте глэмпинг на живописном берегу озера или в чаще леса и <br/> принимайте гостей круглый год",
  form: {
    title: "Оставьте свои контакты и мы пришлем вам выгодное коммерческое предложение",
    btnName: "Получить Коммерческое",
    policyLink: "#",
  },
});

const communicationTabs2 = shallowRef({
  currentTab: WhatsAppTab,
  tabs: [
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

const mountingData = ref({
  name: "Доставка",
  title:
    "Доставляем своим транспортом <span>дешевле, чем конкуренты</span>",
  date: {
    text: "Свой автопарк: низкорамные тралы, <br /> еврофуры и манипуляторы",
    date: "",
  },

  img: "/img/mounting/delivery-img.png",
});

const sectionComplexData = ref({
  complexList: [
    {
      img: "/img/elements/house.svg",
      desc: "Дачный домик из мини-бруса",
    },
    {
      img: "/img/elements/bathouse-barrel.svg",
      desc: "Баня-бочка",
    },
    {
      img: "/img/elements/gazebo.svg",
      desc: "Беседка",
    },
  ],
  slides: [
    {
      img: "/img/complex/image-1.jpg",
      desc: "Баня мечты",
    },
    {
      img: "/img/complex/image-1.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam purus, mollis quis facilisis in, faucibus at elit. Nullam vulputate congue magna in dapibus. Aliquam hendrerit odio est. Vivamus porta, odio eu pulvinar fringilla, dui est ultrices risus, sit amet elementum leo lacus sit amet enim. Aenean dictum, nisi vel consequat imperdiet, lacus ligula tincidunt diam, et molestie neque sem sit amet dolor. Ut nulla velit, mattis quis nisi nec, condimentum tempor mi. Duis feugiat maximus ipsum viverra pharetra.",
    },
    {
      img: "/img/complex/image-1.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam purus, mollis quis facilisis in, faucibus at elit.",
    },
  ],
});

const creditData = ref({
  title: "Возможна<br/>покупка в кредит",
  img: {
    img: "/img/credit/image-1.jpg",
    imgSM: "/img/credit/image-2.jpg",
  },
  slides: [
    {
      img: "/img/bank-partners/tinkoff.png",
      name: "Тинькофф",
    },
    {
      img: "/img/bank-partners/pochta-bank.png",
      name: "Почта Банк",
    },
    {
      img: "/img/bank-partners/credit-europe-bank.png",
      name: "Кредит Европа Банк",
    },
    {
      img: "/img/bank-partners/otp-bank.png",
      name: "ОТП Банк",
    },
    {
      img: "/img/bank-partners/mts-bank.png",
      name: "МТС Банк",
    },
    {
      img: "/img/bank-partners/tinkoff.png",
      name: "Тинькофф",
    },
    {
      img: "/img/bank-partners/pochta-bank.png",
      name: "Почта Банк",
    },
    {
      img: "/img/bank-partners/credit-europe-bank.png",
      name: "Кредит Европа Банк",
    },
    {
      img: "/img/bank-partners/otp-bank.png",
      name: "ОТП Банк",
    },
    {
      img: "/img/bank-partners/mts-bank.png",
      name: "МТС Банк",
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

const stepsData = ref({
  title: "Работаем<br/> по договору<br/> с предоплатой<br/> 30%",
  additional:
    "Для иногородних клиентов <span>заключаем договор онлайн</span>, обмениваемся оригиналами при установке бани",
  steps: [
    {
      desc: "Отвечаем на все вопросы, обсуждаем детали, заключаем договор",
    },
    {
      desc: "Вы оплачиваете 30% стоимости дома и мы начинаем производство",
    },
    {
      desc: "При готовности дома или модулей мы предоставляем фото и видео — вы оплачиваете 60% стоимости",
    },
    {
      desc: "По завершению установки, проверки качества работ и соответствие их договору вы оплачиваете оставшиеся 10% стоимости",
    },
  ],
  banner: {
    title:
      "Покупая дом в стиле А-Фрейм <br />" +
      "у Wood and Life, вы будете <br />" +
      "заранее знать точную итоговую стоимость дома",
    desc: "Мы закрепляем сумму в договоре и в будущем не требуем доплат на непредвиденные расходы",
    img: "/img/aframe/docs.png",
  },
});

const faqData = ref({
  banner: {
    avatars: [
      {
        img: "/img/avatars/image-3.jpg",
        name: "Люся Сквозных",
      },
      {
        img: "/img/avatars/image-4.jpg",
        name: "Артемка Немой",
      },
    ],
  },
  faqs: [
    {
      title: "Кто делает фундамент под домик?",
      desc: "Рабочие проживают в арендованном жилье в поселке, где возводится дом, или в ближайшем населенном пункте. Мы не доставляем хозяевам дачи хлопот и неудобств :)",
    },
    {
      title: "Возможна ли установка дома зимой?",
      desc: "Рабочие проживают в арендованном жилье в поселке, где возводится дом, или в ближайшем населенном пункте. Мы не доставляем хозяевам дачи хлопот и неудобств :)",
    },
    {
      title: "Что лучше: домик из мини-бруса или модульный дом?",
      desc: "Рабочие проживают в арендованном жилье в поселке, где возводится дом, или в ближайшем населенном пункте. Мы не доставляем хозяевам дачи хлопот и неудобств :)",
    },
    {
      title: "Сколько времени будет изготавливаться дом?",
      desc: "Рабочие проживают в арендованном жилье в поселке, где возводится дом, или в ближайшем населенном пункте. Мы не доставляем хозяевам дачи хлопот и неудобств :)",
    },
    {
      title: "Каким транспортом доставляете дома на участок?",
      desc: "Рабочие проживают в арендованном жилье в поселке, где возводится дом, или в ближайшем населенном пункте. Мы не доставляем хозяевам дачи хлопот и неудобств :)",
    },
    {
      title: "Где проживают рабочие во время монтажа дома?",
      desc: "Рабочие проживают в арендованном жилье в поселке, где возводится дом, или в ближайшем населенном пункте. Мы не доставляем хозяевам дачи хлопот и неудобств :)",
    },
    {
      title:
        "Достаточно ли проектного утепления ограждающих конструкций (пол, стены, кровля) для круглогодичного проживания?",
      desc: "Рабочие проживают в арендованном жилье в поселке, где возводится дом, или в ближайшем населенном пункте. Мы не доставляем хозяевам дачи хлопот и неудобств :)",
    },
    {
      title: "Какие требования по доставке и монтажу на участке?",
      desc: "Рабочие проживают в арендованном жилье в поселке, где возводится дом, или в ближайшем населенном пункте. Мы не доставляем хозяевам дачи хлопот и неудобств :)",
    },
    {
      title: "Каков срок службы дома?",
      desc: "Рабочие проживают в арендованном жилье в поселке, где возводится дом, или в ближайшем населенном пункте. Мы не доставляем хозяевам дачи хлопот и неудобств :)",
    },
    {
      title: "Нужно ли регистрировать дачные домики?",
      desc: "Рабочие проживают в арендованном жилье в поселке, где возводится дом, или в ближайшем населенном пункте. Мы не доставляем хозяевам дачи хлопот и неудобств :)",
    },
    {
      title: "Сколько времени будет изготавливаться дом?",
      desc: "Рабочие проживают в арендованном жилье в поселке, где возводится дом, или в ближайшем населенном пункте. Мы не доставляем хозяевам дачи хлопот и неудобств :)",
    },
    {
      title: "Есть ли у вас рассрочка? Можно ли оформить покупку дома в кредит?",
      desc: "Рабочие проживают в арендованном жилье в поселке, где возводится дом, или в ближайшем населенном пункте. Мы не доставляем хозяевам дачи хлопот и неудобств :)",
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

</script>

<style scoped>

</style>