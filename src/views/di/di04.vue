<!-- di04 글 관리 -->
<script setup lang="ts">
import { ref } from 'vue'

import UuBottomsheet from '@/components/uu-components/UuBottomsheet.vue'
import di05 from './di05.vue'

const props = defineProps({
  isShow: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:is-show'])

const isShowDelete = ref(false)

function onClickDelete() {
  isShowDelete.value = true
}
function setHide() {
  emit('update:is-show', false)
}
function onClickDim() {
  setHide()
}
function onIsDelete() {
  setHide()
}
</script>

<template>
  <uu-bottomsheet v-if="props.isShow" @click-dim="onClickDim">
    <ul class="bottom-menu">
      <li @click="onClickDelete"><span>글 삭제</span></li>
    </ul>
  </uu-bottomsheet>
  <di05 v-model:show="isShowDelete" @is-delete="onIsDelete" />
</template>
