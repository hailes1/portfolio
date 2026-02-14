<template>
  <div>
    <div class="motion-left">
      <cv-breadcrumb :class="chartingTextClass"> 001: Charting - Bar Charts </cv-breadcrumb>
      <!-- <BarChart :data="humanDevelopmentIndexData" :options="humanDevelopmentIndexLabel" /> -->
    </div>
    <div class="motion-right">
      <cv-breadcrumb :class="chartingTextClass"> 002: Charting - Line Charts </cv-breadcrumb>
      <LineChart :data="urbanData" :options="urbanOptions" />
      <LineChart :data="economicData" :options="economicOptions" />
    </div>
  </div>
</template>

<script>
import LineChart from './charts/line/LineChart.vue'
// import BarChart from './charts/bar/BarChart.vue'
import UrbanPopulationData from './charts/line/data/UrbanPopulationData'
import UrbanPopulationLabel from './charts/line/data/UrbanPopulationLabel'
import EconomicOutlookData from './charts/line/data/EconomicOutlookData'
import EconomicOutlookLabel from './charts/line/data/EconomicOutlookLabel'
import HumanDevelopmentIndexData from './charts/bar/data/HumanDevelopmentIndexData'
import HumanDevelopmentIndexLabel from './charts/bar/data/HumanDevelopmentIndexLabel'

import { cvBreadcrumb } from '@carbon/vue'

export default {
  name: `ChartingComponent`,
  components: {
    LineChart,
    // BarChart,
    cvBreadcrumb,
  },
  props: {
    isSwitchOn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      urbanData: UrbanPopulationData,
      urbanOptions: UrbanPopulationLabel,
      economicData: EconomicOutlookData,
      economicOptions: EconomicOutlookLabel,
      humanDevelopmentIndexData: HumanDevelopmentIndexData,
      humanDevelopmentIndexLabel: HumanDevelopmentIndexLabel,
    }
  },
  computed: {
    chartingTextClass() {
      return this.isSwitchOn ? 'charting-page-text active' : 'charting-page-text'
    },
  },
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
.charting-page-text {
  font-family:
    'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier', 'Monospace';
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.33333;
  letter-spacing: 0.32px;
  color: #d3d3d3;

  &.active {
    color: #000000;
  }
}
</style>
