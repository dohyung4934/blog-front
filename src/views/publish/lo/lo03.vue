<!-- lo03 바텀시트 -->
<script setup lang="ts">
import { ref } from 'vue'

import UuBottomsheet from '@/components/uu-components/UuBottomsheet.vue'

/** 바텀시트 노출 여부 */
const isShow = ref(true)

/** 바텀시트 뒤 딤 처리 영역 클릭 */
function onClickDim() {
  isShow.value = false
}
</script>

<template>
  <p>바닥 글</p>
  <uu-bottomsheet v-if="isShow" @click-dim="onClickDim">
    <p class="large-text">안녕하세요</p>
  </uu-bottomsheet>
</template>
