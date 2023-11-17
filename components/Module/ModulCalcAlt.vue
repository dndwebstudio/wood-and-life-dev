<template>
    <div class="bg-white col-span-4 w-full py-16 px-10 sm:py-20 pb-20 shrink-1" v-if="showModule">
        <ModulCalcAltSteps :step="currentStep" :maxStep="maxStep"/>
        <div class="text-6xl font-medium mb-16" v-if="quizItem">
            <div class="mb-12" v-html="quizItem.title" v-if="quizItem.type != 'form'"></div>
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
            <div class="flex flex-col flex-nowrap" v-else-if="quizItem.type == 'form'" style="
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                ">
                <ModalFormAlt :form-name="formData.formName" :suptitle="formData.suptitle" :title="formData.title" :subtitle="formData.subtitle" :btn-name="formData.btnName"
                    :policy-link="formData.policyLink" :success-modal="formData.successModal" @disableStepBlock="disableStepBlock"/>
            </div>
        </div>
        <ModulCalcAltChangeSteps v-if="!showStepBlock" :step="currentStep" :maxStep="maxStep" @changeStep="changeStep"/>
    </div>
</template>

<script setup lang="ts">
import ModulCalcAltSteps from "~/components/Module/ModulCalcAltSteps.vue"
import ModulCalcAltChangeSteps from "~/components/Module/ModulCalcAltChangeStep.vue"
import { ref, computed, reactive } from "vue";

import ModalFormAlt from "../Modal/ModalFormAlt.vue";

interface DataForModal {
  formName: string;
  suptitle?: string;
  title?: string;
  subtitle?: string;
  btnName: string;
  policyLink: string;
  successModal?: {
    title: string;
    desc: string;
  };
}

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

let formData = ref<DataForModal>({
    formName: "Рассчитать стоимость",
    suptitle: "Оставьте свой номер",
    title:
      "Получите детальный расчет стоимости бани, которая подойдет именно вам",
    subtitle: "Какой способ связи вам удобнее?",
    btnName: "Рассчитать стоимость",
    policyLink: "#",
    successModal: {
      title: "спасибо, мы приняли вашу заявку!",
      desc: "В течение 30 минут с вами свяжется менеджер, уточнит детали и озвучит стоимость вашей бани.",
    },
  })

let props = defineProps<Props>();


let currentStep = ref<number>(1)
let showStepBlock = ref<boolean>(false)

let calculatorObject = reactive<Quiz[]>(props.calculators.map(el => el))

const maxStep = computed<number>(() => {
    return calculatorObject.length+1
})
const showModule = computed<boolean>(() => {
    return maxStep.value > 0
})

function changeStep(step: number){
    console.log(step);
    if(step > 0 && step <= maxStep.value){
        currentStep.value = step
    }
}
function disableStepBlock(){
    showStepBlock.value = true
}


const quizItem = computed<Quiz | null>(() => {
    let returnData = null

    console.log(currentStep.value);
    

    if(calculatorObject.length > 0 && calculatorObject[currentStep.value-1]){
        returnData = calculatorObject[currentStep.value-1]
    } else if(calculatorObject.length > 0 && !calculatorObject[currentStep.value-1]) {
        returnData = <Quiz>{
            title: "Форма",
            type: "form",
            content: []
        }
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