<template>
  <div ref="chartHolder" class="p-1"></div>
</template>

<script>
import { SimpleBarChart } from '@carbon/charts'
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
    theme: {
      type: String,
      default: 'g10',
    },
  },
  data() {
    return {
      chart: null,
    }
  },
  mounted() {
    this.renderChart()
  },
  beforeUnmount() {
    this.chart?.destroy()
  },
  watch: {
    data: {
      deep: true,
      handler() {
        this.updateChart()
      },
    },
    options: {
      deep: true,
      handler() {
        this.updateChart()
      },
    },
    theme() {
      this.updateChart()
    },
  },
  methods: {
    buildOptions() {
      return {
        ...this.options,
        theme: this.theme,
      }
    },
    renderChart() {
      const appElement = this.$refs.chartHolder
      this.chart = new SimpleBarChart(appElement, {
        data: this.data,
        options: this.buildOptions(),
      })
    },
    updateChart() {
      if (!this.chart) {
        this.renderChart()
        return
      }

      this.chart.model.setData(this.data)
      this.chart.model.setOptions(this.buildOptions())
    },
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
