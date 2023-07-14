<template>
  <section
    class="section-form"
    :style="{ backgroundImage: `url(${data.img})` }"
  >
    <div class="container">
      <div class="section-form__content">
        <div class="section-form__col">
          <h2 class="section-form__title" v-html="data.title" />
          <p class="section-form__subtitle" v-html="data.subtitle" />
        </div>
        <div class="section-form__col section-form__col_form">
          <ModuleSimpleForm :tabs="tabs" :data="data.form" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Data {
  img: string;
  title?: string;
  lead?: string;
  subtitle: string;
  form: {
    title: string;
    btnName: string;
    lead?: string;
    policyLink: string;
  };
}

interface Tabs {
  currentTab: any;
  tabs: any[];
}

interface Props {
  data: Data;
  tabs: Tabs;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.section-form {
  position: relative;
  min-height: 66.4rem;
  z-index: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @include r($md) {
    min-height: 83.7rem;
  }
  @include r($sm) {
    min-height: 64.2rem;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(40, 40, 40, 0.4) 0%,
      rgba(40, 40, 40, 0.7) 100%
    );
    z-index: -1;
  }

  &__content {
    padding: 12rem 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: center;
    gap: 4.8rem;
    @include r($md) {
      grid-template-columns: auto;
    }
    @include r($md) {
      padding: 4rem 0;
    }
  }

  &__col {
    &_form {
    }
  }

  &__title {
    max-width: 77.6rem;
    color: #fff;
    :deep(span) {
      color: var(--accent-color);
    }
  }

  &__subtitle {
    margin-top: 3.2rem;
    @include text24;
    color: #fff;
    @include r($sm) {
      margin-top: 2.3rem;
    }
  }
}
</style>
