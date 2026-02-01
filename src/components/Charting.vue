<template>
  <div>
    <div class="motion-right">
      <LineChart />
    </div>
  </div>
</template>

<script>
import LineChart from './charts/LineChart/LineChart.vue'
export default {
  name: `ChartingComponent`,
  components: {
    LineChart,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.motion-left {
  position: absolute;
  top: 100px;
  left: 50px;
  width: 45%;
}
.motion-right {
  position: absolute;
  top: 100px;
  right: 50px;
  width: 45%;
}
</style>
