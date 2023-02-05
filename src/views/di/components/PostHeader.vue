<!-- 글 읽기/쓰기 화면 공통 헤더 -->
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import BasicHeader from '@/components/layout/BasicHeader.vue'
import di04 from '@/views/di/di04.vue'

const router = useRouter()

const isShowMore = ref(false)

/** 라우터 뒤로 이동 */
function moveRouterBack() {
  router.back()
}
/** 글 관리 바텀시트 출력 */
function showDiaryManagementBottomsheet() {
  isShowMore.value = true
}
</script>

<template>
  <basic-header title="2022년 12월 4일" show-back show-more @click-back="moveRouterBack" @click-more="showDiaryManagementBottomsheet" />
  <di04 v-model:is-show="isShowMore" />
</template>
