<template>
    <div class="flex gap-12 items-center mb-12">
        <div class="relative font-bold	text-[#333] py-2 px-4 whitespace-nowrap ">
            ЭТАП {{props.step}}/{{props.maxStep}}
        </div>
        <div class="flex w-full">
            <div v-for="(item, ind) in lineStepValue" :key="ind" class="h-[4px] mx-1 w-full rounded" :class="item.active ? 'bg-[#009767]' : 'bg-[#E3E3E3]'"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";

interface StepLine {
    active: boolean
}

interface Props {
    step: number;
    maxStep: number;
}

let props = defineProps<Props>();

let lineStep = reactive<StepLine[]>([{
    active: true
}])

for(var i = 1; i <= props.maxStep; i++){
    lineStep.push({active: i <= props.step})
}

const lineStepValue = computed<StepLine[]>(() => {
    let returnData: StepLine[] = []
    for(var i = 1; i <= props.maxStep; i++){
        returnData.push({active: i <= props.step})
    }

    return returnData
})


</script>