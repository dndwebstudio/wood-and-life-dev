<template>
  <div class="section-prod_advantages-block">
    <swiper-container
        ref="advantages"
        class="section-prod__advantages-list !pb-0 lg:pb-20 mb-0 lg:mb-48"
        init="false"
    >
      <swiper-slide class="section-prod__advantages-item">
        <div class="section-prod__advantages-icon-block">
          <nuxt-icon name="experience" filled />
        </div>
        <p class="section-prod__advantages-text">Наш опыт — более 5 000 изготовленных бань, домов и&nbsp;других строений из дерева</p>
      </swiper-slide>
      <swiper-slide class="section-prod__advantages-item">
        <div class="section-prod__advantages-icon-block">
          <nuxt-icon name="pin" filled />
        </div>
        <p class="section-prod__advantages-text">Продукция Wood and Life есть у жителей 37 регионов России</p>
      </swiper-slide>
      <swiper-slide class="section-prod__advantages-item">
        <div class="section-prod__advantages-icon-block">
          <nuxt-icon name="quality" filled />
        </div>
        <p class="section-prod__advantages-text">Мы уверены в качестве нашей продукции, поэтому даем <a href="/">гарантию 2 года</a></p>
      </swiper-slide>
    </swiper-container>
    <div class="container">
      <div class="prod-advantages_about-baths">
        <p class="prod-advantages_baths-title">Мощности производства позволяют нам в согласованные сроки, без срывов и форс- мажоров, производить бани-бочки и строения жилого и хозяйственного назначения из дерева</p>
        <div class="prod-advantages_baths-img">
          <nuxt-icon name="bath-type-1" filled />
          <nuxt-icon name="bath-type-2" filled />
          <nuxt-icon name="bath-type-3" filled />
          <nuxt-icon name="bath-type-4" filled />
          <nuxt-icon name="bath-type-5" filled />
        </div>
        <p class="prod-advantages_baths-desc">Бани различных модификаций модульные дома и дома из двойного бруса, дачные и гриль-домики, треугольные дома А-фреймы, беседки</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const advantages = ref();

onMounted(() => {
  const galleryMainSliderParams = {
    slidesPerView: 3,
    breakpoints: {
      320: {
        slidesPerView: 1.13,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 1.35,
        spaceBetween: 48,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 48,

      }
    }
  };

  Object.assign(advantages.value, galleryMainSliderParams);

  advantages.value.initialize();
});

defineExpose({
  advantages,
});
</script>

<style scoped lang="scss">
.section-prod_advantages-block {
  overflow: hidden;
}
.section-prod__advantages-list {
  overflow: visible;
  margin-top: 10.4rem;
  padding: 0 16rem;
  @include r($md) {
    margin-top: 8.8rem;
    padding: 0 3.8rem;
  }
  @include r($sm) {
    margin-top: 4rem;
    padding: 0 1.2rem 6.5rem;
  }
}

.section-prod__advantages-item {
  padding: 3.2rem;
  width: 50.1rem;
  height: auto;
  background: #fff;
  box-shadow: 0 0 2px rgba(145, 158, 171, 0.24), 0 20px 40px -4px rgba(145, 158, 171, 0.24);
  @include r($sm) {
    padding: 3.2rem 2rem;
    width: 3.2rem;
  }
}

.section-prod__advantages-icon-block {
  width: 7.2rem;
  height: 7.2rem;
  background-color: var(--gray-100);
  border-radius: 50%;
  margin-bottom: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & .nuxt-icon {
    width: 4rem;
    height: 4rem;
    :deep(svg) {
      width: 100%;
      height: 100%;
    }
  }
}

.section-prod__advantages-text {
  @include text24;
  width: 35rem;
  max-width: 100%;
  a {
    color: var(--accent-color);
    text-decoration: underline dashed;
    text-underline-offset: 1rem;
    text-decoration-thickness: 7%;
    transition: color 0.4s ease;
    &:hover {
      color: var(--green-500);
    }
  }
}

.prod-advantages_about-baths {
  width: 105rem;
  max-width: 100%;
  margin: 10.4rem auto 0;
  @include r($md) {
    margin-top: 8.5rem;
  }
  @include r($sm) {
    display: none;
  }
}

.prod-advantages_baths-title {
  text-align: center;
  @include text28;
  margin-bottom: 4.8rem;
  font-weight: 500;
  @include r($md) {
    font-size: 2.8rem;
  }
}

.prod-advantages_baths-img {
  display: flex;
  justify-content: center;
  gap: 3.2rem;
  @include r($md) {
    gap: 7.1rem;
  }

  & .nuxt-icon {
    height: 12rem;
    @include r($md) {
      height: 8rem;
    }
    &:deep(svg) {
      width: auto;
      height: 100%;
    }
  }
}

.prod-advantages_baths-desc {
  text-align: center;
  @include text24;
  width: 63%;
  margin: 1.7rem auto 0;
  @include r($md) {
    font-size: 2.4rem;
    width: 95%;
    margin-top: 1.4rem;
  }
}
@media screen and (max-width: 767px) {
  .section-prod_advantages-block{
    padding-bottom: 40px;
  }
  .prod-advantages_about-baths{
    display: block!important;;
  }
  .prod-advantages_baths-title{
    font-size: 1.8rem;
    text-align: left;
  }
  .prod-advantages_baths-desc{
    font-size: 1.5rem;
    text-align: left;
    margin: 20px 0 0 0;
  }
}
</style>
