<template>
    <button @mouseover="setHoverOnBtn()" @mouseleave="setUnhoverOnBtn()" class="ui-btn-mbq btn btn_transparent" type="button">
        {{ textBtn }}
        <span class="nuxt-icon" data-v-inspector="node_modules\nuxt-icons\dist\runtime\components\nuxt-icon.vue:2:3">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path :d="arrowPositionValue" stroke="#333"
                    stroke-width="2"></path>
                <path d="M13 5.07812L18 10.0781L13 15.0781" stroke="#333" stroke-width="2"></path>
            </svg>
        </span>
    </button>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
    textBtn: string;
}

const props = defineProps<Props>()

let stateHoverBtn = ref<boolean>(false)
let arrowPosition = ref<string>("M2 4.07812L2 6.07812C2 8.28726 3.79086 10.0781 6 10.0781L17 10.0781")
let arrowPositionStraight = ref<string>("M2 10.07812L2 10.07812C2 10.28726 10.79086 10.0781 10 10.0781L17 10.0781")

function setHoverOnBtn() {
    stateHoverBtn.value = true
}

function setUnhoverOnBtn() {
    stateHoverBtn.value = false
}

let arrowPositionValue = computed<string>(() => {
    return stateHoverBtn.value ? arrowPositionStraight.value : arrowPosition.value
})

</script>

<style>
.ui-btn-mbq {
    transition: 0.5s;
    padding-top: 3px;
    box-shadow: 0 0 0 1px #000;
}

.ui-btn-mbq:hover {
    background-color: #007550;
    color: #fff;
}

.ui-btn-mbq svg,
.ui-btn-mbq svg>path {
    transition: 0.5s;
}

.ui-btn-mbq:hover svg {
    transform: translateX(10px);
}

.ui-btn-mbq:hover svg>path {
    stroke: #fff;
}</style>