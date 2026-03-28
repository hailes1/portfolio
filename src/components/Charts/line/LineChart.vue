<template>
  <div ref="chartHolder" class="p-1"></div>
</template>

<script>
import { LineChart } from '@carbon/charts'
import '@carbon/charts/styles.css'

export default {
  name: `LineChartComponent`,
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
    const appElement = this.$refs.chartHolder
    new LineChart(appElement, {
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
