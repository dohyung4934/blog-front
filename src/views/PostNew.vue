<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { requestApi } from './api'
import type { PostCreateResponse } from './dto/post-create.dto'

const router = useRouter()

const titleInput = ref('')
const contentInput = ref('')

async function registerPost() {
  const response = await requestApi<PostCreateResponse>('/post', 'POST', JSON.stringify({
    title: titleInput.value,
    body: contentInput.value
  }))
  router.push({ path: `/post/${response.id}` })
}
</script>

<template>
  <a href="/post">◁ 뒤로가기</a>
  <h2>게시글 등록</h2>
  <input type="text" v-model="titleInput" class="full-line" placeholder="글 제목">
  <textarea class="full-line" v-model="contentInput" placeholder="글 내용"></textarea>
  <button type="button" @click="registerPost">
    <span>등록</span>
  </button>
</template>

<style>
.full-line {
  display: block;
}
</style>
