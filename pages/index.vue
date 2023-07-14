<template>
  <div>
    <SectionHomeHero />
    <SectionAdvantages :data="advantagesData1" />
    <SectionProjects id="projects" :data="projectsData" />
    <SectionForm :data="sectionFormData1" :tabs="communicationTabs" />
    <SectionInfoSimple id="technologies" :data="techData">
      <template #banner>
        <ModuleBanner :data="techData.banner" />
      </template>
      <template #desc>
        <p>
          <b>Быстрый прогрев происходит из-за округлой формы бани,</b>
          так как не надо отапливать углы. А
          <span class="tooltip-custom white" tooltip-content="Печь повышенной мощности - lorem ipsum dolor sit amet sad">печь повышенной мощности</span>
          сводит к минимуму теплопотери и уменьшает расход поленьев.
        </p>
        <p><b>Жарко будет и зимой!</b></p>
      </template>
    </SectionInfoSimple>
    <SectionAdvantages :data="advantagesData2" />
    <SectionBathouseCalculator :contact-tabs="communicationTabsExpanded" />
    <SectionFeatures :data="featuresData" />
    <SectionReviews id="reviews" />
    <SectionForm :data="sectionFormData2" :tabs="communicationTabs" />
    <SectionMounting id="mounting" :data="mountingData" />
    <SectionDelivery id="delivery" />
    <SectionComplex :data="sectionComplexData" />
    <SectionCredit id="credit" :data="creditData" />
    <SectionProduction id="production" :data="productionData" />
    <SectionSteps id="payment" :data="stepsData" :banner="stepsData.banner" />
    <SectionFAQ id="faq" :data="faqData" />
    <LazySectionMap :data="mapData" :shops="mapData.shops" />
    <SectionFormExpanded :data="sectionFormExpandedData" :tabs="communicationTabsExpanded" />
    <VueVideoPreview ref="videopreview" :data="previewData" />
    <!-- <ModalTooltip 
    :show="showTooltip" :text="textTooltip" :img="imgTooltip" :tooltip-x="tooltipX" :tooltip-y="tooltipY"
      :border="border" /> -->
    <ModalPopup />
  </div>
</template>

<script setup lang="ts">
import PhoneTab from "@/components/Part/Form/Communication/FormCommunicationTabPhone.vue";
import TelegramTab from "@/components/Part/Form/Communication/FormCommunicationTabTelegram.vue";
import WhatsAppTab from "@/components/Part/Form/Communication/FormCommunicationTabWhatsApp.vue";

import VueVideoPreview from "~/components/Module/VueVideoPreview.vue";
import {ICommunicationTabsExpanded} from "~/dto/interfaces/tabs";


// const border = ref('')
// const showTooltip = ref(false)
// const textTooltip = ref('')
// const imgTooltip = ref('')
// const tooltipX = ref(0)
// const tooltipY = ref(0)

const projectsData = ref({
  sectionTitle: "Проекты бань",
  title: "Хотите париться в новой баньке уже через неделю?",
  subtitle: "30 разных бань всегда в наличии",

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

const sectionFormData1 = ref({
  img: "/img/forms/image-1.jpg",
  title: "Получите полный каталог бань Wood and Life",
  subtitle: "Более 200 типов бань на любой вкус",
  form: {
    title: "Куда прислать вам каталог?",
    btnName: "Получить полный каталог",
    policyLink: "#",
  },
});

const sectionFormData2 = ref({
  img: "/img/forms/image-2.jpg",
  title: "Зафиксируйте свою скидку до <span>30 000 руб.</span>",
  subtitle:
    "Забронируем на ваш номер скидку и пришлем уведомление в удобный мессенджер!",
  form: {
    title: "Куда удобнее отправить скидку?",
    btnName: "Зафиксировать свою скидку",
    policyLink: "#",
  },
});

const techData = ref({
  sectionName: "Технологии и материалы",
  title:
    "Бани-бочки<br/> Wood and Life быстро<br/> прогреваются и&nbsp;медленно остывают",
  banner: {
    title: "Прогреваются за 20–30 минут — до 95С°",
    subtitle: "В теплое время года",
    videoLink: "https://youtu.be/yELJDIN1w6Q",
    img: "/img/elements/stove-white.png",
  },
  src: "/img/elements/barell.png",
  quote: {
    author: "Андрей",
    text: "<i><b>«Наша баня-бочка не первый год проходит испытания морозами!</b> Паримся всей семьей и при температуре на улице -20, и при -30».</i>",
  },
});

const mountingData = ref({
  name: "Установка",
  title:
    "Соберем баню на любом месте вашего участка или <span>привезем готовую</span>",
  date: {
    text: "В зависимости от размера бани <br/>установка занимает",
    date: "1–3 дня",
  },
  info: {
    desc: "Проживание и питание монтажной бригады за счет компании.<br/> С вас — электричество и заранее подготовленная площадка",
    additional:
      "Рекомендуем использовать песок и щебень. Он выполняет роль дренажа — не будет грязи под баней, так как вся вода впитается в песок",
  },
  img: "/img/mounting/image-1.jpg",
});

const featuresData = ref({
  title: `Прослужат более <span class="tooltip-custom" tooltip-content="<p>При правильной эксплуатации и регулярном уходе</p>">50 лет</span>`,
  features: [
    {
      title: "Прочная древесина",
      imgs: [
        {
          img: "/img/features/cedar.jpg",
          text: "Кедр",
        },
        {
          img: "/img/features/fir.jpg",
          text: "Ель",
        },
      ],
      info: [
        {
          text: `<b>Строим из древесины кедра и ели после <span class="tooltip-custom" tooltip-content="
            <p>Лишняя влага удаляется из древесины с помощью специального термообрабатывающего оборудования"</p> камерной&nbsp;сушки<span/></b> — у них высокая прочность и они долго сохраняют тепло`,
          additional: {
            icon: "drop",
            text: `Лишняя влага удаляется из древесины с помощью специального термообрабатывающего оборудования`,
          },
        },
        {
          text: "Бани из ели дешевле кедровых на 15%, так как немного источают смолу ",
        },
      ],
    },
    {
      title: "Используем бесщелевую технологию «лунный паз»",
      imgs: [
        {
          img: "/img/features/tech.jpg",
        },
      ],
      list: [
        {
          text: "Доски скрепляем между собой нержавеющими оцинкованными шурупами",
        },
        {
          text: "Для надежности и жесткости дополнительно прикручиваем каждую доску к стенке бани",
        },
      ],
    },
    {
      title:
        "Сами делаем для бани двери и окна из деревянного массива и тщательно проклеиваем все стыковые соединения",
      imgs: [
        {
          img: "/img/features/wood.jpg",
        },
      ],
      banner: {
        title:
          "Ваша баня будет надежно защищена от дождя даже через 20 лет использования",
        videoLink: "https://youtu.be/b9McVO9hpUE",
        img: "/img/elements/umbrella.svg",
      },
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

const stepsData = ref({
  title: "Работаем<br/> по договору<br/> с предоплатой<br/> 10 000 руб.",
  additional:
    "Для иногородних клиентов <span>заключаем договор онлайн</span>, обмениваемся оригиналами при установке бани",
  steps: [
    {
      desc: "Отвечаем на все вопросы, обсуждаем детали, заключаем договор",
    },
    {
      desc: "Вы платите 10 000 руб. и мы начинаем производство",
    },
    {
      desc: "При готовности бани мы предоставляем фото и видео, а после отправляем в ваш регион",
    },
    {
      desc: "По завершению установки, проверки качества работ и соответствие их договору вы платите оставшуюся сумму",
    },
  ],
  banner: {
    title:
      "Покупая баню-бочку<br/> у Wood and Life, вы будете заранее<br/> знать точную итоговую стоимость",
    desc: "Мы закрепляем сумму в договоре и в будущем не требуем доплат на непредвиденные расходы",
    img: "/img/steps/bathouse.png",
  },
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
    img: "/img/forms/form-expanded.jpg",
    imgMd: "/img/forms/form-expanded-md.jpg",
  },
  title: "Расскажите, о какой бане вы мечтаете",
  subtitle:
    "Мы сориентируем вас по вариантам бань, которые есть в наличии или которые мы можем построить для вас в самое ближайшее время",
  form: {
    title: "Какой способ связи вам удобен?",
    btnName: "Рассказать, о какой бане я мечтаю",
    policyLink: "#",
    textarea: {
      name: "",
      placeholder: "Расскажите, о какой бане вы мечтаете",
    },
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
      title: "Как быстро нагревается баня-бочка?",
      desc: "Под баню-бочку не требуется фундамент. Мы устанавливаем ее на бетонные блоки, которые входят в стоимость. От вас требуется ровный грунт или площадка из песка и щебня, которая будет служить в качестве дренажа для воды, вытекающей из бани.",
    },
    {
      title: "Сколько времени бочка-баня сохраняет тепло?",
      desc: "Под баню-бочку не требуется фундамент. Мы устанавливаем ее на бетонные блоки, которые входят в стоимость. От вас требуется ровный грунт или площадка из песка и щебня, которая будет служить в качестве дренажа для воды, вытекающей из бани.",
    },
    {
      title: "Как обрабатывается баня-бочка изнутри?",
      desc: "Под баню-бочку не требуется фундамент. Мы устанавливаем ее на бетонные блоки, которые входят в стоимость. От вас требуется ровный грунт или площадка из песка и щебня, которая будет служить в качестве дренажа для воды, вытекающей из бани.",
    },
    {
      title: "Как подготовить место для установки бани-бочки?",
      desc: "Под баню-бочку не требуется фундамент. Мы устанавливаем ее на бетонные блоки, которые входят в стоимость. От вас требуется ровный грунт или площадка из песка и щебня, которая будет служить в качестве дренажа для воды, вытекающей из бани.",
    },
    {
      title: "Сколько прослужит баня-бочка?",
      desc: "Под баню-бочку не требуется фундамент. Мы устанавливаем ее на бетонные блоки, которые входят в стоимость. От вас требуется ровный грунт или площадка из песка и щебня, которая будет служить в качестве дренажа для воды, вытекающей из бани.",
    },
    {
      title: "Сколько времени будет изготавливаться баня-бочка?",
      desc: "Под баню-бочку не требуется фундамент. Мы устанавливаем ее на бетонные блоки, которые входят в стоимость. От вас требуется ровный грунт или площадка из песка и щебня, которая будет служить в качестве дренажа для воды, вытекающей из бани.",
    },
    {
      title:
        "Есть ли у вас рассрочка? Можно ли оформить покупку бани в кредит?",
      desc: "Под баню-бочку не требуется фундамент. Мы устанавливаем ее на бетонные блоки, которые входят в стоимость. От вас требуется ровный грунт или площадка из песка и щебня, которая будет служить в качестве дренажа для воды, вытекающей из бани.",
    },
    {
      title: "Нужно ли регистрировать баню-бочку?",
      desc: "Под баню-бочку не требуется фундамент. Мы устанавливаем ее на бетонные блоки, которые входят в стоимость. От вас требуется ровный грунт или площадка из песка и щебня, которая будет служить в качестве дренажа для воды, вытекающей из бани.",
    },
    {
      title: "Можно ли перемещать и перевозить бани-бочки на колесах?",
      desc: "Под баню-бочку не требуется фундамент. Мы устанавливаем ее на бетонные блоки, которые входят в стоимость. От вас требуется ровный грунт или площадка из песка и щебня, которая будет служить в качестве дренажа для воды, вытекающей из бани.",
    },
  ],
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

const advantagesData1 = ref({
  advantages: [
    {
      icon: "heating-time",
      title: "Прогреваются<br/>за 20–30 минут",
      img: "/img/bathouse-advantages/image-1.jpg",
    },
    {
      icon: "foundation-installation",
      title: "Не требуют установки<br/>на фундамент",
      img: "/img/bathouse-advantages/image-2.jpg",
    },
    {
      icon: "bathing",
      title: "Можно использовать сразу после установки",
      img: "/img/bathouse-advantages/image-3.jpg",
    },
  ],
});

const advantagesData2 = ref({
  title: "Не гниют и полностью просыхают при любой погоде",
  advantages: [
    {
      title: "Производим по финской технологии в одну толщину доски",
      desc: "Такие бани быстрее высыхают",
      img: "/img/bathouse-advantages/image-4.jpg",
    },
    {
      title: "Обрабатываем снаружи в 2 слоя красящим лаком-антисептиком",
      desc: "Защищает от грибка и плесени",
      img: "/img/bathouse-advantages/image-5.jpg",
    },
    {
      title: "Устанавливаем на подставки",
      desc: "Баня проветривается и продувается со всех сторон, поэтому влага нигде не скапливается. В отличие от квадратных бань, которые со временем темнеют и гниют в углах",
      img: "/img/bathouse-advantages/image-6.jpg",
    },
  ],
});

const previewData = ref({
  videoLink: "https://youtu.be/tAGnKpE4NCI",
  text: "Узнайте о Wood and Life за 3 минуты",
  img: '/img/bathouse-advantages/image-4.jpg'
})






// меняем урл в адресной строке в зависимости от позиции окна
// дебаунс для избежания ошибки - частые обращения к window.history на прослушивании скролла
let currentSectionId = '';
const scroll = debounce(() => { // закидываем в дебаунс, чтобы не было слишком частых обращения к window.history
  // Получаем позиции окна
  // let currentSectionId = '';

  const windowPosition = {
    top: window.pageYOffset,
    left: window.pageXOffset,
    right: window.pageXOffset + document.documentElement.clientWidth,
    bottom: window.pageYOffset + document.documentElement.clientHeight
  };

  Array.from(document.querySelectorAll('.bathouse-calculator__params')).forEach((el: Element) => {
    const targetPosition = {
      top: window.pageYOffset + el.getBoundingClientRect().top,
      left: window.pageXOffset + el.getBoundingClientRect().left,
      right: window.pageXOffset + el.getBoundingClientRect().right,
      bottom: window.pageYOffset + el.getBoundingClientRect().bottom
    };
   
    if (
      targetPosition.bottom > windowPosition.top - window.innerHeight &&
      targetPosition.top < windowPosition.bottom - window.innerHeight 
    ) 
    {
      currentSectionId = el.className;
    }

    else 
      {
        currentSectionId = ''
      }


  });

  updateHistory(currentSectionId);
}, 100);

function updateHistory(currentSectionId: string): void {


 

  if (currentSectionId === 'bathouse-calculator__params') {
   
    window.history.replaceState(null, '', '#bathouse-calculator');
      }
  if (currentSectionId !== 'bathouse-calculator__params') {  

    window.history.replaceState(null, '', '/');
  }
}

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

onMounted(() => {
  document.addEventListener('scroll', scroll);

})

onUnmounted(() => {
  document.removeEventListener('scroll', scroll);

})


</script>

<style scoped></style>
