<!-- eslint-disable vue/no-v-html -->
<template>
  <section class="mounting">
    <div class="container">
      <PartSectionName :name="data.name" />
      <div class="mounting__content">
        <div class="mounting__col">
          <h2 class="h2 mounting__title" v-html="data.title" />
          <div v-if="data.date" class="mounting__date">
            <p class="mounting__date-text" v-html="data.date.text" />
            <span v-if="data.date.date" class="mounting__date-label">
              <nuxt-icon name="clock" />
              {{ data.date.date }}
            </span>
          </div>
          <div v-if="data.info" class="mounting__info">
            <p class="mounting__info-desc" v-html="data.info.desc" />
            <div v-if="data.info.additional" class="mounting__info-additional">
              <nuxt-icon name="arrow-right-thin" filled />
              <p v-html="data.info.additional" />
            </div>
          </div>
        </div>
        <div class="mounting__col mounting__col_img">
          <img
            class="mounting__img"
            :src="data.img"
            format="webp"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Data {
  name: string;
  title: string;
  date?: {
    text: string;
    date: string;
  };
  info?: {
    desc: string;
    additional?: string;
  };
  img: string;
}

interface Props {
  data: Data;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.mounting {
  padding: 12rem 0;
  @include r($md) {
    padding: 6rem 0;
  }
  @include r($sm) {
    padding: 4rem 0;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: center;
    gap: 4.8rem;
    @include r($md) {
      grid-template-columns: auto;
    }
  }

  &__col {
    &_img {
      align-self: flex-start;
    }
  }

  &__img {
    width: 77.6rem;
    object-fit: cover;
    @include r($md) {
      width: 100%;
      height: 46.37rem;
    }
    @include r($sm) {
      height: 24.38rem;
    }
  }

  &__title {
    margin-bottom: 6.4rem;
    @include r($md) {
      margin-bottom: 3.2rem;
    }
    :deep(span) {
      color: var(--accent-color);
    }
  }

  &__date {
    margin-bottom: 4.8rem;
    @include text32;
    font-weight: 500;
    @include r($sm) {
      margin-bottom: 4rem;
      font-size: 20px;
      line-height: 1.2;
    }

    &-text {
      margin-bottom: 2.4rem;
    }

    &-label {
      padding: 0.8rem 1.6rem 0.8rem 0.8rem;
      display: inline-flex;
      align-items: center;
      gap: 1.6rem;
      @include text52;
      font-weight: 500;

      background-color: var(--green-100);
      border-radius: 5.5rem;

      .nuxt-icon {
        width: 4.8rem;
        height: 4.8rem;
        @include r($sm) {
          width: 3rem;
          height: 3rem;
        }

        :deep(svg) {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  &__info {
    &-desc {
      @include text24;
    }

    &-additional {
      margin-top: 2.4rem;
      @include text16;
      color: var(--gray-400);

      display: flex;

      .nuxt-icon {
        margin-right: 1.9rem;
      }
    }
  }
}
</style>
