import { createRouter, createWebHistory } from 'vue-router'

import { useCmStore } from '@/stores/cm/cm.module'
import publish from './routes/publish'
import cm from './routes/cm'
import di from './routes/di'
import sg from './routes/sg'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...publish,
    ...cm,
    ...di,
    ...sg
  ]
})

router.beforeEach(to => {
  const cmStore = useCmStore()
  if (to.meta.isPublic === true || cmStore.isLogin === true) {
    return
  }
  console.log('리다이렉트')
  return { path: '/cm/cm01', replace: true }
})

export default router
