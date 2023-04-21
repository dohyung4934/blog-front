<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { requestApi } from './api'
import type { PostDetailResponse, PostDetailDto } from './dto/post-detail.dto'

const route = useRoute()
const postDetail = ref<PostDetailDto | null>(null)

onMounted(async () => {
  await initData()
})

async function initData() {
  const response = await getPostDetail(getPostId())
  postDetail.value = response
}

function getPostId() {
  const param = route.params.id
  if (typeof param === 'object') {
    throw new Error()
  }
  return param
}

async function getPostDetail(id: string) {
  const response = await requestApi<PostDetailResponse>(`/post/${id}`, 'GET')
  return response.postDetail
}
</script>

<template>
  <a href="/post">◁ 뒤로가기</a>
  <template v-if="postDetail !== null">
    <h2>{{ postDetail.title }}</h2>
    <p>{{ postDetail.contents }}</p>
  </template>
</template>
