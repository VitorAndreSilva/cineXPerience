<script setup>
import BannerComponent from '@/components/BannerComponent.vue';
import CarouselComponent from '@/components/CarouselComponent.vue';
import { useGameStore } from '@/stores/games';
import { useMovieStore } from '@/stores/movies';
//import { useSerieStore } from '@/stores/series';
import { onMounted, ref } from 'vue';
import Loading from 'vue-loading-overlay';

const gameStore = useGameStore();
const movieStore = useMovieStore();
const isLoading = ref(true);
//const serieStore = useSerieStore();
onMounted(async () => {
  await gameStore.listGames();
  await movieStore.listMovies();
  isLoading.value = false;
})
</script>
<template>
  <main>
    <BannerComponent />
    <loading v-model:active="isLoading" is-full-page />
    <div>
      <div class="flex pt-10 pb-6 pl-32 text-2xl items-center">
        <i class="fa-solid fa-arrow-trend-up text-[#C084FC] mr-5"></i>
        <h2><strong>Mais Populares</strong></h2>
      </div>
      <CarouselComponent :movies="movieStore.filterByPopularity(25)" />
    </div>
    <div>
      <div class="flex pt-10 pb-6 pl-32 text-2xl items-center">
        <i class="fa-solid fa-gamepad text-[#C084FC] mr-5"></i>
        <h2><strong>Jogos Clássicos</strong></h2>
      </div>
      <CarouselComponent :movies="gameStore.games" />
    </div>
    <div>
      <div class="flex pt-10 pb-6 pl-32 text-2xl items-center">
        <i class="fa-regular fa-clock text-[#C084FC] mr-5"></i>
        <h2><strong>Clássicos dos Anos 90</strong></h2>
      </div>
      <CarouselComponent :movies="movieStore.filterByDecade(1990)" />
    </div>
    <div>
      <div class="flex pt-10 pb-6 pl-32 text-2xl items-center">
        <i class="fa-regular fa-star text-[#C084FC] mr-5"></i>
        <h2><strong>Sucessos dos Anos 2000</strong></h2>
      </div>
      <CarouselComponent :movies="movieStore.filterByDecade(2000)" />
    </div>
    <div>
      <div class="flex pt-10 pb-6 pl-32 text-2xl items-center">
        <i class="fa-solid fa-film text-[#C084FC] mr-5"></i>
        <h2><strong>Melhores Avaliações</strong></h2>
      </div>
      <CarouselComponent :movies="movieStore.filterByRating(7.5)" />
    </div>
  </main>
</template>
<style scoped></style>
