<template>
  <div class="section-advantages">
    <div class="container">
      <h2 v-if="data.title" class="h2 section-advantages__title" v-html="data.title">
      </h2>
      <ModuleAdvantages :advantages="data.advantages" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Advantage {
  icon?: string;
  title: string;
  desc?: string;
  img: string;
}

interface Data {
  title?: string;
  advantages: Advantage[];
}

interface Props {
  data: Data;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.section-advantages {
  padding: 12rem 0;
  overflow: hidden;
  border-top: 1px solid var(--gray-200);
  border-bottom: 1px solid var(--gray-200);
  @include r($md) {
    padding: 6rem 0;
  }
  @include r($sm) {
    padding: 4rem 0;
  }

  &__title {
    margin-bottom: 6.4rem;
    max-width: 105rem;
    @include r($md) {
      max-width: 100%;
    }
    @include r($sm) {
      margin-bottom: 3.4rem;
    }
  }
}
</style>
