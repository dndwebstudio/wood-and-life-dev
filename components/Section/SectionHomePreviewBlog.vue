<template>
    <div class="bg-[#171717] text-white pt-32">
        <div class="container">
            <div class="flex text-5xl section-name">
                Блог
            </div>
            <div class="text-[24px] md:text-5xl mb-20">
                Читайте экспертные материалы по теме <span class="text-[#009767]">#строительство из дерева</span> в нашем
                блоге
            </div>
        </div>
        <SectionBlogShort />
        <div class="container pb-32">
            <!-- <button
                class="w-fit text-4xl font-semibold flex gap-6 items-center border rounded-full border-white px-16 py-8"> -->
                <NuxtLink @mouseover="setHoverOnBtn()" @mouseleave="setUnhoverOnBtn()" :to="'/company/blog/'" class="shpb-btn uppercase w-fit text-xl lg:text-2xl font-medium flex gap-6 items-center border rounded-full border-white px-8 py-4 lg:px-16 lg:py-8">
                Другие материалы
                    <span class="nuxt-icon">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path :d="arrowPositionValue" stroke="white"
                                stroke-width="2"></path>
                            <path d="M13 5.07812L18 10.0781L13 15.0781" stroke="white" stroke-width="2"></path>
                        </svg>
                    </span>
                </NuxtLink>
            <!-- </button> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import SectionBlogShort from "~/components/Section/SectionBlogShort.vue";
import { ref, computed } from "vue";

let stateHoverBtn = ref<boolean>(false)
let arrowPosition = ref<string>("M2 4.07812L2 6.07812C2 8.28726 3.79086 10.0781 6 10.0781L17 10.0781")
let arrowPositionStraight = ref<string>("M2 10.07812L2 10.07812C2 10.28726 10.79086 10.0781 10 10.0781L17 10.0781")

function setHoverOnBtn(){
    stateHoverBtn.value = true
}

function setUnhoverOnBtn(){
    stateHoverBtn.value = false
}

let arrowPositionValue = computed<string>(() => {
    return stateHoverBtn.value ? arrowPositionStraight.value : arrowPosition.value
})
</script>

<style>
.shpb-btn{
    transition: 0.3s;
}
.shpb-btn:hover{
    background-color: #fff;
    color: #333
}

.shpb-btn svg, .shpb-btn svg>path{
    transition: 0.5s;
}
.shpb-btn:hover svg{
    transform:translateX(10px);
}
.shpb-btn:hover svg>path{
    stroke: #333;
}
</style>