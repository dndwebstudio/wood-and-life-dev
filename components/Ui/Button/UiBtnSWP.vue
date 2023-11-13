<template>
    <button @mouseover="setHoverOnBtn()" @mouseleave="setUnhoverOnBtn()"
        class="ui-btn-swp w-fit text-sm md:text-xl  flex items-center h-[52px] uppercase lg:text-2xl font-bold flex gap-6 items-center border rounded-full border-white px-6  md:px-8 lg:px-16">
        Подробнее
        <span class="nuxt-icon">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path :d="arrowPositionValue" stroke="white"
                    stroke-width="2"></path>
                <path d="M13 5.07812L18 10.0781L13 15.0781" stroke="white" stroke-width="2"></path>
            </svg>
        </span>
    </button>
</template>

<script setup lang="ts">
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
.ui-btn-swp{
    transition: 0.5s;
    padding-top: 3px;
}
.ui-btn-swp:hover{
    background-color: #fff;
    color: #333;
}

.ui-btn-swp svg, .ui-btn-swp svg>path{
    transition: 0.5s;
}
.ui-btn-swp:hover svg{
    transform:translateX(10px);
}
.ui-btn-swp:hover svg>path{
    stroke: #333;
}
</style>