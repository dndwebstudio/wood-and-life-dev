<template>
  <div class="projects-tabs">
    <button
      v-for="tab in projects"
      :key="tab.form"
      :class="['projects-tabs__btn', { active: currentTab === tab }]"
      @click="changeTab(tab)"
    >
      <span class="projects-tabs__btn-icon">
        <nuxt-icon :name="tab.icon" filled />
      </span>
      <span class="caps-16-20 projects-tabs__btn-name">
        {{ tab.form }}
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBathouseProjectsStore } from "@/store/bathouseProjects";

const store = useBathouseProjectsStore();
const { projects } = storeToRefs(store);

const currentTab = ref(projects.value[0]);

const emits = defineEmits(["changeTab"]);

const changeTab = (tab: { configs: any[]; form: string; icon: string }) => {
  currentTab.value = tab;
  emits("changeTab", currentTab.value);
};
</script>

<style scoped lang="scss">
.projects-tabs {
  display: flex;
  align-items: center;
  gap: 3.2rem;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  @include r($md) {
    margin-bottom: 4.4rem;
  }
  @include r($sm) {
    margin-bottom: 3rem;
  }

  &__btn {
    position: relative;
    padding: 4rem 2rem 5.6rem;
    min-width: 23.96rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    flex: 0 0 auto;
    @include r($md) {
      padding-left: 0;
      padding-right: 0;
      min-width: 13.7rem;
    }
    @include r($sm) {
      padding: 1px 0 9px;
      justify-content: flex-start;
      min-width: 9.2rem;
    }

    &-name {
      display: inline-block;
      font-weight: 500;
      color: var(--gray-700);
      text-transform: uppercase;
    }
    &-icon {
      @include r($sm) {
        width: 2.77rem;
        min-width: 1.4rem;
        height: 2.7rem;
        // border-radius: 50%;
        // border: 2px solid var(--gray-400);
      }
      .nuxt-icon {
        height: 4rem;
        // @include r($sm) {
        //   display: none;
        // }

        :deep(svg) {
          width: 100%;
          height: 100%;
        }
      }
    }

    &.active {
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-bottom: 0.4rem solid var(--accent-color);
        @include r($sm) {
          border-bottom-width: 2px;
        }
      }
      .projects-tabs__btn-name {
        color: var(--accent-color);
      }
      .projects-tabs__btn-icon {
        border-color: var(--green-500);
        .nuxt-icon {
          :deep(svg) {
            path,
            rect,
            circle {
              stroke: var(--accent-color);
            }
          }
          // @include r($sm) {
          //   display: none;
          // }
        }
      }
    }
  }
}
</style>
