<template>
  <div :class="surfaceClass" class="experiment-colors">
    <div class="page-content">
      <h1 :class="headingClass">005 - Color Palette Exploration</h1>
      <cv-breadcrumb :class="['intro-copy', headingClass]">
        This experiment plans to move beyond picking colors. Colors should communicate state, intent, and hierarchy. They should adapt to context and maintain consistency
        across light and dark modes.
      </cv-breadcrumb>

      <!-- Semantic Colors -->
      <section class="section-block">
        <h2 class="section-title">Semantic Colors</h2>
        <cv-breadcrumb :class="['support-copy', headingClass]">
          Colors should convey meaning, not just aesthetics. Notice how these adapt between light and dark themes while maintaining their semantic intent.
          Why do we attribute meaning to certain colors? How can we ensure our color choices are inclusive and accessible?
        </cv-breadcrumb>
        <div class="semantic-grid">
          <cv-button
            v-for="(colors, type) in semanticColors"
            :key="type"
            class="semantic-btn"
            :style="getSemanticStyle(type)"
            @mouseenter="(e) => onSemanticEnter(e, type)"
            @mouseleave="(e) => onSemanticLeave(e, type)"
          >
            <span :style="{ fontFamily: '\'IBM Plex Mono\', monospace', fontSize: '0.85rem', color: 'inherit', opacity: 0.85 }">{{ type }}</span>
          </cv-button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { CvBreadcrumb, CvButton } from '@carbon/vue'
export default {
  name: 'ExperimentColors',
  props: {
    isSwitchOn: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    CvBreadcrumb,
    CvButton,
  },
  data() {
    return {
      semanticColors: {
        success: {
          light: { bg: '#24a148', fg: '#ffffff', hover: '#198038' },
          dark: { bg: '#24a148', fg: '#ffffff', hover: '#198038' },
        },
        warning: {
          light: { bg: '#f1c21b', fg: '#161616', hover: '#d2a106' },
          dark: { bg: '#f1c21b', fg: '#161616', hover: '#d2a106' },
        },
        error: {
          light: { bg: '#da1e28', fg: '#ffffff', hover: '#ba1b23' },
          dark: { bg: '#da1e28', fg: '#ffffff', hover: '#ba1b23' },
        },
        info: {
          light: { bg: '#0043ce', fg: '#ffffff', hover: '#0353e9' },
          dark: { bg: '#0043ce', fg: '#ffffff', hover: '#0353e9' },
        },
        neutral: {
          light: { bg: '#8d8d8d', fg: '#161616', hover: '#6f6f6f' },
          dark: { bg: '#8d8d8d', fg: '#161616', hover: '#6f6f6f' },
        },
      },
    }
  },
  computed: {
    isDark() {
      return !this.isSwitchOn
    },
    surfaceClass() {
      return this.isSwitchOn ? 'experiment-colors active' : 'experiment-colors'
    },
    headingClass() {
      return this.isSwitchOn ? 'text-primary active' : 'text-primary'
    },
  },
  methods: {
    getSemanticStyle(type) {
      const colors = this.semanticColors[type]
      const current = this.isDark ? colors.dark : colors.light
      return {
        backgroundColor: current.bg,
        color: current.fg,
        border: 'none',
        borderRadius: '4px',
        padding: '1.5rem 1rem',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
      }
    },
    onSemanticEnter(e, type) {
      const colors = this.semanticColors[type]
      const current = this.isDark ? colors.dark : colors.light
      e.currentTarget.style.backgroundColor = current.hover
    },
    onSemanticLeave(e, type) {
      const colors = this.semanticColors[type]
      const current = this.isDark ? colors.dark : colors.light
      e.currentTarget.style.backgroundColor = current.bg
    },
  },
}
</script>

<style scoped lang="scss">
.experiment-colors {
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
  background-size: 32px 32px;
  transition:
    background-color 180ms ease,
    color 180ms ease;
}

// white (light) overrides
.experiment-colors.active {
  --cds-background: #d3d3d3;
  --cds-layer-01: #f4f4f4;
  --cds-layer-02: #ffffff;
  --cds-text-primary: #161616;
  --cds-text-secondary: #525252;
  --cds-link-primary: #0f62fe;
}

.page-content {
  padding: 4rem 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.intro-copy {
  display: block;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 1rem;
  line-height: 1.5;
  max-width: 640px;
  margin-bottom: 3rem;
}

.section-block {
  margin-bottom: 4rem;
}

.section-title {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #0f62fe;
}

.support-copy {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.875rem;
  margin-bottom: 2rem;
  max-width: 640px;
}

// Semantic Colors
.semantic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  max-width: 900px;
}

.semantic-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

// Theme utilities
.text-primary {
  color: #f4f4f4;

  &.active {
    color: #161616;
  }
}
</style>
