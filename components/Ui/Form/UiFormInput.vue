<template>
  <div class="input-wrap">
    
    <input
      ref="input"
      v-maska
      class="input"
      maxlength="32"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      :pattern="verifyName(name)"
      :required="required"
      :type="type"
      :data-maska="maska"
      @focus="onFocus"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  modelValue?: string;
  placeholder?: string;
  required?: boolean;
  type?: "text" | "hidden";
  maska?: string;
}

const verifyName = (prop: string): string => {
  const regexp = "^\\+7 \\(\\d{3}\\) \\d{3} \\d{2} \\d{2}$"
    if(prop === 'whatsapp' || prop === 'phone') return regexp
    if(prop === 'telegram') return "^[a-zA-Z0-9@_.&]{3,32}$"
    else return "^[\\s\\S]{1,32}$"
  }

defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const props = defineProps<Props>();

const input = ref();

const onFocus = async () => {
  await nextTick(() => {

    input.value.setSelectionRange(
      props.modelValue?.length,
      props.modelValue?.length
    );
  });
};
</script>

<style  lang="scss">
.input-wrap {
  display: inline-flex;
  color: #fff;
  background-color: var(--gray-500);
  transition: background-color 0.3s ease;
  width: 100%;
}

.input {
  padding: 1.6rem;
  background: transparent;
  width: 100%;
  @include text20;
  &:focus {
    outline: none;
  }
}
</style>
