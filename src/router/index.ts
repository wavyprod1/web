import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' // Assicurati che il percorso sia corretto

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // Qui potrai aggiungere altre rotte in futuro se necessario
  ],
})

export default router
