<!-- 버튼 -->
<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: '텍스트'
  }
})
const emit = defineEmits(['click'])

function onClick() {
  emit('click')
}
</script>

<template>
  <button type="button" class="button-block" @click="onClick">{{ props.text }}</button>
</template>
