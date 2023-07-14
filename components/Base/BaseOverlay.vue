<template>
  <div :class="['overlay', { active: props.isActive }]"></div>
</template>

<script setup lang="ts">
interface Props {
  isActive: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isActive: false,
});
</script>

<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  background-color: rgba(#000, 0.6);
  z-index: 100;

  transition: opacity 0.3s ease;

  &.active {
    opacity: 1;
    visibility: visible;
  }
}
</style>
