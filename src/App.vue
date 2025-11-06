<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <div class="bg-[#050A1C] text-white font-sans h-screen w-screen">
    <HeaderComponent />
    <RouterView />
    <FooterComponent />
  </div>
</template>

<style scoped></style>