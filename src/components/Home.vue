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
  <div class="personality-buttons">
    <div>
      <cv-breadcrumb :style="breadCrumbStyle">
        Transform is subtle enough; any more feels jumpy.
      </cv-breadcrumb>
      <PersonalityButton />
    </div>
  </div>
  <div class="breathing-date">
    <div>
      <cv-breadcrumb :style="breadCrumbStyle">
        A subtle date-picker study No validation, no urgency — just tone, spacing, and state.
      </cv-breadcrumb>
      <DateRangeStudy :isSwitchOn="isSwitchOn" />
    </div>
  </div>
  <div class="field-study">
    <div>
      <cv-breadcrumb :style="breadCrumbStyle">
        Carbon input, but you’re studying timing and emphasis, not validation logic.
      </cv-breadcrumb>
      <FieldStudy />
    </div>
  </div>
</template>

<script>
import { CvBreadcrumb, CvTag, CvButtonSet, CvButton } from '@carbon/vue'
import PersonalityButton from './Buttons.vue'
import DateRangeStudy from './Date.vue'
import FieldStudy from './Forms.vue'

export default {
  name: 'HomeComponent',
  components: {
    CvBreadcrumb,
    CvTag,
    CvButtonSet,
    CvButton,
    PersonalityButton,
    DateRangeStudy,
    FieldStudy,
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

.personality-buttons {
  display: flex;
  flex-direction: column;
  font-family: 'IBM Plex Sans';
  position: absolute;
  top: 400px;
  left: 50px;
  width: 25%;
  font-weight: bold;
  z-index: 10;
  transition: margin-left 0.3s ease;
  color: inherit;
}

.personality-buttons .cv-breadcrumb {
  margin-bottom: 20px;
}

.breathing-date {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 500px;
  width: 25%;
  z-index: 10;
  transition: margin-left 0.3s ease;
}

.field-study {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 150px;
  left: 900px;
  width: 25%;
  z-index: 10;
  transition: margin-left 0.3s ease;
}
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
