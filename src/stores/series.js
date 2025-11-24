import { apiTMDB } from "@/plugins/axios";
import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useSerieStore = defineStore('series', () => {
    const state = reactive({
        currentSerie: {},
        series: []
    });
    const currentSerie = computed(() => state.currentSerie);
    const series = computed(() => state.series);

    const getSerieDetail = async(serieId) => {
        const response = await apiTMDB.get(`tv/${serieId}`);
        state.currentSerie = response.data;
    }

    const listSeries = async(genreId) => {
        const response = await apiTMDB.get('discover/tv?first_air_date.gte=1990-01-01&first_air_date.lte=2000-12-31', {
            params: {
                with_genres: genreId,
                language: 'pt-BR'
            }
        });
        state.series = response.data.results;
        console.log(state.series);
    }

    const clearSerie = async() => {
        state.series = [];
    }

    return { currentSerie, series, getSerieDetail, listSeries, clearSerie};
});