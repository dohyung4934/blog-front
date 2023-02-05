<!-- 바텀시트 -->
<script setup lang="ts">
const emit = defineEmits(['click-dim'])

/** 딤 클릭 emit */
function emitDimClick() {
  emit('click-dim')
}
</script>

<template>
  <teleport to="body">
    <div class="dim" @click="emitDimClick"></div>
    <article class="bottomsheet">
      <div class="horizontal-center">
        <div class="bottomsheet-handle"></div>
      </div>
      <slot></slot>
    </article>
  </teleport>
</template>
