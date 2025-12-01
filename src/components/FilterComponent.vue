<script setup>
import { ref } from 'vue';
import { useGenreStore } from '@/stores/genre';

const emit = defineEmits(['filter:search', 'filter:year', 'filter:genre']);

const years = [];
let year = 1990;
while (year <= 2009) {
    years.push(year);
    year++;
}

const genreStore = useGenreStore();

const search = ref('');
const filterYear = ref('');
const filterGenre = ref('');

const filterBySearch = () => emit('filter:search', search.value);
const filterByYear = () => emit('filter:year', filterYear.value);
const filterByGenre = () => emit('filter:genre', filterGenre.value);
</script>

<template>
  <div class="flex justify-center">
    <input type="text" v-model="search" @input="filterBySearch" placeholder="Buscar título..."
      class="border bg-[#090F21] border-[#64748B] rounded-md w-122 h-9 mx-2 mt-7 mb-7 p-4">
    <select v-model="filterYear" @change="filterByYear"
      class="border bg-[#090F21] border-[#64748B] rounded-md w-122 h-9 mx-2 mt-7 mb-7 ">
      <option value="">Todos</option>
      <option v-for="year in years" :key="year.id" :value="year">{{ year }}</option>
    </select>
    <select v-model="filterGenre" @change="filterByGenre" class="border bg-[#090F21] border-[#64748B] rounded-md w-122 h-9 mx-2 mt-7 mb-7 ">
      <option value="">Todos</option>
      <option v-for="genre in genreStore.genres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
    </select>
  </div>
</template>
