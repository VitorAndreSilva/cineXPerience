<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useMovieStore } from '@/stores/movies';
import { useGenreStore } from '@/stores/genre';
import 'swiper/css';
import 'swiper/css/bundle';
import { onMounted } from 'vue';

const modules = [Navigation, Pagination, Scrollbar, A11y];

const movieStore = useMovieStore();
const genreStore = useGenreStore();

onMounted(async (genreId) => {
  await genreStore.getAllGenres('movie');
  await movieStore.listMovies(genreId);
})
</script>

<template>

  <swiper :modules="modules" :slides-per-view="6.5" :space-between="50" navigation>
    <swiper-slide class="p-5" v-for="movie in movieStore.movies" :key="movie.id">
      <div
        class="bg-[#0B1224] w-60 rounded-xl flex flex-col h-full transition duration-600 ease-in-out hover:shadow-[0_0_10px_5px_rgba(168,85,247,0.6)]">

        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Imagem Filme"
          class="rounded-2xl w-full" />

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
    </swiper-slide>

  </swiper>

</template>

<style scoped>
/* Navegação do Swiper */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: black;
  background: rgba(166, 115, 221, 0.9);
  padding: 10px;
  border-radius: 15px;
  transition: 0.3s;
  top: 50%;
  transform: translateY(-50%);
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: rgba(0, 0, 0, 0.7);
  color: white;
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 3vw;
}
</style>
