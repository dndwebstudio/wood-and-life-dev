<template>
  <div class="caps-1 section-name">
    {{ name }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.section-name {
  margin-bottom: 6.4rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--gray-400);
  letter-spacing: 0.06em;
  @include r($md) {
    margin-bottom: 4rem;
  }
}
</style>
