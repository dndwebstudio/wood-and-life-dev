<template>
  <div>
    <div class="modal-success" data-v-inspector="components\Modal\ModalSuccess.vue:3:5" v-if="succesShow">
      <h5 class="modal-success__title-green" data-v-inspector="components\Modal\ModalSuccess.vue:4:7">{{nameValue}}, {{ successModal?.title }}</h5><span class="modal-success__desc"
        data-v-inspector="components\Modal\ModalSuccess.vue:7:7">{{ successModal?.desc }}</span>
    </div>
    <form ref="form" class="modal-form" @submit.prevent="handleSubmit" v-else>
      <div class="modal-form__header">
        <p class="modal-form__suptitle">
          {{ suptitle }}
        </p>
        <h5 class="h5 modal-form__title">
          {{ title }}
        </h5>
        <p class="modal-form__subtitle">
          {{ subtitle }}
        </p>
      </div>
      <div class="modal-form__body">
        <input class="screen-reader" type="hidden" name="formId" :value="formName" />
        <PartFormCommunicationTabs class="modal-form__communication-tabs"
          :current-tab="communicationTabsExpanded.currentTab" :tabs="communicationTabsExpanded.tabs">
          <UiFormInput v-model="nameValue" class="modal-form__input-name" name="name" required
            placeholder="Как к вам обращаться?" />
        </PartFormCommunicationTabs>
      </div>
      <div class="modal-form__footer">
        <UiButtonPrimary class="btn_green" :name="btnName" type="submit" :is-loading="isLoading" />
        <p class="modal-form__privacy text-[12.8px]">
          Нажимая на кнопку, вы даете согласие на обработку своих персональных
          данных и соглашаетесь с
          <a :href="policyLink" targe="_blank">Политикой конфиденциальности</a>
        </p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useModal } from "vue-final-modal";
import ModalSuccess from "@/components/Modal/ModalSuccess.vue";
import WhatsAppTab from "@/components/Part/Form/Communication/FormCommunicationTabWhatsApp.vue";
import TelegramTab from "@/components/Part/Form/Communication/FormCommunicationTabTelegram.vue";
import PhoneTab from "@/components/Part/Form/Communication/FormCommunicationTabPhone.vue";


interface Props {
  formName: string;
  suptitle?: string;
  title?: string;
  subtitle?: string;
  btnName: string;
  policyLink: string;
  successModal?: {
    title: string;
    desc: string;
  };
}

let succesShow = ref<boolean>(false)

const emit = defineEmits<{
  (e: "disableStepBlock"): void;
}>();
// let emitDSD = defineEmits(["disableStepBlock"])

const props = defineProps<Props>();

const communicationTabsExpanded = shallowRef({
  currentTab: PhoneTab,
  tabs: [
    {
      name: "Звонок",
      icon: "phone",
      component: PhoneTab,
    },
    {
      name: "whatsapp",
      icon: "whatsapp",
      component: WhatsAppTab,
    },
    {
      name: "telegram",
      icon: "telegram",
      component: TelegramTab,
    },
  ],
});

const form = ref();
const nameValue = ref("");
const isLoading = ref(false);

const closeModal = () => {
  emit("disableStepBlock");
};

const handleSubmit = async () => {
  isLoading.value = true;

  const modalSuccess = useModal({
    component: ModalSuccess,
    attrs: {
      title: `${nameValue.value}, ${props.successModal?.title}`,
      desc: `${props.successModal?.desc}`,
    },
  });

  const formData = new FormData(form.value);

  await $fetch("", {
    method: "POST",
    body: formData,
  })
    .then(() => {
      isLoading.value = false;
      closeModal();
      // modalSuccess.open();
      succesShow.value = true
    })
    .catch((e) => {
      console.log(e, "Data sending error");
    });
};
</script>

<style scoped lang="scss">
.modal-form {
  max-width: 54rem;

  @include r($sm) {
    max-width: 100%;
  }

  &__header {}

  &__suptitle {
    margin-bottom: 2rem;
    @include text18;
  }

  &__title {
    margin-bottom: 2rem;
    color: var(--accent-color);
  }

  &__subtitle {
    margin-bottom: 2rem;
    @include text20;
    font-weight: 500;
  }

  &__body {
    margin-bottom: 2rem;
  }

  :deep(.modal-form__communication-tabs) {
    max-width: 100%;

    .form-communication__btn:not(.active) {
      color: var(--gray-400);
    }

    input {
      color: var(--gray-400);
      background-color: var(--gray-100);
    }
  }

  &__input-name {
    margin-bottom: 2rem;
  }

  &__privacy {
    margin-top: 2rem;

    a {
      color: var(--accent-color);
      transition: color 0.3s ease;

      &:hover {
        color: var(--green-600);
      }
    }
  }

  &__footer {
    @include r($sm) {
      button {
        width: 100%;
      }
    }
  }
}
</style>
