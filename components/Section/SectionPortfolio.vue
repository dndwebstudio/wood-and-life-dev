<template>
    <section class="pb-48">
        <div class="container">
            <swiper-container ref="portfolioCategoriesSlider" init="false" class="panel flex gap-16 uppercase font-medium text-[17px] mb-40">
                <swiper-slide
                    v-for="(item, ind) in categories.items"
                    :key="ind"
                    class="cursor-pointer"
                    @click="changeActiveCategory(item.title)"
                >
                    <div :class="item.active ? 'border-b border-[#007550] text-[#007550] inline-block' : 'inline-block'">{{ item.title }}</div>
                </swiper-slide>
            </swiper-container>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                <SectionPortfolioItem class="shadow" v-for="(item, ind) in activePortfolio" :item="item" :key="ind" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Pagination, Navigation } from "swiper";
import { ref, computed, reactive } from "vue";

import SectionPortfolioItem from "./SectionPortfolioItem.vue";

interface PortfolioList {
    items: PortfolioItem[];
}

interface PortfolioItem {
    img: string[];
    city: string;
    wood: string;
    size: string;
    description: string;
    section: string
}

interface Props {
    portfolio: PortfolioList
}

interface CategoriesProtfolio {
    items: CategoryItem[]
}

interface CategoryItem {
    title: string;
    active: boolean;
}

let props = defineProps<Props>()


let categories = reactive<CategoriesProtfolio>({
    items: []
})

let portfolio = reactive<PortfolioList>(props.portfolio)

portfolio.items.forEach(el => {
    let cat = categories.items.find(elm => elm.title == el.section)
    if (!cat) {
        categories.items.push({
            title: el.section,
            active: !categories.items.length
        })
    }
})

let activeCategory = computed<CategoryItem | null>(() => {
    return categories.items.find(elm => elm.active) ?? null
})

let activePortfolio = computed<PortfolioItem[]>(() => {
    let returnData: PortfolioItem[] = []

    if (activeCategory) {
        returnData = portfolio.items.filter(el => {
            return el.section == activeCategory.value!.title
        })
    }

    return returnData
})



const portfolioCategoriesSlider = ref();

function changeActiveCategory(title:string) : void{
    categories.items.forEach(el => {
        el.active = el.title == title
    })
}

onMounted(() => {
  const params = {
      slidesPerView: 'auto',
      spaceBetween: 30,
  };

  Object.assign(portfolioCategoriesSlider.value, params);
  portfolioCategoriesSlider.value.initialize();

});

</script>

<style scoped>
swiper-container swiper-slide {
  width: auto!important;
}
</style>