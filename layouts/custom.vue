<template>
  <div class="wrapper">
    <TheHeader />
    <main class="main">
      <slot />
    </main>
    <LazyTheFooter />
    <ModalsContainer />
  </div>
</template>

<script setup>
import { ModalsContainer } from "vue-final-modal";
</script>

<style lang="scss" scoped>

</style>
