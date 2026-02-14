<template>
  <div id="chart-holder" class="p-1"></div>
</template>

<script>
import { BarChart } from '@carbon/charts'
import '@carbon/charts/styles.css'

export default {
  name: `BarChartComponent`,
  props: {
    data: {
      type: Array,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    const appElement = document.getElementById('chart-holder')
    new BarChart(appElement, {
      data: this.data,
      options: this.options,
    })
  },
}
</script>

<style>
.p-1 {
  padding: 2rem;
  height: 900px;
  width: 700px;
}
</style>
