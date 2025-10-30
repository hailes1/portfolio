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
  <div class="chart-container" :style="breadCrumbStyle">
    <!-- <cv-tile
      :expanded="isTileExpanded"
      kind="expandable"
      @click="toggleTile"
      :style="tileBackgroundStyle"
    > -->
    <!-- Charting -->
    <!-- <LineChart :isSwitchOn="isSwitchOn" /> -->
    <!-- </cv-tile> -->
  </div>
  <!-- <div class="quiet-footer" :style="breadCrumbStyle">
    <h1 class="quiet-title quiet-title--footer">QUIET PAGES</h1>
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
import {
  CvBreadcrumb,
  CvBreadcrumbItem,
  CvTag,
  CvTile,
  CvContentSwitcherContent,
  CvButtonSet,
  CvButton,
  CvContentSwitcher,
  CvContentSwitcherButton,
} from '@carbon/vue'
import LineChart from './Charts/LineChart/LineChart.vue'

export default {
  name: 'HomeComponent',
  components: {
    CvBreadcrumb,
    CvBreadcrumbItem,
    CvTile,
    CvTag,
    LineChart,
    CvButtonSet,
    CvButton,
    CvContentSwitcherContent,
    CvContentSwitcher,
    CvContentSwitcherButton,
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
    tileBackgroundStyle() {
      return {
        backgroundColor: !this.isSwitchOn ? '#000000' : '#d3d3d3',
      }
    },
    tileStyle() {
      return {
        backgroundColor: '#d2b04c',
        color: '#1f1f1f',
      }
    },
  },
  methods: {
    toggleTile() {
      this.isTileExpanded = !this.isTileExpanded
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
  width: 50%;
  height: calc(100vh - 100px);
}

.chart-container cv-tile {
  width: 100%; /* Full width of the container */
  height: 100%; /* Full height of the container */
  padding: 10px 0 0 10px; /* 10px left and top padding */
  box-sizing: border-box; /* Ensure padding does not affect the width and height calculation */
}

.cv-content-switcher-button:hover {
  background-color: #0000ff; /* Ensure consistent color for active, focus, and hover states */
  color: #ffffff; /* Optional: Set text to white for contrast */
  border-color: #0000ff; /* Ensures border doesn't cause color changes */
  outline: none; /* Removes default browser focus outline if that's an issue */
  transition: background-color 0.3s ease; /* Smooth transition */
}
.intro-container .cv-tag {
  margin-top: 10px;
}

.quiet-subfooter {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0; /* sits below the footer title */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
