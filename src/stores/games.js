import { apiRAWG } from "@/plugins/axios";
import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useGameStore = defineStore('games', () => {
    const state = reactive({
        currentGame: {},
        games: []
    });
    const currentGame = computed(() => state.currentGame);
    const games = computed(() => state.games);

    const getGameDetail = async(gameId) => {
        const response = await apiRAWG.get(`games/${gameId}`);
        state.currentGame = response.data;
    }

    const listGames = async() => {
        const response = await apiRAWG.get('games/');
        state.games = response.data.results;
        console.log("games:", state.games);
    }

    const clearGame = async() => {
        state.games = [];
    }

    return { currentGame, games, getGameDetail, listGames, clearGame};
});