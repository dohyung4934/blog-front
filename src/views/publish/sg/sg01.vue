<!-- sg01 서비스 소개 -->
<script setup lang="ts">
import BasicHeader from '@/components/layout/BasicHeader.vue'
import UuButtonBlock from '@/components/uu-components/UuButtonBlock.vue'
</script>

<template>
  <div>
    <basic-header title="디지털 일기장" />
    <section class="content-padding">
      <div class="center-container">
        <img src="~@/assets/images/book.jpg" class="guide-img">
      </div>
      <div class="guide-bold large-margin-top">쉽고 편리한 <br>핸드폰 속 일기장</div>
      <p class="guide-text small-margin-top">언제 어디서나 편리하게 <br>사용할 수 있는 디지털 일기장으로 <br>매일의 이야기를 기록해 보세요.</p>
      <uu-button-block text="시작하기" class="large-margin-top" />
    </section>
  </div>
</template>
