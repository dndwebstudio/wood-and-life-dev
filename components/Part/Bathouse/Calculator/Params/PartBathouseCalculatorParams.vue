<template>

  <div class="bathouse-calculator-params">

    <div class="bathouse-calculator-params__header">
      <button 
      v-for="btn in views" :key="btn.image"  
      class="bathouse-calculator-params__btn" 
      :class="{'bathouse-calculator-params__btn_active': btn?.active}" 
      type="button" 
      @click="setView(btn)"
      >
        {{  btn.name }}
      </button>
    </div>
    <div class="bathouse-calculator-params__body">
      <div class="bathouse-calculator__grid">
        <div class="bathouse-calculator__preview">
          <img :src="viewImage?.image" :alt="viewImage?.name">
        </div>
        <div class="bathouse-calculator__result">
          <div class="bathouse-calculator__selected-list">
              <div v-for="item in mainSelected" :key="item">
                <div  v-for="category in item.categories" :key="category">
                  <div v-for="el in category.list" :key="el" class="bathouse-calculator__selected-item" >
                    <div class="bathouse-calculator__selected-icon">
                      <img :src="el.image" class="" :alt="el.name">
                    </div>
                      <div 
                        class="bathouse-calculator__selected-group"
                        >
                        {{ item.short_name ? item.short_name : item.groupName }}
                      </div>
                      <div 
                        class="bathouse-calculator__selected-name"
                        >
                        {{ el.short_name ? el.short_name : el.name }}
                      </div>
                  </div>
                </div>
              </div>
          </div>
          <div 
            v-if="additionalSelectedNames" 
            class="bathouse-calculator__selected-additionals" 
            >
            {{additionalSelectedNames}}
          </div>
          <div class="bathouse-calculator__cost">
            <div class="bathouse-calculator__cost-title">Предварительная стоимость</div>
            <div class="bathouse-calculator__cost-summ">от {{summ}} руб.</div>
            <div class="bathouse-calculator__cost-delivery">Без учета доставки</div>
          </div>
        </div>
       </div>
      </div>

<!--    <component :is="currentTab" />-->
    </div>

</template>

<script setup lang="ts">

import { ICategoryItem, IGroup } from '~/dto/interfaces/group';
import {usePopupStore} from '~/store/popup'

interface IView {
  name: string;
  image: string;
  active: boolean;
}

const popupStore = usePopupStore();


const setView = (button: IView) => {

  views.forEach((item: IView) => (item.active = false))
  button.active = true

}

const viewImage = computed(() => {
  return views.find(item => item.active)
})

const views = reactive([
  { name: 'Снаружи', image: '/img/bathouse-calculator/preview-outside.png', active: false },
  { name: 'В разрезе', image: '/img/bathouse-calculator/preview-cataway.png', active: true }
]);

const props = defineProps(['data'])
//
const mainSelected = computed(() => {
  return props.data.main.map((item: IGroup) => ({
    ...item,
    groupName: item.name,
  }))
})
//
const additionalSelectedNames = computed(() => {
  return props.data.additional.map((item: IGroup) => item.categories.map(el => el.list)).flat(Infinity).map((res: ICategoryItem) => res.name).join(', ')

})

const summ = computed(() => {
  const preresult = Object.values(props.data).flat().map((item: any) => item.categories).flat().map(item => item.list).flat().reduce((summ, el) => {
    summ += el.cost
    return summ
  }, 0)

  const result = addCommasToNumber(preresult)


  if(result && typeof result === 'string') {
    let numResult = 0
    if(result.includes(',')) {
      const res = result.replace(/,/g, "")
      numResult = Number(res) ?? 0
    }
    else numResult = Number(result) ?? 0

    const obj = {num: numResult, str: result}   
    popupStore.changeSumm(obj)
  }

  return result
})


const addCommasToNumber = (number: number) => {

  const strNumber = number.toString();
  
  const parts = strNumber.split('.');
  
  const integerPart = parts[0];
  
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  let result = formattedInteger;
  
  if (parts.length > 1) {
    const decimalPart = parts[1];
    result += '.' + decimalPart;
  }
  
  return result;
}




</script>

<style scoped lang="scss">
.bathouse-calculator-params {
  position: sticky;
  top: 15rem;

  &__header {
    display: flex;
    padding: 0 0.8rem;
    background: var(--gray-700);
  }

  &__btn {
    background: var(--gray-700);
    @include text14;
    font-weight: bold;
    padding: 1.2rem 1.2rem 1rem;
    flex-grow: 1;
    text-transform: uppercase;
    max-width: 50%;
    position: relative;
    &_active {
      color: var(--green-400);
      &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        height: 2px;
        background: var(--green-400);
      }
    }
  }

  &__body {
    padding: 3.2rem 3.2rem 2.3rem;
    border: 2px solid var(--gray-700);

  }

}

.bathouse-calculator {
  &__preview {
    padding-top: 6.1rem;
    @include r($md) {
      padding-top: 0;
      margin: 0 auto;
    }
  }
  &__result {
    overflow: hidden;

  }

  &__cost {
    border-top: 1px solid var(--gray-600);
    margin-top: 0.5rem;
    padding: 2.5rem 0 0;
    &-title {
      text-transform: uppercase;
      @include text12;
      font-weight: bold;
      color: var(--gray-400);
      margin-bottom: 0.5rem;
    }
    &-summ {
      @include text32;
      font-weight: 500;
      @include r($md) {
        @include text64;
      }
    }
    &-delivery {
      @include text14;
      margin-top: 1rem;
      color: var(--gray-500);
    }
  }

  &__selected {

    &-list {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      padding: 2.4rem 0 2rem;
      @include r($md) {
        overflow-x: auto;
      }
    }

    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      max-width: 9.2rem;
      @include r($md) {
        overflow-x: auto;
        min-width: 8rem;
      }
    }

    &-icon {
      max-width: 6.5rem;
      max-height: 4rem;
      height: 4rem;
      display: flex;
      align-items: center;
      object-fit: contain;
      margin-bottom: 1.6rem;
    }

    &-group {
      font-weight: bold;
      @include text10;
      text-transform: uppercase;
      color: var(--gray-500);
      margin-bottom: 0.4rem;
    }

    &-name {
      line-height: 1;
      @include r($md) {
        @include text14;
      }
    }

    &-additionals {
      padding-left: 1.5rem;
      position: relative;
      @include text16;
      line-height: 1;
      padding-bottom: 2rem;
      &::before {
        content: '+';
        position: absolute;
        left: -3px;
        top: -3px;
        color: var(--gray-500);
      }
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 19.7rem 1fr;
    grid-gap: 2.3rem;
    @include r($sm) {
      grid-template-columns: auto;
    }
  }
}

</style>
