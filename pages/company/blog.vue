<template>
  <div>
    <HeaderContainer :title="'Блог'"/>
    <SectionBlog/>
    <SectionChoose :data="choose" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import HeaderContainer from "~/components/Ui/HeaderContainer.vue";
import SectionBlog from "~/components/Section/SectionBlog.vue";

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
.section-name,
.section-prod__flex-block,
.prod-advantages_about-baths,
.prod-bath,
.team-section {
  display: none!important;
}
.section-prod {
  padding-top: 0!important;
  padding-bottom: 0!important;
}
.section-prod__advantages-list {
  margin-bottom: 10.4rem;
}
.shadow {
  box-shadow: 0px 24px 48px 0px rgba(145, 158, 171, 0.24), 0px 0px 4px 0px rgba(145, 158, 171, 0.24);
}
</style>