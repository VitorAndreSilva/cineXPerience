<script setup>
import { onMounted, ref } from 'vue';
import { useGenreStore } from '@/stores/genre';

const years = [];
let year = 1990;
while (year <= 2000) {
    years.push(year);
    year++;
}

const genreStore = useGenreStore();
onMounted(async () => {
    await genreStore.getAllGenres('movie');
})
const search = ref('');
</script>
<template>
    <div class="flex justify-center">
        <input type="text" v-model="search" placeholder="Buscar título..." class="border bg-[#94A3B8]-300 rounded-sm w-122 h-9 mx-2 mt-7 mb-7 p-4">
        <select name="" id="" class="border bg-[#94A3B8]-300 rounded-sm w-122 h-9 mx-2 mt-7 mb-7">
            <option v-for="year in years" :key="year.id" :value="`${year}`">{{ year }}</option>
        </select>
        <select name="" id="" class="border bg-[#94A3B8]-300 rounded-sm w-122 h-9 mx-2 mt-7 mb-7">
            <option v-for="genre in genreStore.genres" :key="genre.id" :value="genre">{{ genre.name }}</option>
        </select>
    </div>
</template>