<template>
  <a v-if="link && link[0] !== '#'" class="btn" :href="link" target="_blank">
    {{ name }}
    <nuxt-icon name="arrow-right-bold" filled />
  </a>

  <NuxtLink v-else-if="nuxtLink" :to="nuxtLink" class="btn">
    {{ name }}
    <nuxt-icon name="arrow-right-bold" filled />
  </NuxtLink>

  
  <button v-else-if="link.includes('#')" class="btn" :type="type" @click="handlerRouter">
    <a :href="link">
    {{ name }} 
  </a>
    <nuxt-icon v-if="!isLoading" name="arrow-right-bold" filled />
    <UiLoading v-else />
  </button>

  <button v-else class="btn" :type="type">
    {{ name }}
    <nuxt-icon v-if="!isLoading" name="arrow-right-bold" filled />
    <UiLoading v-else />
  </button>
</template>

<script setup lang="ts">

interface Props {
  link?: string;
  nuxtLink?: string;
  name: string;
  type?: "submit" | "reset" | "button";
  isLoading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  link: "",
  nuxtLink: "",
  name: "",
  type: "button",
  isLoading: false,
});

const $router = useRouter();

const handlerRouter = () => {
  if (props.link && props.link.startsWith("#")) {
    const element = document.querySelector(props.link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } else if (props.link) {
    $router.push(props.link);
  }
}
</script>

<style lang="scss" scoped>
.btn {
  padding: 2.55rem 4.8rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  min-width: 20rem;
  letter-spacing: 0.04em;
  border-radius: 4.5rem;

  @include text14;
  font-weight: 700;
  text-transform: uppercase;
  color: #000;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  transition: background-color 0.3s ease;
  @include r($sm) {
    padding: 2.5rem;
    font-size: 13px;
  }
  @include r(360) {
    font-size: 11px;
  }

  &_green {
    color: #fff;
    background-color: var(--green-500);
    background-image: url("@/assets/img/svg/bg-circles.svg");
    &:hover {
      background-color: var(--green-600);
    }
  }
  &_grey,
  &_gray {
    color: #000;
    background-color: var(--gray-200);
    .nuxt-icon {
      :deep(svg) {
        path {
          stroke: #000;
        }
      }
    }

    &:hover {
      color: #fff;
      background-color: var(--green-500);
      .nuxt-icon {
        :deep(svg) {
          path {
            stroke: #fff;
          }
        }
      }
    }
  }

  &_transparent {
    color: #000;
    background: transparent;
    box-shadow: 0 0 0 1px #000;
    &:hover{
      background-color: var(--green-500);
      color: white;
      .nuxt-icon {
        :deep(svg) {
          path {
            stroke: #fff;
          }
        }
      }
    }

    .nuxt-icon {
      :deep(svg) {
        path {
          stroke: #000;
        }    
      }
    }
  }

  .nuxt-icon {
    margin-left: 1.6rem;
    fill: none;
    width: 2rem;
    min-width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    :deep(svg) {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
