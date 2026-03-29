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

      <section class="section-block">
        <h2 class="section-title">The Power of Negative Space</h2>
        <cv-breadcrumb :class="['support-copy', subtleClass]">
          Compare these three layouts. Notice how spacing changes readability, pace, and hierarchy.
        </cv-breadcrumb>

        <div class="toggle-row">
          <button
            v-for="option in exampleOrder"
            :key="option"
            :class="['toggle-button', activeExample === option ? 'active' : '', buttonClass]"
            @click="activeExample = option"
          >
            {{ optionLabels[option] }}
          </button>
        </div>

        <div :class="['example-card', panelClass]">
          <div :class="exampleSpacingClass">
            <h3 :class="exampleTitleClass">Product Title Here</h3>
            <cv-breadcrumb :class="['example-copy', subtleClass]">
              {{ currentExample.description }}
            </cv-breadcrumb>

            <div :class="tagRowClass">
              <span v-for="tag in ['Tag 1', 'Tag 2']" :key="tag" :class="['tag-chip', chipClass]">
                {{ tag }}
              </span>
            </div>

            <button class="cta-button">Action Button</button>
          </div>
        </div>
      </section>

      <section class="section-block">
        <h2 class="section-title">Combining Tone + Space</h2>
        <cv-breadcrumb :class="['support-copy', subtleClass]">
          When tonal shifts and spacing work together, the interface creates hierarchy without
          relying on heavy borders or decoration.
        </cv-breadcrumb>

        <div :class="['composition-shell', panelClass]">
          <div :class="['primary-content', shellClass]">
            <h4 :class="['subheading', headingClass]">Primary Content Area</h4>
            <cv-breadcrumb :class="['support-copy', subtleClass]">
              Notice how the background tone shifts create separation between sections, while the
              padding creates breathing room within each section.
            </cv-breadcrumb>
          </div>

          <div class="secondary-grid">
            <div
              v-for="card in secondaryCards"
              :key="card.title"
              :class="['secondary-card', chipClass]"
            >
              <h5 :class="['minor-heading', headingClass]">{{ card.title }}</h5>
              <cv-breadcrumb :class="['minor-copy', subtleClass]">{{ card.copy }}</cv-breadcrumb>
            </div>
          </div>
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
  data() {
    return {
      activeExample: 'balanced',
      optionLabels: {
        cramped: 'Cramped',
        balanced: 'Balanced',
        spacious: 'Spacious',
      },
      exampleOrder: ['cramped', 'balanced', 'spacious'],
      exampleConfigs: {
        cramped: {
          description:
            'This version minimizes spacing. Elements crowd each other, the text pushes against the container, and scanning becomes harder.',
          spacingClass: 'example-spacing-cramped',
          titleClass: 'title-cramped',
          tagRowClass: 'tags-cramped',
        },
        balanced: {
          description:
            'This version uses measured spacing. There is enough room for the eye to rest, while the content still feels efficient and structured.',
          spacingClass: 'example-spacing-balanced',
          titleClass: 'title-balanced',
          tagRowClass: 'tags-balanced',
        },
        spacious: {
          description:
            'This version uses generous spacing. It feels premium and deliberate, but it also consumes more screen space and reduces density.',
          spacingClass: 'example-spacing-spacious',
          titleClass: 'title-spacious',
          tagRowClass: 'tags-spacious',
        },
      },
      secondaryCards: [
        {
          title: 'Secondary Card',
          copy: 'Subtle tone shift',
        },
        {
          title: 'Secondary Card',
          copy: 'Same hierarchy level',
        },
      ],
    }
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
    subtleClass() {
      return this.isSwitchOn ? 'text-subtle active' : 'text-subtle'
    },
    toneTextClass() {
      return this.isSwitchOn ? 'tone-page-text active' : 'tone-page-text'
    },
    panelClass() {
      return this.isSwitchOn ? 'panel-surface active' : 'panel-surface'
    },
    shellClass() {
      return this.isSwitchOn ? 'shell-surface active' : 'shell-surface'
    },
    chipClass() {
      return this.isSwitchOn ? 'chip-surface active' : 'chip-surface'
    },
    buttonClass() {
      return this.isSwitchOn ? 'toggle-surface active' : 'toggle-surface'
    },
    currentExample() {
      return this.exampleConfigs[this.activeExample]
    },
    exampleSpacingClass() {
      return this.currentExample.spacingClass
    },
    exampleTitleClass() {
      return this.currentExample.titleClass
    },
    tagRowClass() {
      return this.currentExample.tagRowClass
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

.subheading {
  font-size: 1.25rem;
  margin: 0 0 1.5rem;
}

.minor-heading {
  font-size: 1rem;
  margin: 0 0 0.75rem;
}

.text-primary {
  color: var(--cds-text-primary);
  transition: color 180ms ease;
}

.text-subtle,
.tone-page-text {
  color: var(--cds-text-secondary);
  transition: color 180ms ease;
}

.intro-copy,
.support-copy,
.example-copy,
.minor-copy,
.tone-label,
.tone-meta,
.tag-chip,
.toggle-button,
.cta-button {
  font-family: 'IBM Plex Mono', monospace;
}

.intro-copy {
  display: block;
  max-width: 640px;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 3rem;
}

.support-copy {
  display: block;
  max-width: 640px;
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 2rem;
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

.toggle-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.toggle-button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: var(--cds-layer-01);
  color: var(--cds-text-primary);
  transition:
    background-color 180ms ease,
    color 180ms ease;
}

.toggle-button.active {
  background: var(--cds-accent);
  color: #ffffff;
}

.example-card,
.composition-shell {
  max-width: 800px;
  background: var(--cds-layer-01);
  border: 1px solid var(--cds-border-subtle);
  border-radius: 4px;
  transition:
    background-color 180ms ease,
    border-color 180ms ease;
}

.example-card {
  max-width: 640px;
}

.example-spacing-cramped {
  padding: 1rem;
}

.example-spacing-balanced {
  padding: 2rem;
}

.example-spacing-spacious {
  padding: 3rem;
}

.title-cramped {
  font-size: 1.25rem;
  margin: 0 0 0.25rem;
}

.title-balanced {
  font-size: 1.5rem;
  margin: 0 0 1rem;
}

.title-spacious {
  font-size: 1.75rem;
  margin: 0 0 1.5rem;
}

.example-copy {
  display: block;
}

.example-spacing-cramped .example-copy {
  font-size: 0.75rem;
  line-height: 1.3;
  margin-bottom: 0.5rem;
}

.example-spacing-balanced .example-copy {
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.example-spacing-spacious .example-copy {
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.tags-cramped {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.tags-balanced {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.tags-spacious {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.tag-chip,
.secondary-card {
  background: var(--cds-layer-02);
  border-radius: 4px;
}

.tags-cramped .tag-chip {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}

.tags-balanced .tag-chip {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.tags-spacious .tag-chip {
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
}

.cta-button {
  width: 100%;
  border: none;
  border-radius: 4px;
  background: var(--cds-accent);
  color: #ffffff;
  cursor: pointer;
}

.example-spacing-cramped .cta-button {
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
}

.example-spacing-balanced .cta-button {
  padding: 0.875rem 1.5rem;
  font-size: 0.875rem;
}

.example-spacing-spacious .cta-button {
  padding: 1rem 2rem;
  font-size: 1rem;
}

.composition-shell {
  padding: 3rem;
}

.primary-content {
  background: var(--cds-background);
  padding: 2.5rem;
  border-radius: 4px;
  margin-bottom: 2rem;
}

.secondary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.secondary-card {
  padding: 1.5rem;
}

.minor-copy {
  display: block;
  font-size: 0.75rem;
  line-height: 1.5;
}

@media (max-width: 640px) {
  .page-content {
    padding: 4rem 1rem 2rem;
  }

  .composition-shell {
    padding: 1.5rem;
  }

  .primary-content {
    padding: 1.5rem;
  }
}
</style>
