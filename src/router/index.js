import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/savedTasks',
      name: 'savedTasks',
      
      component: () => import('../views/SavedTasks.vue')
    }
  ]
})

export default router