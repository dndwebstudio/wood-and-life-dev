<template>
    <div class="">
        <div>
            <img class="w-full mb-8" :src="img" alt="">
        </div>
        <div class="font-medium text-5xl mb-8">
            {{ title }}
        </div>
        <NuxtLink :to="url" class="flex gap-4">
            <span>Читать</span>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.33203 4.22241L2.33203 6.22241C2.33203 8.43155 4.12289 10.2224 6.33203 10.2224L17.332 10.2224"
                    stroke="#838383" stroke-width="2" />
                <path d="M13.332 5.22241L18.332 10.2224L13.332 15.2224" stroke="#838383" stroke-width="2" />
            </svg>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title: string;
    img: string;
    shortDescription?: string;
    url: string;
}
const props = withDefaults(defineProps<Props>(), {
    title: "",
    img: "",
    shortDescription: "",
    url: "",
});
</script>