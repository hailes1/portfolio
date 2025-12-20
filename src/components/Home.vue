<template>
  <div class="intro-container">
    <div>
      <cv-breadcrumb :style="breadCrumbStyle">
        The Quiet Pages is a digital sketchbook: a space for experimenting with web components,
        patterns, and interactions without the pressure of a polished final product. Each page is a
        small, quiet experiment a way to learn, refine, and shape before they find a louder stage.
      </cv-breadcrumb>
      <cv-tag @remove="onRemove" label="Data Vizualization" kind="purple" />
      <cv-tag @remove="onRemove" label="Poems" kind="blue" />
      <cv-tag @remove="onRemove" label="Prose" kind="green" />
    </div>
  </div>
  <!-- <div class="chart-container" :style="chartStyle">
    <NLPResearch />
  </div> -->
  <div class="quiet-subfooter">
    <cv-button-set>
      <cv-button
        kind="primary"
        :style="{ backgroundColor: '#8A3FFC', borderColor: '#8A3FFC', minWidth: '340px' }"
      />
      <cv-button
        kind="primary"
        :style="{ backgroundColor: '#0F62FE', borderColor: '#0F62FE', minWidth: '340px' }"
      />
      <cv-button
        kind="primary"
        :style="{ backgroundColor: '#24A148', borderColor: '#24A148', minWidth: '340px' }"
      />
    </cv-button-set>
  </div>
</template>

<script>
import { CvBreadcrumb, CvTag, CvButtonSet, CvButton } from '@carbon/vue'
import NLPResearch from './Flow-Charts/NLPResearch.vue'

export default {
  name: 'HomeComponent',
  components: {
    CvBreadcrumb,
    CvTag,
    CvButtonSet,
    CvButton,
    NLPResearch,
  },
  props: {
    isSwitchOn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isTileExpanded: false,
    }
  },
  computed: {
    breadCrumbStyle() {
      return {
        color: this.isSwitchOn ? '#000000' : '#ffffff',
      }
    },
    chartStyle() {
      return {
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
      }
    },
  },
  methods: {
    onRemove() {
      // Handle tag removal if needed
    },
  },
}
</script>

<style scoped>
.intro-container {
  display: flex;
  flex-direction: column;
  font-family: 'IBM Plex Sans';
  position: absolute;
  top: 100px;
  left: 50px;
  width: 25%;
  font-weight: bold;
}

.quiet-title {
  margin: 0 0 12px 0;
  font-family:
    'IBM Plex Sans',
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    Arial,
    sans-serif;
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.02em;
  font-size: clamp(48px, 10vw, 144px);
}

.quiet-footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.quiet-title--footer {
  margin: 0;
}

.chart-container {
  position: absolute;
  top: 100px;
  right: 50px;
  width: calc(50% - 50px);
  height: calc(100vh - 200px);
  padding: 10px;
  box-sizing: border-box;
  overflow: auto;
}

.intro-container .cv-tag {
  margin-top: 10px;
}

.quiet-subfooter {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 32px;
  padding-bottom: 16px;
  z-index: 10;
}
</style>
