<template>
  <section class="projects">
    <div class="container">
      <div class="projects__content">
        <div class="projects__header">
          <PartSectionName :name="data.sectionTitle" />
          <h2 class="h2 projects__title" v-html="data.title">

          </h2>
          <p class="projects__subtitle">
            {{ data.subtitle }}
          </p>
        </div>

        <PartProjectsTabs @change-tab="changeTab" />
        <PartProjectsProject ref="project" :project="currentTab" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { LoremIpsum } from "lorem-ipsum";
import { useBathouseProjectsStore } from "@/store/bathouseProjects";

interface Data {
  sectionTitle: string;
  title: string;
  subtitle: string;
 
}

interface Props {
  data: Data;
}

interface Config {
  features: any[];
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

defineProps<Props>();

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 1,
    min: 1
  },
  wordsPerSentence: {
    max: 10,
    min: 5
  }
});


const maxItems = 19;

const maxItemLength = 70;

// генерация массива для попапа описания комплектации
const generateArray = () => {
  const array = [];
  const itemCount = Math.floor(Math.random() * maxItems) + 1;
  for (let j = 0; j < itemCount; j++) {
    const itemLength = Math.floor(Math.random() * maxItemLength) + 1;
    const item = lorem.generateSentences(1).substring(0, itemLength);
    array.push(item);
  }
  return array;
};



const store = useBathouseProjectsStore();
const { projects } = storeToRefs(store);

const currentTab = ref(projects.value[0]);

const project = ref();

console.log('ЗДЕСЬ РАНДОМАЙЗЕР КОМПЛЕКТАЦИИ БАНЬ');
projects.value.forEach((el)=>{
  el.configs.forEach((elem)=>{
    elem.popup = {
        title: 'Базовая комплектация',
        listItems: generateArray()
      }
  })
})
  


const changeTab = async (tab: {
  configs: Config[];
  form: string;
  icon: string;
}) => {
  project.value.projectIndex = 0;
  currentTab.value = tab;
  await nextTick();
  project.value.typesSlider.projectTypesSlider.swiper.update();
};


</script>

<style scoped lang="scss">
.projects {
  &__header {
    margin-bottom: 6.4rem;
    @include r($md) {
      margin-bottom: 4.4rem;
    }
    @include r($md) {
      margin-bottom: 3rem;
    }
  }

  &__content {
    padding: 12rem 13.7rem;
    @include r($md) {
      padding: 6rem 0;
    }
    @include r($sm) {
      padding: 4rem 0;
    }
  }

  &__title {
    margin-bottom: 4.8rem;
    max-width: 110rem;
    @include r($md) {
      margin-bottom: 4.4rem;
    }
    @include r($md) {
      margin-bottom: 2.4rem;
    }
  }

  &__subtitle {
    @include text24;
  }
}
</style>
