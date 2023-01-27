import type { RouteRecordRaw } from 'vue-router'

/** sg01 서비스 소개 */
import sg01 from '@/views/sg/sg01.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/sg',
    children: [
      {
        path: 'sg01',
        component: sg01,
        meta: {
          isPublic: true
        }
      }
    ]
  }
]

export default routes
