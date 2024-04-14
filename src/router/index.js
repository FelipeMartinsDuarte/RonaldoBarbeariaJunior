import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import produtos from '../components/produtos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/comprar',
      name: 'produtos',
      component: produtos
    }
  ]
})

export default router
