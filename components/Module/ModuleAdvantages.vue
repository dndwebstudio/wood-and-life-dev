<template>
  <div class="advantages">
    <div class="container">
      <div class="advantages__content">
        <div class="hide-scrollbar advantages__list">
          <div
            v-for="advantage in advantages"
            :key="advantage.title"
            class="advantage"
          >
            <div class="advantage__header">
              <nuxt-icon
                v-if="advantage.icon"
                class="advantage__icon"
                :name="advantage.icon"
                filled
              />
            </div>
            <div class="advantage__body">
              <div class="advantage__title" v-html="advantage.title" />
              <div v-if="advantage.desc" v-html="advantage.desc" class="advantage__desc" />
            </div>
            <div class="advantage__img">
              <nuxt-img :src="advantage.img" format="webp" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
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

interface Props {
  advantages: Advantage[];
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.advantages {
  &__content {
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(49rem, 1fr));
    gap: 4.8rem;
    @include r($md) {
      display: flex;
      flex-wrap: wrap;
      margin-left: -$padding-left-md;
      margin-right: -$padding-right-md;
      flex-wrap: nowrap;
      gap: 2.4rem;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
    }
    @include r($sm) {
      margin-left: -$padding-left-sm;
      margin-right: -$padding-right-sm;
      gap: 1.2rem;
    }
  }
}

.advantage {
  padding: 4.8rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;
  min-height: 50.133rem;
  color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;

  @include r($md) {
    flex: 1;
    min-width: 51.633rem;
    min-height: 34.4rem;
    width: 100%;
    &:first-child {
      margin-left: $padding-left-md;
    }
    &:last-child {
      margin-right: $padding-right-md;
    }
  }
  @include r($sm) {
    padding: 2rem;
    min-width: 27.2rem;
    min-height: 18.122rem;
    &:first-child {
      margin-left: $padding-left-sm;
    }
    &:last-child {
      margin-right: $padding-right-sm;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(40, 40, 40, 0.3) 0%,
      rgba(40, 40, 40, 0.6) 100%
    );
    z-index: -1;
  }

  &__img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__header {
    flex: 1;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7.2rem;
    min-width: 7.2rem;
    height: 7.2rem;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2.5rem);
    @include r($md) {
      width: 5.2rem;
      min-width: 5.2rem;
      height: 5.2rem;
    }

    :deep(svg) {
      width: 4rem;
      height: 4rem;
      @include r($md) {
        width: 3rem;
        height: 3rem;
      }
    }
  }

  &__body {
  }

  &__title {
    @include text32;
    font-weight: 500;
  }

  &__desc {
    margin-top: 1.6rem;
    @include text18;
    @include r($sm) {
      font-size: 14px;
    }
  }
}
</style>
