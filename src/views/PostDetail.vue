<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { requestApi } from './api'
import type { PostDetailResponse, PostDetailDto } from './dto/post-detail.dto'

const router = useRouter()
const route = useRoute()

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
  <a href="/post">◁ 뒤로가기</a>
  <template v-if="postDetail !== null">
    <h2>{{ postDetail.title }}</h2>
    <div>
      <a :href="`/post/${postId}/edit`">수정</a>
      <a href="#" @click="deletePost">삭제</a>
    </div>
    <p>{{ postDetail.contents }}</p>
  </template>
</template>
