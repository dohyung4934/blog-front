<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const isLoggedIn = computed(() => authStore.token !== null)

function logoutUser() {
  authStore.token = null
}
</script>

<template>
  <div v-if="isLoggedIn">
    <span>안녕하세요</span>
    <a href="#" @click="logoutUser">로그아웃</a>
  </div>
  <div v-else>
    <router-link to="/user/login">🔐 로그인</router-link>
  </div>
</template>
