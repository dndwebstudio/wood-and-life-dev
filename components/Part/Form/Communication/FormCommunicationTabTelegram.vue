<template>
  <UiFormInput
    v-model="value"
    required
    name="telegram"
    placeholder="Telegram"
  />
</template>

<script setup lang="ts">
const value = ref("");
</script>

<style scoped lang="scss"></style>
