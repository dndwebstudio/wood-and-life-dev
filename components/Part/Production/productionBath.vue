<template>
  <div class="prod-bath">
    <h2 class="h2" v-html="data.title" />
    <div class="prod-bath__cols">
      <div class="prod-bath__col prod-bath__col_left">
        <p class="prod-bath__subtitle" v-html="data.subtitle" />
        <ul class="prod-bath__fact-list">
          <li
            v-for="(item, index) in data.facts" :key="index"
            class="prod-bath__fact-item"
          >
            <nuxt-icon :name="item.icon" filled />
            <div class="prod-bath__fact-text-block">
              <p class="prod-bath__fact-title" v-html="item.name" />
              <p class="prod-bath__fact-text" v-html="item.desc" />
            </div>
          </li>
        </ul>
        <ModuleBanner class="prod-bath__banner" :data="data.banner" />
      </div>
      <div class="prod-bath__col prod-bath__col_right">
        <ModuleGallerySlider :slides="data.slides" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Slide {
  img: string;
  desc: string;
}

interface Data {
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
}

interface Props {
  data: Data;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.prod-bath {
  margin-top: 10.4rem;
  @include r($md) {
    margin-top: 8.4rem;
  }
  @include r($sm) {
    margin-top: 0;
  }
}

.prod-bath__cols {
  margin-top: 6.4rem;
  display: grid;
  grid-template-columns: minmax(0, 0.474fr) minmax(0, 1fr);
  gap: 4.8rem;
  @include r($md) {
    grid-template-columns: auto;
  }
  @include r($sm) {
    margin-top: 3.4rem;
  }
}

.prod-bath__col_right {
  overflow: hidden;
}

.prod-bath__subtitle {
  @include text24;
}

.prod-bath__fact-list {
  margin: 3.2rem 0 4.4rem;
  @include r($md) {
    margin-bottom: 6rem;
  }
  @include r($sm) {
    margin-bottom: 4.4rem;
  }
}

.prod-bath__fact-item {
  padding: 0.8rem 0 2rem;
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid var(--gray-200);
  margin-bottom: 1.2rem;
  &:last-child {
    margin-bottom: 0;
  }
  & .nuxt-icon {
    height: 5.4rem;
    width: 5.4rem;
    margin-right: 2.6rem;
    flex-shrink: 0;
    @include r($md) {
      margin-top: 2px;
    }
    @include r($sm) {
      margin-top: 8px;
      width: 4.2rem;
      height: 4.2rem;
    }
    &:deep(svg) {
      width: 100%;
      height: 100%;
    }
  }
  @include r($sm) {
    padding: 0.7rem 0 2rem;
  }
}

.prod-bath__fact-title {
  @include text32;
  @include r($sm) {
    font-size: 2rem;
    line-height: 1.2;
  }
}

.prod-bath__fact-text {
  @include text18;
  margin-top: 0.6rem;
  @include r($sm) {
    font-size: 1.4rem;
    line-height: 1.2;
  }
}

.prod-bath__banner {
  min-height: auto;
}
</style>
