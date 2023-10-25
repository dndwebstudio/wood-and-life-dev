<template>
    <div class="flex flex-start gap-24 flex-col lg:flex-row" style="align-items: flex-start;">
        <div class="responsive mb-16 xl:max-w-[364px] w-full lg:sticky" style="top:115px">
            <div class="font-medium mb-5">Содержание:</div>
            <ul class="pl-5">
                <li class="list-disc text-[#009767]" v-for="(item, ind) in descriptionPath">
                    <a :href="'#detail-blog-description-path-' + ind" class="" v-html="item.title"></a>
                </li>
            </ul>
        </div>
        <div>
            <div v-for="(item, ind) in descriptionPath" :key="ind" class="relative">
                <span :id="'detail-blog-description-path-' + ind" class="absolute" style="top: -116px"></span>
                <div class="pb-48" :class="item.addedClass" v-html="item.text"></div>
                <SectionDetailBlogImages v-if="item.images" :images-list="item.images"/>
            </div>
            <ModuleSocialShare :url="'http://localhost:3000/company/blogDetail#detail-blog-description-path-4'"
                :title="'Выбираем идеальную купель для бани'" />

        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ModuleSocialShare from "../Module/ModuleSocialShare.vue";
import SectionDetailBlogImages from "./SectionDetailBlogImages.vue";
interface DetailBlogDescriptionPath {
    title: string;
    text: string;
    addedClass: string;
    images?: string[];
}

interface DetailBlogData {
    descriptionPath: DetailBlogDescriptionPath[];
}

interface Props {
    detailData: DetailBlogData;
}

let props = defineProps<Props>()

let descriptionPath = ref<DetailBlogDescriptionPath[]>(props.detailData.descriptionPath)
</script>

<style>
html {
    scroll-behavior: smooth;
}
.videoBlockBlog:before{
  content: "";
  padding-top: 56.25%;
  float: left;
}
.videoBlockBlog{
  overflow: hidden;
}
</style>