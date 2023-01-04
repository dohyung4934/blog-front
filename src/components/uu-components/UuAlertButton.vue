<!-- 알럿 버튼 -->
<script setup lang="ts">
const props = defineProps({
  main: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['click'])

/** 버튼 클릭 */
function onClick() {
  emit('click')
}
</script>

<template>
  <button type="button" :class="{
  'btn-gray': !props.main,
  'btn-green': props.main
}" @click="onClick">{{ text }}</button>
</template>
