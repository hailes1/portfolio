<template>
  <div :class="surfaceClass" class="experiment-tone">
    <div class="page-content">
      <h1 :class="headingClass">002 - Tone Adjustments and Negative Space</h1>
      <cv-breadcrumb :class="['intro-copy', bodyClass]">
        Understanding how negative space and tonal variations create visual rhythm and hierarchy in
        interface design. Tone is not just color. It is contrast, spacing, and the relationship
        between elements.
      </cv-breadcrumb>

      <section class="section-block">
        <h2 class="section-title">Tonal Hierarchy System</h2>
        <div class="tone-grid">
          <article
            v-for="layer in toneLayers"
            :key="layer.label"
            :class="['tone-card', layer.surfaceClass, layer.accent ? 'accent-card' : '']"
          >
            <div :class="['tone-swatch', layer.swatchClass]"></div>
            <span :class="['tone-label', layer.accent ? 'accent-text' : 'text-primary']">
              {{ layer.label }}
            </span>
            <span :class="['tone-meta', layer.accent ? 'accent-meta' : 'text-subtle']">
              {{ layer.meta }}
            </span>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { CvBreadcrumb } from '@carbon/vue'

export default {
  name: 'ExperimentTone',
  components: {
    CvBreadcrumb,
  },
  props: {
    isSwitchOn: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    surfaceClass() {
      return this.isSwitchOn ? 'experiment-tone active' : 'experiment-tone'
    },
    headingClass() {
      return this.isSwitchOn ? 'text-primary active' : 'text-primary'
    },
    bodyClass() {
      return this.isSwitchOn ? 'text-primary active' : 'text-primary'
    },
    toneLayers() {
      return [
        {
          label: 'Background',
          meta: 'Base layer',
          surfaceClass: 'tone-background',
          swatchClass: 'swatch-background',
          accent: false,
        },
        {
          label: 'Surface',
          meta: 'Cards, panels',
          surfaceClass: 'tone-surface',
          swatchClass: 'swatch-surface',
          accent: false,
        },
        {
          label: 'Interactive',
          meta: 'Hover states',
          surfaceClass: 'tone-interactive',
          swatchClass: 'swatch-interactive',
          accent: false,
        },
        {
          label: 'Accent',
          meta: 'Primary actions',
          surfaceClass: 'tone-accent',
          swatchClass: 'swatch-accent',
          accent: true,
        },
      ]
    },
  },
}
</script>

<style scoped lang="scss">
.experiment-tone {
  --cds-background: #000000;
  --cds-layer-01: #262626;
  --cds-layer-02: #393939;
  --cds-layer-03: #525252;
  --cds-border-subtle: #393939;
  --cds-text-primary: #f4f4f4;
  --cds-text-secondary: #8d8d8d;
  --cds-link-primary: #78a9ff;
  --cds-accent: #0f62fe;
  --cds-accent-hover: #0353e9;

  position: fixed;
  inset: 0;
  overflow-y: auto;
  z-index: 10;
  transition:
    background-color 180ms ease,
    color 180ms ease;
}

.experiment-tone.active {
  --cds-background: #d3d3d3;
  --cds-layer-01: #f4f4f4;
  --cds-layer-02: #e0e0e0;
  --cds-layer-03: #c6c6c6;
  --cds-border-subtle: #e0e0e0;
  --cds-text-primary: #161616;
  --cds-text-secondary: #525252;
  --cds-link-primary: #0f62fe;
  --cds-accent: #0f62fe;
  --cds-accent-hover: #0353e9;
}

.page-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.section-block {
  margin-bottom: 4rem;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: 'IBM Plex Sans', sans-serif;
}

h1 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin: 0 0 1rem;
}

.section-title {
  font-size: 1.5rem;
  margin: 0 0 1.5rem;
  color: var(--cds-link-primary);
}

.text-primary {
  color: var(--cds-text-primary);
  transition: color 180ms ease;
}

.intro-copy,
.tone-label,
.tone-meta {
  font-family: 'IBM Plex Mono', monospace;
}

.intro-copy {
  display: block;
  max-width: 640px;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 3rem;
}

.tone-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0;
}

.tone-card {
  min-height: 220px;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--cds-border-subtle);
}

.tone-background {
  background: var(--cds-background);
}

.tone-surface {
  background: var(--cds-layer-01);
}

.tone-interactive {
  background: var(--cds-layer-02);
  border-color: var(--cds-layer-03);
}

.tone-accent {
  background: var(--cds-accent);
  border-color: var(--cds-accent-hover);
}

.tone-swatch {
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
  border: 2px solid var(--cds-layer-02);
}

.swatch-background {
  background: var(--cds-background);
}

.swatch-surface {
  background: var(--cds-layer-01);
}

.swatch-interactive {
  background: var(--cds-layer-02);
  border-color: var(--cds-layer-03);
}

.swatch-accent {
  background: var(--cds-accent);
  border-color: var(--cds-accent-hover);
}

.tone-label {
  font-size: 0.875rem;
}

.tone-meta {
  margin-top: 0.5rem;
  font-size: 0.75rem;
}

.accent-text {
  color: #ffffff;
}

.accent-meta {
  color: rgba(255, 255, 255, 0.72);
}

@media (max-width: 640px) {
  .page-content {
    padding: 4rem 1rem 2rem;
  }
}
</style>
