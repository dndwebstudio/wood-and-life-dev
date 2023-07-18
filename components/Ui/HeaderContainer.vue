<template>
    <div class="container">
      <h2 :class="props.classString">{{ title }}</h2>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
    title: string;
    classString: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: "",
    classString: "pt-48 pb-48"
});
</script>