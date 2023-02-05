<!-- di05 글 삭제 확인 -->
<script setup lang="ts">
import UuAlert from '@/components/uu-components/UuAlert.vue'
import UuAlertButton from '@/components/uu-components/UuAlertButton.vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:show', 'is-delete'])

function hideDeleteConfirmAlert() {
  emit('update:show', false)
}
/** 삭제 진행 */
function proceedDeletion() {
  hideDeleteConfirmAlert()
  emit('is-delete')
}
</script>

<template>
  <uu-alert v-if="props.show" @click-dim="hideDeleteConfirmAlert">
    <template v-slot>
      <p>정말로 삭제하시겠습니까?</p>
    </template>
    <template v-slot:footer>
      <uu-alert-button text="취소" @click="hideDeleteConfirmAlert" />
      <uu-alert-button text="삭제" main-button-color @click="proceedDeletion" />
    </template>
  </uu-alert>
</template>
