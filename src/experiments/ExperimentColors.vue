<template>
  <div :class="surfaceClass" class="experiment-colors">
    <div class="page-content">
      <h1 :class="headingClass">005 - Color Palette Exploration</h1>
      <cv-breadcrumb :class="['intro-copy', subtleClass]">
        This experiment plans to move beyond picking colors to defining behavior. Colors should communicate state, intent, and hierarchy. They should adapt to context and maintain consistency
        across light and dark modes.
      </cv-breadcrumb>

      <!-- Semantic Colors -->
      <section class="section-block">
        <h2 class="section-title">Semantic Colors</h2>
        <cv-breadcrumb :class="['support-copy', subtleClass]">
          Colors should convey meaning, not just aesthetics. Notice how these adapt between light and dark themes while maintaining their semantic intent.
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

      <!-- Dynamic Theming -->
      <section class="section-block">
        <h2 class="section-title">Dynamic Theming</h2>
        <cv-breadcrumb :class="['support-copy', subtleClass]">
          User-controlled theming. Adjust the hue and saturation to generate a complete
          color system that maintains proper contrast and hierarchy.
        </cv-breadcrumb>

        <div class="dynamic-panel" :style="panelBgStyle">
          <!-- Controls -->
          <div class="controls">
            <div class="control-row">
              <label class="control-label" :style="{ color: isDark ? '#f4f4f4' : '#161616' }">
                Hue: {{ customHue }}°
              </label>
              <input
                type="range"
                min="0"
                max="360"
                v-model.number="customHue"
                class="range-input"
              />
            </div>
            <div class="control-row">
              <label class="control-label" :style="{ color: isDark ? '#f4f4f4' : '#161616' }">
                Saturation: {{ customSaturation }}%
              </label>
              <input
                type="range"
                min="20"
                max="100"
                v-model.number="customSaturation"
                class="range-input"
              />
            </div>
          </div>

          <!-- Live Preview -->
          <div :style="{ backgroundColor: currentTheme.background, padding: '2rem', borderRadius: '4px', transition: 'all 0.3s ease' }">
            <div :style="{ backgroundColor: currentTheme.surface, padding: '2rem', borderRadius: '4px', marginBottom: '1.5rem' }">
              <h3 :style="{ fontFamily: '\'IBM Plex Sans\', sans-serif', fontSize: '1.5rem', color: currentTheme.text, marginBottom: '1rem' }">
                Custom Themed Interface
              </h3>
              <cv-breadcrumb :style="{ fontFamily: '\'IBM Plex Mono\', monospace', fontSize: '0.875rem', color: currentTheme.text, opacity: 0.7, marginBottom: '1.5rem', lineHeight: '1.6' }">
                This entire section adapts to your custom theme settings. Notice how
                all colors are generated from the base hue and saturation, maintaining
                visual consistency.
              </cv-breadcrumb>
              <div class="theme-btn-row">
                <cv-button
                  class="theme-btn"
                  :style="primaryBtnStyle"
                  @mouseenter="(e) => { e.currentTarget.style.backgroundColor = currentTheme.primaryHover }"
                  @mouseleave="(e) => { e.currentTarget.style.backgroundColor = currentTheme.primary }"
                >
                  Primary Action
              </cv-button>
                <cv-button class="theme-btn" :style="secondaryBtnStyle">
                  Secondary Action
                </cv-button>
              </div>
            </div>
          </div>
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
      customHue: 220,
      customSaturation: 80,
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
    subtleClass() {
      return this.isSwitchOn ? 'text-subtle active' : 'text-subtle'
    },
    panelBgStyle() {
      return {
        backgroundColor: this.isDark ? '#262626' : '#f4f4f4',
        borderRadius: '4px',
        padding: '2rem',
        maxWidth: '900px',
      }
    },
    customTheme() {
      const h = this.customHue
      const s = this.customSaturation
      return {
        light: {
          primary: `hsl(${h}, ${s}%, 50%)`,
          primaryHover: `hsl(${h}, ${s}%, 40%)`,
          secondary: `hsl(${h}, ${s * 0.6}%, 70%)`,
          background: `hsl(${h}, ${s * 0.2}%, 98%)`,
          surface: `hsl(${h}, ${s * 0.3}%, 95%)`,
          text: `hsl(${h}, 10%, 10%)`,
        },
        dark: {
          primary: `hsl(${h}, ${s * 0.9}%, 55%)`,
          primaryHover: `hsl(${h}, ${s}%, 50%)`,
          secondary: `hsl(${h}, ${s * 0.5}%, 35%)`,
          background: `hsl(${h}, ${s * 0.15}%, 10%)`,
          surface: `hsl(${h}, ${s * 0.2}%, 15%)`,
          text: `hsl(${h}, 10%, 95%)`,
        },
      }
    },
    currentTheme() {
      return this.isDark ? this.customTheme.dark : this.customTheme.light
    },
    primaryBtnStyle() {
      return {
        backgroundColor: this.currentTheme.primary,
        color: this.isDark ? '#161616' : '#ffffff',
        border: 'none',
        padding: '0.75rem 1.5rem',
        borderRadius: '4px',
        fontFamily: '\'IBM Plex Mono\', monospace',
        fontSize: '0.875rem',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
      }
    },
    secondaryBtnStyle() {
      return {
        backgroundColor: this.currentTheme.secondary,
        color: this.currentTheme.text,
        border: 'none',
        padding: '0.75rem 1.5rem',
        borderRadius: '4px',
        fontFamily: '\'IBM Plex Mono\', monospace',
        fontSize: '0.875rem',
        cursor: 'pointer',
      }
    },
    colorSwatches() {
      return [
        { label: 'Primary', color: this.currentTheme.primary },
        { label: 'Secondary', color: this.currentTheme.secondary },
        { label: 'Background', color: this.currentTheme.background },
        { label: 'Surface', color: this.currentTheme.surface },
      ]
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

// Dynamic Theming
.dynamic-panel {
  margin-bottom: 0;
}

.controls {
  margin-bottom: 2rem;
}

.control-row {
  margin-bottom: 1.5rem;
}

.control-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.875rem;
  display: block;
  margin-bottom: 0.5rem;
}

.range-input {
  width: 100%;
  max-width: 400px;
}

.theme-btn-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.swatch-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 0.75rem;
}

.swatch-item {
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

.text-subtle {
  color: #8d8d8d;

  &.active {
    color: #525252;
  }
}
</style>
