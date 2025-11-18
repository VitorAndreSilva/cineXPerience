<script setup>
import FilterComponent from '@/components/FilterComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
</script>
<template>
  <main class="">
    <section>
      <div class="flex pt-10 pb-3 pl-32 text-2xl items-center">
        <i class="fa-solid fa-film text-[#C084FC] mr-5 text-3xl"></i>
        <h1 class="text-5xl"><strong>Filmes Clássicos</strong></h1>
      </div>
      <p class="text-xl py-4 text-[#94A3B8] pt-1 pb-6 pl-32">Explore filmes lendários de 1990-2009</p>
      <FilterComponent />
      <CardComponent />
    </section>
  </main>
</template>