import type { RouteRecordRaw } from 'vue-router'

/** cm01 로그인 */
import cm01 from '@/views/cm/cm01.vue'
/** cm02 내 정보 관리 */
import cm02 from '@/views/cm/cm02.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/cm',
    children: [
      {
        path: 'cm01',
        component: cm01,
        meta: {
          isPublic: true
        }
      },
      {
        path: 'cm02',
        component: cm02
      }
    ]
  }
]

export default routes
