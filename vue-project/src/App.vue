<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";

</script>

<template>
  <TheHeader/>
  <div class="mx-10p py-4 flex items-center main-border">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
