<template>
  <ul class="shop-list">
    <li 
      v-for="(shop, idx) in shopArr"
      :key="idx"
      class="shop-item"
      :class="{ __active: currentShop && shop.id === currentShop.id }"
      @click="activatedPoint(shop)"
    >
      <div class="shop-item__info-block">
        <p class="shop-item__title" v-html="shop.name" />
        <p class="shop-item__address" v-html="shop.address" />
        <p class="shop-item__time" v-html="shop.time" />
      </div>
      <div class="shop-item__img-block">
        <nuxt-img :src="shop.img" format="webp" loading="lazy" />
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed, PropType, ref, watch } from "vue";
interface shops {
  name: string;
  address: string;
  region: string;
  time: string;
  img: string;
  id: string;
}

const props = defineProps({
  data: {
    type: Array as PropType<Array<shops>>,
    default: () => [],
  },
  region: {
    type: String,
    default: "",
  },
  pin: {
    type: String as PropType<string | null>,
    default: null,
  },
});

const currentShop = ref<null | shops>(null);
const emits = defineEmits(["activateShop"]);

const activatedPoint = (shop: shops) => {
  if (currentShop.value === shop) return;
  currentShop.value = shop;
  emits("activateShop", currentShop.value);
};

const shopArr = computed(() => {
  if (!props.region) return props.data;
  else {
    const regionString = props.region.toLowerCase();
    return props.data?.filter(
      (item) => item.region.toLowerCase() === regionString
    );
  }
});

watch(props, () => {
  if (props.pin) {
    const shop = shopArr.value.filter((item) => item.id === props.pin);
    activatedPoint(shop[0]);
  }
});
</script>

<style scoped lang="scss">
.shop-item {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 2.4rem;
  padding: 2.4rem;
  width: 100%;
  margin-bottom: 0.8rem;
  background: var(--gray-600);
  cursor: pointer;
  transition: background-color 0.4s ease;

  &:last-child {
    margin-bottom: 0;
  }

  &.__active {
    background: var(--green-500);
  }
}

.shop-item__info-block {
  flex-shrink: 0;
  @include r($md) {
    flex-shrink: 1;
  }
}

.shop-item__title {
  @include text24;
  font-weight: 500;
  color: #fff;
}

.shop-item__address {
  margin-top: 0.4rem;
  @include text16;
  color: var(--white-90);
}

.shop-item__time {
  @include text14;
  margin-top: 0.4rem;
  color: var(--white-40);
  line-height: 1.2;
  letter-spacing: 0;
}

.shop-item__img-block {
  flex-shrink: 0;
  border-radius: 0.4rem;
  width: 7.2rem;
  height: 7.2rem;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
