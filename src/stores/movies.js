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
        const response = await apiTMDB.get('discover/movie?primary_release_date.gte=1990-01-01&primary_release_date.lte=2009-12-31', {
            params: {
                with_genres: genreId,
                language: 'pt-BR'
            }
        });
        state.movies = response.data.results;
        console.log("Filmes: ", state.movies);
    }

    const getMovieDetail = async(movieId) => {
        const response = await apiTMDB.get(`movie/${movieId}`)
        const credits = await apiTMDB.get(`movie/${movieId}/credits`)
        state.currentMovie = {
            ...response.data, 
            ...credits.data
        };
    }

    const clearMovies = async() => {
        state.movies = [];
    }

    const filterByRating = (minRating) => {
        return state.movies.filter(movie => (movie.vote_average) >= minRating);
    }

    const filterByDecade = (decadeStart) => {
        return state.movies.filter(movie => {
            const year = Number((movie.release_date)?.slice(0, 4));
            return year >= decadeStart && year < decadeStart + 10;
        });
    }

    const filterByPopularity = (minPopularity) => {
        return state.movies.filter(movie => (movie.popularity) >= minPopularity);
    }

    return { movies, currentMovie, getMovieById, listMovies, getMovieDetail, clearMovies, filterByRating, filterByDecade, filterByPopularity };
})