<template>
  <div id="chart-holder" class="p-1"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { CirclePackChart } from '@carbon/charts'
import chartData from './data.js'
import chartOptions from './options.js'
import '@carbon/charts/styles.css'

onMounted(() => {
  const appElement = document.getElementById('chart-holder')
  new CirclePackChart(appElement, {
    data: chartData,
    options: chartOptions,
  })
})
</script>

<style>
.p-1 {
  padding: 2rem;
  height: 900px;
  width: 700px;
}
</style>
