<!-- lo04 알럿 -->
<script setup lang="ts">
import { ref } from 'vue'

import UuAlert from '@/components/uu-components/UuAlert.vue'
import UuAlertButton from '@/components/uu-components/UuAlertButton.vue'

/** 알럿 노출 여부 */
const isShow = ref(true)

/** 딤 영역 클릭 */
function onClickDim() {
  isShow.value = false
}

/** 버튼1 클릭 */
function onClickBtn1() {
  console.log('버튼1 클릭')
  isShow.value = false
}

/** 버튼2 클릭 */
function onClickBtn2() {
  console.log('버튼2 클릭')
  isShow.value = false
}
</script>

<template>
  <p>바닥 글</p>
  <uu-alert v-if="isShow" @click-dim="onClickDim">
    <template v-slot>
      <p>콘텐츠 텍스트 콘텐츠...</p>
    </template>
    <template v-slot:footer>
      <uu-alert-button text="버튼1" @click="onClickBtn1" />
      <uu-alert-button text="버튼2" main-button-color @click="onClickBtn2" />
    </template>
  </uu-alert>
</template>
