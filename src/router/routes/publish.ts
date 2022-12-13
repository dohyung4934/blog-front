import type { RouteRecordRaw } from 'vue-router'

/** lo01 기본 레이아웃 */
import lo01 from '@/views/publish/lo/lo01.vue'
/** lo02 채색 레이아웃 */
import lo02 from '@/views/publish/lo/lo02.vue'
/** cm01 로그인 */
import cm01 from '@/views/publish/cm/cm01.vue'
/** cm02 로그인 */
import cm02 from '@/views/publish/cm/cm02.vue'
/** cm03 전체 메뉴 */
import cm03 from '@/views/publish/cm/cm03.vue'
/** sg01 서비스 소개 */
import sg01 from '@/views/publish/sg/sg01.vue'
/** di01 달력 */
import di01 from '@/views/publish/di/di01.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/publish',
    children: [
      {
        path: 'lo01',
        component: lo01
      },
      {
        path: 'lo02',
        component: lo02
      },
      {
        path: 'cm01',
        component: cm01
      },
      {
        path: 'cm02',
        component: cm02
      },
      {
        path: 'cm03',
        component: cm03
      },
      {
        path: 'sg01',
        component: sg01
      },
      {
        path: 'di01',
        component: di01
      }
    ]
  }
]

export default routes
