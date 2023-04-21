<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { requestApi } from './api'
import type { PostListDto, PostListResponse } from './dto/post.dto'

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
  <a href="/post/new">📝 게시글 등록</a>
  <section>
    <article v-for="post of postList" :key="post.id">
      <h3>
        <a :href="`/post/${post.id}`">{{ post.title }}</a>
      </h3>
    </article>
  </section>
</template>
