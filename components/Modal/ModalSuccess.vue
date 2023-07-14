<template>
  <VueModal class="modal-success-wrap">
    <div v-if="!type" class="modal-success">
      <h5 :class="{ 'modal-success__title-green': true }">
        {{ title }}
      </h5>
      <span class="modal-success__desc">
        {{ desc }}
      </span>
    </div>
    
    <div v-else-if="type === 'с номером'" class="modal-success">
      <div class="modal-success__header">
        <span :class="{ 'modal-success__title-fix': true, 'modal-success__title-green': false }">
          {{ title }} 
        </span>
        <span :class="{ 'modal-success__title-fix': true, 'modal-success__title-green': false }">
          {{ profile }}
        </span>
        <span class="modal-success__title-subtitle">{{ subtitle }}</span>
      </div>

      <span class="modal-success__desc">
        {{ desc }}
      </span>
    </div>
  </VueModal>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  subtitle?: string;
  profile?: string;
  desc?: string;
  type?: string;
}

defineProps<Props>();
</script>

<style lang="scss">
.modal-success-wrap {
  @include r($sm) {
    .modal-wrap {
      height: auto;
      margin-top: auto !important;
      margin-left: $padding-left-sm;
      margin-right: $padding-right-sm;
    }
  }
}



.modal-success {
  max-width: 61rem;

  &__header {
    display: flex;
    flex-direction: column;
    margin-bottom: 21px;
  }

  &__title {
    font-family: 'Muller';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 110%;
    @include r($sm) {
      max-width: 28rem;
    }
      &-green {
          color: #007550;
          font-style: normal;
          font-weight: 500;
          font-size: 32px;
          line-height: 110%;
          margin-bottom: 21px;
        }

  }

  &__title-fix {
    font-family: 'Muller';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 110%;
  }

  &__title-subtitle {
    font-family: 'Muller';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 110%;
    color: #007550;
  }

  &__desc {
    font-family: 'Muller';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    color: #333333;
  }

 
}
</style>
