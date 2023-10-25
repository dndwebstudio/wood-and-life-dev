<template>
    <div class="flex flex-start gap-24 flex-col lg:flex-row" style="align-items: flex-start;">
        <div class="sticky mb-16 lg:max-w-[364px] w-full" style="top:115px">
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
            </div>
            <ModuleSocialShare :url="'http://localhost:3000/company/blogDetail#detail-blog-description-path-4'"
                :title="'Выбираем идеальную купель для бани'" />

            <div ref="container">
                <a data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
                    <img src="https://lipsum.app/id/60/200x150" width="200" height="150" />
                </a>
                <a data-fancybox="gallery" href="https://lipsum.app/id/61/1600x1200">
                    <img src="https://lipsum.app/id/61/200x150" width="200" height="150" />
                </a>
                <a data-fancybox="gallery" href="https://lipsum.app/id/62/1600x1200">
                    <img src="https://lipsum.app/id/62/200x150" width="200" height="150" />
                </a>
                <a data-fancybox="gallery" href="https://lipsum.app/id/63/1600x1200">
                    <img src="https://lipsum.app/id/63/200x150" width="200" height="150" />
                </a>
                <a data-fancybox="gallery" href="https://lipsum.app/id/64/1600x1200">
                    <img src="https://lipsum.app/id/64/200x150" width="200" height="150" />
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Fancybox } from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { ref, onMounted, onUpdated, onUnmounted } from "vue";
import ModuleSocialShare from "../Module/ModuleSocialShare.vue";
interface DetailBlogDescriptionPath {
    title: string;
    text: string;
    addedClass: string;
}

interface DetailBlogData {
    descriptionPath: DetailBlogDescriptionPath[];
}

interface Props {
    detailData: DetailBlogData;
}

let props = defineProps<Props>()

let descriptionPath = ref<DetailBlogDescriptionPath[]>(props.detailData.descriptionPath)

const container = ref(null);

onMounted(() => {
    Fancybox.bind(container.value, '[data-fancybox]', {
        ...{
            Carousel: {
                infinite: false,
            },
        },
    });
})
onUpdated(() => {
    Fancybox.unbind(container.value);
    Fancybox.close();

    Fancybox.bind(container.value, '[data-fancybox]', {
      ...{
            Carousel: {
                infinite: false,
            },
        },
    });
})
onUnmounted(() => {
    Fancybox.destroy();
})
</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>