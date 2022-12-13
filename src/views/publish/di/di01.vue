<!-- di01 달력 -->
<script setup lang="ts">
import BasicHeader from '@/components/layout/BasicHeader.vue'
</script>

<template>
  <div>
    <basic-header title="바보의 일기장" />
    <section class="content-padding">
      <div class="cal-header small-margin-top">
        <a href="#">&lt;</a>
        <span>2022. 12.</span>
        <a href="#">&gt;</a>
      </div>
      <div class="cal-content small-margin-top">
        <div v-for="day in ['일', '월', '화', '수', '목', '금', '토']" class="cal-date">
          {{ day }}
        </div>
        <div v-for="i in 4" class="cal-date"></div>
        <div v-for="date in 31" class="cal-date">
          {{ date }}
        </div>
      </div>
    </section>
  </div>
</template>
