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
        <h2 class="section-title">Tonal Hierarchy in Data</h2>
        <cv-breadcrumb :class="['intro-copy', bodyClass]">
          Data tables use tonal hierarchy to establish visual structure and guide user attention. Background tones create the foundation, surface tones define distinct content areas,
          interactive tones provide feedback for user actions, and accent tones spotlight critical interactions. This layering of contrast and spacing transforms raw data into
          organized, scannable information. Notice how each tone serves a specific purpose while maintaining visual harmony across light and dark modes.
        </cv-breadcrumb>
        <cv-data-table
          class="tone-data-table"
          v-model:rows-selected="selectedRows"
          @sort="onSort"
          @update:rows-selected="onVmodel"
          @overflow-menu-click="onOverflowMenuClick"
          @row-expanded="onRowExpanded"
          @pagination="onPagination"
          :pagination="paginationOptions"
          :initialSearchValue="searchOpts"
          >
          <template #headings>
            <cv-data-table-heading id="sb-name" heading="Tone" name="name"/>
            <cv-data-table-heading id="sb-purpose" heading="Purpose" name="purpose"/>
            <cv-data-table-heading id="sb-usage" heading="Usage Context" />
            <cv-data-table-heading id="sb-light" heading="Light Mode" />
            <cv-data-table-heading id="sb-dark" heading="Dark Mode" />
          </template>
          <template #data>
            <cv-data-table-row v-for="row in originalTestData" :id="row.name" :key="row.name" :value="row.name">
              <cv-data-table-cell>{{row.name}}</cv-data-table-cell>
              <cv-data-table-cell>{{row.purpose}}</cv-data-table-cell>
              <cv-data-table-cell>{{row.usage}}</cv-data-table-cell>
              <cv-data-table-cell><span class="tone-preview" :style="{ backgroundColor: row.lightBg, color: '#000' }">{{ row.lightBg }}</span></cv-data-table-cell>
              <cv-data-table-cell><span class="tone-preview" :style="{ backgroundColor: row.darkBg, color: '#fff' }">{{ row.darkBg }}</span></cv-data-table-cell>
            </cv-data-table-row>
          </template>
        </cv-data-table>
      </section>
    </div>
  </div>
</template>

<script>
import { CvBreadcrumb, CvDataTable, CvDataTableHeading, CvDataTableRow, CvDataTableCell } from '@carbon/vue'

export default {
  name: 'ExperimentTone',
  components: {
    CvBreadcrumb,
    CvDataTable,
    CvDataTableHeading,
    CvDataTableRow,
    CvDataTableCell,
  },
  props: {
    isSwitchOn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedRows: [],
      searchOpts: '',
      originalTestData: [
        { name: 'Background', purpose: 'Base layer', usage: 'Primary canvas for entire interface', lightBg: '#d3d3d3', darkBg: '#000000' },
        { name: 'Surface', purpose: 'Cards, panels, containers', usage: 'Elevated content areas', lightBg: '#f4f4f4', darkBg: '#262626' },
        { name: 'Interactive', purpose: 'Hover states, focus indicators', usage: 'User interaction feedback', lightBg: '#e0e0e0', darkBg: '#393939' },
        { name: 'Accent', purpose: 'Primary actions, key elements', usage: 'Draw attention to important interactions', lightBg: '#0f62fe', darkBg: '#0f62fe' },
      ],
      paginationOptions: {
        pageSizesLabel: 'Tones per page:',
        pageNumberLabel: 'Tone page:',
        backwardText: 'Previous tone page',
        forwardText: 'Next tone page',
        pageSizes: [10, 20, 30],
        numberOfItems: 4,
        actualItemsOnPage: 4,
      },
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
  methods: {
    onVmodel(value) {
      this.selectedRows = value
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
  --tone-table-bg: #161616;
  --tone-table-head-bg: #262626;
  --tone-table-row-bg: #1f1f1f;
  --tone-table-row-alt-bg: #242424;
  --tone-table-row-hover-bg: #303030;
  --tone-table-border: #393939;
  --tone-table-text: #f4f4f4;
  --tone-table-head-text: #f4f4f4;
  --tone-pagination-bg: #262626;
  --tone-pagination-border: #393939;
  --tone-pagination-text: #f4f4f4;
  --tone-pagination-btn-bg: #303030;
  --tone-pagination-btn-hover-bg: #3a3a3a;

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
  --tone-table-bg: #f4f4f4;
  --tone-table-head-bg: #e8e8e8;
  --tone-table-row-bg: #ffffff;
  --tone-table-row-alt-bg: #f7f7f7;
  --tone-table-row-hover-bg: #ededed;
  --tone-table-border: #d0d0d0;
  --tone-table-text: #161616;
  --tone-table-head-text: #161616;
  --tone-pagination-bg: #e8e8e8;
  --tone-pagination-border: #d0d0d0;
  --tone-pagination-text: #161616;
  --tone-pagination-btn-bg: #ffffff;
  --tone-pagination-btn-hover-bg: #f2f2f2;
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

.tone-data-table {
  margin-top: 1rem;
}

.tone-data-table :deep(table),
.tone-data-table :deep(.cds--data-table),
.tone-data-table :deep(.bx--data-table) {
  background: var(--tone-table-bg);
  color: var(--tone-table-text);
}

.tone-data-table :deep(thead th),
.tone-data-table :deep(.cds--data-table thead th),
.tone-data-table :deep(.bx--data-table thead th) {
  background: var(--tone-table-head-bg);
  color: var(--tone-table-head-text);
  border-bottom: 1px solid var(--tone-table-border);
}

.tone-data-table :deep(tbody td),
.tone-data-table :deep(.cds--data-table tbody td),
.tone-data-table :deep(.bx--data-table tbody td) {
  background: var(--tone-table-row-bg);
  color: var(--tone-table-text);
  border-bottom: 1px solid var(--tone-table-border);
}

.tone-data-table :deep(tbody tr:nth-child(even) td),
.tone-data-table :deep(.cds--data-table tbody tr:nth-child(even) td),
.tone-data-table :deep(.bx--data-table tbody tr:nth-child(even) td) {
  background: var(--tone-table-row-alt-bg);
}

.tone-data-table :deep(tbody tr:hover td),
.tone-data-table :deep(.cds--data-table tbody tr:hover td),
.tone-data-table :deep(.bx--data-table tbody tr:hover td) {
  background: var(--tone-table-row-hover-bg);
}

.tone-data-table :deep(.cds--pagination),
.tone-data-table :deep(.bx--pagination) {
  background: var(--tone-pagination-bg);
  color: var(--tone-pagination-text);
  border-top: 1px solid var(--tone-pagination-border);
}

.tone-data-table :deep(.cds--pagination__left),
.tone-data-table :deep(.cds--pagination__right),
.tone-data-table :deep(.bx--pagination__left),
.tone-data-table :deep(.bx--pagination__right) {
  background: var(--tone-pagination-bg);
}

.tone-data-table :deep(.cds--pagination__text),
.tone-data-table :deep(.bx--pagination__text),
.tone-data-table :deep(.cds--select-input),
.tone-data-table :deep(.bx--select-input),
.tone-data-table :deep(.cds--select-option),
.tone-data-table :deep(.bx--select-option) {
  color: var(--tone-pagination-text);
}

.tone-data-table :deep(.cds--select-input),
.tone-data-table :deep(.bx--select-input) {
  background: var(--tone-pagination-btn-bg);
  border-color: var(--tone-pagination-border);
}

.tone-data-table :deep(.cds--pagination__button),
.tone-data-table :deep(.bx--pagination__button) {
  background: var(--tone-pagination-btn-bg);
  color: var(--tone-pagination-text);
  border-left: 1px solid var(--tone-pagination-border);
}

.tone-data-table :deep(.cds--pagination__button:hover:not(:disabled)),
.tone-data-table :deep(.bx--pagination__button:hover:not(:disabled)) {
  background: var(--tone-pagination-btn-hover-bg);
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

.tone-preview {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

@media (max-width: 640px) {
  .page-content {
    padding: 4rem 1rem 2rem;
  }
}
</style>
