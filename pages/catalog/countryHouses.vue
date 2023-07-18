<template>
  <div>
    <SectionHomeHero />
    <SectionAdvantages :data="advantagesData1" />
    <SectionProjects id="projects" :data="projectsData" />
    <SectionForm :data="sectionFormData1" :tabs="communicationTabs" />
    <SectionInfoSimple id="technologies" :data="techData">
      <template #desc>
        <p>
          Это строганая профилированная строительная доска
          из высушенной древесины хвойных пород.
          <br>
          <br>
          Края у мини-бруса имеют замковую систему «шип-паз»,
          что обеспечивает очень плотное соединение и сборку конструкции за 1-3 дня.
          <br>
          <br>
          <b>Дом строим в одну доску толщиной 45 мм. </b>
        </p>
      </template>
    </SectionInfoSimple>
    <SectionAdvantagesHouses />
    <SectionHousesCalc :data="info"/>
    <SectionHousesInterior :data="slides" />
    <SectionAdvantages id="advantagesInterior" :data="advantagesData2" />
    <SectionReviews id="reviews" />
    <SectionForm :data="sectionFormData2" :tabs="communicationTabs" />
    <SectionMounting id="mounting" :data="mountingData" />
    <SectionComplex id="complex" :data="sectionComplexData" />
    <SectionCredit id="credit" :data="creditData" />
    <SectionProduction id="production" :data="productionData" />
    <SectionSteps id="payment" :data="stepsData" :banner="stepsData.banner" />
    <SectionFAQ id="faq" :data="faqData" />
    <LazySectionMap :data="mapData" :shops="mapData.shops" />
    <SectionFormExpanded :data="sectionFormExpandedData" :tabs="communicationTabsExpanded" />


    <!--  <section class="pb-48 ">-->
    <!--    <div class="container">-->
    <!--      <div class="w-full">-->
    <!--        <h2 class="section-form__title mt-12 mb-36">Комплектация домика из мини-бруса</h2>-->
    <!--      </div>-->
    <!--      <div class="grid grid-cols-3 gap-24 ">-->
    <!--        <div class="relative col-span-1">-->
    <!--          <img src="/img/modular-houses/compl-1.png" alt="">-->
    <!--          <div class="absolute inset-12 flex flex-col justify-end">-->
    <!--            <div class="text-7xl font-medium text-[#fff] mb-4">Отделка</div>-->
    <!--            <div class="text-3xl text-[#fff]">Домик передается без внешней и внутренней отделки</div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="relative col-span-1">-->
    <!--          <img src="/img/modular-houses/compl-2.png" alt="">-->
    <!--          <div class="absolute inset-12 flex flex-col justify-end">-->
    <!--            <div class="text-7xl font-medium text-[#fff] mb-4">Обработка</div>-->
    <!--            <div class="text-3xl text-[#fff]">Огне-био защита каркаса</div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="relative col-span-1">-->
    <!--          <img src="/img/modular-houses/compl-3.png" alt="">-->
    <!--          <div class="absolute inset-12 flex flex-col justify-end">-->
    <!--            <div class="text-7xl font-medium text-[#fff] mb-4">Коммуникации</div>-->
    <!--            <div class="text-3xl text-[#fff]">Точки вывода под сантехнику. Накладная электрика</div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--  </section>-->
  </div>
</template>

<style>
.background-linear-gradient-black {
  background: var(--bg, linear-gradient(180deg, #171717 0%, #1F1F1F 100%));
}
.projects-tabs {
  display: none!important;
}
.label-step {
  box-shadow: 0px 12px 24px 12px rgba(145, 158, 171, 0.24), 0px 0px 2px 0px rgba(145, 158, 171, 0.24);
}
.label-step:after {
  content: "";
  position: absolute;
  top: -1px;
  border-top: 14px solid transparent;
  border-bottom: 13px solid transparent;
  border-right: 13px solid transparent;
  border-left: 8px solid #FFFFFF;
  right: -20px;
}
h2.section-advantages__title {
  max-width: 100%!important;
}
#advantagesInterior.section-advantages {
  border-top: none!important;
  padding: 0 0 12rem!important;
}
#complex {
  border-top: 1px solid var(--gray-200);
}
</style>
<script setup lang="ts">
import {ref} from 'vue';
import PhoneTab from "@/components/Part/Form/Communication/FormCommunicationTabPhone.vue";
import TelegramTab from "@/components/Part/Form/Communication/FormCommunicationTabTelegram.vue";
import WhatsAppTab from "@/components/Part/Form/Communication/FormCommunicationTabWhatsApp.vue";
import { ICommunicationTabsExpanded } from "~/dto/interfaces/tabs";
import SectionAdvantagesHouses from "~/components/Section/SectionAdvantagesHouses.vue";
import SectionHousesCalc from "~/components/Section/SectionHousesCalc.vue";
import SectionHousesInterior from "~/components/Section/SectionHousesInterior.vue";
import SectionAdvantages from "~/components/Section/SectionAdvantages.vue";



const techData = ref({
  sectionName: "Что такое мини-брус",
  title:
    "Мини-брус",
  banner: {
    title: "Прогреваются за 20–30 минут — до 95С°",
    subtitle: "В теплое время года",
    videoLink: "https://youtu.be/yELJDIN1w6Q",
    img: "/img/elements/stove-white.png",
  },
  src : "/img/elements/brus.png",
});
const info = ref({
  section: "Калькулятор",
  title:
    "Подберите домик под ваши параметры",
  desc: "И рассчитайте его стоимость с доставкой и сборкой на участке",
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

const advantagesData1 = ref({
  Data: [
    {
      title: 'Добрый день здравствуйте',
    }
  ],
  advantages: [
    {
      icon: "promotion",
      title: "Цена 1 м² от 15 000 руб.<br/> (До 40 м²)",
      img: "/img/modular-houses/1.png",
      desc: "Более чем в 2 раза дешевле домов <br/>из массива дерева",
    },
    {
      icon: "foundation",
      title: "Капитальный бетонный<br/>" +
        "фундамент делать<br/>" +
        "не нужно",
      img: "/img/modular-houses/2.png",
    },
    {
      icon: "delivery",
      title: "Доставляем и собираем<br/>" +
        "домики на участке<br/> круглый год",
      img: "/img/modular-houses/3.png",
    },
  ],
});

const advantagesData2 = ref({
  title: "Комплектация домика из мини-бруса",
  advantages: [
    {
      title: "Отделка<br/>",
      img: "/img/modular-houses/compl-1.png",
      desc: "Домик передается без внешней и внутренней отделки",
    },
    {
      title: "Обработка<br/>",
      img: "/img/modular-houses/compl-2.png",
      desc: "Огне-био защита каркаса",
    },
    {
      title: "Коммуникации<br/>",
      img: "/img/modular-houses/compl-3.png",
      desc: "Точки вывода под сантехнику. Накладная электрика",

    },
  ],
});

const slides = ref({
  section: "Домики внутри",
  title: "Можно сразу заехать и жить",
  sliders: [
    {
      desc: `<p>Текст для слайдера</p>`,
      modalType: "popup",
      modalData: {text: ''},
      img: "/img/modular-houses/img-slider-houses.png",
    },
    {
      desc: `<p>Текст для слайдера 2</p>`,
      modalType: "popup",
      modalData: {text: ''},
      img: "/img/modular-houses/img-slider-houses.png",
    },
    {
      desc: `<p>Текст для слайдера 3</p>`,
      modalType: "popup",
      modalData: {text: ''},
      img: "/img/modular-houses/img-slider-houses.png",
    }
  ]
})

const projectsData = ref({
  sectionTitle: "Проекты Домиков из мини-бруса",
  title: "Предназначены для проживания с весны до осени, а с печкой или обогревателем в них будет тепло и зимой",
  subtitle: "",
});

const sectionFormData1 = ref({
  img: "/img/forms/form-bg.png",
  title: "Получите детальный расчет стоимости дачного домика, который подойдет именно вам",
  subtitle: "Свяжемся с вами для уточнения деталей и пришлем \n" +
    "расчет стоимости",
  form: {
    title: "Какой способ связи вам удобен?",
    btnName: "Получить полный каталог",
    policyLink: "#",
  },
});
const sectionFormData2 = ref({
  img: "/img/forms/bg-form-houses.png",
  title: "Получите </br>" +
    "3 варианта сметы </br>" +
    "и скидку 10 000 руб. </br>" +
    "на производство дачного домика </br>" +
    "по вашим параметрам",
  subtitle:
    "Свяжемся с вами для уточнения деталей и пришлем <br/> варианты смет",
  form: {
    title: "Какой способ связи вам удобен?",
    btnName: "Получить варианты сметы и скидку",
    policyLink: "#",
  },
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
      "Покупая готовый домик <br />" +
      "у Wood and Life, вы будете <br />" +
      "заранее знать точную итоговую стоимость дома",
    desc: "Мы закрепляем сумму в договоре и в будущем не требуем доплат на непредвиденные расходы",
    img: "/img/steps/houses.png",
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
  title: "Расскажите, о каком дачном домике вы мечтаете",
  subtitle:
    "Мы сориентируем вас по вариантам домиков, которые есть в наличии или которые мы можем построить для вас в самое ближайшее время",
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
</script>
<style>
.info-simple .info-simple__content>.info-simple__col:first-child {
  order: 2;
}
</style>