<template>
  <div>
    <div class="motion-right">
      <LineChart :data="urbanData" :options="urbanOptions" />
      <LineChart :data="economicData" :options="economicOptions" />
    </div>
  </div>
</template>

<script>
import LineChart from './charts/line/LineChart.vue'
import UrbanPopulationData from './charts/line/data/UrbanPopulationData'
import UrbanPopulationLabel from './charts/line/data/UrbanPopulationLabel'
import EconomicOutlookData from './charts/line/data/EconomicOutlookData'
import EconomicOutlookLabel from './charts/line/data/EconomicOutlookLabel'

export default {
  name: `ChartingComponent`,
  components: {
    LineChart,
  },
  data() {
    return {
      urbanData: UrbanPopulationData,
      urbanOptions: UrbanPopulationLabel,
      economicData: EconomicOutlookData,
      economicOptions: EconomicOutlookLabel,
    }
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
