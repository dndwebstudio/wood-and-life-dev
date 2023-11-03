<template>
    <div class="bg-white col-span-4 w-full py-16 px-10 sm:py-20 pb-20 shrink-1" v-if="showModule">
        <ModulCalcAltSteps :step="currentStep" :maxStep="maxStep"/>
        <div class="text-6xl font-medium mb-16" v-if="quizItem">
            <div class="mb-12" v-html="quizItem.title"></div>
            <div class="flex flex-row flex-wrap lg:flex-nowrap gap-12" v-if="quizItem.type == 'img'">
                <div class="mca--item relative cursor-pointer" v-for="(content, ind) in quizItem.content" :key="ind" @click="changeActiveElementQuiz(ind)">
                    <nuxt-icon v-if="content.active" class="calc__icon" :name="'quiz-check-enable'" filled />
                    <nuxt-icon v-else class="calc__icon" :name="'quiz-check-disable'" filled />
                    <img v-if="content.active" class="w-full border-solid border-b-4 border-[#009767]" :src="content.img"
                        alt="">
                    <img v-else class="w-full" :src="content.img" alt="">
                    <div class="absolute text-xl lg:text-4xl text-[#fff] inset-3 lg:inset-12 flex items-end" v-html="content.title"></div>
                </div>
            </div>
            <div class="flex flex-col flex-nowrap" v-else-if="quizItem.type == 'text'">
                <div class="mca--item relative cursor-pointer flex mb-5 p-2 hover:bg-[#00755012]" v-for="(content, ind) in quizItem.content" :key="ind" @click="changeActiveElementQuiz(ind)">
                    <nuxt-icon v-if="content.active" class="absolute mr-5" :name="'quiz-check-enable'" filled />
                    <nuxt-icon v-else class="absolute mr-5" :name="'quiz-check-disable'" filled />
                    <div class="flex flex-col flex-nowrap ml-12 pl-7">
                        <div class="text-2xl text-[#333] inset-12 flex items-end" v-html="content.title"></div>
                        <div class="text-xl text-[#666] inset-12 flex items-end" v-html="content.desc"></div>
                    </div>
                </div>
            </div>
        </div>
        <ModulCalcAltChangeSteps :step="currentStep" :maxStep="maxStep" @changeStep="changeStep"/>
    </div>
</template>

<script setup lang="ts">
import ModulCalcAltSteps from "~/components/Module/ModulCalcAltSteps.vue"
import ModulCalcAltChangeSteps from "~/components/Module/ModulCalcAltChangeStep.vue"
import { ref, computed, reactive } from "vue";

interface Calculator {
  title: string;
  desc?: string;
  img?: string;
  section?: string;
  active: boolean;
}

interface Quiz {
  title: string;
  type: string;
  content: Calculator[];
}

interface Props {
  calculators: Quiz[];
}

let props = defineProps<Props>();


let currentStep = ref<number>(1)

let calculatorObject = reactive<Quiz[]>(props.calculators.map(el => el))

const maxStep = computed<number>(() => {
    return calculatorObject.length
})
const showModule = computed<boolean>(() => {
    return maxStep.value > 0
})

function changeStep(step: number){
    console.log(step);
    if(step > 0 && step <= calculatorObject.length){
        currentStep.value = step
    }
}


const quizItem = computed<Quiz | null>(() => {
    let returnData = null

    if(calculatorObject.length > 0 && calculatorObject[currentStep.value-1]){
        returnData = calculatorObject[currentStep.value-1]
    }

    return returnData
})


function changeActiveElementQuiz(ind:number) : void {
    if(quizItem != null){
        // quizItem.value!.content[ind].active = true

        quizItem.value!.content.forEach((el, indItem) => {
            el.active = indItem == ind
        })
    }
}

</script>

<style>
.calc__icon {
    position: absolute;
    left: 3rem;
    top: 3rem;
}
.mca--item{
    width: 100%;
}
@media screen and (max-width: 1024px) {
    .mca--item{
        width: calc(50% - 1.5rem);
    }
}
@media screen and (max-width: 640px) {
    .calc__icon{
        left: 1rem;
        top: 1rem;
    }
}
</style>