<template>
  <div class="slider-navigation" >
    <button
      class="slider-navigation__arrow slider-navigation__arrow_left"
      
      type="button"
     
    >
      <nuxt-icon name="chevron-thin" filled />
    </button>
    <button
      class="slider-navigation__arrow slider-navigation__arrow_right"
      
      type="button"
      
    >
      <nuxt-icon name="chevron-thin" filled />
    </button>
  </div>
</template>

<script setup lang="ts">


defineProps({
  slideIndex: {
    type: Number,
    default: 0,
  },
});

</script>

<style scoped lang="scss">
.partner__slider--block .slider-navigation__arrow_right{
  right: 0rem;
}
.partner__slider--block .slider-navigation__arrow_left{
  left: 0rem;
}
.slider-navigation {
  width: 100%;
  z-index: 10;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &__arrow {
    width: 2.2rem;
    height: 3.2rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0.2rem;
    background-color: var(--gray-200);
    opacity: 1;
    transition: opacity 0.3s ease;
    visibility: visible;

    &.swiper-button-disabled {
      opacity: 0.5;
      // visibility: hidden;
    }

    &_right {
      right: 2rem;
      .nuxt-icon {
        transform: rotate(-180deg);
      }
    }

    &_left {
      left: 2rem;
    }

    &_right,
    &_left {
    }
  }
}
</style>
