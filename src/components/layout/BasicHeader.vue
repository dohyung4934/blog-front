<!-- 기본 헤더 -->

<script setup lang="ts">
import { useCmStore } from '@/stores/cm/cm.module'

const props = defineProps({
  /** 헤더 타이틀 */
  title: {
    type: String,
    default: '타이틀'
  },
  /** 뒤로가기 사용 여부 */
  showBack: {
    type: Boolean,
    default: false
  },
  /** 더보기 사용 여부 */
  showMore: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['click-back', 'click-more'])

const cmStore = useCmStore()

function onClickBack() {
  emit('click-back')
}
function onClickMore() {
  emit('click-more')
}
function onClickMenu() {
  cmStore.isShowMenu = true
}
</script>

<template>
  <header class="page-header box-padding">
    <button v-if="props.showBack" type="button" class="page-header-text-icon flex-fit"
      @click="onClickBack">&lt;</button>
    <h3 class="page-header-title">{{ props.title }}</h3>
    <button v-if="props.showMore" type="button" class="page-header-text-icon flex-fit" @click="onClickMore">⋮</button>
    <button type="button" class="page-header-text-icon flex-fit" @click="onClickMenu">三</button>
  </header>
</template>
