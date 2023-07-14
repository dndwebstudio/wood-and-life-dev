<template>
  <section ref="sectionMap" class="section-map">
    <div class="container">
      <h2 class="h2 section-map_title" v-html="data.title" />
      <div class="section-map_container">
        <div class="section-map_choose-region" :class="{ __show: showRegions }">
          <div class="section-map_scroll-container">
            <div
             
              v-for="(item) in data.regions"
              :key="item"
              class="section-map_region-block"
            >
              <p class="section-map_region-letter">{{ item.letter }}</p>
              <ul class="section-map_region-list">
                <li
                 
                  v-for="(region) in item.data"
                  :key="region"
                  class="section-map_region-item"
                  @click="activateRegion(region)"
                >
                  {{ region.name }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="section-map_map-block">
          <button
            class="section-map_choose-btn"
            :class="{ __open: showRegions }"
            @click="showRegions = !showRegions"
          >
            {{ currentRegion ? currentRegion.name : "Выбрать регион" }}
          </button>
          <div ref="map" class="section-map_yamap" ></div>
        </div>
          <div class="spoiler-container">
            <div class="spoiler-address" :class="{'spoiler-address_opened': opened}" @mousedown="opened = !opened">
              <span v-if="!opened" class="addresses" >Показать адреса</span>
              <span v-else-if="opened">Скрыть адреса</span>
              <div class="spoiler-group__toggleAddress" :class="{'opened': opened}">
                <nuxt-icon id="toggle-icon-svg-addresses" class="spoiler-group__toggleAddress-icon"  name="chevron" />
              </div>
            </div>
          </div>
        <div class="section-map_shop-block">
          <MapShopList
            :data="shops.shopList"
            :region="currentRegion?.name" 
            :pin="selectedPinId"
            @activate-shop="activateShop"
          />
        </div>
        <div class="section-map_shop-block-adaptive" :class="{'show': opened}">
          <MapShopList
            :data="shops.shopList"
            :region="currentRegion?.name" 
            :pin="selectedPinId"
            @activate-shop="activateShop"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";
import { onMounted, ref } from "vue";
// import ymaps from "ymaps";
import MapShopList from "~/components/Part/Map/MapShopList.vue";

interface Shops {
  shopList: any[];
}
interface Data {
  title: string;
  zoom: string;
  coords: number[];
  regions: any[];
}

interface Props {
  data: Data;
  shops: Shops;
}

const sectionMap = ref<HTMLElement>();
const showRegions = ref(false);
const currentRegion = ref<null | { name: string }>(null);
const center = ref<number[]>([]);
const zoom = ref("");
const map = ref();
let yandexMap: any = null;
const selectedPinId = ref(null);
const opened = ref(false)

const activateRegion = (region: any) => {
  if (currentRegion.value === region) return;
  currentRegion.value = region;
  showRegions.value = false;
  setMapCoord(region.coords, region.zoom);
};

const activateShop = (tab: {
  address: string;
  coords: number[];
  id: string;
  img: string;
  name: string;
  region: string;
  time: string;
}) => {
  setMapCoord(tab.coords, 14);
};



const props = defineProps<Props>();

const loadMap = () => {
 
    ymaps.ready(() => {   
      center.value = props.data.coords;
      zoom.value = props.data.zoom;
      initMap().then(addPlacemarks);
    });
  
};

const initMap = () => {
  return new Promise<void>((resolve) => {
    yandexMap = new ymaps.Map(map.value, {
      center: center.value,
      zoom: zoom.value,
      controls: [],
    });
    yandexMap.controls.add("zoomControl", {
      size: "small",
      position: {
        right: 40,
        top: 200,
      },
    });
    resolve();
  });
};
const addPlacemarks = () => {
  const placemarks = props.shops.shopList;
  placemarks.forEach((tab) => {
    const imageUrl = new URL("/img/map/map-pin.svg", import.meta.url).href;
    const placemark: any = new ymaps.Placemark(
      tab.coords,
      {},
      {
        id: `map-icon-${tab.id}`,
        iconLayout: "default#image",
        iconImageHref: imageUrl,
        tabId: tab.id,
        iconImageSize: [40, 40],
      }
    );

    yandexMap.geoObjects.add(placemark);
    placemark.events.add("click", (event: any) => {
      const target = event.get("target");
      selectedPinId.value = target.options._options.tabId;
      setMapCoord(target.geometry._coordinates, 14);
    });
  });
};

onMounted(() => {
  const { stop } = useIntersectionObserver(
    sectionMap.value,
    ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        loadMap();
        stop();
      }
    }
  );
});

const setMapCoord = (coords: number[], zoom: number) => {
  yandexMap.panTo(coords).then(() => {
    yandexMap.setCenter(coords, (yandexMap.action._zoom = zoom));
  });
};
</script>

<style scoped lang="scss">
.section-map {
  padding: 12rem 0;
  @include r($md) {
    padding: 6rem 0;
  }
}
.section-map_title {
  margin-bottom: 6.4rem;
}

.section-map_container {
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 56rem;
  box-shadow: 0 0 4px rgba(145, 158, 171, 0.24),
    0 24px 48px rgba(145, 158, 171, 0.24);
  @include r($md) {
    display: block;
    height: auto;
  }
}

.section-map_choose-region {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  transform: translateY(-100%);
  z-index: 5;
  background: url("@/assets/img/svg/bg-circles-region.svg") 0 / contain
      no-repeat,
    #fff;
  transition: transform 0.4s ease;
  padding: 13.6rem 6.4rem 4rem;
  @include r($md) {
    padding: 10rem 2.4rem 4rem;
  }

  &.__show {
    transform: translateY(0);
  }
}

.section-map_scroll-container {
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 0 4.8rem;
  max-height: 100%;
  @include r($md) {
    justify-content: space-between;
    gap: 0 2rem;
  }
  @include r($sm) {
    display: block;
  }
}

.section-map_region-block {
  width: 45.8rem;
  flex-shrink: 0;
  display: flex;
  gap: 3.8rem;
  @include r($md) {
    gap: 2.5rem;
    width: 30rem;
  }
  @include r($sm) {
    width: auto;
  }
}

.section-map_region-letter {
  font-weight: 700;
  @include text18;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--gray-400);
}

.section-map_region-list {
  margin-bottom: 3.2rem;
}

.section-map_region-item {
  @include text14;
  font-weight: 700;
  margin-bottom: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
  @include r($sm) {
    font-size: 12px;
  }
}

.section-map_map-block {
  position: relative;
  width: 68.75%;
  height: 100%;
  @include r($md) {
    width: 100%;
    height: 40rem;
  }
}

.section-map_choose-btn {
  position: absolute;
  left: 2.4rem;
  top: 2.4rem;
  z-index: 10;
  padding: 1.6rem 4rem 1.6rem 1.6rem;
  background: #ffffff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.24);
  @include text14;
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.04em;
  font-family: $primaryFont;
  transition: all 0.4s ease;

  &.__open {
    background: var(--green-500);
    color: #fff;

    &:before {
      right: 1.7rem;
      top: 2.35rem;
      width: 1.5rem;
      height: 0.2rem;
      background: #fff;
    }

    &:after {
      right: 1.7rem;
      top: 2.35rem;
      width: 1.5rem;
      height: 0.2rem;
      background: #fff;
    }
  }

  &:after {
    position: absolute;
    content: "";
    width: 0.7rem;
    height: 0.2rem;
    top: 2.2rem;
    right: 1.9rem;
    background: var(--text-color);
    transform: rotate(-45deg);
    transition: all 0.4s ease;
  }

  &:before {
    position: absolute;
    content: "";
    right: 2.3rem;
    top: 2.2rem;
    width: 0.7rem;
    height: 0.2rem;
    transform: rotate(45deg);
    background: var(--text-color);
    transition: all 0.4s ease;
  }

  &:hover {
    background: var(--green-500);
    color: #fff;

    &:before,
    &:after {
      background: #fff;
    }
  }
}

.section-map_yamap {
  width: 100%;
  height: 100%;
  :deep(.section-map_icon) {
    width: 40px;
    height: 40px;
  }
}

.section-map_shop-block {
  position: relative;
  width: 31.25%;
  flex-shrink: 0;
  overflow-y: auto;
  background: linear-gradient(180deg, #171717 0%, #1f1f1f 100%);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.24);
  padding: 2.4rem;
  @include r($md) {
    display: none;
  }

  &:before {
    position: absolute;
    content: "";
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("@/assets/img/svg/bg-circles-map.svg");
  }
}


.section-map_shop-block-adaptive {
    display: none;
  &.show{
    display: block;
    @include r($md) {
      display: block;
      width: 100%;
      height: 36rem;
      position: relative;
      flex-shrink: 0;
      overflow-y: auto;
      background: linear-gradient(180deg, #171717 0%, #1f1f1f 100%);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.24);
      padding: 2.4rem;
    }
  }
  

  &:before {
    position: absolute;
    content: "";
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("@/assets/img/svg/bg-circles-map.svg");
  }
}



.spoiler-address {
  display: flex;
  align-items: center;
  gap: 1.8rem;
 
  margin: 0.3rem;
  transition: background-color 0.3s ease;
  cursor: pointer;
  padding: 1rem;
  &.addresses {
    font-weight: 700;
    font-size: 1.2rem;
    font-family: 'Muller';
    line-height: 11px;
  }
  &:hover{
    // background-color: var(--green-500);
    color: rgb(121, 112, 112);
    // .nuxt-icon {
    //     :deep(svg) {
    //       path {
    //         stroke: white;
    //         fill: white;
    //       }
    //     }
    //   }
  }

}

.spoiler-group__toggleAddress{
    // min-width: 3.2rem;
    width: 2.7rem;
    height: 2.7rem;
    border-radius: 100%;
    cursor: pointer;
    background: rgba(227, 227, 227, 1);
    display: flex;
    align-items: center;
    justify-content: center;

    &-icon{
      :deep(svg) {
                width: 0.6em;
                height: 0.6em;
              }
    }  



    &.opened{
      background: var(--green-400);
      .spoiler-group__toggleAddress-icon {      
        transform: rotate(180deg);
     
      }
    } 


 } 

 



.spoiler-container{
    display: none;
  @include r($md){
    height: 5rem;
    display: flex;
    justify-content: center;
  }
 

}




</style>
