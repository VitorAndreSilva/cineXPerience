<script setup>
import FilterComponent from '@/components/FilterComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import { useGameStore } from '@/stores/games';
import { useGenreStore } from '@/stores/genre';
import { onMounted, ref, computed } from 'vue';
import Loading from 'vue-loading-overlay';

const gameStore = useGameStore();
const genreStore = useGenreStore();
const isLoading = ref(true);

onMounted(async () => {
  await genreStore.getAllGenres('movie');
  await gameStore.listGames();
    isLoading.value = false;
})

const search = ref('');
const filterYear = ref('');
const filterGenre = ref('');

const filteredGames = computed(() => {
  console.log("Games:", gameStore.games)
    return gameStore.games
    .filter(game =>
        game.name.toLowerCase().includes(search.value.toLowerCase())
    )
    .filter(game =>
        filterYear.value ? game.released.startsWith(filterYear.value) : true
    )
    .filter(game =>
        filterGenre.value ? game.genres.some(genre => genre.id === Number(filterGenre.value)) : true
    )
})
</script>
<template>
  <main class="">
    <section>
      <div class="flex pt-10 pb-3 pl-32 text-2xl items-center">
        <i class="fa-solid fa-film text-[#C084FC] mr-5 text-3xl"></i>
        <h1 class="text-5xl"><strong>Jogos Clássicos</strong></h1>
      </div>
      <p class="text-xl py-4 text-[#94A3B8] pt-1 pb-6 pl-32">Explore jogos lendários de 1990-2009</p>
      <loading v-model:active="isLoading" is-full-page />
      <FilterComponent
      @filter:search="search = $event"
      @filter:year="filterYear = $event"
      @filter:genre="filterGenre = $event"
      />
      <CardComponent
      :movies="filteredGames"
      />
    </section>
  </main>
</template>
