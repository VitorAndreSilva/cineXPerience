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
        const credits = await apiTMDB.get(`tv/${serieId}/credits`)
        state.currentSerie = {
            ...response.data, 
            ...credits.data
        };
        console.log(state.currentSerie);
    }

    const listSeries = async(genreId) => {
        const response = await apiTMDB.get('discover/tv?first_air_date.gte=1990-01-01&first_air_date.lte=2009-12-31', {
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