<!-- cm02 내 정보 관리 -->

<script setup lang="ts">
import BasicHeader from '@/components/layout/BasicHeader.vue'
import UuButtonBlock from '@/components/uu-components/UuButtonBlock.vue'
</script>

<template>
  <div>
    <basic-header title="내 정보 관리" />
    <section class="content-padding">
      <div>
        <div class="setting-text">회원탈퇴</div>
        <p class="setting-text small-margin-top">회원탈퇴를 하시면 지금까지 작성한 일기장 내용이 모두 삭제됩니다.</p>
        <uu-button-block text="회원탈퇴" class="small-margin-top" />
      </div>
    </section>
  </div>
</template>
