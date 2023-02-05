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

/** 삭제 확인 알럿 출력 */
function showDeleteConfirmAlert() {
  isShowDelete.value = true
}
/** 글 관리 바텀시트 숨기기 */
function hideDiaryManagementBottomsheet() {
  emit('update:is-show', false)
}
</script>

<template>
  <uu-bottomsheet v-if="props.isShow" @click-dim="hideDiaryManagementBottomsheet">
    <ul class="bottom-menu">
      <li @click="showDeleteConfirmAlert"><span>글 삭제</span></li>
    </ul>
  </uu-bottomsheet>
  <di05 v-model:show="isShowDelete" @is-delete="hideDiaryManagementBottomsheet" />
</template>
