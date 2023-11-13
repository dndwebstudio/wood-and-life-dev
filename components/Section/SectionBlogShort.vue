<template>
    <section class="pb-24 lg:pb-48">
        <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-3 gap-16">
                <SectionBlogElement v-for="(item, ind) in blogData.items" :key="ind" :title="item.title" :img="item.img"
                    :shortDescription="item.shortDescription" :url="item.url"
                    :classSet="ind == 0 ? 'col-span-1 md:col-span-2 lg:col-span-1' : 'col-span-1'" />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import SectionBlogElement from './SectionBlogElementShort.vue';
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