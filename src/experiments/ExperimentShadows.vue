<template>
  <div :class="surfaceClass" class="experiment-shadows">
    <div class="page-content">
      <h1 :class="headingClass">004 - Shadows as Hierarchy (not decoration)</h1>
      <cv-breadcrumb :class="['intro-copy', bodyClass]">
        Shadows aren't just visual flair—they communicate spatial relationships, importance, and
        interaction states. Each level of shadow serves a purpose in the visual hierarchy.
      </cv-breadcrumb>

      <div class="shadow-grid">
        <div
          v-for="(item, index) in shadowLevels"
          :key="index"
          :class="['shadow-card', cardClass]"
          :style="{ boxShadow: item.shadow }"
          @mouseenter="onCardEnter($event)"
          @mouseleave="onCardLeave($event, item.shadow)"
        >
          <h3 class="card-level">{{ item.level }}</h3>
          <cv-breadcrumb :class="['card-description', subtleClass]">{{
            item.description
          }}</cv-breadcrumb>
          <div :class="['card-tag', tagClass]">Use: {{ item.hierarchy }}</div>
        </div>
      </div>

      <div :class="['practical-section', practicalClass]">
        <h3 :class="headingClass">Practical Example</h3>
        <div class="practical-layers">
          <div
            v-for="layer in practicalLayers"
            :key="layer.label"
            :class="['layer-card', cardClass]"
            :style="{ boxShadow: layer.shadow }"
          >
            <cv-breadcrumb :class="bodyClass">{{ layer.label }}</cv-breadcrumb>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CvBreadcrumb } from '@carbon/vue'

export default {
  name: 'ExperimentShadows',
  components: { CvBreadcrumb },
  props: {
    isSwitchOn: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    surfaceClass() {
      return this.isSwitchOn ? 'experiment-shadows active' : 'experiment-shadows'
    },
    headingClass() {
      return this.isSwitchOn ? 'text-primary active' : 'text-primary'
    },
    bodyClass() {
      return this.isSwitchOn ? 'text-primary active' : 'text-primary'
    },
    subtleClass() {
      return this.isSwitchOn ? 'text-subtle active' : 'text-subtle'
    },
    cardClass() {
      return this.isSwitchOn ? 'card active' : 'card'
    },
    tagClass() {
      return this.isSwitchOn ? 'card-tag active' : 'card-tag'
    },
    practicalClass() {
      return this.isSwitchOn ? 'practical-bg active' : 'practical-bg'
    },
  },
  data() {
    return {
      shadowLevels: [
        {
          level: 'Level 1',
          description: 'Subtle elevation',
          shadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
          hierarchy: 'Base content',
        },
        {
          level: 'Level 2',
          description: 'Card surfaces',
          shadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
          hierarchy: 'Interactive elements',
        },
        {
          level: 'Level 3',
          description: 'Floating panels',
          shadow: '0 8px 16px rgba(0, 0, 0, 0.18)',
          hierarchy: 'Dropdowns & menus',
        },
        {
          level: 'Level 4',
          description: 'Modal overlays',
          shadow: '0 16px 32px rgba(0, 0, 0, 0.24)',
          hierarchy: 'Critical focus',
        },
      ],
      practicalLayers: [
        { label: 'Base layer', shadow: '0 1px 3px rgba(0, 0, 0, 0.12)' },
        { label: 'Elevated layer', shadow: '0 8px 16px rgba(0, 0, 0, 0.18)' },
        { label: 'Floating layer', shadow: '0 16px 32px rgba(0, 0, 0, 0.24)' },
      ],
    }
  },
  methods: {
    onCardEnter(e) {
      e.currentTarget.style.transform = 'translateY(-4px)'
      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)'
    },
    onCardLeave(e, originalShadow) {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = originalShadow
    },
  },
}
</script>

<style scoped lang="scss">
// Carbon token values scoped to this component
.experiment-shadows {
  // g100 (dark) defaults
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
  background-color: var(--cds-background);
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 32px 32px;
  transition:
    background-color 180ms ease,
    color 180ms ease;
}

// white (light) overrides
.experiment-shadows.active {
  --cds-background: #d3d3d3;
  --cds-layer-01: #f4f4f4;
  --cds-layer-02: #ffffff;
  --cds-text-primary: #161616;
  --cds-text-secondary: #525252;
  --cds-link-primary: #0f62fe;

  background-image:
    linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
}

.page-content {
  padding: 4rem 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin: 0 0 1rem;
}

h3 {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  margin: 0 0 1.5rem;
}

.text-primary {
  color: var(--cds-text-primary);
  transition: color 180ms ease;
}

.text-subtle {
  color: var(--cds-text-secondary);
  transition: color 180ms ease;
}

.intro-copy {
  display: block;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 1rem;
  line-height: 1.5;
  max-width: 640px;
  margin-bottom: 3rem;
}

.shadow-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  margin-top: 1rem;
}

.card {
  background-color: var(--cds-layer-01);
  padding: 2rem;
  border-radius: 4px;
  transition:
    transform 200ms ease,
    box-shadow 200ms ease,
    background-color 180ms ease;
  cursor: pointer;
}

.card-level {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.25rem;
  color: var(--cds-link-primary);
  margin-bottom: 0.5rem;
}

.card-description {
  display: block;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.card-tag {
  font-size: 0.75rem;
  font-family: 'IBM Plex Mono', monospace;
  color: var(--cds-text-primary);
  padding: 0.5rem;
  background-color: var(--cds-layer-02);
  border-radius: 2px;
  margin-top: 1rem;
  transition:
    background-color 180ms ease,
    color 180ms ease;
}

.practical-section {
  margin-top: 4rem;
  padding: 3rem;
  border-radius: 4px;
  background-color: var(--cds-layer-01);
  transition: background-color 180ms ease;
}

.practical-layers {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  flex-wrap: wrap;
}

.layer-card {
  background-color: var(--cds-layer-02);
  padding: 1.5rem;
  border-radius: 4px;
  flex: 1;
  min-width: 200px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.875rem;
  transition:
    background-color 180ms ease,
    box-shadow 200ms ease;
}
</style>
