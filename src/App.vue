<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <div class="bg-[#050A1C] text-white font-sans flex flex-col min-h-screen justify-between">
    <HeaderComponent />
    <RouterView />
    <FooterComponent class="bg-[#050A1C]" />
  </div>
</template>

<style scoped></style>
