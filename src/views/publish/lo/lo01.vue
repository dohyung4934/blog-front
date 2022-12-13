<!-- lo01 기본 레이아웃 -->

<script setup lang="ts">
import BasicHeader from '@/components/layout/BasicHeader.vue'
</script>

<template>
  <div>
    <!-- 타이틀 + 전체메뉴 -->
    <basic-header title="타이틀1" />
    <!-- // 타이틀 + 전체메뉴 -->

    <!-- 뒤로가기 + 타이틀 + 전체메뉴 -->
    <basic-header title="타이틀2" show-back />
    <!-- // 뒤로가기 + 타이틀 + 전체메뉴 -->

    <!-- 뒤로가기 + 타이틀 + 더보기 + 전체메뉴 -->
    <basic-header title="타이틀3" show-back show-more />
    <!-- // 뒤로가기 + 타이틀 + 더보기 + 전체메뉴 -->
  </div>
</template>
