<template>
  <section class="delivery">
    <div class="container">
      <PartSectionName name="Доставка" />
      <div class="delivery__content">
        <div class="delivery__col">
          <h2 class="h2 delivery__title">
            Доставляем своим транспортом
            <span>дешевле, чем конкуренты</span>
          </h2>
          <div class="delivery__banner">
            <ModuleBanner class="banner_dark" :data="bannerData" />
          </div>
        </div>
        <div class="delivery__col delivery__col_img">
          <nuxt-img
            class="delivery__img"
            format="webp"
            loading="lazy"
            src="/img/delivery/image-1.jpg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const bannerData = ref({
  title: "Свой автопарк: низкорамные тралы, </br> еврофуры и манипуляторы",
  img: "/img/elements/cars-black.png",
});
</script>

<style scoped lang="scss">
.delivery {
  padding: 12rem 0;
  color: #fff;
  background: linear-gradient(180deg, #171717 0%, #1f1f1f 100%);
  @include r($md) {
    padding: 6rem 0;
  }
  @include r($sm) {
    padding: 4rem 0;
  }

  &__content {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 4.8rem;
    @include r($md) {
      grid-template-columns: auto;
    }
  }

  &__col {
    &_img {
      @include r($md) {
        display: none;
      }
    }
  }

  &__title {
    margin-bottom: 4.8rem;
    @include r($sm) {
      margin-bottom: 3.1rem;
    }
    span {
      color: var(--accent-color);
    }
  }

  &__banner {
  }

  &__img {
  }
}
</style>
