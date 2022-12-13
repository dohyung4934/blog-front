<!-- 버튼 -->

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: '텍스트'
  }
})
</script>

<template>
  <button class="button-block">{{ props.text }}</button>
</template>
