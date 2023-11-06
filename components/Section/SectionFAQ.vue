<template>
  <section class="faq">
    <div class="container">
      <div class="faq__wrap">
        <h2 class="h2 faq__title">Ответы на частые вопросы</h2>
        <div class="faq__content flex-col lg:flex-row xl:flex-row">
          <div class="faq__list">
            <PartFAQItem
              v-for="(item, idx) in data.faqs"
              :key="idx"
              :item="item"
            />
          </div>
          <ModuleBannerQuestions :data="data.banner" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Data {
  faqs: any[];
  banner: {
    avatars: any[];
  };
}

interface Props {
  data: Data;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.faq {
  padding: 12rem 0;
  @include r($md) {
    padding: 6rem 0;
  }
  @include r($sm) {
    padding: 4rem 0;
  }

  &__wrap {
    padding: 0 27.5rem;
    @include r($md) {
      padding: 0;
    }
  }

  &__title {
    margin-bottom: 6.4rem;
    @include r($md) {
      margin-bottom: 4rem;
    }
    @include r($sm) {
      margin-bottom: 1.7rem;
    }
  }

  &__content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 185px;
  }

  &__list {
    margin-bottom: 6.4rem;
    @include r($sm) {
      margin-bottom: 4rem;
    }
  }
}
@media screen and (max-width: 991px) {
  .faq__content {
    display: flex;
    align-items: flex-start;
    gap: 9rem;
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
