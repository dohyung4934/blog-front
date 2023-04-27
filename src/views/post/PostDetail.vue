<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { requestApi } from '@/api'
import type { PostDetailResponse, PostDetailDto } from './dto/post-detail.dto'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

const postId = ref('')
const postDetail = ref<PostDetailDto | null>(null)

onMounted(async () => {
  await initData()
})

async function initData() {
  postId.value = getPostId()
  postDetail.value = await getPostDetail()
}

function getPostId() {
  const param = route.params.id
  if (typeof param === 'object') {
    throw new Error()
  }
  return param
}

async function getPostDetail() {
  const response = await requestApi<PostDetailResponse>(`/post/${postId.value}`, 'GET')
  return response.postDetail
}

async function deletePost() {
  await requestApi(`/post/${postId.value}`, 'DELETE')
  router.push({ path: '/post' })
}
</script>

<template>
  <router-link to="/post">◁ 뒤로가기</router-link>
  <template v-if="postDetail !== null">
    <h2>{{ postDetail.title }}</h2>
    <div v-if="authStore.isLoggedIn">
      <router-link :to="`/post/${postId}/edit`">수정</router-link>
      <a href="#" @click="deletePost">삭제</a>
    </div>
    <small>작성자: {{ postDetail.author }}</small>
    <p>{{ postDetail.contents }}</p>
  </template>
</template>
