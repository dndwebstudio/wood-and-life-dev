<template>
    <section class="pb-24 lg:pb-48">
        <div class="container">
            <div class="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-16">
                <SectionBlogElement 
                    v-for="(item, ind) in blogData.items" 
                    :key="ind" 
                    :title="item.title" 
                    :img="item.img" 
                    :shortDescription="item.shortDescription" 
                    :url="item.url" 
                    />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import SectionBlogElement from './SectionBlogElement.vue';
import Pagination from "~/components/Ui/Pagination.vue"


const blogData = ref<BlogList>({
    items: [
        {
            title: "Название #1",
            img: "/img/factory/4.png",
            shortDescription: "",
            url: "/company/blogDetail"
        },
        {
            title: "Название #2",
            img: "/img/factory/2.png",
            shortDescription: "",
            url: "/company/blogDetail"
        },
        {
            title: "Название #3",
            img: "/img/factory/3.png",
            shortDescription: "",
            url: "/company/blogDetail"
        },
    ]
})
</script>

<style></style>