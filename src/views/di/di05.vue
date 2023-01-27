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

function hideAlert() {
  emit('update:show', false)
}
function onClickDelete() {
  hideAlert()
  emit('is-delete')
}
</script>

<template>
  <uu-alert v-if="props.show" @click-dim="hideAlert">
    <template v-slot>
      <p>정말로 삭제하시겠습니까?</p>
    </template>
    <template v-slot:footer>
      <uu-alert-button text="취소" @click="hideAlert" />
      <uu-alert-button text="삭제" main @click="onClickDelete" />
    </template>
  </uu-alert>
</template>
