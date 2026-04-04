<template>
  <div :class="surfaceClass" class="experiment-transition">
    <div class="page-content">
      <h1 :class="headingClass">006 - State Transitions (Continuity over Jumps)</h1>
      <cv-breadcrumb :class="['intro-copy', subtleClass]">
        Make state changes feel spatial and logical. Nothing should just appear or disappear.
        Transitions should honor the relationship between states and guide attention naturally.
      </cv-breadcrumb>

      <section class="section-block">
        <h2 class="section-title">List to Detail Transitions</h2>
        <cv-breadcrumb :class="['support-copy', subtleClass]">
          Select a tile to open details while preserving continuity between list and detail states.
        </cv-breadcrumb>

        <div class="list-detail-layout">
          <div class="tile-list">
            <cv-tile
              v-for="item in items"
              :key="item.id"
              class="topic-tile"
              :class="{ selected: selectedItem && selectedItem.id === item.id }"
              :light="isSwitchOn"
              @click="selectedItem = item"
            >
              <div class="tile-category">{{ item.category }}</div>
              <div :class="['tile-title', headingClass]">{{ item.title }}</div>
              <div :class="['tile-description', subtleClass]">{{ item.description }}</div>
            </cv-tile>
          </div>

          <transition name="detail-slide" mode="out-in">
            <cv-tile v-if="selectedItem" :key="selectedItem.id" class="detail-tile" :light="isSwitchOn">
              <div class="detail-header">
                <div>
                  <div class="tile-category">{{ selectedItem.category }}</div>
                  <h3 :class="['detail-title', headingClass]">{{ selectedItem.title }}</h3>
                </div>
                <cv-button kind="ghost" size="sm" @click="selectedItem = null">Close</cv-button>
              </div>
              <cv-breadcrumb :class="['detail-body', subtleClass]">{{ selectedItem.details }}</cv-breadcrumb>
            </cv-tile>

            <cv-tile v-else key="placeholder" class="detail-placeholder" :light="isSwitchOn">
              <cv-breadcrumb :class="['support-copy', subtleClass]">
                Choose a tile to view detailed content. The list remains visible to maintain context.
              </cv-breadcrumb>
            </cv-tile>
          </transition>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { CvBreadcrumb, CvButton, CvTile } from '@carbon/vue'

export default {
  name: 'ExperimentingTransitions',
  components: {
    CvBreadcrumb,
    CvButton,
    CvTile,
  },
  props: {
    isSwitchOn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedItem: null,
      items: [
        {
          id: 1,
          title: 'Neural Networks',
          category: 'Machine Learning',
          description: 'Deep learning architectures',
          details:
            'Neural networks are layered systems of interconnected units that progressively extract patterns from raw data. Their strength comes from representation learning and non-linear transformations.',
        },
        {
          id: 2,
          title: 'React Patterns',
          category: 'Web Development',
          description: 'Component composition strategies',
          details:
            'Patterns such as composition, hooks, and context help teams keep UI systems modular and maintainable. Choosing the pattern depends on reuse needs and state boundaries.',
        },
        {
          id: 3,
          title: 'Typography Systems',
          category: 'Design',
          description: 'Scale and hierarchy principles',
          details:
            'A typography system defines rhythm through consistent size, spacing, and line length. It improves scanability and creates hierarchy before color or decoration is applied.',
        },
        {
          id: 4,
          title: 'Color Theory',
          category: 'Design',
          description: 'Visual harmony through color',
          details:
            'Color relationships shape emphasis and emotional tone. Practical systems balance semantic meaning, contrast, and visual consistency across UI surfaces.',
        },
        {
          id: 5,
          title: 'API Design',
          category: 'Backend',
          description: 'RESTful and GraphQL patterns',
          details:
            'Good APIs optimize for clarity, predictability, and evolvability. Resource naming, payload design, and error contracts determine long-term developer experience.',
        },
      ],
    }
  },
  computed: {
    surfaceClass() {
      return this.isSwitchOn ? 'experiment-transition active' : 'experiment-transition'
    },
    headingClass() {
      return this.isSwitchOn ? 'text-primary active' : 'text-primary'
    },
    subtleClass() {
      return this.isSwitchOn ? 'text-subtle active' : 'text-subtle'
    },
  },
}
</script>


<style scoped lang="scss">
.experiment-transition {
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
  background: var(--cds-background);
  transition:
    background-color 180ms ease,
    color 180ms ease;
}

.experiment-transition.active {
  --cds-background: #d3d3d3;
  --cds-layer-01: #f4f4f4;
  --cds-layer-02: #e0e0e0;
  --cds-text-primary: #161616;
  --cds-text-secondary: #525252;
  --cds-link-primary: #0f62fe;
}

.page-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

h1,
h2,
h3 {
  font-family: 'IBM Plex Sans', sans-serif;
}

h1 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin: 0 0 1rem;
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
  margin-bottom: 3rem;
}

.section-title {
  color: var(--cds-link-primary);
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.support-copy {
  display: block;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.875rem;
  max-width: 640px;
  margin-bottom: 2rem;
}

.list-detail-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-items: start;
}

.tile-list {
  display: grid;
  gap: 0.75rem;
}

.topic-tile {
  cursor: pointer;
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

:deep(.topic-tile.bx--tile),
:deep(.detail-tile.bx--tile),
:deep(.detail-placeholder.bx--tile) {
  background-color: var(--cds-layer-01);
  border: 1px solid var(--cds-layer-02);
  color: var(--cds-text-primary);
  transition:
    background-color 180ms ease,
    border-color 180ms ease,
    color 180ms ease;
}

.topic-tile:hover {
  transform: translateX(6px);
}

.topic-tile.selected {
  box-shadow: inset 0 0 0 2px #0f62fe;
}

.tile-category {
  color: var(--cds-link-primary);
  font-size: 0.75rem;
  margin-bottom: 0.35rem;
  font-family: 'IBM Plex Mono', monospace;
}

.tile-title {
  margin-bottom: 0.4rem;
  font-size: 1.05rem;
}

.tile-description {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.875rem;
}

.detail-tile,
.detail-placeholder {
  min-height: 240px;
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.detail-title {
  margin: 0;
  font-size: 1.4rem;
}

.detail-body {
  display: block;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.65;
}

.detail-slide-enter-active,
.detail-slide-leave-active {
  transition: all 220ms ease;
}

.detail-slide-enter-from,
.detail-slide-leave-to {
  opacity: 0;
  transform: translateX(16px);
}

.text-primary {
  color: var(--cds-text-primary);
  transition: color 180ms ease;
}

.text-subtle {
  color: var(--cds-text-secondary);
  transition: color 180ms ease;
}

@media (max-width: 900px) {
  .list-detail-layout {
    grid-template-columns: 1fr;
  }
}

</style>
