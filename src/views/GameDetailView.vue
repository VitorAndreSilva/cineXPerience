<script setup>
import { defineProps, onMounted, onBeforeMount } from 'vue';
import { useGameStore } from '@/stores/games';
import { ref } from 'vue';
import Loading from 'vue-loading-overlay';

const gameStore = useGameStore();

onBeforeMount(() => {
  gameStore.clearGame()
});

const props = defineProps({
  gameId: {
    type: String,
    required: true
  }
});

const isLoading = ref(true);

onMounted(async() => {
  await gameStore.getGameDetail(props.gameId);
  isLoading.value = false;
</script>

<template>
  <section class="px-50 py-5">
    <router-link to="/"
      class="flex items-center px-6 py-2 w-30 rounded-xl mt-8 bg-gray-800/50 border border-gray-600 hover:bg-gray-600/60 transition duration-500 ease-in-out">
      <p><i class="fa-solid fa-arrow-left mr-4"></i>Voltar</p>
    </router-link>
  </section>

  <loading v-model:active="isLoading" is-full-page />

  <section class="px-50 py-5 flex">
    <div>
      <img class="w-110 rounded-xl border-2 border-[#94a3b840]" :src="gameStore.currentGame.background_image"
        alt="Poster">

      <div class="rounded-xl border-2 border-[#94a3b840] bg-[#0C1325] p-4 mt-10">
        <ul>
          <li class="flex justify-between my-2">
            <h3 class="text-[#94a3b8]">Avaliação</h3>
            <p class="items-center"><i class="fa-solid fa-star text-[#FACC15]"></i><strong>{{ Number(gameStore.currentGame.rating).toFixed(1) }}</strong></p>
          </li>
          <li class="flex justify-between my-2">
            <h3 class="text-[#94a3b8]">Ano</h3>
            <p><strong>{{ gameStore.currentGame.released?.slice(0, 4) }}</strong></p>
          </li>
          <li class="flex justify-between my-2">
            <h3 class="text-[#94a3b8]">Duração</h3>
            <p><strong>178 min</strong></p>
          </li>
          <li class="flex justify-between my-2">
            <h3 class="text-[#94a3b8]">Tipo</h3>
            <p class="text-[#C084FC]"><strong>Jogo</strong></p>
          </li>
        </ul>
      </div>
    </div>

    <div class="ml-8">
      <h1 class="text-4xl">{{ gameStore.currentGame.name }}</h1>
      <!-- <p class="text-[#94A3B8]">The Lord of the Rings: The Fellowship of the Ring</p> -->
      <ul class="flex my-1">
        <li class="bg-[#94A3B850] px-3 py-2 mt-2 rounded-xl hover:bg-[#94A3B880] transition duration-300 ease-in-out"></li>
      </ul>

      <div class=" rounded-xl border-2 border-[#94a3b840] bg-[#0C1325] p-4 mt-6">
        <h2 class="text-xl text-[#C084FC] mb-2">Sobre o Jogo</h2>
        <p v-html="gameStore.currentGame.description"></p>
      </div>

      <div class=" rounded-xl border-2 border-[#94a3b840] bg-[#0C1325] p-4 mt-6 items-center">
        <h2 class="text-xl text-[#C084FC] mb-2 items-center"><i class="fa-solid fa-display text-lg mr-2"></i>Plataformas
        </h2>

        <ul class="flex">
          <li
            class="bg-[#94A3B850] px-3 py-2 mt-4 rounded-xl hover:bg-[#94A3B880] mr-5 transition duration-300 ease-in-out"
            v-for="platform in gameStore.currentGame.platforms" :key="platform.id">
            {{ platform.platform.name }}</li>
        </ul>
      </div>

      <ul class="flex justify-between">
        <li class=" w-90 rounded-xl border-2 border-[#94a3b840] bg-[#0C1325] p-4 mt-6" v-for="store in gameStore.currentGame.platforms" :key="store.id">
          <h2 class="text-[#94a3b8] mb-2">Desenvolvedora</h2>
          <p><strong>{{ store.platform.name }}</strong></p>
        </li>
      </ul>

    </div>

  </section>
</template>

<style scoped></style>
