<template>
    <div class="flex justify-between">
        <button
            :class="getClassBtn('prev')"
            type="button" data-v-inspector="components/Ui/Button/UiButtonPrimary.vue:21:3" data-v-c9574704=""
            data-v-43f32aca=""
            @click="changeStepMethod('prev')"
            >
            <span class="nuxt-icon">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 4.77881L18 6.77881C18 8.98795 16.2091 10.7788 14 10.7788L3 10.7788" stroke="#808080"
                        stroke-width="2" />
                    <path d="M8 5.77881L3 10.7788L8 15.7788" stroke="#808080" stroke-width="2" />
                </svg>
            </span>
            Назад
        </button>
        <button :class="getClassBtn('next')"
            type="button" data-v-inspector="components/Ui/Button/UiButtonPrimary.vue:21:3" data-v-c9574704=""
            data-v-43f32aca=""
            @click="changeStepMethod('next')">
            Далее
            <span class="nuxt-icon">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4.07812L2 6.07812C2 8.28726 3.79086 10.0781 6 10.0781L17 10.0781" stroke="black"
                        stroke-width="2"></path>
                    <path d="M13 5.07812L18 10.0781L13 15.0781" stroke="black" stroke-width="2"></path>
                </svg>
            </span>
        </button>
    </div>
</template>


<script setup lang="ts">
import { ref } from "vue";

interface Props {
    step: number;
    maxStep: number;
}

let props = defineProps<Props>();

let emit = defineEmits(["changeStep"])

function getClassBtn(positionBtn: string) : string[]{
    let returnData: string[] = []

    let activeBtn = false

    console.log(props.step, props.maxStep, props.step < props.maxStep);
    

    if(positionBtn == "prev" && props.step > 1){
        activeBtn = true
    }else if(positionBtn == "next" && props.step < props.maxStep){
        activeBtn = true
    }

    if(!activeBtn){
        returnData = ["flex", "cursor-default", "text-[#808080]", "font-medium", "uppercase", "px-12", "py-6", "rounded-full", "bg-[#e3e3e3]", "gap-8", "items-center"]
    } else {
        returnData = ["flex", "text-black", "font-medium", "uppercase", "px-12", "py-6", "rounded-full", "bg-[#e3e3e3]", "gap-8", "items-center"]
    }

    return returnData
}

function changeStepMethod(positionBtn: string) : void {
    if(positionBtn == "prev" && props.step > 1){
        emit("changeStep", props.step-1)
    }else if(positionBtn == "next" && props.step < props.maxStep){
        emit("changeStep", props.step+1)
    }
}

</script>