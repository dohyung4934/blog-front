<!-- cm01 로그인 -->

<script setup lang="ts">
import { useRouter } from 'vue-router'

import BasicHeader from '@/components/layout/BasicHeader.vue'
import { useCmStore } from '@/stores/cm/cm.module'

const router = useRouter()
const cmStore = useCmStore()

function onClickKakao() {
  cmStore.userNm = '홍길동'
  cmStore.isLogin = true
  router.back()
}
function onClickBack() {
  router.back()
}
</script>

<template>
  <div>
    <basic-header title="로그인" show-back @click-back="onClickBack" />
    <section class="section-center">
      <div class="horiz-center">
        <div class="login-container">
          <strong class="large-text">로그인 해주세요</strong>
          <button type="button" class="small-margin-top" title="카카오 로그인" @click="onClickKakao">
            <img src="~@/assets/images/kakao_login_medium_wide.png" alt="카카오 로그인 이미지">
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
