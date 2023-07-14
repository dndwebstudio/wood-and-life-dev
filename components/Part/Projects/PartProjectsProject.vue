<template>
  <div class="project">
    <PartProjectTypes
      ref="typesSlider"
      :data="project.configs"
      :project-index="projectIndex"
      @update-index="updateIndex"
    />
    <div class="project__wrap">
      <PartProjectGallery
        ref="gallerySlider"
        class="project__gallery"
        :data="project.configs[projectIndex]"
      />
      <PartProjectsInfo
        class="project__info"
        :data="project.configs[projectIndex]"
      />
      <PartProjectAdditions class="project__additions" :data="additions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBathouseProjectsStore } from "@/store/bathouseProjects";

interface Config {
  features: {
  name: string;
  value: string;
}[];
  gallery: any[];
  popup: {
    title: string;
    listItems: string[]
  };
  price: string;
  title: string;
  type: {
    img: string;
    name: string;
  };
}

interface Project {
  configs: Config[];
  form: string;
  icon: string;
}

interface Props {
  project: Project;
}
withDefaults(defineProps<Props>(), {
  project: () => ({
    configs: [],
    form: "",
    icon: "",
  }),
  
  
});



const store = useBathouseProjectsStore();
const { additions } = storeToRefs(store);
const projectIndex = ref(0);
const gallerySlider = ref();
const typesSlider = ref();

const updateIndex = async (idx: number) => {
  projectIndex.value = idx;
  await nextTick();
  gallerySlider.value.galleryMainSlider.swiper.update();
};

defineExpose({
  typesSlider,
  projectIndex,
});
</script>

<style scoped lang="scss">
.project {
  &__wrap {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 1fr);
    gap: 4.8rem;
    grid-template-areas:
      "gallery gallery info"
      "gallery gallery info"
      "additions additions info";
    @include r($md) {
      display: block;
    }
  }
  &__gallery {
    grid-area: gallery;
  }
  &__info {
    grid-area: info;
    @include r($md) {
      margin-top: 9.93rem;
    }
    @include r($sm) {
      margin-top: 2.13rem;
    }
  }
  &__additions {
    grid-area: additions;
  }
}
</style>
