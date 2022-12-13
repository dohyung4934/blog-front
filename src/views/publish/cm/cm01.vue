<!-- cm01 로그인 -->

<script setup lang="ts">
import BasicHeader from '@/components/layout/BasicHeader.vue'
</script>

<template>
  <div>
    <basic-header title="로그인" show-back />
    <section class="section-center">
      <div class="horiz-center">
        <div class="login-container">
          <strong class="large-text">로그인 해주세요</strong>
          <button class="small-margin-top">
            <img src="~@/assets/images/kakao_login_medium_wide.png">
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
