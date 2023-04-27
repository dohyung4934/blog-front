import type { RouteRecordRaw } from 'vue-router'
import UserLogin from '@/views/user/UserLogin.vue'

export const UserRoutes: RouteRecordRaw[] = [
  {
    path: '/user',
    children: [
      {
        path: 'login',
        component: UserLogin
      }
    ]
  }
]
