<template>
  <UiFormInput
    v-model="value"
    maska="+7 (###) ### ## ##"
    required
    name="whatsapp"
    placeholder="WhatsApp"
  />
</template>

<script setup lang="ts">
const value = ref("+7");
</script>

<style scoped></style>
