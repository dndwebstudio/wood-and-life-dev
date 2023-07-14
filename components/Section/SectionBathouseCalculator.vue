<template>

  <section id="bathouse-calculator" class="bathouse-calculator">

   
       
    <div class="bathouse-calculator__header">
      <div  class="container">
        <h2 class="bathouse-calculator__header-title">Подберите баню <br />под ваши параметры</h2>
        <p class="bathouse-calculator__header-description">А мы рассчитаем ее стоимость с доставкой и сборкой на
          участке</p>
      </div>
    </div>
    


    <div class="container">
      <div class="bathouse-calculator__grid">
        <div class="bathouse-calculator__result">
          <PartBathouseCalculatorParams :data="selected" />
        </div>

     
       
            <div class="bathouse-calculator__params">
              <div v-for="group in data.main" :key="group.name" class="choise-group"  >
                <div class="choise-group__name">{{ group.name }}</div>
                <PartBathouseCalculatorChoise  :group="group" />
              </div>

              <div class="bathouse-calculator__additonal-title">По желанию вы можете добавить в комплектацию бани дополнительные опции</div>

              <PartBathouseCalculatorAdditionalChoise v-for="(group, idx) in data.additional" :key="group.name" :group="group" :idx="idx" />

              <ModuleSimpleForm
                class="section-form-expanded__form"
                :data="form"
                :tabs="contactTabs"
              />
            </div>
          
   

      </div>
    </div>
  </section>
  <ModulePrePriceWindow  v-if="prePriceBanner" />

</template>

<script setup lang="ts">

import {IGroup, ICategoryItem} from "@/dto/interfaces/group"
import{ICommunicationTabsExpanded} from "@/dto/interfaces/tabs"

import {usePopupStore} from '~/store/popup'
const popupStore = usePopupStore();





const prePriceBanner = ref(false)


const getCalculatorPosition = () => {

const bannerPrice = document.querySelector('.preprice')

const calculator = document.querySelector('.bathouse-calculator__params')

  if (
    
    calculator!.getBoundingClientRect().bottom + 200 > window.innerHeight &&
    calculator!.getBoundingClientRect().top < window.innerHeight && !bannerPrice
    ) 
    {
    
      popupStore.togglePrePrice(true)
    
      prePriceBanner.value = true
 
    }
    if(calculator!.getBoundingClientRect().bottom + 200 < window.innerHeight ||
    calculator!.getBoundingClientRect().top > window.innerHeight && bannerPrice) 
    {popupStore.togglePrePrice(false)
          prePriceBanner.value = false}

}

  



  // логика для отображения баннера в области калькулятора в адаптиве

defineProps({
    contactTabs: {
      type: Object as () => ICommunicationTabsExpanded, 
      required: true
    }})

const form = {
  lead: "Мы рассчитаем стоимость бани по выбранным параметрам и перезвоним в течение часа",
  title: "Сориентируем по стоимости и срокам доставки",
  description: "test",
  btnName: "Получить расчет стоимости с доставкой",
  policyLink: "#",
  textarea: null,
};

const getSelected = (array: IGroup[]): IGroup[] => {
  
  const arr =  array.map(item => ({
    ...item,
    categories: item.categories
    .map(item => ({
      ...item,
      list: item.list.filter(el => el.checked)
    })).filter(item => item.list.length)
  }))
  .filter(item => item.categories.length);

    return arr
};

const selected = computed(() => ({
  main: getSelected(data.main),
  additional: getSelected(data.additional)
}));

const data = reactive({
  main: [
    {
      name: "Форма",
      columns: 3,
      categories: [
        {
          name: "Форма",
          type: "single",
          list: [
            {
              name: "Круглая",
              desc: "",
              image: 'img/bathouse-calculator/forms/form-1.svg',
              cost: 100000,
              checked: false
            },
            {
              name: "Квадратная",
              desc: "",
              image: 'img/bathouse-calculator/forms/form-2.svg',
              cost: 150000,
              checked: false
            },
            {
              name: "Овал",
              desc: "",
              image: 'img/bathouse-calculator/forms/form-3.svg',
              cost: 150000,
              checked: false
            },
            {
              name: "Квадроовал",
              desc: "",
              image: 'img/bathouse-calculator/forms/form-4.svg',
              cost: 150000,
              checked: false
            },
            {
              name: "Викинг",
              desc: "",
              image: 'img/bathouse-calculator/forms/form-5.svg',
              cost: 150000,
              checked: false
            }
          ]
        }
      ]
    },
    {
      name: "Материал",
      columns: 3,
      categories: [
        {
          name: "Материал",
          type: "single",
          list: [
            {
              name: "Ель",
              desc: "",
              image: 'img/bathouse-calculator/materials/material-1.png',
              cost: 100000,
              checked: false
            },
            {
              name: "Кедр",
              desc: "",
              image: 'img/bathouse-calculator/materials/material-2.png',
              cost: 150000,
              checked: false
            }
          ]
        }
      ]
    },
    {
      name: "Размер бани, м",
      short_name: "Размер бани",
      size: 'small',
      columns: 4,
      categories: [
        {
          name: "Материал",
          type: "single",
          list: [
            {
              name: "2х2",
              desc: "",
              image: 'img/bathouse-calculator/sizes/small.svg',
              sizes: {
                width: 2,
                length: 2
              },
              cost: 100000,
              checked: false
            },
            {
              name: "2х2,5",
              desc: "",
              image: 'img/bathouse-calculator/sizes/small.svg',
              sizes: {
                width: 2,
                length: 2.5
              },
              cost: 150000,
              checked: false
            },
            {
              name: "2х3",
              desc: "",
              image: 'img/bathouse-calculator/sizes/small.svg',
              sizes: {
                width: 2,
                length: 3
              },
              cost: 150000,
              checked: false
            },
            {
              name: "2х3,5",
              desc: "",
              image: 'img/bathouse-calculator/sizes/small.svg',
              sizes: {
                width: 2,
                length: 3.5
              },
              cost: 150000,
              checked: false
            },
            {
              name: "2х4",
              desc: "",
              image: 'img/bathouse-calculator/sizes/medium.svg',
              sizes: {
                width: 2,
                length: 4
              },
              cost: 150000,
              checked: false
            },
            {
              name: "2х4,5",
              desc: "",
              image: 'img/bathouse-calculator/sizes/medium.svg',
              sizes: {
                width: 2,
                length: 4.5
              },
              cost: 150000,
              checked: false
            },
            {
              name: "2х5",
              desc: "",
              image: 'img/bathouse-calculator/sizes/medium.svg',
              sizes: {
                width: 2,
                length: 5
              },
              cost: 150000,
              checked: false
            },
            {
              name: "2х5,5",
              desc: "",
              image: 'img/bathouse-calculator/sizes/medium.svg',
              sizes: {
                width: 2,
                length: 5.5
              },
              cost: 150000,
              checked: false
            },
            {
              name: "2х6",
              desc: "",
              image: 'img/bathouse-calculator/sizes/large.svg',
              sizes: {
                width: 2,
                length: 6
              },
              cost: 150000,
              checked: false
            },
            {
              name: "2,15х2",
              desc: "",
              image: 'img/bathouse-calculator/sizes/large.svg',
              sizes: {
                width: 2.15,
                length: 2
              },
              cost: 150000,
              checked: false
            },
            {
              name: "2,15х2,25",
              desc: "",
              image: 'img/bathouse-calculator/sizes/large.svg',
              sizes: {
                width: 2.15,
                length: 2.25
              },
              cost: 150000,
              checked: false
            },
            {
              name: "2,15х3",
              desc: "",
              image: 'img/bathouse-calculator/sizes/large.svg',
              sizes: {
                width: 2.15,
                length: 3
              },
              cost: 150000,
              checked: false
            },
            {
              name: "2,15х3,5",
              desc: "",
              image: 'img/bathouse-calculator/sizes/large.svg',
              sizes: {
                width: 2.15,
                length: 3.5
              },
              cost: 150000,
              checked: false
            },
            {
              name: "2,15х4",
              desc: "",
              image: 'img/bathouse-calculator/sizes/large.svg',
              sizes: {
                width: 2.15,
                length: 4
              },
              cost: 150000,
              checked: false
            },
            {
              name: "2,15х4,5",
              desc: "",
              image: 'img/bathouse-calculator/sizes/large.svg',
              sizes: {
                width: 2.15,
                length: 4.5
              },
              cost: 150000,
              checked: false
            },
            {
              name: "2,15х5",
              desc: "",
              image: 'img/bathouse-calculator/sizes/large.svg',
              sizes: {
                width: 2.15,
                length: 5
              },
              cost: 150000,
              checked: false
            },
            {
              name: "2,15х5,5",
              desc: "",
              image: 'img/bathouse-calculator/sizes/large.svg',
              sizes: {
                width: 2.15,
                length: 5.5
              },
              cost: 150000,
              checked: false
            },
            {
              name: "2,15х6",
              desc: "",
              image: 'img/bathouse-calculator/sizes/large.svg',
              sizes: {
                width: 2.15,
                length: 6
              },
              cost: 150000,
              checked: false
            },{
              name: "2,3х2",
              desc: "",
              image: 'img/bathouse-calculator/sizes/large.svg',
              sizes: {
                width: 2.3,
                length: 2
              },
              cost: 150000,
              checked: false
            },
            {
              name: "2,3х2,5",
              desc: "",
              image: 'img/bathouse-calculator/sizes/large.svg',
              sizes: {
                width: 2.3,
                length: 2.5
              },
              cost: 150000,
              checked: false
            },
            {
              name: "2,3х3",
              desc: "",
              image: 'img/bathouse-calculator/sizes/large.svg',
              sizes: {
                width: 2.3,
                length: 3
              },
              cost: 150000,
              checked: false
            },{
              name: "2,3х3,5",
              desc: "",
              image: 'img/bathouse-calculator/sizes/large.svg',
              sizes: {
                width: 2.3,
                length: 3.5
              },
              cost: 150000,
              checked: false
            },
            {
              name: "2,3х4",
              desc: "",
              image: 'img/bathouse-calculator/sizes/large.svg',
              sizes: {
                width: 2.3,
                length: 4
              },
              cost: 150000,
              checked: false
            },
            {
              name: "2,3х4,5",
              desc: "",
              image: 'img/bathouse-calculator/sizes/large.svg',
              sizes: {
                width: 2.3,
                length: 4.5
              },
              cost: 150000,
              checked: false
            },
            {
              name: "2,3х5",
              desc: "",
              image: 'img/bathouse-calculator/sizes/large.svg',
              sizes: {
                width: 2.3,
                length: 5
              },
              cost: 150000,
              checked: false
            },
            {
              name: "2,3х5,5",
              desc: "",
              image: 'img/bathouse-calculator/sizes/large.svg',
              sizes: {
                width: 2.3,
                length: 5.5
              },
              cost: 150000,
              checked: false
            },
            {
              name: "2,3х6",
              desc: "",
              image: 'img/bathouse-calculator/sizes/large.svg',
              sizes: {
                width: 2.3,
                length: 6
              },
              cost: 150000,
              checked: false
            },
          ]
        }
      ]
    },
    {
      name: "Количество секций",
      columns: 2,
      categories: [
        {
          name: "Секции",
          type: "single",
          list: [
            {
              name: "Односекционная",
              short_name: "Одна",
              size: 1,
              desc: "(Парная)",
              image: 'img/bathouse-calculator/sections/sections-1.svg',
              cost: 100000,
              checked: false,
              locked: false
            },
            {
              name: "Двухсекционная",
              short_name: "Две",
              size: 2,
              desc: "",
              image: 'img/bathouse-calculator/sections/sections-2.svg',
              cost: 150000,
              checked: false,
              locked: true
            },
            {
              name: "Трехсекционная",
              short_name: "Три",
              size: 3,
              desc: "(Предбанник + Парная + Моечное отделение)",
              image: 'img/bathouse-calculator/sections/sections-3.svg',
              cost: 150000,
              checked: false,
              locked: true
            }
          ]
        }
      ]
    },
    {
      name: "Цвет",
      columns: 4,
      view: 'column',
      categories: [
        {
          name: "Цвета",
          type: "single",
          list: [
            {
              name: "Сосна",
              desc: "",
              image: 'img/bathouse-calculator/colors/color-1.png',
              cost: 100000,
              checked: false
            },
            {
              name: "Орех",
              desc: "",
              image: 'img/bathouse-calculator/colors/color-2.png',
              cost: 150000,
              checked: false
            },
            {
              name: "Золотой дуб",
              desc: "",
              image: 'img/bathouse-calculator/colors/color-3.png',
              cost: 150000,
              checked: false
            },
            {
              name: "Тик",
              desc: "",
              image: 'img/bathouse-calculator/colors/color-4.png',
              cost: 150000,
              checked: false
            },
            {
              name: "Орегон",
              desc: "",
              image: 'img/bathouse-calculator/colors/color-5.png',
              cost: 150000,
              checked: false
            },
            {
              name: "Махагон",
              desc: "",
              image: 'img/bathouse-calculator/colors/color-6.png',
              cost: 150000,
              checked: false
            },
            {
              name: "Рябина",
              desc: "",
              image: 'img/bathouse-calculator/colors/color-7.png',
              cost: 150000,
              checked: false
            },
            {
              name: "Палисандр",
              desc: "",
              image: 'img/bathouse-calculator/colors/color-8.png',
              cost: 150000,
              checked: false
            },
            {
              name: "Беленый дуб",
              desc: "",
              image: 'img/bathouse-calculator/colors/color-9.png',
              cost: 150000,
              checked: false
            },
            {
              name: "Еловая зелень",
              desc: "",
              image: 'img/bathouse-calculator/colors/color-10.png',
              cost: 150000,
              checked: false
            },
            {
              name: "Натуральный цвет",
              desc: "",
              image: 'img/bathouse-calculator/colors/color-11.png',
              cost: 150000,
              checked: false
            },
            {
              name: "Другой",
              desc: "",
              image: 'img/bathouse-calculator/colors/color-12.png',
              cost: 150000,
              checked: false
            }
          ]
        }
      ]
    },
  ],
  additional: [{
    name: "Печи",
    columns: 4,
    view: 'column',
    imageSize: 'large',
    categories: [
      {
        name: "Печи",
        type: "single",
        list: [
          {
            name: "Везувий «Ураган»",
            desc: "",
            image: 'img/bathouse-calculator/stoves/stove-1.png',
            cost: 100000,
            checked: false,
            additionalInfo: true
          },
          {
            name: "Везувий «Скиф»",
            desc: "",
            image: 'img/bathouse-calculator/stoves/stove-2.png',
            cost: 100000,
            checked: false,
            additionalInfo: true
          },
          {
            name: "Aston 20",
            desc: "",
            image: 'img/bathouse-calculator/stoves/stove-3.png',
            cost: 100000,
            checked: false,
            additionalInfo: true
          },
          {
            name: "Комета «Вега»",
            desc: "",
            image: 'img/bathouse-calculator/stoves/stove-4.png',
            cost: 100000,
            checked: false,
            additionalInfo: false
          },
          {
            name: "Комета «Вега Window» ",
            desc: "",
            image: 'img/bathouse-calculator/stoves/stove-5.png',
            cost: 100000,
            checked: false,
            additionalInfo: false
          },
          {
            name: "Атмосфера L в камне",
            desc: "",
            image: 'img/bathouse-calculator/stoves/stove-6.png',
            cost: 100000,
            checked: false,
            additionalInfo: true
          },
          {
            name: "Атмосфера L в сетке",
            desc: "",
            image: 'img/bathouse-calculator/stoves/stove-7.png',
            cost: 100000,
            checked: false,
            additionalInfo: true
          }
        ]
      }
    ]
  },
    {
      name: "Окна и двери",
      columns: 3,
      view: 'column',
      imageSize: 'large',
      categories: [
        {
          name: "Окна",
          type: "single",
          list: [
            {
              name: "Окно деревянное 90х60",
              desc: "",
              image: 'img/bathouse-calculator/doors/window-1.png',
              cost: 100000,
              checked: false,
              additionalInfo: false
            },
            {
              name: "Окно деревянное 50х50",
              desc: "",
              image: 'img/bathouse-calculator/doors/window-2.png',
              cost: 100000,
              checked: false,
              additionalInfo: true
            },
            {
              name: "Окно деревянное 30х40",
              desc: "",
              image: 'img/bathouse-calculator/doors/window-3.png',
              cost: 100000,
              checked: false,
              additionalInfo: true
            }
          ]
        },
        {
          name: "Двери внутренние",
          type: "single",
          list: [
            {
              name: "Дверь стеклянная матовая",
              desc: "",
              image: 'img/bathouse-calculator/doors/door-1.png',
              cost: 100000,
              checked: false,
              additionalInfo: false
            },
            {
              name: "Дверь стеклянная прозрачная",
              desc: "",
              image: 'img/bathouse-calculator/doors/door-2.png',
              cost: 100000,
              checked: false,
              additionalInfo: true
            },
          ]
        },
        {
          name: "Двери входные",
          type: "multiple",
          list: [
            {
              name: "Дверь металлическая",
              desc: "",
              image: 'img/bathouse-calculator/doors/door-3.png',
              cost: 100000,
              checked: false,
              additionalInfo: true
            }
          ]
        },
      ]
    },
    {
      name: "Внутри бани",
      columns: 3,
      view: 'column',
      
    
      imageSize: 'large',
      categories: [
        {
          name: "Печи",
          type: "single",
          list: [
            {
              name: "Везувий «Ураган»",
              desc: "",
              image: 'img/bathouse-calculator/stoves/stove-1.png',
              cost: 100000,
              checked: false,
              additionalInfo: false
            },
            {
              name: "Везувий «Скиф»",
              desc: "",
              image: 'img/bathouse-calculator/stoves/stove-2.png',
              cost: 100000,
              checked: false,
              additionalInfo: true
            },
            {
              name: "Aston 20",
              desc: "",
              image: 'img/bathouse-calculator/stoves/stove-3.png',
              cost: 100000,
              checked: false,
              additionalInfo: false
            },
            {
              name: "Комета «Вега»",
              desc: "",
              image: 'img/bathouse-calculator/stoves/stove-4.png',
              cost: 100000,
              checked: false,
              additionalInfo: true
            },
            {
              name: "Комета «Вега Window» ",
              desc: "",
              image: 'img/bathouse-calculator/stoves/stove-5.png',
              cost: 100000,
              checked: false,
              additionalInfo: true
            },
            {
              name: "Атмосфера L в камне",
              desc: "",
              image: 'img/bathouse-calculator/stoves/stove-6.png',
              cost: 100000,
              checked: false,
              additionalInfo: false
            },
            {
              name: "Атмосфера L в сетке",
              desc: "",
              image: 'img/bathouse-calculator/stoves/stove-7.png',
              cost: 100000,
              checked: false,
              additionalInfo: true
            }
          ]
        }
      ]
    },
    {
      name: "Снаружи бани",
      columns: 3,
      
      view: 'column',
      imageSize: 'large',
      categories: [
        {
          name: "Печи",
          type: "single",
          list: [
            {
              name: "Везувий «Ураган»",
              desc: "",
              image: 'img/bathouse-calculator/stoves/stove-1.png',
              cost: 100000,
              checked: false,
              additionalInfo: true
            },
            {
              name: "Везувий «Скиф»",
              desc: "",
              image: 'img/bathouse-calculator/stoves/stove-2.png',
              cost: 100000,
              checked: false,
              additionalInfo: true
            },
            {
              name: "Aston 20",
              desc: "",
              image: 'img/bathouse-calculator/stoves/stove-3.png',
              cost: 100000,
              checked: false,
              additionalInfo: false
            },
            {
              name: "Комета «Вега»",
              desc: "",
              image: 'img/bathouse-calculator/stoves/stove-4.png',
              cost: 100000,
              checked: false,
              additionalInfo: true
            },
            {
              name: "Комета «Вега Window» ",
              desc: "",
              image: 'img/bathouse-calculator/stoves/stove-5.png',
              cost: 100000,
              checked: false,
              additionalInfo: true
            },
            {
              name: "Атмосфера L в камне",
              desc: "",
              image: 'img/bathouse-calculator/stoves/stove-6.png',
              cost: 100000,
              checked: false,
              additionalInfo: true
            },
            {
              name: "Атмосфера L в сетке",
              desc: "",
              image: 'img/bathouse-calculator/stoves/stove-7.png',
              cost: 100000,
              checked: false,
              additionalInfo: true
            }
          ]
        }
      ]
    }
  ]
});

const sizes = computed(() => {
  if (data.main) {
    return data.main.find((item: IGroup) => item.name === 'Размер бани, м');
  }
  else return null;
}) as Ref<IGroup | null>

const sectionList = computed(() => {
  if (data?.main) {
    return data?.main?.find((item: IGroup) => item.name === 'Количество секций')?.categories
      .map((item) => item.list)
      .flat();
  } else {
    return [];
  }
}) as Ref<ICategoryItem[]>;

const formName = computed(()=>{
  if (data.main) {
    return data.main.find((item: IGroup) => item.name === 'Форма');
  }
  else return null;
}) 

// Ref<IGroup | null>
const setValidSections = (val: Ref<IGroup | null>) => {

  const sectionListValue = sectionList.value;
  const length = val.value ? val.value.categories.map(item=> item.list).flat().find(item => item.checked)?.sizes?.length : undefined;
  const formNameVal = formName.value?.categories[0].list.find(item => item.checked)?.name
  

  if (length !== undefined) {
  if(length < 3) {
    sectionList.value.forEach(item => {
      if(item.size && item.size >= 2) {
        item.locked = true
      } else {
        item.locked = false
      }

    })

  } 

  else if (length === 3 && 
          (formNameVal === 'Квадратная'
          || formNameVal === 'Круглая')) {
          
    sectionList.value.forEach(item => {


      if(item.size === 2 || item.size === 1) {
        item.locked = false
      } else {
        item.locked = true
      }

    })
  }

  else if ((length === 5 || length === 5.5) && 
          (formNameVal === 'Квадратная'
          || formNameVal === 'Круглая')) {
          
    sectionList.value.forEach(item => {


      if(item.size === 2 || item.size === 3) {
        item.locked = false
      } else {
        item.locked = true
      }

    })  
  }

  else if ((length === 3.5 || length === 4) && 
          (formNameVal === 'Овал'
          || formNameVal === 'Квадроовал')) {
          
    sectionList.value.forEach(item => {


      if(item.size === 2 || item.size === 3) {
        item.locked = false
      } else {
        item.locked = true
      }

    })  
  }
  
  
  else if (length >= 3 
            && length <= 5 ) {
             
    sectionList.value.forEach(item => {


      if(item.size === 2) {
        item.locked = false
      } else {
        item.locked = true
      }

    })

  } else if (length >= 5) {
    sectionList.value.forEach(item => {
      if(item.size === 3) {
        item.locked = false
      } else {
        item.locked = true
      }
    })
  }
  }

  sectionList.value?.forEach(item => (item.checked = false))

  const uncheckedItem = sectionListValue?.find(item => !item.locked);
  if (uncheckedItem) {
    uncheckedItem.checked = true;
  }
}

watch(
  [() => sizes, () => formName],
  ([sizesVal, formNameVal], [prevSizes, prevFormName]) => {
    setValidSections(sizesVal)
  },
  { deep: true }
)

onMounted(() => {
  window.addEventListener('scroll', getCalculatorPosition);
})

onUnmounted(() => {
  window.removeEventListener('scroll', getCalculatorPosition);
})


</script>

<style scoped lang="scss">
.bathouse-calculator {
  padding: 8rem 0;
  @include r($md) {
    padding: 4rem 0;
  }
  background-color: var(--bg-color);
  color: white;

  &__header {
    padding: 4rem 0 6.3rem;

    &-title {
      margin-bottom: 1.5rem;

    }

    &-description {
      @include text24;
      color: var(--white-90);
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
    @include r($md) {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  &__additonal-title {
    @include text24;
    margin-bottom: 2rem;
  }
}

</style>
