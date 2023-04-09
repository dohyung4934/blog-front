<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { requestApi } from './api'

interface PostSummary {
    id: string
    title: string
}

interface PostListDto {
    id: string
    title: string
}

interface PostListResponse {
    postList: PostListDto[]
}

const postList = ref<PostSummary[]>([])

onMounted(() => {
    getPostList()
})

async function getPostList () {
    const response = await requestPostList()
    postList.value = responseToPostList(response)
}

async function requestPostList () {
    return requestApi<PostListResponse>('/post', 'GET')
}

function responseToPostList (response: PostListResponse) {
    return response.postList.map(item => ({
        id: item.id,
        title: item.title,
    }))
}
</script>

<template>
    <h2>게시글 목록</h2>
    <section>
        <article v-for="post of postList" :key="post.id">
            <h3>{{  post.title }}</h3>
        </article>
    </section>
</template>
