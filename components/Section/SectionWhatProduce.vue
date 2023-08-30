<template>
    <div class="container py-28 lg:py-48 bg-[#171717]">
        <div class="caps-1 section-name">
            Что производим
        </div>
        <div class="flex flex-col gap-y-20">
            <div v-for="(item, ind) in sixTopItems" :key="ind">
                <div v-if="(ind+1)%2 == 1" class=" bg-cover lg:h-[512px] h-[320px] p-8 lg:p-16 text-white flex lg:flex-row flex-col justify-end lg:justify-between lg:items-end" :style="{backgroundImage: `url(${item.img})`}">
                    <div>
                        <div class="text-5xl md:text-7xl lg:text-9xl font-medium mb-6" v-html="item.title"></div>
                        <div class="text-2xl md:text-4xl leading-normal text-[##ffffffe6]" v-html="item.description"></div>
                    </div>
                    <div class="mt-10 lg:mt-0">
                        <button
                            class="text-lg md:text-xl lg:text-4xl font-semibold flex gap-6 items-center border rounded-full border-white px-6 py-3 md:px-8 md:py-4 lg:px-16 lg:py-8">
                            Подробнее
                            <span class="nuxt-icon">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 4.07812L2 6.07812C2 8.28726 3.79086 10.0781 6 10.0781L17 10.0781" stroke="white"
                                        stroke-width="2"></path>
                                    <path d="M13 5.07812L18 10.0781L13 15.0781" stroke="white" stroke-width="2"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div v-else class="flex flex-col lg:flex-row gap-x-16 flex-shrink">
                    <div class="basis-1/2">
                        <img class="object-contain w-full" :src="item.img" alt="">
                    </div>
                    <div class="basis-1/2 text-white flex flex-col justify-center">
                        <div class="mt-10 lg:mt-0">
                            <div class="text-5xl md:text-7xl lg:text-9xl font-medium mb-6" v-html="item.title"></div>
                            <div class="text-2xl md:text-4xl leading-normal text-[##ffffffe6] mb-10 lg:mb-20"  v-html="item.description"></div>
                        </div>
                        <div>
                            <button
                                class="text-lg md:text-xl lg:text-4xl font-semibold flex gap-6 items-center border rounded-full border-white px-6 py-3 md:px-8 md:py-4 lg:px-16 lg:py-8">
                                Подробнее
                                <span class="nuxt-icon">
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 4.07812L2 6.07812C2 8.28726 3.79086 10.0781 6 10.0781L17 10.0781"
                                            stroke="white" stroke-width="2"></path>
                                        <path d="M13 5.07812L18 10.0781L13 15.0781" stroke="white" stroke-width="2"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row flex-row gap-16">
                <div v-for="(item, ind) in otherItems" :key="ind" :style="{backgroundImage: `url(${item.img})`}"
                    class="lg:basis-1/3 bg-cover h-[320px] lg:h-[670px] w-full p-8 lg:p-16 text-white flex flex-col justify-end">
                    <div class="text-5xl md:text-7xl mb-10 md:mb-2" v-html="item.title"></div>
                    <div class="mb-10 text-2xl md:text-4xl " v-html="item.description"></div>
                    <button
                        class="w-fit text-lg md:text-xl lg:text-4xl font-semibold flex gap-6 items-center border rounded-full border-white px-6 py-3 md:px-8 md:py-4 lg:px-16 lg:py-8">
                        Подробнее
                        <span class="nuxt-icon">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 4.07812L2 6.07812C2 8.28726 3.79086 10.0781 6 10.0781L17 10.0781" stroke="white"
                                    stroke-width="2"></path>
                                <path d="M13 5.07812L18 10.0781L13 15.0781" stroke="white" stroke-width="2"></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
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