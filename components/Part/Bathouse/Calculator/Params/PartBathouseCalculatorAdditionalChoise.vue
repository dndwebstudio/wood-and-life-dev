<template>
  <div class="spoiler-group">
    <div class="spoiler-group__header">
      <div class="spoiler-group__info">
        <div class="spoiler-group__name">{{ group.name }}</div>
        <div class="spoiler-group__seleted">{{ selected }}</div>
      </div>
      <div class="spoiler-group__toggle" :class="{'spoiler-group__toggle_opened': opened}" @click="opened = !opened">
        <nuxt-icon class="spoiler-group__toggle-icon" name="chevron" />
       
      </div>
    </div>

    <div v-if="opened" class="spoiler-group__body" >
      <PartBathouseCalculatorChoise :group="group" />
    </div>


  </div>
</template>

<script>

export default {
  name: "PartBathouseCalculatorAdditionalChoise",
  props: {
    group: {
      type: Object, 
      required: true
    },
    idx: {
      type: Number, 
      required: true
    }
  },
  setup() {
    const opened = ref(false);

    return {
      opened
    }
  },
  computed: {
    selected() {
      return this.group.categories.map(item => item.list).flat().filter(item => item.checked).map(item => item.name).join(' ')
    }
  },
  mounted() {
    if(this.idx <= 1) {
      this.opened = true
    }
  },
};
</script>

<style lang="scss">
.spoiler-group {
  background: var(--gray-700);
  padding: 2.4rem;
  margin-bottom: 1.6rem;
  .choise-group__item {
    background: var(--gray-600);
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__body {
    margin-top: 1.6rem;
  }
  &__name {
    @include text20;
  }
  &__seleted {
    @include text14;
    color: var(--gray-400);
  }
  &__info {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 1.6rem;
    align-items: center;
  }
  &__toggle {
    min-width: 3.2rem;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 100%;
    cursor: pointer;
    background: var(--gray-400);
    display: flex;
    align-items: center;
    justify-content: center;
    // margin-right: 46%;
    &-icon {
      width: 1.6rem;
      height: 0.8rem;
      .toggle-icon-svg {
        width: 100%;
        height: 100%;
      }
    }
    &_opened {
      
      background: var(--green-400);
      .spoiler-group__toggle-icon {
        transform: rotate(180deg);
      }

    }
  }
}
</style>