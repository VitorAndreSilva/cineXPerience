<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<template>
  <div class="bg-[#050A1C] text-white font-sans h-screen w-screen">
    <HeaderComponent />
    <RouterView />
  </div>
</template>

<style scoped></style>
