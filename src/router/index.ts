import { createRouter, createWebHistory } from 'vue-router'
import { PostRoutes } from './post'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/post'
    },
    ...PostRoutes
  ]
})

export default router
