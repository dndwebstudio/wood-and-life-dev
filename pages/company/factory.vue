<template>
  <div class="page--factory">
    <HeaderContainer :title="'Производство'" :classString="'text-6xl sm:text-9xl pt-24'"/>
    <SectionInfoSimple id="technologies" :data="techData">
      <template #banner>
        <ModuleBanner :data="techData.banner" />
      </template>
      <template #desc>
        <p>
          Одним из главных преимуществ собственного производства изделий из дерева является возможность контроля качества продукции на каждом этапе производства. Это позволяет обеспечивать высокое качество готовых изделий и удовлетворять потребности клиентов.
        </p>
        <p><b>9 лет опыта и собственные технологии</b></p>
      </template>
    </SectionInfoSimple>
    <SectionAdvantages :data="advantagesData1" />
    <SectionFeatures :data="featuresData" />
    <SectionHousesInterior :data="slides" />
    <section class="pt-[40px] md:pt-24 lg:pt-48 bg-[#fff] mb-[40px] md:mb-[120px]">
      <div class="container">
        <div class="mb-[40px] md:mb-[64px] uppercase text-[14px] 2xl:text-[18px] leading-[120%] font-bold text-[#838383]">Объемы производства</div>
        <div class="flex gap-12 flex-col lg:flex-row">
          <div class="w-full lg:w-1/2 flex flex-col justify-center">
            <div class="text-[#009767] text-[28px] md:text-[46px] xl:text-[64px] mb-[32px] xl:mb-[64px] font-medium leading-[100%]">
              Оптимизировали расходы<span class="text-black">, чтобы сделать продукцию еще более доступной для каждого</span>
            </div>
            <div class="text-[20px] md:text-[32px] font-medium leading-[110%] mb-[24px] xl:mb-[48px]">
              Закупаем сырье большими партиями и в межсезонье, что позволяет оптимизировать себестоимость готовой продукции
            </div>
            <div class="flex flex-col gap-[24px]">
              <div class="text-[#292929] text-[18px] md:text-[24px] leading-[120%]">
                Повышение эффективности использования оборудования
              </div>
              <div class="flex text-[#292929] text-[24px] gap-4">
                <svg class="shrink-0" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 4.83447L2 6.83447C2 9.04361 3.79086 10.8345 6 10.8345L17 10.8345" stroke="#838383"/>
                  <path d="M12 5.83447L17 10.8345L12 15.8345" stroke="#838383"/>
                </svg>
                <div class="text-[16px] text-[#838383] leading-[120%]">Использование специализированных инструментов и оборудования значительно ускоряет процесс обработки древесины и снижает затраты на труд</div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2">
            <img class="max-h-[776px] w-full h-full object-cover aspect-square" src="/public/img/factory/img.png" alt="">
          </div>
        </div>
      </div>
    </section>
<!--    <SectionInfoSimple class="techData2" id="technologies" :data="techData2">-->
<!--      <template #desc>-->
<!--        <p class="lg:pt-[64px] pt-[0]" style="">-->
<!--          <b class="text-[32px] leading-9 font-medium lg:text-[32px]">Закупаем сырье большими партиями и в<br/>-->
<!--             межсезонье, что позволяет оптимизировать<br/>-->
<!--             себестоимость готовой продукции</b><div class="lg:pt-[48px] pt-[0]" style="font-size: 24px; padding-bottom: 24px;">Повышение эффективности использования оборудования       </div></p>-->
<!--            <div class="flex gap-4 text-[16px] leading-[19px]">-->
<!--              <div>-->
<!--                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">-->
<!--                <path d="M2 4.83447L2 6.83447C2 9.04361 3.79086 10.8345 6 10.8345L17 10.8345" stroke="#838383"/>-->
<!--                <path d="M12 5.83447L17 10.8345L12 15.8345" stroke="#838383"/>-->
<!--                </svg>-->
<!--              </div>-->
<!--              <div style="width: 100%;"><p class="lg:text-[16px] ">Использование специализированных инструментов и оборудования значительно ускоряет <br>-->
<!--                      процесс обработки древесины и снижает затраты на труд</p></div>-->
<!--            </div>-->
<!--        </template>-->
<!--    </SectionInfoSimple>-->
    <SectionChoose :data="choose" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HeaderContainer from "~/components/Ui/HeaderContainer.vue";

const techData = ref({
  // sectionName: "Технологии и материалы",
  title:
    "5 500 м² площадь <br/>производственных <br/>цехов",
  banner: {
    title: "Лучше один раз увидеть",
    subtitle: "4 минуты видео расскажут все о нашем производстве",
    videoLink: "https://youtu.be/yELJDIN1w6Q",
    img: "/img/elements/stove-white.png",
  },
  src: "/img/factory/1.png",
  quote: {
    author: "Евгений Киселев, Генеральный директор Wood and Life",
    text: "<i><b>“Несем ответственность за каждый объект:</b> с момента заключения договора до установки и в течение всего гарантийного срока.”</i>",
  },
});

const advantagesData1 = ref({
  title: "Изготавливаем с точность до <br> десятых долей миллиметра",
  advantages: [
    {
      // icon: "heating-time",
      title: "Современные ЧПУ станки",
      desc: "Точность и высокая производительность",
      img: "/img/factory/2.png",
    },
    {
      // icon: "foundation-installation",
      title: "Обрабатываем снаружи <br/>в 2 слоя красящим лаком-<br/>антисептиком",
      desc: "Защищает от грибка и плесени",
      img: "/img/factory/3.png",
    },
    {
      // icon: "bathing",
      title: "Крепежные элементы",
      desc: "Саморезы, гвозди, стяжная лента все это <br/>изготовлено из нержавеющих материалов",
      img: "/img/factory/4.png",
    },
  ],
});

const featuresData = ref({
  // section: "Преимущества домиков А-фрейм",
  title: `Где мы изготавливаем?`,
  features: [
    {
      title: "Производство расположено в Воронеже",
      imgs: [
        {
          img: "/img/factory/5.png",
        },
        {
          img: "/img/factory/6.png",
        },
      ],
      info: [
        {
          text: "Преимущество собственного производства изделий из дерева – это возможность создания уникальных, индивидуальных изделий, которые будут отвечать требованиям конкретного заказчика.",
          additional: {
            icon: "isolation",
            text: `Мы можем контролировать затраты и уменьшать издержки. Тем самым предлагаем выгодные цены на нашу продукцию, не уступая в качестве.`,
          },
        },
      ],
    },
    {
      title: "3 собственных склада",
      imgs: [
        {
          img: "/img/factory/7.png",
        },
      ],
      list: [
        {
          text: "Большие запасы материалов: ель и кедр",
        },
        {
          text: "Соблюдение норм хранения. Столярная влажность не более 10%",
        },
      ],
    },
    {
      title:
        "Сами делаем для бани <br/>" +
        "двери и окна из деревянного <br/>" +
        "массива и тщательно проклеиваем <br/>" +
        "все стыковые соединения",
      imgs: [
        {
          img: "/img/factory/8.png",
        },
      ],
      banner: {
        title: "Ручная работа от начала и до конца - это качество! Мы точно выдерживаем зазоры. Штампованные аппараты такого не позволяют сделать.",
        // subtitle: "4 минуты видео расскажут все о нашем производстве",
        videoLink: "https://youtu.be/yELJDIN1w6Q",
        img: "/img/factory/9.png",
      },
    },
  ],
});

const slides = ref({
  section: "Наши партнеры",
  title: "Используем лучшее <br/>европейское оборудование",
  sliders: [
    {
      desc: `<p>Текст для слайдера</p>`,
      modalType: "popup",
      modalData: {text: ''},
      img: "/img/factory/10.png",
    },
    {
      desc: `<p>Текст для слайдера 2</p>`,
      modalType: "popup",
      modalData: {text: ''},
      img: "/img/factory/10.png",
    },
    {
      desc: `<p>Текст для слайдера 3</p>`,
      modalType: "popup",
      modalData: {text: ''},
      img: "/img/factory/10.png",
    }
  ],
  partnersList: [
    {
      url: "/img/partners/1.png"
    },
    {
      url: "/img/partners/2.png"
    },
    {
      url: "/img/partners/3.png"
    },
    {
      url: "/img/partners/4.png"
    },
    {
      url: "/img/partners/5.png"
    },
    {
      url: "/img/partners/6.png"
    },
    {
      url: "/img/partners/7.png"
    },
    {
      url: "/img/partners/4.png"
    },
    {
      url: "/img/partners/5.png"
    },
    {
      url: "/img/partners/6.png"
    },
    {
      url: "/img/partners/7.png"
    },
  ]
})

const techData2 = ref({
  sectionName: "Объемы производства",
  title:
    "<span class='text-[#009767] text-[40px] lg:text-[64px]'>Оптимизировали расходы</span>, чтобы сделать продукцию еще более доступной для каждого",

  src: "/img/factory/img.png",
  // quote: {
  //   author: "Евгений Киселев, Генеральный директор Wood and Life",
  //   text: "<i><b>“Несем ответственность за каждый объект:</b> с момента заключения договора до установки и в течение всего гарантийного срока.”</i>",
  // },
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

<style lang="scss">
.info-simple__col_right {
  order: 2!important;
}
.techData2 .info-simple__col_right {
  order: 1!important;
}
</style>