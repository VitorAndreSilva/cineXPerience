<script setup>
import FilterComponent from '@/components/FilterComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import { useMovieStore } from '@/stores/movies';
import { useGenreStore } from '@/stores/genre';
import { onMounted, ref, computed } from 'vue';
import Loading from 'vue-loading-overlay';

const movieStore = useMovieStore();
const genreStore = useGenreStore();
const isLoading = ref(true);

onMounted(async (genreId) => {
  await genreStore.getAllGenres('movie');
  await movieStore.listMovies(genreId);
  isLoading.value = false;
})

const search = ref('');
const filterYear = ref('');
const filterGenre = ref('');

const filteredMovies = computed(() => {
    return movieStore.movies
    .filter(movie =>
        movie.title.toLowerCase().includes(search.value.toLowerCase())
    )
    .filter(movie =>
        filterYear.value ? movie.release_date.startsWith(filterYear.value) : true
    )
    .filter(movie =>
        filterGenre.value ? movie.genre_ids.includes(Number(filterGenre.value)) : true
    )
})
</script>
<template>
  <main class="">
    <section>
      <div class="flex pt-10 pb-3 pl-32 text-2xl items-center">
        <i class="fa-solid fa-film text-[#C084FC] mr-5 text-3xl"></i>
        <h1 class="text-5xl"><strong>Filmes Clássicos</strong></h1>
      </div>
      <p class="text-xl py-4 text-[#94A3B8] pt-1 pb-6 pl-32">Explore filmes lendários de 1990-2009</p>
      <loading v-model:active="isLoading" is-full-page />
      <FilterComponent @filter:search="search = $event" @filter:year="filterYear = $event"
        @filter:genre="filterGenre = $event" />
      <CardComponent :movies="filteredMovies" />
    </section>
  </main>
</template>
