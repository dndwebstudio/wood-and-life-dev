<template>
    <div ref="container" :class="classSetValue">
        <a data-fancybox="gallery" v-for="(itemImage, indImage) in imagesList" :key="indImage" :href="itemImage" >
            <img :src="itemImage" class="w-full"  />
        </a>
    </div>
</template>
<script setup lang="ts">
import { Fancybox } from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { ref, onMounted, onUpdated, onUnmounted, computed } from "vue";

interface Props {
    imagesList: string[];
    classSet?: string;
}

let props = defineProps<Props>()

const container = ref(null);

let classSetValue = computed(() => {
    return props.classSet ?? "grid grid-cols-1 sm:grid-cols-3 pt-16 pb-16 gap-5"
})

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