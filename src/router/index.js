import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import MoviesDetailView from '@/views/MoviesDetailView.vue'
import GameDetailView from '@/views/GameDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/detail',
      name: 'detail',
      component: MoviesDetailView,
    },
    {
      path: '/detailGame',
      name: 'detailGame',
      component: GameDetailView,
    },
  ],
})

export default router
