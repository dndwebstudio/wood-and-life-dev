<template>
  <div class="banner-questions">
    <div class="banner-questions__wrap">
      <div class="banner-questions__avatars">
        <div
          v-for="(avatar, idx) in data.avatars"
          :key="idx"
          class="banner-questions__avatar"
        >
          <nuxt-img
            :src="avatar.img"
            :alt="avatar.name"
            format="webp"
            loading="lazy"
          />
          <!-- <div class="banner-questions__avatar-outline"></div> -->
        </div>
      </div>
      <p class="banner-questions__text">
        Пишите нам, ответим
        <br />
        на любые ваши вопросы
      </p>
    </div>
    <div class="banner-questions__btns">
      <UiButtonPrimary class="btn_transparent" name="WhatsApp"  />
      <UiButtonPrimary class="btn_transparent" name="Telegram"  />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Data {
  avatars: any[];
}

interface Props {
  data: Data;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.banner-questions {
  padding: 4.8rem 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background: url("@/assets/img/svg/bg-circles-6.svg") center / cover no-repeat;
  box-shadow: 0px 0px 4px rgba(145, 158, 171, 0.24),
    0px 24px 48px rgba(145, 158, 171, 0.24);

  @include r($md) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4.8rem;
  }
  @include r($sm) {
    padding: 4rem 1.2rem;
  }

  &__wrap {
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }

  &__avatars {
    display: flex;
    align-items: center;
  }

  &__avatar {
    position: relative;
    width: 6.4rem;
    height: 6.4rem;
    &::after {
      position: absolute;
      top: 0.5rem;
      right: 0.4rem;
      content: "";
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background-color: var(--green-500);
      box-shadow: 0 0 0 4px #fff;
      z-index: 50;
    }

    @for $i from 1 through 6 {
      &:nth-child(#{$i}) {
        z-index: 6 - $i;
      }
    }

    &:not(:first-child) {
      margin-left: -1.2rem;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      box-shadow: 0 0 0 4px #fff;
    }
  }

  // fallback in case avatar has white background

  // &__avatar-outline {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  //   border-radius: 50%;
  // }

  &__text {
    @include text20;
    font-weight: 700;
    @include r($md) {
      br {
        display: none;
      }
    }
    @include r($sm) {
      font-size: 1.8rem;
      line-height: 1.2;
    }
  }

  &__btns {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    @include r($sm) {
      width: 100%;
    }

    button,
    a {
      padding: 1.55rem 3.2rem 1.55rem 3.2rem;
      min-width: 18.5rem;
      @include r($sm) {
        padding-right: 1.2rem;
        padding-left: 1.2rem;
        min-width: auto;
        flex: 1;
      }
    }
  }
}
</style>
