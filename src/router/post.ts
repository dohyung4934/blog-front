import type { RouteRecordRaw } from 'vue-router'
import PostList from '@/views/PostList.vue'
import PostDetail from '@/views/PostDetail.vue'
import PostNew from '@/views/PostNew.vue'

export const PostRoutes: RouteRecordRaw[] = [
  {
    path: '/post',
    children: [
      {
        path: '',
        component: PostList
      },
      {
        path: ':id',
        component: PostDetail
      },
      {
        path: 'new',
        component: PostNew
      }
    ]
  }
]
