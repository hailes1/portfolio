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
    <cv-tile
      :expanded="isTileExpanded"
      kind="expandable"
      @click="toggleTile"
      :style="tileBackgroundStyle"
    >
      Welcome to Our Interactive Space
      <LineChart :isSwitchOn="isSwitchOn" />
    </cv-tile>
  </div>
</template>

<script>
import { CvBreadcrumb, CvBreadcrumbItem, CvTag, CvTile } from '@carbon/vue'
import LineChart from './Charts/LineChart/LineChart.vue'

export default {
  name: 'HomeComponent',
  components: {
    CvBreadcrumb,
    CvBreadcrumbItem,
    CvTile,
    CvTag,
    LineChart,
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

.chart-container {
  position: absolute;
  top: 100px;
  right: 50px;
  width: 50%;
  height: calc(100vh - 100px);
}

.chart-container cv-tile {
  width: 33.33%; /* A third of the width of the container */
  height: 100%;
  padding: 10px 0 0 10px; /* 10px left and top padding */
  box-sizing: border-box; /* Ensure padding does not affect the width and height calculation */
}

.intro-container .cv-tag {
  margin-top: 10px;
}
</style>
