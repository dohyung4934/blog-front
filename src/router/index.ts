import { createRouter, createWebHistory } from 'vue-router'
import { PostRoutes } from './post'
import { UserRoutes } from './login'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/post'
    },
    ...PostRoutes,
    ...UserRoutes
  ]
})

export default router
