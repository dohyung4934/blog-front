<!-- di05 글 삭제 확인 -->
<script setup lang="ts">
import { ref } from 'vue'

import UuAlert from '@/components/uu-components/UuAlert.vue'
import UuAlertButton from '@/components/uu-components/UuAlertButton.vue'

const isShow = ref(true)

function hideAlert() {
  isShow.value = false
}
function onClickDelete() {
  hideAlert()
  console.log('삭제')
}
</script>

<template>
  <p>바닥</p>
  <uu-alert v-if="isShow" @click-dim="hideAlert">
    <template v-slot>
      <p>정말로 삭제하시겠습니까?</p>
    </template>
    <template v-slot:footer>
      <uu-alert-button text="취소" @click="hideAlert" />
      <uu-alert-button text="삭제" main-button-color @click="onClickDelete" />
    </template>
  </uu-alert>
</template>
