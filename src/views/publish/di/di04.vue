<!-- di04 글 관리 -->
<script setup lang="ts">
import { ref } from 'vue'

import UuBottomsheet from '@/components/uu-components/UuBottomsheet.vue'

const isShow = ref(true)

function onClickDelete() {
  console.log('글 삭제')
}
function onClickDim() {
  isShow.value = false
}
</script>

<template>
  <div>
    <p>바닥</p>
    <uu-bottomsheet v-if="isShow" @click-dim="onClickDim">
      <ul class="bottom-menu">
        <li @click="onClickDelete"><span>글 삭제</span></li>
      </ul>
    </uu-bottomsheet>
  </div>
</template>
