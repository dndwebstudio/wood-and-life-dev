<template>
  <div  v-for="(category) in group.categories" :key="category.name" class="choise-group__categories">
    <div  
    class="choise-group__list" :class="group.columns ? 'choise-group__list_' + group.columns : ''" 
    >
      <div 
        v-for="(item) in category.list" :key="item.name" 
        class="choise-group__item" :class="[
          {'choise-group__item_locked': item.locked},
          {'choise-group__item_checked': item.checked},
          {'choise-group__item_small': group.size === 'small'},
          {'choise-group__item_column': group.view === 'column'},
          
          ]" 
          @click="setActive(category.list, item, category.type, $event)"
         
              >
          <div>
            <div class="choise-group__item-name">{{ item.name }}</div>
            <div v-if="item.desc" class="choise-group__item-desc" >{{ item.desc }}</div>
          </div>
          <img 
          :src="item.image" class="choise-group__item-image" 
          :class="{'choise-group__item-image_large': group.imageSize === 'large'}" 
          :alt="item.name">
          <!-- shouldShowQuestionIcon(group) -->
          <div 
            v-if="item?.additionalInfo"
            class="choise-group__item-image-icon"
            @click="openModalPopup"
            >
            <nuxt-icon 
            name="question" class="choise-group__item-image-icon-question" filled />
          </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LoremIpsum } from "lorem-ipsum";
import { useModal } from "vue-final-modal";
import ModalPopup from "@/components/Modal/ModalPopup.vue";
import {IGroup, ICategoryItem} from "@/dto/interfaces/group"
import {IitemProps} from "@/dto/interfaces/items"

defineProps({
  group: {
    type: Object as () => IGroup,
    required: true,
  },
});

const btnStatus = ref(false)

const nameItem = ref('')
const imgItem = ref('');
const textItem = ref('');
const listItem = ref<string[]>([])



const itemProp = computed((): IitemProps => ({
  name: nameItem.value,
  img: imgItem.value,
  text: textItem.value,
  list: listItem.value
}));



const { open: openModalPopup } = useModal({
  component: ModalPopup,
  attrs: {
    itemProp: computed(() => itemProp.value),
  },
});


// const toggleObjActive = (obj: ICategoryItem) => {
//   obj.checked = !obj.checked;
// };

const setActive = (list: ICategoryItem[], current: ICategoryItem, type: string, event: Event) => {

  btnStatus.value = !btnStatus.value;
  
  console.log('ЗДЕСЬ РАНДОМАЙЗЕР ДАННЫХ ДЛЯ ПОПАП-ОКОН')
  const lorem = new LoremIpsum();

  // Генерация случайного текста объемом до 100 символов
  const randomText = lorem.generateWords(Math.floor(Math.random() * 50));

  // Генерация массива строк с длиной каждой строки от 10 до 15 символов
  const randomTextList = Array.from({ length: 5 }, () =>
    lorem.generateWords(Math.floor(Math.random() * 5) + 10)
  );  

  nameItem.value = (event.currentTarget as HTMLElement).textContent || '';
  imgItem.value = (event.currentTarget as HTMLImageElement)?.children[1].getAttribute('src') ?? '';
  textItem.value = randomText
  listItem.value = randomTextList


  if(current.locked) return;

  if (current.checked) {
    current.checked = false; // deselect the item
  } else {
    if (type === 'single') {
      list.forEach(item => (item.checked = false));
    }
    current.checked = true; // select the item
  }

  };

  onMounted(() => {
    computed((): IitemProps => ({
      name: nameItem.value,
      img: imgItem.value,
      text: textItem.value,
      list: listItem.value
    }));
  })

</script>

<style lang="scss">


.choise-group {
  margin-bottom: 4.7rem;
  &__name {
    @include text24;
    margin-bottom: 2rem;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 17rem;
    flex: 1 0 30rem;
    cursor: pointer;
    background: var(--gray-700);
    padding: 2.8rem 2.4rem;
    padding-right: 2.8rem;
    @include r($md) {
      padding: 2rem 1.5rem;
    }
    &_small {
      padding: 2rem 2.4rem;
      @include r($md) {
        padding: 1.25rem 1.5rem;
      }
    }
    &_column {
      flex-direction: column-reverse;
      align-items: center;
      position: relative;
      //justify-content: center;
      padding: 2.5rem 1rem 1.4rem;
      @include r($md) {
        padding: 2.5rem 0rem 1.4rem;
        min-width: 11rem;
      }
      .choise-group__item-image {
        margin-bottom: 2.1rem;
      }
    }

    &-name {
      @include r($md) {
        @include text14;
        text-align: center;
      }
    }

    &-desc {
      @include text14;
      color: var(--gray-400);
      margin-top: 0.5rem;
      @include r($md) {
        @include text12;
        max-width: 80%;
      }
    }

    &-image {
      max-height: 4rem;
      max-width: 6.5rem;
      &-icon{
        position: absolute;
        top: 0.5rem;
        right: 0.6rem;
        &-question{
          
          display: block;
          .question-icon {
            // width: 2.7rem;
            // height: 2.7rem;
            :hover{
              fill: rgb(126, 131, 131);
            }
          }
        }
 
      }
      @include r($md) {
        max-height: 3rem;
        max-width: 4.5rem;
      }
      &_large {
        max-height: 6.4rem;
        max-height: 6.4rem;
        @include r($md) {
          max-height: 5rem;
          max-width: 5rem;
        }
      }
    }

    &_checked {
      box-shadow: inset 0 0 0 2px var(--green-400);
    }
    &_locked {
      opacity: 0.3;
      pointer-events: none;
      box-shadow: none !important;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem 0.8rem;
    margin-bottom: 0.8rem;

    &_3 .choise-group__item {
      flex: 1 0 20rem;
      @include r($md) {
        flex: 1 0 10rem;
      }
    }

    &_4 .choise-group__item {
      flex: 1 0 15rem;
      @include r($md) {
        flex: 1 0 11rem;
      }
    }
  }
}
</style>
