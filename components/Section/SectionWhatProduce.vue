<template>
    <div class="container py-28 lg:py-48 bg-[#171717]">
        <div class="caps-1 section-name">
            Что производим
        </div>
        <div class="flex flex-col gap-y-20">
            <div v-for="(item, ind) in sixTopItems" :key="ind">
                <div v-if="(ind+1)%2 == 1" class="bg-center bg-cover lg:h-[512px] sm:h-[515px] h-[260px] p-8 lg:p-16 text-white flex lg:flex-row flex-col justify-end lg:justify-between lg:items-end" :style="{backgroundImage: `url(${item.img})`}">
                    <div>
                        <div class="text-5xl md:text-7xl lg:text-9xl font-medium mb-6" v-html="item.title"></div>
                        <div class="text-2xl md:text-4xl leading-normal text-[##ffffffe6]" v-html="item.description"></div>
                    </div>
                    <div class="mt-10 lg:mt-0">
                        <UiBtnSWP/>
                    </div>
                </div>
                <div v-else class="flex flex-col lg:flex-row gap-x-16 flex-shrink">
                    <div class="basis-1/2">
                        <img class="object-contain w-full h-[260px] sm:h-[395px] lg:h-auto object-cover lg:object-contain" :src="item.img" alt="">
                    </div>
                    <div class="basis-1/2 text-white flex flex-col justify-center">
                        <div class="mt-10 lg:mt-0">
                            <div class="text-5xl md:text-7xl lg:text-9xl font-medium mb-6" v-html="item.title"></div>
                            <div class="text-2xl md:text-4xl leading-normal text-[##ffffffe6] mb-10 lg:mb-20"  v-html="item.description"></div>
                        </div>
                        <div>
                            <UiBtnSWP/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row flex-row gap-16">
                <div v-for="(item, ind) in otherItems" :key="ind" :style="{backgroundImage: `url(${item.img})`}"
                    class="lg:basis-1/3 bg-cover h-[320px] lg:h-[670px] w-full p-8 lg:p-16 text-white flex flex-col justify-end bg-center">
                    <div class="text-5xl md:text-5xl mb-10 md:mb-2" v-html="item.title"></div>
                    <div class="mb-6 text-2xl md:text-2xl " v-html="item.description"></div>
                    <UiBtnSWP/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import UiBtnSWP from '../Ui/Button/UiBtnSWP.vue';

interface Props {
  items: ProduceItem[];
}

const props = defineProps<Props>();

const sixTopItems = computed<ProduceItem[]>(() => {
    let returnData:ProduceItem[] = props.items.filter((el, ind) => {
        return ind < 6
    })

    return returnData
})

const otherItems = computed<ProduceItem[]>(() => {
    let returnData:ProduceItem[] = props.items.filter((el, ind) => {
        return ind >= 6
    })

    return returnData
})

</script>

<style></style>