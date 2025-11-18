<script setup>
import CardComponent from '@/components/CardComponent.vue';
</script>
<template>
  <main class="">
    <div>
      <div class="flex pt-10 pb-6 pl-32 text-2xl items-center">
        <i class="fa-solid fa-arrow-trend-up text-[#C084FC] mr-5"></i>
        <h2><strong>Mais Populares</strong></h2>
      </div>
      <CardComponent />
    </div>
    <div>
      <div class="flex pt-10 pb-6 pl-32 text-2xl items-center">
        <i class="fa-solid fa-gamepad text-[#C084FC] mr-5"></i>
        <h2><strong>Jogos Clássicos</strong></h2>
      </div>
      <CardComponent />
    </div>
    <div>
      <div class="flex pt-10 pb-6 pl-32 text-2xl items-center">
        <i class="fa-regular fa-clock text-[#C084FC] mr-5"></i>
        <h2><strong>Clássicos dos Anos 90</strong></h2>
      </div>
      <CardComponent />
    </div>
    <div>
      <div class="flex pt-10 pb-6 pl-32 text-2xl items-center">
        <i class="fa-regular fa-star text-[#C084FC] mr-5"></i>
        <h2><strong>Sucessos dos Anos 2000</strong></h2>
      </div>
      <CardComponent />
    </div>
    <div>
      <div class="flex pt-10 pb-6 pl-32 text-2xl items-center">
        <i class="fa-solid fa-film text-[#C084FC] mr-5"></i>
        <h2><strong>Melhores Avaliações</strong></h2>
      </div>
      <CardComponent />
    </div>
  </main>
</template>