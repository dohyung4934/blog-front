import { createRouter, createWebHistory } from 'vue-router'

import publish from './routes/publish'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...publish
  ]
})

export default router
