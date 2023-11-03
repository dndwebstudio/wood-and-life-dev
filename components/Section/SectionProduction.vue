<template>
  <section class="section-prod">
    <div class="container">
      <!-- <PartSectionName name="Производство" /> -->
      
      <div class="section-prod__flex-block">
        <div class="section-prod__text-block">
          <div class="section-prod__quote">
            <nuxt-icon class="section-prod__quote-icon" name="commas" />
            <div class="section-prod__director">
              <p
                class="section-prod__director-name"
                v-html="data.production.director"
              />
              <p
                class="section-prod__director-status"
                v-html="data.production.status"
              />
            </div>
          </div>
          <h2
            class="h2 section-prod__quote-title"
            v-html="data.production.title"
          />
          <p   
            v-for="(item, key) in data.production.productionText"
            :key="key"
            class="section-prod__quote-text"
            v-html="item"
          />
          <img
            class="section-prod_img-mobile"
            format="webp"
            loading="lazy"
            src="/img/production/director-mobile.png"
          />
          <ModuleProductionForm />
        </div>
        <div class="section-prod__img-block">
          <img
            class="section-prod_img"
            format="webp"
            loading="lazy"
            src="/img/production/director.png"
          />
        </div>
      </div>
    </div>
    <ProductionAdvantages />
    <CompanyTeam :data="data.team" />
    <div class="container">
      <ProductionBath :data="data.bath" />
    </div>
  </section>
</template>

<script setup lang="ts">
import HeaderContainer from "~/components/Ui/HeaderContainer.vue";
import ModuleProductionForm from "~/components/Module/ModuleProductionForm.vue";
import ProductionAdvantages from "~/components/Part/Production/productionAdvantages.vue";
import ProductionBath from "~/components/Part/Production/productionBath.vue";
import CompanyTeam from "~/components/Part/Team/CompanyTeam.vue";

interface Slide {
  img: string;
  desc: string;
}

interface Data {
  production: {
    director: string;
    status: string;
    title: string;
    productionText: string[];
  };
  team?: {
    title?: string;
    desc?: string;
    list?: {
      img?: string;
      title?: string;
      desc?: string;
    }
  }
  bath: {
    title: string;
    subtitle: string;
    facts: any[];
    banner: {
      title: string;
      subtitle: string;
      videoLink: string;
      img: string;
    };
    slides: Slide[];
  };
}

interface Props {
  data: Data;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.section-prod {
  padding: 12rem 0;
  @include r($md) {
    padding: 6rem 0;
  }
  @include r($sm) {
    padding: 4rem 0;
  }
}

.section-prod__flex-block {
  display: flex;
  gap: 16.1rem;
}

.section-prod__img-block {
  margin-top: -8rem;
  & .section-prod_img {
    max-height: 93rem;
  }
  @include r($md) {
    display: none;
  }
}

.section-prod_img-mobile {
  display: none;
  @include r($md) {
    display: block;
    //margin-top: -2rem;
    //margin-bottom: 11rem;
    height: 58rem;
    object-fit: cover;
    margin: -2rem auto 11rem;
  }
  @include r($sm) {
    margin-bottom: 8.8rem;
    height: 37rem;
  }
}

.section-prod__text-block {
  width: 48.5%;
  @include r($md) {
    width: 100%;
  }
}

.section-prod__quote {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.4rem;
  gap: 5rem;
}

.section-prod__quote-icon {
  display: inline-block;
  width: 4rem;
  height: 4rem;
  flex-shrink: 0;
  color: var(--green-500);

  :deep(svg) {
    width: 100%;
    height: 100%;
  }
}

.section-prod__director-name {
  @include text14;
  margin-bottom: 0.4rem;
  font-weight: bold;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.section-prod__director-status {
  @include text14;
  color: var(--gray-400);
  @include r($md) {
    letter-spacing: 0;
  }
}

.section-prod__quote-title {
  margin-bottom: 4.8rem;
  @include r($sm) {
    margin-bottom: 2rem;
  }
}

.section-prod__quote-text {
  @include text24;
  margin-bottom: 4.8rem;
  @include r($sm) {
    font-size: 1.4rem;
    line-height: 1.2;
    margin-bottom: 2rem;
  }
}
</style>
