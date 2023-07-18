<template>
    <section class="pb-48">
        <div class="container">
            <div class="grid grid-cols-4 gap-16">
                <SectionBlogElement 
                    v-for="(item, ind) in blogData.items" 
                    :key="ind" 
                    :title="item.title" 
                    :img="item.img" 
                    :shortDescription="item.shortDescription" 
                    :url="item.url" 
                    />
            </div>
            <Pagination :pageLast="25"/>
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
            img: "/img/factory/1.png",
            shortDescription: "",
            url: "/blog/"
        },
        {
            title: "Название #2",
            img: "/img/factory/2.png",
            shortDescription: "",
            url: "/blog/"
        },
        {
            title: "Название #3",
            img: "/img/factory/3.png",
            shortDescription: "",
            url: "/blog/"
        },
        {
            title: "Название #4",
            img: "/img/factory/4.png",
            shortDescription: "",
            url: "/blog/"
        },
        {
            title: "Название #5",
            img: "/img/factory/5.png",
            shortDescription: "",
            url: "/blog/"
        },
        {
            title: "Название #6",
            img: "/img/factory/6.png",
            shortDescription: "",
            url: "/blog/"
        },
    ]
})
</script>

<style></style>