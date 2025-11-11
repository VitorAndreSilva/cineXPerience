import { computed, reactive } from "vue"
import { defineStore } from "pinia"
import { apiTMDB } from "@/plugins/axios"

export const useMovieStore = defineStore('movies', () => {
    const state = reactive({
        movies: [],
        currentMovie: {}
    })
    const movies = computed(() => state.movies);
    const currentMovie = computed(() => state.currentMovie);

    function getMovieById(id) {
        movies.value.find((movie) => movie.id == id);
    }

    const listMovies = async(genreId) => {
        const response = await apiTMDB.get('discover/movie?primary_release_date.gte=1990-01-01&primary_release_date.lte=2000-12-31', {
            params: {
                with_genres: genreId,
                language: 'pt-BR'
            }
        });
        state.movies = response.data.results;
    }

    const getMovieDetail = async(movieId) => {
        const response = await apiTMDB.get(`discover/movie${movieId}`)
        state.currentMovie = response.data.results;
    }

    const clearMovies = async() => {
        state.movies = [];
    }

    return { movies, currentMovie, getMovieById, listMovies, getMovieDetail, clearMovies };
})