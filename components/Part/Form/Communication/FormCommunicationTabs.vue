<template>
  <div class="form-communication">
    <div class="hide-scrollbar form-communication__btns">
      <button
        v-for="tab in tabs"
        :key="tab.name"
        type="button"
        :class="[
          'form-communication__btn',
          { active: activeTab === tab.component },
        ]"
        @click="activeTab = tab.component"
      >
        <nuxt-icon :name="tab.icon" />
        {{ tab.name }}
      </button>
    </div>
    <slot />
    <component :is="activeTab" class="form-input" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  tabs: any[];
  currentTab: object;
}

const props = defineProps<Props>();

const activeTab = shallowRef(props.currentTab);
</script>

<style scoped lang="scss">
.form-communication {
  max-width: 48rem;
  @include r($md) {
    max-width: 100%;
  }

  &__btns {
    margin-bottom: 2px;
    display: flex;
    @include r($sm) {
      $margin: 1.2rem;

      overflow-x: auto;
      margin-right: -$margin;
      margin-left: -$margin;
      padding-left: $margin;
      padding-right: $margin;
    }
  }

  &__btn {
    padding: 1.6rem;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    @include text14;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--white-40);
    transition: box-shadow 0.3s ease;
    @include r($sm) {
      font-size: 12px;
      border-bottom: 2px solid transparent;
      padding: 16px 4px 9px;
    }

    .nuxt-icon {
      margin-right: 1.2rem;
      width: 1.6rem;
      height: 1.6rem;
      @include r($sm) {
        margin-right: 9px;
      }

      :deep(svg) {
        width: 100%;
        height: 100%;
      }
    }
    &:hover {
      box-shadow: 0 2px 0 0 rgba($accent-color, 0.5);
    }
    &.active {
      color: var(--accent-color);
      box-shadow: 0 2px 0 0 var(--accent-color);
      @include r($sm) {
        box-shadow: unset;
        border-color: var(--accent-color);
      }
    }
  }
}

.form-input {
  width: 100%;
}
</style>
