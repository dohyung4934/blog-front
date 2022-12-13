<!-- 기본 헤더 -->

<script setup lang="ts">
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
</script>

<template>
  <header class="page-header box-padding">
    <div v-if="props.showBack" class="page-header-text-icon flex-fit">&lt;</div>
    <h3 class="page-header-title">{{ props.title }}</h3>
    <div v-if="props.showMore" class="page-header-text-icon flex-fit">⋮</div>
    <div class="page-header-text-icon flex-fit"><button>三</button></div>
  </header>
</template>
