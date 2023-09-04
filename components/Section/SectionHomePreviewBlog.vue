<template>
    <div class="bg-[#171717] text-white pt-32">
        <div class="container">
            <div class="flex text-5xl section-name">
                Блог
            </div>
            <div class="text-5xl mb-20">
                Читайте экспертные материалы по теме <span class="text-[#009767]">#строительство из дерева</span> в нашем
                блоге
            </div>
        </div>
        <SectionBlogShort />
        <div class="container pb-32">
            <!-- <button
                class="w-fit text-4xl font-semibold flex gap-6 items-center border rounded-full border-white px-16 py-8"> -->
                <NuxtLink :to="'/company/blog/'" class="w-fit text-2xl lg:text-4xl font-semibold flex gap-6 items-center border rounded-full border-white px-8 py-4 lg:px-16 lg:py-8">
                Другие материалы
                    <span class="nuxt-icon">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 4.07812L2 6.07812C2 8.28726 3.79086 10.0781 6 10.0781L17 10.0781" stroke="white"
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
// import { TechData } from "~/dto/interfaces/tech";
// interface Props {
//   data: TechData;
// }

// let props = defineProps<Props>();
</script>

<style></style>