<template>
  <div class="wrapper">
    <TheHeader @toggle-overlay="toggleOverlay" />
    <main class="main">
      <slot />
    </main>
    <BaseOverlay :is-active="isOverlayActive" />
    <LazyTheFooter />
    <ModalsContainer />
  </div>
</template>

<script setup lang="ts">
import tippy from 'tippy.js';
import { ModalsContainer } from "vue-final-modal";

const isOverlayActive = ref(false);

function initTippy() {
  
  tippy('.tooltip-custom', {
    allowHTML: true,
    theme: 'custom',
    content: (reference) => {
      return reference.getAttribute('tooltip-content') || ''
    }
  });
}

const toggleOverlay = (booleanVal: boolean) => {
  isOverlayActive.value = booleanVal;
};

onMounted(() => {
  initTippy()

})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
