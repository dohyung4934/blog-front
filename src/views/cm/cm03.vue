<!-- cm03 전체 메뉴 -->

<script setup lang="ts">
import { useRouter } from 'vue-router'

import { useCmStore } from '@/stores/cm/cm.module'

const router = useRouter()
const cmStore = useCmStore()

function onClickX() {
  cmStore.isShowMenu = false
}
function onClickLogout() {
  cmStore.isLogin = false
  cmStore.userNm = ''
}
function moveTo(path: string) {
  router.push({ path })
  cmStore.isShowMenu = false
}
function onClickLogin() {
  moveTo('/cm/cm01')
}
function onClickUserNm() {
  moveTo('/cm/cm02')
}
function onClickMenuServiceGuide() {
  moveTo('/sg/sg01')
}
function onClickMenuDiary() {
  moveTo('/di/di01')
}
</script>

<template>
  <div v-if="cmStore.isShowMenu" class="all-menu">
    <!-- 로그인 상태 -->
    <header v-if="cmStore.isLogin" class="green-bg box-padding text-size-medium">
      <div class="color-page-header-top">
        <button type="button" class="text-link" @click="onClickLogout">로그아웃</button>
        <button type="button" class="page-header-text-icon" @click="onClickX">×</button>
      </div>
      <div class="horizontal-list large-margin-top">
        <div class="profile-img"></div>
        <button type="button" class="large-text margin-left" @click="onClickUserNm">
          <span>{{ cmStore.userNm }}</span> 님 〉
        </button>
      </div>
    </header>
    <!-- // 로그인 상태 -->

    <!-- 로그아웃 상태 -->
    <header v-else class="green-bg box-padding text-size-medium">
      <div class="color-page-header-top justify-right">
        <button type="button" class="page-header-text-icon" @click="onClickX">×</button>
      </div>
      <div class="horizontal-list large-margin-top">
        <button class="large-text margin-left" @click="onClickLogin">로그인 해주세요 〉</button>
      </div>
    </header>
    <!-- // 로그아웃 상태 -->

    <nav class="content-padding">
      <ul class="all-menu-list">
        <li><a @click="onClickMenuServiceGuide">서비스 소개</a></li>
        <li><a @click="onClickMenuDiary">일기장</a></li>
      </ul>
    </nav>
  </div>
</template>




