<template>
  <textarea
    class="textarea"
    :id="id"
    :name="name"
    :placeholder="placeholder"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  ></textarea>
</template>

<script setup lang="ts">
interface Props {
  id?: string;
  placeholder: string;
  name: string;
  modelValue: string;
}

defineProps<Props>();

defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>

<style lang="scss">
.textarea {
  padding: 1.6rem;
  width: 100%;
  min-height: 16rem;

  @include text20;
  background-color: var(--gray-500);
  transition: background-color 0.3s ease;

  resize: none;
}
</style>
