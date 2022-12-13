<!-- lo02 채색 레이아웃 -->

<script setup lang="ts">
</script>

<template>
  <div>
    <!-- 기본 -->
    <header class="green-bg box-padding text-size-medium">
      <div class="color-page-header-top">
        <button class="text-link">로그아웃</button>
        <div class="page-header-text-icon">×</div>
      </div>
      <div class="horizontal-list large-margin-top">
        <div class="profile-img"></div>
        <div class="large-text margin-left">
          <span>홍길동</span> 님 〉
        </div>
      </div>
    </header>
    <!-- // 기본 -->

    <!-- 상단 링크 없이 -->
    <header class="green-bg box-padding text-size-medium">
      <div class="color-page-header-top justify-right">
        <div class="page-header-text-icon">×</div>
      </div>
      <div class="horizontal-list large-margin-top">
        <div class="large-text margin-left">로그인 해주세요 〉</div>
      </div>
    </header>
    <!-- // 상단 링크 없이 -->
  </div>
</template>




