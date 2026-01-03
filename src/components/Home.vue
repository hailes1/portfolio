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
      <cv-button aria-label="button story" @click="navigateTo('/motion')" default="sm" size="sm">
        001 - Timing Studies and Motion</cv-button
      >
      <cv-button @click="onClick" aria-label="button story" default="sm" size="sm">
        002 - Tone Adjustments and Negative Space</cv-button
      >
      <cv-button @click="onClick" aria-label="button story" default="sm" size="sm">
        003 - Scroll as Narrative Motion</cv-button
      >
      <cv-button @click="onClick" aria-label="button story" default="sm" size="sm">
        004 - Shadows as Hierarchy (not decoration)</cv-button
      >
      <!-- <cv-tag @remove="onRemove" label="Timing Studies and Motion" kind="blue" /> -->
      <!-- <cv-tag @remove="onRemove" label="Tone Adjustments and Negative Space" kind="green" /> -->
    </div>
  </div>
  <div class="scroll">
    <cv-breadcrumb :class="breadcrumbClass">
      [Hover on the buttons to explore more experiments]
    </cv-breadcrumb>
    <a
      href="https://open.spotify.com/album/7f077HG1g8MBMhC3eBD7fC?si=3s_5ge0eQo-A6WtJgdGlsA"
      target="_blank"
    >
      <CdSpinner
        src="src/assets/images/bahir.jpg"
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
} from '@carbon/vue'
import CdSpinner from './CdSpinner.vue'

export default {
  name: 'HomeComponent',
  components: {
    CvBreadcrumb,
    CvTag,
    CvButtonSet,
    CvButton,
    CvDatePicker,
    CvCodeSnippet,
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
