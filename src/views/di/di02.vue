<!-- di02 글 읽기 -->
<script setup lang="ts">
import { useRouter } from 'vue-router'

import PostHeader from './components/PostHeader.vue'

const router = useRouter()

function moveToDiaryEditPage() {
  router.push({ path: '/di/di03' })
}
</script>

<template>
  <post-header />
  <section class="post" @click="moveToDiaryEditPage">
    <p>
      안녕하세요<br>
      안녕하세요<br>
      안녕하세요<br>
      안녕하세요<br>
      안녕하세요<br>
      안녕하세요<br>
      안녕하세요<br>
      안녕하세요<br>
      안녕하세요<br>
      안녕하세요<br>
      안녕하세요
    </p>
  </section>
</template>
