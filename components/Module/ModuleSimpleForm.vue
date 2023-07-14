<template>
  <form ref="form" class="simple-form"  @submit.prevent.stop="handleSubmit">
      <div v-if="data && data?.lead" class="simple-form__lead" >
        {{ data?.lead }}
      </div>
      <div v-if="data && data?.title" class="simple-form__title" >
        {{ data?.title }}
      </div>
      <div class="simple-form__body">
        <PartFormCommunicationTabs
          v-if="tabs"
          class="simple-form__tabs"
          :current-tab="tabs?.currentTab"
          :tabs="tabs?.tabs"
        />
        <UiFormTextarea
          v-if="data && data?.textarea"
          v-model="textarea"
          class="simple-form__textarea"
          :placeholder="data.textarea.placeholder"
          :name="data.textarea.name"
        />
      </div>
      <div v-if="data && data?.btnName && data?.policyLink" class="simple-form__footer">
        <UiButtonPrimary class="btn_green" type="submit" :name="data?.btnName" />
        <p class="simple-form__privacy">
          Нажимая на кнопку, вы даете согласие на обработку своих персональных
          данных и соглашаетесь с
          <a :href="data?.policyLink">Политикой конфиденциальности</a>
        </p>
      </div>
  </form>
</template>

<script setup lang="ts">
// import { IModuleSimpleFormProps } from '@/dto/interfaces/datatype'
import { useModal } from "vue-final-modal";
import ModalSuccess from "@/components/Modal/ModalSuccess.vue";


const textarea = ref("");
const form = ref();

interface Data {
  lead?: string;
  title: string;
  btnName: string;
  policyLink: string;
  textarea?: {
    placeholder: string;
    name: string;
  } | null;
}

interface ITab {
    name: string;
    icon: string;
    component: Component; 
  }
interface Tabs {
  currentTab: Component;
  tabs: ITab[];
}

interface Props {
  data: Data;
  tabs: Tabs;
}

// interface Props extends IModuleSimpleFormProps {}

const props = defineProps<Props>()

const handleSubmit = async () => {
 
  let propsModal = {}

 

  const formData = new FormData(form.value);
  
  const formDataValues: { [key: string]: string[] } = {};
  for (const key of formData.keys()) {
    const values = Array.from(formData.getAll(key)) as string[];
    formDataValues[key] = values;
  }
  const profileData = Object.entries(formDataValues);



  
  if(props.data.btnName === 'Получить полный каталог')
  propsModal = {
    component: ModalSuccess,
    attrs: {
      title: 'Спасибо за интерес к нашим баням!',
      desc: 'Мы отправим вам каталог с более 200 типов бань Wood and Life в указанный мессенджер.',

    },
  } 
  
  if(props.data.btnName === 'Зафиксировать свою скидку') 
  {
    
    propsModal = {
    component: ModalSuccess,
    attrs: {
      title: 'Закрепили за номером',
      profile: `${profileData[0][1][0]}`,
      subtitle: 'скидку до 30 000 руб.',
      desc: 'Узнать точный размер скидки можете у менеджера при расчете стоимости своей бани.',
      type: 'с номером'
    },
  } }

  if(props.data.btnName === 'Рассказать, о какой бане я мечтаю') 
  {
    propsModal = {
    component: ModalSuccess,
    attrs: {
      title: 'Закрепили за номером',
      profile: `${profileData[0][1][0]}`,
      subtitle: 'заявку на консультацию',
      desc: 'В течение 30 минут с вами свяжется менеджер, уточнит детали',
      type: 'с номером'
    },
  } }
  
  if(props.data.btnName === 'Получить расчет стоимости с доставкой') 
  {
    propsModal = {
    component: ModalSuccess,
    attrs: {
      title: 'Спасибо за интерес к нашим баням!',
      desc: 'В течение 30 минут с вами свяжется менеджер, уточнит детали и озвучит стоимость вашей бани.',
    },
  } }




  const modalSuccess = useModal(propsModal);


  await $fetch("", {
    method: "POST",
    body: formData,
  })
    .then(() => {
      // closeModal();\
      
      modalSuccess.open();
    })
    .catch((e) => {
      console.log(e, "Data sending error");
    });
};

</script>

<style scoped lang="scss">
.simple-form {
  padding: 6.4rem;
  background-color: var(--gray-700);
  border: 1px solid #353535;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.24), 0px 24px 48px rgba(0, 0, 0, 0.24);
  @include r($md) {
    padding: 6.4rem;
  }
  @include r($sm) {
    padding: 4rem 1.2rem;
  }

  &__lead {
    margin-bottom: 2.2rem;
    font-weight: 500;
    @include text32;
    color: #fff;
  }

  &__title {
    margin-bottom: 1.1rem;
    @include text24;
    color: #fff;
  }

  &__body {
    margin-bottom: 2.4rem;
  }

  &__textarea {
    margin-top: 2.4rem;
    max-width: 48rem;
    @include r($md) {
      max-width: 100%;
    }
  }

  &__privacy {
    margin-top: 1.6rem;
    max-width: 55rem;
    @include text14;
    color: var(--white-20);
    a {
      color: var(--accent-color);
      transition: color 0.3s ease;
      &:hover {
      }
    }
  }
}
</style>
