<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex items-center justify-between px-8 py-2">
    <router-link to="/">
      <div class="flex items-center">
        <img src="&/general/cineXPerience.png" alt="CineXPerience" class="w-22 mr-4" />
        <ul>
          <li>
            <p class="text-2xl"><strong>CineXPerience</strong></p>
          </li>
          <li>
            <p class="text-sm text-[#94A3B8]">1990-2009</p>
          </li>
        </ul>
      </div>
    </router-link>

    <ul class="flex pr-2 space-x-12 text-[#94a3b8]">
      <li>
        <router-link to="/" class="flex items-center px-4 py-2 rounded-lg hover:bg-[#101829] hover:text-white"><i
            class="fa-solid fa-house"></i>
          <p class="ml-2">Home</p>
        </router-link>
      </li>
      <router-link to="/" class="flex items-center px-4 py-2 rounded-lg hover:bg-[#101829] hover:text-white"><i
          class="fa-solid fa-house"></i>
      </router-link>
        <li>
          <router-link to="/" class="flex items-center px-4 py-2 rounded-lg hover:bg-[#101829] hover:text-white"><i
              class="fa-solid fa-film"></i>
            <p class="ml-2">Filmes</p>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="flex items-center px-4 py-2 rounded-lg hover:bg-[#101829] hover:text-white"><i
              class="fa-solid fa-tv"></i>
            <p class="ml-2">Séries</p>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="flex items-center px-4 py-2 rounded-lg hover:bg-[#101829] hover:text-white"><i
              class="fa-solid fa-gamepad"></i>
            <p class="ml-2">Jogos</p>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="flex items-center px-4 py-2 rounded-lg hover:bg-[#101829] hover:text-white"><i
              class="fa-solid fa-circle-info"></i>
            <p class="ml-2">Sobre</p>
          </router-link>
        </li>
    </ul>
  </header>
</template>
