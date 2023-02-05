<!-- di01 달력 -->
<script setup lang="ts">
import { useRouter } from 'vue-router'

import BasicHeader from '@/components/layout/BasicHeader.vue'

const router = useRouter()

function getRandomBoolean(date: number) {
  return Math.random() > 0.5
}
function moveToDiaryEntryPage() {
  router.push({ path: '/di/di02' })
}
</script>

<template>
  <div>
    <basic-header title="일기장" />
    <section class="content-padding">
      <div class="cal-header small-margin-top">
        <a href="#">&lt;</a>
        <span>2022. 12.</span>
        <a href="#">&gt;</a>
      </div>
      <div class="cal-content small-margin-top">
        <div v-for="day in ['일', '월', '화', '수', '목', '금', '토']" :key="day" class="cal-date">
          <span>{{ day }}</span>
        </div>
        <div v-for="i in 4" :key="i" class="cal-date"></div>
        <button v-for="date in 31" :key="date" type="button" class="cal-date" @click="moveToDiaryEntryPage">
          <span class="text-center">{{ date }}</span>
          <span :class="{ 'cal-dot-hide': getRandomBoolean(date) }" class="text-center cal-dot">.</span>
        </button>
      </div>
    </section>
  </div>
</template>
