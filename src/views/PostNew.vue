<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { requestApi } from './api'
import type { PostDetailResponse } from './dto/post-detail.dto'
import type { PostCreateResponse } from './dto/post-create.dto'

const router = useRouter()
const route = useRoute()

const postId = ref<string | null>(null)
const isEditMode = computed(() => postId.value !== null)

const titleInput = ref('')
const contentInput = ref('')

onMounted(() => {
  readRouteParams()
  initInputFields()
})

function readRouteParams () {
  const paramVal = route.params.id
  if (typeof paramVal === 'string') {
    postId.value = paramVal
  } else {
    postId.value = null
  }
}

async function initInputFields () {
  if (isEditMode.value) {
    await setPostContents()
  }
}

async function setPostContents () {
  const { postDetail } = await requestApi<PostDetailResponse>(`/post/${postId.value}`, 'GET')
  titleInput.value = postDetail.title
  contentInput.value = postDetail.contents
}

async function updatePost () {
  const postPayload = {
    title: titleInput.value,
    contents: contentInput.value
  }
  await requestApi(`/post/${postId.value}`, 'PUT', JSON.stringify(postPayload))
  router.push({ path: `/post/${postId.value}` })
}

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
  <h2 v-if="isEditMode">게시글 수정</h2>
  <h2 v-else>게시글 등록</h2>
  <input type="text" v-model="titleInput" class="full-line" placeholder="글 제목">
  <textarea class="full-line" v-model="contentInput" placeholder="글 내용"></textarea>
  <button v-if="isEditMode" type="button" @click="updatePost">
    <span>저장</span>
  </button>
  <button v-else type="button" @click="registerPost">
    <span>등록</span>
  </button>
</template>

<style>
.full-line {
  display: block;
}
</style>
