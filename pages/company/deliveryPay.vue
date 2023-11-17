<template>
  <div>
		<HeaderContainer :title="'Доставка и оплата'" :classString="'text-6xl md:text-9xl pt-20 pb-20 lg:pt-48 lg:pb-48'" />
    <SectionDeliveryPay/>
    <SectionChoose :data="choose" />

  </div>
</template>

<script setup lang="ts">
import HeaderContainer from "~/components/Ui/HeaderContainer.vue";
import SectionDeliveryPay from "~/components/Section/SectionDeliveryPay.vue";
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
</script>

<style scoped>

</style>