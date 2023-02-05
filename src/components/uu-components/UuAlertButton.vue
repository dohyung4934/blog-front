<!-- 알럿 버튼 -->
<script setup lang="ts">
const props = defineProps({
  /** 주 버튼 색깔 */
  mainButtonColor: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['click'])

/** 버튼 클릭 emit */
function emitButtonClick() {
  emit('click')
}
</script>

<template>
  <button type="button" :class="{
  'btn-gray': !props.mainButtonColor,
  'btn-green': props.mainButtonColor
}" @click="emitButtonClick">{{ text }}</button>
</template>
