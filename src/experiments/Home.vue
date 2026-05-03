<template>
  <div>
    <div class="intro">
      <cv-breadcrumb :class="breadcrumbClass">
        The Quiet Pages is a digital sketchbook: a space for experimenting with web components,
        patterns, and interactions without the pressure of a polished final product. Each page is a
        small, quiet experiment a way to learn, refine, and shape before they find a louder stage.
      </cv-breadcrumb>
    </div>
  </div>
  <div>
    <div class="menu">
      <cv-button
        @click="navigateTo('/charting')"
        aria-label="button story"
        default="sm"
        size="sm"
      >
        001 - Charts
      </cv-button>
      <cv-button
        @click="navigateTo('/experiment-tone')"
        aria-label="button story"
        default="sm"
        size="sm"
      >
        002 - Tone Adjustments and Negative Space</cv-button
      >
      <cv-button
        @click="navigateTo('/experiment-scroll')"
        aria-label="button story"
        default="sm"
        size="sm"
      >
        003 - Scroll as Narrative Motion</cv-button
      >
      <!-- <cv-button
        @click="navigateTo('/experiment-shadows')"
        aria-label="button story"
        default="sm"
        size="sm"
      >
        004 - Shadows as Hierarchy (not decoration)</cv-button
      > -->
      <cv-button
        @click="navigateTo('/color-palette')"
        aria-label="button story"
        default="sm"
        size="sm"
      >
        004 - Color Palette Exploration</cv-button
      >
      <cv-button
        @click="navigateTo('/state-transitions')"
        aria-label="button story"
        default="sm"
        size="sm"
      >
        005 - State Transitions (continuity over jumps)</cv-button
      >

      <!-- <cv-tag @remove="onRemove" label="Timing Studies and Motion" kind="blue" /> -->
      <!-- <cv-tag @remove="onRemove" label="Tone Adjustments and Negative Space" kind="green" /> -->
    </div>
  </div>
  <div class="scroll">
    <cv-breadcrumb :class="breadcrumbClass">
      [Click on the buttons to explore more experiments]
    </cv-breadcrumb>
    <a
      href="https://open.spotify.com/album/47TQxiorHSmf0UG6MAV8MD"
      target="_blank"
    >
      <CdSpinner
        :src="nowPlayingSrc"
        class="now-playing"
        :size="150"
        :speed="10"
        :paused="false"
      />
    </a>
  </div>
</template>

<script>
import {
  CvBreadcrumb,
  CvTag,
  CvButtonSet,
  CvButton,
  CvDatePicker,
  CvCodeSnippet,
  CvIconButton,
} from '@carbon/vue'
import CdSpinner from '../components/CdSpinner.vue'
import asalafiCover from '@/assets/images/asalafi.jpeg'
import { Bee20 } from '@carbon/icons-vue'
import { ChartEvaluation20 } from '@carbon/icons-vue'

export default {
  name: 'HomeComponent',
  components: {
    CvBreadcrumb,
    CvTag,
    CvButtonSet,
    CvButton,
    CvDatePicker,
    CvCodeSnippet,
    Bee20,
    ChartEvaluation20,
    CvIconButton,
    CdSpinner,
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
      nowPlayingSrc: asalafiCover,
    }
  },
  computed: {
    breadcrumbClass() {
      return this.isSwitchOn ? 'home-page-text active' : 'home-page-text'
    },
  },
  methods: {
    onRemove() {
      // Handle tag removal if needed
    },
    navigateTo(route) {
      this.$router.push(route)
    },
  },
}
</script>

<style scoped lang="scss">
@import 'carbon-components/scss/globals/scss/styles.scss';

.home {
  /* Style for the component wrapper to detect hover */
  width: 100%;
  height: 100%;
  position: relative;
}

.intro {
  position: absolute;
  top: 100px;
  left: 50px;
  width: 30%;
}

.home-page-text {
  font-family:
    'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier', 'Monospace';
  font-size: 0.55rem;
  font-weight: 400;
  line-height: 1.33333;
  letter-spacing: 0.32px;
  color: #d3d3d3;

  &.active {
    color: #000000;
  }
}

.scroll {
  position: absolute;
  bottom: 50px;
  left: 50px;
  width: 25%;
}

.now-playing {
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 10;
}

.menu {
  position: absolute;
  top: 30%;
  right: 50px;
  transform: translateY(-50%);
  width: 25%;

  .label {
    padding-left: 10px;
  }
  .cv-button {
    margin-bottom: 10px; // Adds spacing between buttons

    &:hover {
      background-color: darken($color: #d3d3d3, $amount: 10%);
      border-color: darken($color: #ffffff, $amount: 10%);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }

  .cv-breadcrumb {
    margin-bottom: 20px; // Adds spacing between the breadcrumb and the buttons
  }

  .cv-tag {
    cursor: pointer;

    &:hover {
      background-color: darken($color: #ffffff, $amount: 10%);
      border-color: darken($color: #dddddd, $amount: 10%);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
