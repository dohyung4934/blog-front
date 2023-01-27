<!-- 최상위 컨테이너 -->

<script setup lang="ts">
import { RouterView } from 'vue-router'

import cm03 from '@/views/cm/cm03.vue'
</script>

<template>
  <router-view />
  <!-- 전체 메뉴 -->
  <cm03 />
  <!-- // 전체 메뉴 -->
</template>
