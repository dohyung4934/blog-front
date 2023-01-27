<!-- cm03 전체 메뉴 -->

<script setup lang="ts">
import { ref } from 'vue'

/** 로그인 여부 */
const isLogin = ref(true)
/** 회원명 */
const mbrNm = ref('홍길동')
</script>

<template>
  <div class="all-menu">
    <!-- 로그인 상태 -->
    <template v-if="isLogin">
      <header class="green-bg box-padding text-size-medium">
        <div class="color-page-header-top">
          <button type="button" class="text-link">로그아웃</button>
          <button type="button" class="page-header-text-icon">×</button>
        </div>
        <div class="horizontal-list large-margin-top">
          <div class="profile-img"></div>
          <button type="button" class="large-text margin-left">
            <span>{{ mbrNm }}</span> 님 〉
          </button>
        </div>
      </header>

      <nav class="content-padding">
        <ul class="all-menu-list">
          <li><a href="#">서비스 소개</a></li>
          <li><a href="#">일기장</a></li>
        </ul>
      </nav>
    </template>
    <!-- // 로그인 상태 -->

    <!-- 로그아웃 상태 -->
    <header v-else class="green-bg box-padding text-size-medium">
      <div class="color-page-header-top justify-right">
        <button type="button" class="page-header-text-icon">×</button>
      </div>
      <div class="horizontal-list large-margin-top">
        <button class="large-text margin-left">로그인 해주세요 〉</button>
      </div>
    </header>
    <!-- // 로그아웃 상태 -->
  </div>
</template>




