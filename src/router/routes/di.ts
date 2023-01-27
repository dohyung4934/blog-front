import type { RouteRecordRaw } from 'vue-router'

/** di01 달력 */
import di01 from '@/views/di/di01.vue'
/** di02 글 읽기 */
import di02 from '@/views/di/di02.vue'
/** di03 글 쓰기 */
import di03 from '@/views/di/di03.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/di',
    children: [
      {
        path: 'di01',
        component: di01
      },
      {
        path: 'di02',
        component: di02
      },
      {
        path: 'di03',
        component: di03
      }
    ]
  }
]

export default routes
