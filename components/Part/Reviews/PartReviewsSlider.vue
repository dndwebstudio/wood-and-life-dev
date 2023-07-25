<template>
  <swiper-container ref="reviewsSlider" class="reviews-slider" init="false">
    <swiper-slide v-for="(review, index) in reviews" :key="review.id" class="reviews-slider__slide">
      <div class="reviews-slider__slide-header">

        <swiper-container :ref="setReviewsPhotoRef" class="reviews-photos" init="false">
            <swiper-slide v-for="(photo, idx) in review.photos" :key="idx" class="reviews-photos__slide">
              <div class="reviews-photos__img">
                <img 
                :src="photo.img" 
                alt="" 
                format="webp" 
                loading="lazy" 
                />
              </div>
            </swiper-slide>
            <!-- eslint-disable-next-line -->
            <div slot="container-end">
              <UiSliderNavigation :class="['reviews-photos__nav', `reviews-photos__nav--${index}`]" />
            </div>
        </swiper-container>
      </div>
      <div class="reviews-slider__slide-body">
        <PartReviewsSliderSlideText :review="review" />
      </div>
      <div class="reviews-slider__slide-footer">
        <div class="reviews-slider__slide-author">
          <img 
          class="reviews-slider__slide-author-avatar" :src="review.author.avatar" format="webp" loading="lazy"
            :alt="review.author.name" />
          <div class="reviews-slider__slide-author-info">
            <span class="reviews-slider__slide-author-name">
              {{ review.author.name }}
            </span>
            <span class="reviews-slider__slide-author-location">
              {{ review.author.location }}
            </span>
          </div>
        </div>

        <button 
        v-if="review.videoLink" class="reviews-slider__slide-video-btn" type="button"
          @click="handleOpenModalVideo(review)">

          <nuxt-icon name="play" />
          <span class="screen-reader">Включить видео</span>
        </button>
      </div>
    </swiper-slide>
    <div slot="container-end">
      <UiSliderPagination class="reviews-slider-pagination" />
    </div>
  </swiper-container>
</template>



<script setup lang="ts">
import { storeToRefs } from "pinia";
import { Autoplay, Navigation, Pagination } from "swiper";
import { useModal } from "vue-final-modal";
import ModalVideo from "@/components/Modal/ModalVideo.vue";
import { useReviewsStore } from "@/store/reviews";
import { Review } from "~/dto/interfaces/reviews";

const store = useReviewsStore();

const { reviews } = storeToRefs(store);



const play = (str: string) => {

  const { open: openModalVideo } = useModal({
    component: ModalVideo,
    attrs: {
      videoLink: str,
    },

  });

  openModalVideo();
}

const handleOpenModalVideo = (review: Review) => {

  play(review.videoLink)

};


defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});

const reviewsSlider: Ref<HTMLElement | null> = ref(null);
const reviewsPhotosRefs: Ref<HTMLElement[]> = ref([]);

const setReviewsPhotoRef = (el: HTMLElement | null) => {
  console.log('el: ', el);
  if (el) {
    reviewsPhotosRefs.value.push(el);
  }
};

onMounted(() => {

  const reviewsSliderParams = {
    modules: [Autoplay, Pagination],
    // loop: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    //   pauseOnMouseEnter: true,
    // },
    pagination: {
      el: ".slider-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.05,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 1.333,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 48,
      },
    },
  };




  if (reviewsSlider?.value) Object.assign(reviewsSlider?.value, reviewsSliderParams);
  if (reviewsSlider.value) reviewsSlider.value.initialize();

  reviewsPhotosRefs.value.forEach((item, index) => {

    const reviewsPhotosParams = {
      slidesPerView: 1,
      modules: [Navigation],
      navigation: {
        nextEl: `.reviews-photos__nav--${index}` + " .slider-navigation__arrow_right",
        prevEl: `.reviews-photos__nav--${index}` + " .slider-navigation__arrow_left",
      },
    };
    Object.assign(item, reviewsPhotosParams);

    item.initialize();
  });

});
</script>

<style scoped lang="scss">
.reviews-slider {
  position: relative;
  overflow: visible;

  &__slide {
    display: flex;
    flex-direction: column;
    height: auto;
    box-shadow: 0px 0px 4px rgba(145, 158, 171, 0.24),
      0px 24px 48px rgba(145, 158, 171, 0.24);

    &-body {
      padding: 3.2rem 3.2rem 1.1rem;
      flex: 1;

      @include r($sm) {
        padding-top: 3.2rem;
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }

    &-footer {
      padding: 1.1rem 3.2rem 3.2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.6rem;

      @include r($sm) {
        padding-top: 1.1rem;
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }

    &-author {
      display: flex;
      align-items: center;
      gap: 1.6rem;

      &-avatar {
        width: 6.4rem;
        height: 6.4rem;
        border-radius: 50%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &-name {
        display: block;
        @include text12;
        font-weight: 700;
        text-transform: uppercase;
      }

      &-location {
        margin-top: 0.4rem;
        display: block;
        @include text14;
        color: var(--gray-400);
      }
    }

    &-video-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4.8rem;
      min-width: 4.8rem;
      height: 4.8rem;
      border-radius: 50%;
      background-color: var(--accent-color);
      transition: background-color 0.3s ease;

      &:hover {
        background-color: var(--green-600);
      }

      .nuxt-icon {
        margin-left: 0.3rem;
        height: 2rem;
        color: var(--white-90);

        :deep(svg) {
          height: 100%;
        }
      }
    }
  }
}

.reviews-slider-pagination {
  display: none;

  @include r($md) {
    // margin-left: auto;
    // margin-right: auto;
    display: flex;
    justify-content: center;
    margin: 7.7rem 0 0;
  }
}

.reviews-photos {
  height: 42.6rem;

  @include r($md) {
    height: 34.38rem;
  }

  @include r($sm) {
    height: 22.25rem;
  }

  &__img {
    position: relative;
    width: 100%;
    height: 100%;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg,
          rgba(40, 40, 40, 0.1) 0%,
          rgba(40, 40, 40, 0.3) 100%);
      z-index: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__nav {
    :deep(.slider-navigation__arrow) {
      width: 4rem;
      height: 5.6rem;
    }

    :deep(.slider-navigation__arrow_left) {
      left: 1rem;
    }

    :deep(.slider-navigation__arrow_right) {
      right: 1rem;
    }
  }
}
</style>
