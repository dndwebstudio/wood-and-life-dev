<template>
    <div class="flex flex-col lg:flex-row mb-20">
        <img class="w-full max-w-[776px]" src="/img/delivery/banner.png" alt="">
        <div class="mt-32">
            <div class="text-6xl lg:text-8xl font-bold mb-16"> Здравствуйте!</div>
            <div class="text-3xl lg:text-5xl font-medium mb-12">Меня зовут Анна, я руководитель отдела продаж <br class="hidden md:inline" />Wood and
                Life</div>
            <div class="font-medium mb-6">Свяжитесь со мной и расскажите, что хотите построить</div>
            <div class="flex gap-4 items-center py-8 border-b border-[#D9D9D9]">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="28" height="28" rx="4" fill="#007550" />
                    <path d="M8 12.6328L13 17.6328L21 9.63281" stroke="white" stroke-width="2" />
                </svg>
                <span style="
                    font-size: 18px;
                ">Расскажу о деталях строительства</span>
            </div>
            <div class="flex gap-4 items-center py-8 border-b border-[#D9D9D9]">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="28" height="28" rx="4" fill="#007550" />
                    <path d="M8 12.6328L13 17.6328L21 9.63281" stroke="white" stroke-width="2" />
                </svg>
                <span style="
                    font-size: 18px;
                ">Сориентирую по стоимости и доставке</span>
            </div>
            <div class="flex gap-4 items-center py-8 border-b border-[#D9D9D9]">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="28" height="28" rx="4" fill="#007550" />
                    <path d="M8 12.6328L13 17.6328L21 9.63281" stroke="white" stroke-width="2" />
                </svg>
                <span style="
                    font-size: 18px;
                ">Отвечу на ваши вопросы</span>
            </div>
            <div class="text-4xl lg:text-8xl mt-16 mb-16">
                <a href="tel:89000001122">8 (900) 000-11-22</a>
            </div>
            <UiBtnSCB/>
        </div>
    </div>
</template>

<script setup lang="ts">
// import { TechData } from "~/dto/interfaces/tech";
// interface Props {
//   data: TechData;
// }

// let props = defineProps<Props>();

import { ref } from "vue";
import { useModal } from "vue-final-modal";
import ModalForm from "@/components/Modal/ModalForm.vue";
import UiBtnSCB from "../Ui/Button/UiBtnSCB.vue";

const { open: openModalInstallments } = useModal({
    component: ModalForm,
    attrs: {
        formName: "Узнать стоимость",
        suptitle: "Оставьте свой номер",
        title:
            "С вами свяжется менеджер и расскажет как приобрести дачный комплекс со скидкой 10%",
        btnName: "Узнать стоимость",
        policyLink: "#",
        successModal: {
            title: "спасибо, мы приняли вашу заявку!",
            desc: "В течение 30 минут с вами свяжется менеджер, уточнит детали",
        },
    },
});

</script>

<style></style>