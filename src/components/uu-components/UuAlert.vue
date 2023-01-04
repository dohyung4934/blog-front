<!-- 알럿 -->
<script setup lang="ts">
import UuAlertButton from '@/components/uu-components/UuAlertButton.vue'

const emit = defineEmits(['click-dim'])

/** 딤 영역 클릭 */
function onClickDim() {
  emit('click-dim')
}
</script>

<template>
  <teleport to="body">
    <div class="dim all-center" @click="onClickDim">
      <article class="alert" @click.stop>
        <div class="alert-content">
          <div>
            <slot></slot>
          </div>
        </div>
        <div class="alert-footer">
          <slot name="footer">
            <uu-alert-button text="확인" main @click="onClickDim" />
          </slot>
        </div>
      </article>
    </div>
  </teleport>
</template>
