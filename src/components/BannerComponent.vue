<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
  <section
    class="bg-[linear-gradient(to_right,#050A1CFF_20%,#050A1C4D_100%),url('/home/banner.jpg')] bg-cover bg-bottom">
    <div class="py-20 px-32">
      <p
        class="pl-6 pr-2 py-3 w-60 rounded-full border border-solid border-[#a855f733] bg-linear-to-r from-purple-500/10 to-purple-500/0 backdrop-blur-sm">
        <i class="fa-solid fa-star text-[#A673DD]"></i>
        <span class="ml-2">Clássicos 1990-2009</span>
      </p>
      <h1 class="text-7xl my-6">
        <strong>Bem-vindo ao <br> <span
            class="bg-linear-to-r from-[#C582F5] to-[#F073BA] inline-block text-transparent bg-clip-text">CineXPerience</span></strong>
      </h1>
      <p class="text-[#CBD5E1] text-2xl">Reviva uma era nostalgica do cinema e da TV. <br> Explore filmes e séries que
        marcaram
        gerações.</p>
      <ul class="flex">
        <li class="mr-4">
          <router-link to="/movies"
            class="flex items-center px-8 py-4 rounded-xl text-xl mt-8 bg-linear-to-r from-[#AE54EE] to-[#EA489C] hover:shadow-lg shadow-purple-500 transition duration-500 ease-in-out">
            <i class="fa-solid fa-play mr-4"></i>
            <p>Explorar catálogo</p>
          </router-link>
        </li>
        <li>
          <router-link to="/movies"
            class="flex items-center px-8 py-4 rounded-xl text-xl mt-8 bg-gray-800/50 border border-gray-600 hover:bg-gray-600/60 transition duration-500 ease-in-out">
            <p>Saiba mais</p>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped></style>
