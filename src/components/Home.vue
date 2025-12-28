<template>
  <div>
    <div class="intro">
      <cv-breadcrumb :style="breadCrumbStyle" class="home-page-text">
        The Quiet Pages is a digital sketchbook: a space for experimenting with web components,
        patterns, and interactions without the pressure of a polished final product. Each page is a
        small, quiet experiment a way to learn, refine, and shape before they find a louder stage.
      </cv-breadcrumb>
    </div>
  </div>
  <div>
    <div class="fold">
      <cv-breadcrumb :style="breadCrumbStyle" class="home-page-text"> 001 - Menu </cv-breadcrumb>
      <cv-tag @remove="onRemove" label="Timing Studies and Motion" kind="blue" />
      <cv-tag @remove="onRemove" label="Tone Adjustments and Negative Space" kind="green" />
    </div>
  </div>
  <div class="scroll">
    <cv-breadcrumb :style="breadCrumbStyle" class="home-page-text">
      [Scroll down to explore more experiments]
    </cv-breadcrumb>
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

export default {
  name: 'HomeComponent',
  components: {
    CvBreadcrumb,
    CvTag,
    CvButtonSet,
    CvButton,
    CvDatePicker,
    CvCodeSnippet,
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
  },
  methods: {
    onRemove() {
      // Handle tag removal if needed
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
}

.scroll {
  position: absolute;
  bottom: 50px;
  left: 50px;
  width: 25%;
}

.fold {
  position: absolute;
  top: 50%;
  right: 50px;
  transform: translateY(-50%);
  width: 25%;

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
