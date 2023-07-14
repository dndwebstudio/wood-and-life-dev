<template>
  <section class="steps">
    <div class="container">
      <div class="steps__wrap">
        <PartSectionName name="Этапы работы и оплата" />
        <div class="steps__content">
          <div class="steps__col">
            <h2 class="h2 steps__title" v-html="data.title" />
            <div class="steps__additional-info">
              <nuxt-icon name="arrow-right-thin" filled />
              <p class="steps__additional-info-desc" v-html="data.additional" />
            </div>
          </div>
          <div class="steps__col steps__col_steps">
            <ol class="steps__points">
              <li
                v-for="(step, idx) in data.steps"
                :key="idx"
                class="steps__point"
              >
                <span class="steps__point-num">
                  {{ idx + 1 }}
                </span>
                <span class="steps__point-desc">
                  {{ step.desc }}
                </span>
              </li>
            </ol>
          </div>
        </div>
        <PartStepsBanner :data="data.banner" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Data {
  title: string;
  additional: string;
  steps: any[];
  banner: {
    title: string;
    desc: string;
    img: string;
  };
}

interface Props {
  data: Data;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.steps {
  padding: 12rem 0;
  background: linear-gradient(180deg, #171717 0%, #1f1f1f 100%);
  overflow: hidden;
  @include r($md) {
    padding: 6rem 0;
  }
  @include r($sm) {
    padding: 4rem 0;
  }

  &__wrap {
    padding: 0 13.7rem;
    @include r($md) {
      padding: 0;
    }
  }

  &__content {
    margin-bottom: 10.4rem;
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    gap: 4.8rem;
    @include r($md) {
      margin-bottom: 9.5rem;
      grid-template-columns: auto;
      gap: 7.9rem;
    }
    @include r($sm) {
      margin-bottom: 4.2rem;
      gap: 5rem;
    }
  }

  &__col {
    &_steps {
    }
  }

  :deep(.steps__title) {
    margin-bottom: 4.8rem;
    color: #fff;
    @include r($md) {
      br {
        display: none;
      }
    }
    @include r($sm) {
      margin-bottom: 3rem;
    }
  }

  &__additional-info {
    display: flex;
    gap: 1.9rem;
    color: var(--white-40);
  }

  &__additional-info-desc {
    @include text20;
    :deep(span) {
      color: var(--accent-color);
    }
  }

  &__points {
  }

  &__point {
    --el-padding: -4rem;
    @include r($sm) {
      --el-padding: -2rem;
    }

    display: flex;
    align-items: center;
    gap: 3.2rem;
    position: relative;
    @include text20;
    @include r($sm) {
      gap: 2.2rem;
    }

    &:not(:last-child) {
      margin-bottom: 8rem;
      @include r($md) {
        margin-bottom: 6rem;
      }
      @include r($sm) {
        margin-bottom: 4rem;
      }
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 4rem;
      width: 0.2rem;
      height: 40%;
      border-radius: 2px;
      background-color: var(--white-20);
      @include r($md) {
        left: 2.8rem;
        height: 50%;
      }
      @include r($sm) {
        left: 1.9rem;
        height: 37%;
      }
    }

    &::after {
      border-bottom: 0;
      bottom: var(--el-padding);
    }
    &::before {
      top: var(--el-padding);
    }

    &:first-child {
      &::before {
        display: none;
      }
    }
    &:last-child {
      &::after {
        display: none;
      }
    }
  }

  &__point-num {
    --size: 8rem;
    @include r($md) {
      --size: 6rem;
    }
    @include r($sm) {
      --size: 4rem;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--size);
    min-width: var(--size);
    height: var(--size);
    border-radius: 50%;
    color: #fff;
    background-color: var(--gray-700);

    @include text24;
    font-weight: 700;
  }

  &__point-desc {
    color: var(--white-90);
  }
}
</style>
