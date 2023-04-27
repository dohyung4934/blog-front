import type { RouteRecordRaw } from 'vue-router'
import PostList from '@/views/post/PostList.vue'
import PostDetail from '@/views/post/PostDetail.vue'
import PostNew from '@/views/post/PostNew.vue'

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
      },
      {
        path: ':id/edit',
        component: PostNew
      }
    ]
  }
]
