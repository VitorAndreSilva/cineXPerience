<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useGenreStore } from '@/stores/genre';
import 'swiper/css';
import 'swiper/css/bundle';
import { onMounted } from 'vue';

const modules = [Navigation, Pagination, Scrollbar, A11y];

const genreStore = useGenreStore();

onMounted(async () => {
  await genreStore.getAllGenres('movie');
})

const props = defineProps({
  movies: { type: Array }
})
</script>

<template>

  <swiper :modules="modules" :slides-per-view="6.5" :space-between="50" navigation>
    <swiper-slide class="p-5" v-for="movie in props.movies" :key="movie.id">
      <div
        class="bg-[#0B1224] h-130 w-60 rounded-xl transition duration-600 ease-in-out hover:shadow-[0_0_10px_5px_rgba(168,85,247,0.6)]">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Imagem Filme" class="rounded-2xl ">
        <div class="p-3">
          <p><strong>{{ movie.title || movie.name }}</strong></p>
          <ul class="flex justify-between mt-2 mb-3">
            <li class="flex items-center text-[#94A3B8]">
              <i class="fa-regular fa-calendar"></i>
              <p>{{ movie.release_date || movie.first_air_date }}</p>
            </li>
            <li class="flex items-center text-[#FACC15]">
              <i class="fa-solid fa-star"></i>
              <p>{{ movie.vote_average }}</p>
            </li>
          </ul>
          <ul class="flex justify-around mt-1">
            <li class="bg-[#94A3B850] px-3 py-2 rounded-xl hover:bg-[#94A3B880] transition duration-300 ease-in-out" v-for="genre_id in movie.genre_ids" :key="genre_id">
              <button>{{ genreStore.getGenreName(genre_id) }}</button>
            </li>
          </ul>
        </div>
      </div>
    </swiper-slide>
  </swiper>

</template>

<style scoped></style>
