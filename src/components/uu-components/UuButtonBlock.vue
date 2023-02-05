<!-- 버튼 -->
<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: '텍스트'
  }
})
const emit = defineEmits(['click'])

/** 버튼 클릭 emit */
function emitButtonClick() {
  emit('click')
}
</script>

<template>
  <button type="button" class="button-block" @click="emitButtonClick">{{ props.text }}</button>
</template>
