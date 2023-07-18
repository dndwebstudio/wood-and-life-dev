<template>
    <div class="container">
      <h2 class="pt-48 pb-48">{{ title }}</h2>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
    title: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: "",
});
</script>