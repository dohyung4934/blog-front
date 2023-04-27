<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { requestApi } from '@/api'
import type { AuthTokenDto } from './dto/auth-token.dto'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const username = ref('')
const password = ref('')

async function tryLogin() {
  const payload = {
    username: username.value,
    password: password.value
  }
  const resp = await requestApi<AuthTokenDto>('/auth/token', 'POST', JSON.stringify(payload))

  if (resp.token === undefined) {
    alert('아이디/비밀번호를 확인해 주세요.')
  } else {
    authStore.token = resp.token
    router.push({ path: '/post' })
  }

}
</script>

<template>
  <router-link to="/post">◁ 뒤로가기</router-link>
  <h2>로그인</h2>
  <form @submit.prevent="tryLogin">
    <input v-model="username" type="text" placeholder="아이디" class="full-line">
    <input v-model="password" type="password" placeholder="비밀번호" class="full-line">
    <input type="submit" value="로그인">
  </form>
</template>
