<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { requestApi } from '@/api'
import type { PostListDto, PostListResponse } from './dto/post.dto'

const authStore = useAuthStore()
const postList = ref<PostListDto[]>([])

onMounted(async () => {
  await getPostList()
})

async function getPostList() {
  const response = await requestPostList()
  postList.value = response.postList
}

async function requestPostList() {
  return requestApi<PostListResponse>('/post', 'GET')
}
</script>

<template>
  <h2>게시글 목록</h2>
  <router-link v-if="authStore.isLoggedIn" to="/post/new">📝 게시글 등록</router-link>
  <section>
    <article v-for="post of postList" :key="post.id">
      <h3>
        <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
      </h3>
    </article>
  </section>
</template>
