<template>
  <form ref="form" class="prod-form" @submit.prevent.stop="handleSubmit" >
    <div class="prod-form__title">
      Оставьте свой контактный телефон, мы свяжемся
      с&nbsp;вами&nbsp;и&nbsp;поможем выбрать баню по оптимальной цене
    </div>

    <UiFormInput 
    v-model="value" 
    name="phone" 
    maska="+7 (###) ### ## ##" 
    required 
    placeholder="+7 916 777 7777" />

    <UiButtonPrimary 
    class="btn_green" 
    name="Получить консультацию" 
    type="submit"
    />
    <p class="prod-form__privacy">Нажимая на кнопку, вы даете согласие на обработку своих персональных данных
      и&nbsp;соглашаетесь с <a href="/" target="_blank">Политикой конфиденциальности</a></p>
  </form>
</template>

<script setup lang="ts">
import { useModal } from "vue-final-modal";
import ModalSuccess from "@/components/Modal/ModalSuccess.vue";


const value = ref("+7");
const form = ref();

const type = ref('telephone')

const handleSubmit = async () => {
 
 let propsModal = {}

 const formData = new FormData(form.value);
 
 const formDataValues: { [key: string]: string[] } = {};
 for (const key of formData.keys()) {
   const values = Array.from(formData.getAll(key)) as string[];
   formDataValues[key] = values;
 }
 const profileData = Object.entries(formDataValues);

 

 propsModal = {
   component: ModalSuccess,
   attrs: {
     title: 'Спасибо, мы приняли вышу заявку!',
     desc: `В течение 30 минут по номеру ${profileData[0][1][0]} свяжется менеджер и проконсультирует по вопросам рассрочки.`,
   },
 } 


 const modalSuccess = useModal(propsModal);

 await $fetch("", {
   method: "POST",
   body: formData,
 })
   .then(() => {
     // closeModal();
     modalSuccess.open();
   })
   .catch((e) => {
     console.log(e, "Data sending error");
   });
};


// const { open: openModalInstallments } = useModal({
//   component: ModalForm,
//   attrs: {
//     formName: "Получить консультацию",
//     suptitle: "Оставьте свой номер",
//     title:
//       "С вами свяжется менеджер и поможет выбрать баню по оптимальной цене ",
//     btnName: "Получить консультацию",
//     policyLink: "#",
//     successModal: {
//       title: "спасибо, мы приняли вашу заявку!",
//       desc: "В течение 30 минут с вами свяжется менеджер, уточнит детали",
//     },
//   },
// });




</script>

<style scoped lang="scss">
.prod-form {
  padding: 6.4rem;
  background: #FFFFFF;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.24), 0 24px 48px rgba(0, 0, 0, 0.24);
  & .input-wrap {
    display: block;
    background: var(--gray-100);
    color: var(--gray-600);
    margin-bottom: 2.5rem;
    @include r($md) {
      width: 61%;
      margin-bottom: 2.3rem;
    }
    @include r($sm) {
      width: 100%;
    }
  }
  @include r($sm) {
    padding: 3rem 2rem;
    & .btn_green {
      width: 100%;
    }
  }
}

.prod-form__title {
  margin-bottom: 2.4rem;
  @include text24;
  @include r($md) {
    width: 95%;
  }
  @include r($sm) {
    width: 100%;
  }
}

.prod-form__privacy {
  margin-top: 1.2rem;
  max-width: 55rem;
  @include text14;
  color: var(--white-20);
  line-height: 1.7rem;
  a {
    transition: color 0.3s ease;
    &:hover {
      color: var(--green-500);
    }
  }
  @include r($md) {
    letter-spacing: 0;
  }
}
</style>
