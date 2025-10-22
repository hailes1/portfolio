<template>
  <div id="chart-holder" class="p-1"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { LineChart } from '@carbon/charts'
import chartOptions from './options.js'
import chartData from './data.js'
import '@carbon/charts/styles.css'

onMounted(() => {
  const chartHolder = document.getElementById('chart-holder')
  new LineChart(chartHolder, {
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
