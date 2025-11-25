<script setup>
import { useMovieStore } from '@/stores/movies';
import { useGenreStore } from '@/stores/genre';
import { onMounted } from 'vue';

const movieStore = useMovieStore();
const genreStore = useGenreStore();

onMounted(async () => {
  await genreStore.getAllGenres('movie');
})

const props = defineProps({
  movies: { type: Array }
})
</script>

<template>
  <section class="grid grid-cols-6 gap-8">

    <div
      class="bg-[#0B1224] w-60 rounded-xl flex flex-col h-full transition duration-600 ease-in-out hover:shadow-[0_0_10px_5px_rgba(168,85,247,0.6)]" v-for="movie in movieStore.movies" :key="movie.id">

      <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Imagem Filme" class="rounded-2xl w-full" />

      <div class="p-3 flex flex-col grow">

        <p class="font-bold">{{ movie.title }}</p>

        <ul class="flex justify-between mt-2 mb-3 text-[#94A3B8]">
          <li class="flex items-center">
            <i class="fa-regular fa-calendar"></i>
            <p>{{ movie.release_date }}</p>
          </li>
          <li class="flex items-center text-[#FACC15]">
            <i class="fa-solid fa-star"></i>
            <p>{{ movie.vote_average }}</p>
          </li>
        </ul>

        <ul class="justify-around mt-auto grid grid-cols-2 text-center gap-4">
          <li class="bg-[#94A3B850] px-3 py-2 rounded-xl hover:bg-[#94A3B880] transition duration-300"
            v-for="genre_id in movie.genre_ids" :key="genre_id">
            <button>{{ genreStore.getGenreName(genre_id) }}</button>
          </li>
        </ul>
      </div>
    </div>

  </section>

</template>

<style scoped></style>
