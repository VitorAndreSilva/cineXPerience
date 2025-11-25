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

    const listGames = async(genreId) => {
        const response = await apiRAWG.get('discover/tv?first_air_date.gte=1990-01-01&first_air_date.lte=2009-12-31', {
            params: {
                with_genres: genreId,
                language: 'pt-BR'
            }
        });
        state.games = response.data.results;
        console.log(state.games);
    }

    const clearGame = async() => {
        state.games = [];
    }

    return { currentGame, games, getGameDetail, listGames, clearGame};
});