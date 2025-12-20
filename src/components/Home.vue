<template>
  <!-- Original content in original position -->
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
  z-index: 10;
  transition: margin-left 0.3s ease;
  color: inherit;
}

.intro-container .cv-tag {
  margin-top: 10px;
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
  z-index: 1;
}
</style>

<style>
/* Global styles to respond to side nav toggle */
.side-nav-expanded .intro-container {
  margin-left: 300px;
}

.side-nav-expanded .chart-container {
  margin-left: 300px;
}

/* Grid lines stay black in light mode */
body.dark-mode .blueprint-grid {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.15) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.15) 1px, transparent 1px),
    linear-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
}

/* Box borders stay black in light mode */
body.dark-mode .blueprint-box {
  border-color: rgba(0, 0, 0, 0.25);
}

body.dark-mode .blueprint-box.box-4 {
  border-color: rgba(0, 0, 0, 0.2);
}
</style>
