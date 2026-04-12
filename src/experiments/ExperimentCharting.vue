<template>
  <div :class="surfaceClass" class="experiment-charting">
    <div class="page-content">
      <h1 :class="headingClass">001 - Charting Systems</h1>
      <cv-breadcrumb :class="['intro-copy', chartingTextClass]">
        Charts in this experiment follow the same visual language as the rest of the collection:
        clear hierarchy, layered surfaces, and theme-aware contrast.
      </cv-breadcrumb>

      <div class="chart-grid">
        <section :class="['chart-panel', panelClass]">
          <cv-breadcrumb :class="['intro-copy', chartingTextClass]">
            001: Charting - Bar Charts</cv-breadcrumb
          >
          <div :class="['chart-shell', shellClass]">
            <BarChart :data="humanDevelopmentIndexData" :options="humanDevelopmentIndexLabel" />
          </div>
        </section>

        <section :class="['chart-panel', panelClass]">
          <cv-breadcrumb :class="['intro-copy', chartingTextClass]"
            >002: Charting - Line Charts</cv-breadcrumb
          >
          <div :class="['chart-shell', shellClass]">
            <LineChart :data="urbanData" :options="urbanOptions" />
          </div>
          <div :class="['chart-shell', shellClass]">
            <LineChart :data="economicData" :options="economicOptions" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from '../components/charts/line/LineChart.vue'
import BarChart from '../components/charts/bar/BarChart.vue'
import UrbanPopulationData from '../components/charts/line/data/UrbanPopulationData'
import UrbanPopulationLabel from '../components/charts/line/data/UrbanPopulationLabel'
import EconomicOutlookData from '../components/charts/line/data/EconomicOutlookData'
import EconomicOutlookLabel from '../components/charts/line/data/EconomicOutlookLabel'
import HumanDevelopmentIndexData from '../components/charts/bar/data/HumanDevelopmentIndexData'
import HumanDevelopmentIndexLabel from '../components/charts/bar/data/HumanDevelopmentIndexLabel'

import { CvBreadcrumb } from '@carbon/vue'

export default {
  name: 'ExperimentCharting',
  components: {
    LineChart,
    BarChart,
    CvBreadcrumb,
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
    surfaceClass() {
      return this.isSwitchOn ? 'experiment-charting active' : 'experiment-charting'
    },
    headingClass() {
      return this.isSwitchOn ? 'text-primary active' : 'text-primary'
    },
    chartingTextClass() {
      return this.isSwitchOn ? 'charting-page-text active' : 'charting-page-text'
    },
    panelClass() {
      return this.isSwitchOn ? 'panel-surface active' : 'panel-surface'
    },
    shellClass() {
      return this.isSwitchOn ? 'shell-surface active' : 'shell-surface'
    },
  },
}
</script>

<style scoped lang="scss">
.experiment-charting {
  --cds-background: #000000;
  --cds-layer-01: #262626;
  --cds-layer-02: #393939;
  --cds-text-primary: #f4f4f4;
  --cds-text-secondary: #8d8d8d;
  --cds-link-primary: #78a9ff;

  position: fixed;
  inset: 0;
  overflow-y: auto;
  z-index: 10;
  background-size: 32px 32px;
  transition:
    background-color 180ms ease,
    color 180ms ease;
}

.experiment-charting.active {
  --cds-background: #d3d3d3;
  --cds-layer-01: #f4f4f4;
  --cds-layer-02: #ffffff;
  --cds-text-primary: #161616;
  --cds-text-secondary: #525252;
  --cds-link-primary: #0f62fe;
}

.page-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

h1 {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin: 0 0 1rem;
}

.text-primary {
  color: var(--cds-text-primary);
  transition: color 180ms ease;
}

.intro-copy {
  display: block;
  margin-bottom: 2.5rem;
  max-width: 720px;
}

.chart-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
}

.chart-panel {
  border-radius: 4px;
  padding: 1.5rem;
  background: var(--cds-layer-01);
  transition: background-color 180ms ease;
}

.chart-shell {
  background: var(--cds-layer-02);
  border-radius: 4px;
  padding: 0.25rem;
  margin-bottom: 1rem;
  transition: background-color 180ms ease;
}

.charting-page-text {
  font-family:
    'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier', 'Monospace';
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.45;
  letter-spacing: 0.32px;
  color: var(--cds-text-primary);

  &.active {
    color: var(--cds-text-primary);
  }
}

:deep(.p-1) {
  width: 100% !important;
  height: 430px !important;
  padding: 1rem !important;
}

@media (max-width: 960px) {
  .chart-grid {
    grid-template-columns: 1fr;
  }
}
</style>
