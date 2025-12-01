import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MoviesView from '@/views/MoviesView.vue'
import SeriesView from '@/views/SeriesView.vue'
import GamesView from '@/views/GamesView.vue'
import AboutView from '@/views/AboutView.vue'
import MoviesDetailView from '@/views/MoviesDetailView.vue'
import SeriesDetailView from '@/views/SeriesDetailView.vue'
import GameDetailView from '@/views/GameDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesView
    },
    {
      path: '/series',
      name: 'series',
      component: SeriesView
    },
    {
      path: '/games',
      name: 'games',
      component: GamesView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/movie/:movieId',
      name: 'MovieDetail',
      component: MoviesDetailView,
      props: true,
    },
    {
      path: '/serie/:serieId',
      name: 'SerieDetail',
      component: SeriesDetailView,
      props: true,
    },
    {
      path: '/game/:gameId',
      name: 'GamesDetail',
      component: GameDetailView,
      props: true,
    },
  ],
})

export default router
