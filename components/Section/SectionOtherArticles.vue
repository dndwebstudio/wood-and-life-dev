<template>
    <div class="grid grid-cols-4 gap-16 pb-32">
        <div class="" v-for="(item, ind) in props.otherArticles" :key="ind">
            <div>
                <img class="w-full mb-8" :src="item.img" alt="">
            </div>
            <div class="font-medium text-4xl mb-8">
                {{ item.title }}
            </div>
            <NuxtLink :to="item.url">
            <div class="flex gap-4">
                    <span>Читать</span>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.33203 4.22241L2.33203 6.22241C2.33203 8.43155 4.12289 10.2224 6.33203 10.2224L17.332 10.2224"
                            stroke="#838383" stroke-width="2" />
                        <path d="M13.332 5.22241L18.332 10.2224L13.332 15.2224" stroke="#838383" stroke-width="2" />
                    </svg>
            </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">

interface OtherArticlesItem {
	title: string;
	url: string;
	img: string;
}

interface Props{
    otherArticles: OtherArticlesItem[]
}

let props = defineProps<Props>()
</script>