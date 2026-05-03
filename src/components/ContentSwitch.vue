<template>
  <div class="content-switch" :class="themeClass">
    <cv-button kind="tertiary" size="sm" class="switch-toggle" @click="toggleOpen">
      {{ isOpen ? 'Hide nudge audit panel' : 'Open nudge audit panel' }}
    </cv-button>

    <transition name="switcher-reveal">
      <div v-if="isOpen" class="picker-shell">
        <div class="picker-header">
          <div>
            <h3 class="picker-title">Ethical nudges review</h3>
            <p class="picker-copy">Compare supportive nudges and dark-pattern risks while keeping the same frame, hierarchy, and context.</p>
          </div>
          <cv-button kind="ghost" size="sm" class="picker-close" @click="isOpen = false">Close</cv-button>
        </div>

        <cv-content-switcher aria-label="Ethical nudge collections" @selected="onCollectionSelected">
          <cv-content-switcher-button
            owner-id="continuity"
            :selected="activeCollection === 'continuity'"
            @click="activeCollection = 'continuity'"
          >
            Helpful nudges
          </cv-content-switcher-button>
          <cv-content-switcher-button
            owner-id="feedback"
            :selected="activeCollection === 'feedback'"
            @click="activeCollection = 'feedback'"
          >
            Dark-pattern risks
          </cv-content-switcher-button>
        </cv-content-switcher>

        <div class="picker-body">
          <transition name="panel-fade" mode="out-in">
            <div :key="activeCollection" class="article-grid">
              <cv-tile
                v-for="topic in activeTopics"
                :key="topic.id"
                class="article-card"
                :class="{ selected: selectedTopicId === topic.id }"
                :light="isSwitchOn"
                @click="selectedTopicId = topic.id"
              >
                <div class="article-card-top">
                  <div>
                    <div class="tile-category">{{ topic.category }}</div>
                    <h4 class="article-title">{{ topic.title }}</h4>
                    <p class="article-subtitle">{{ topic.description }}</p>
                  </div>
                  <div class="selection-box" aria-hidden="true">
                    <span v-if="selectedTopicId === topic.id">✓</span>
                  </div>
                </div>

                <div class="article-card-footer">
                  <span class="article-meta">Audit prompt</span>
                  <span class="article-author">{{ topic.note }}</span>
                </div>
              </cv-tile>
            </div>
          </transition>
        </div>
        <div class="picker-actions">
          <cv-button kind="secondary" @click="isOpen = false">Cancel</cv-button>
          <cv-button>Save audit note</cv-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { CvButton, CvContentSwitcher, CvContentSwitcherButton, CvTile } from '@carbon/vue'

export default {
  name: 'ContentSwitch',
  components: {
    CvButton,
    CvContentSwitcher,
    CvContentSwitcherButton,
    CvTile,
  },
  props: {
    isSwitchOn: {
      type: Boolean,
      default: false,
    },
    topics: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isOpen: false,
      activeCollection: 'continuity',
      selectedTopicId: null,
      fallbackTopics: [
        {
          id: 101,
          title: 'Helpful Guidance Bubbles',
          category: 'Ethical Nudges',
          description: 'Use tooltips to educate rather than corner a user into one favorable action.',
          details:
            'Guidance becomes ethical when it teaches, stays dismissible, and preserves the legitimacy of other choices. It becomes manipulative when it spotlights only the platform-preferred outcome.',
          note: 'Would this still feel fair if you explained it publicly?',
        },
        {
          id: 102,
          title: 'Defaults and Consent',
          category: 'Choice Architecture',
          description: 'Pre-selected options can simplify choice or quietly bypass informed consent.',
          details:
            'Defaults are especially powerful because users often accept the path of least effort. Ethical defaults need explanation, reversibility, and an equally visible way to opt out.',
          note: 'Does the easy path protect the user or only help the business?',
        },
        {
          id: 103,
          title: 'Color Hierarchy and Pressure',
          category: 'Visual Persuasion',
          description: 'Contrast and emphasis can guide attention, but they can also manufacture urgency.',
          details:
            'A brighter button is not automatically unethical. The problem starts when the visual hierarchy makes declining feel hidden, unsafe, or socially incorrect.',
          note: 'Does the visual weight clarify or coerce?',
        },
        {
          id: 104,
          title: 'Progress and Commitment Bias',
          category: 'Behavioral Psychology',
          description: 'Progress bars can orient users or exploit their urge to finish what they started.',
          details:
            'Progress indicators are helpful when they reveal effort, steps, and consequences. They become questionable when artificial progress is used to push a user into compliance.',
          note: 'Is the progress indicator informing effort or pressuring completion?',
        },
      ],
    }
  },
  computed: {
    allTopics() {
      return this.topics.length ? this.topics : this.fallbackTopics
    },
    continuityTopics() {
      return this.allTopics.slice(0, 3).map((topic) => ({
        ...topic,
        note: topic.note || 'What user benefit is genuinely being protected here?',
      }))
    },
    feedbackTopics() {
      const derived = this.allTopics.slice(2).map((topic, index) => ({
        ...topic,
        id: topic.id + 200 + index,
        category: index % 2 === 0 ? 'Dark Pattern Risks' : topic.category,
        note: topic.note || 'Where does persuasion cross into manipulation?',
      }))

      return derived.length ? derived : this.continuityTopics
    },
    activeTopics() {
      return this.activeCollection === 'feedback' ? this.feedbackTopics : this.continuityTopics
    },
    selectedTopic() {
      return this.activeTopics.find((topic) => topic.id === this.selectedTopicId) || null
    },
    themeClass() {
      return this.isSwitchOn ? 'content-switch light' : 'content-switch'
    },
  },
  watch: {
    activeCollection() {
      this.selectedTopicId = this.activeTopics[0]?.id || null
    },
    isOpen(isOpen) {
      if (isOpen && !this.selectedTopicId) {
        this.selectedTopicId = this.activeTopics[0]?.id || null
      }
    },
  },
  methods: {
    onCollectionSelected(event) {
      this.activeCollection = event?.detail?.ownerId || this.activeCollection
    },
    toggleOpen() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style scoped lang="scss">
.content-switch {
  --switch-layer: #262626;
  --switch-layer-hover: #393939;
  --switch-border: #393939;
  --switch-text-primary: #f4f4f4;
  --switch-text-secondary: #8d8d8d;
  --switch-link: #78a9ff;
  --switch-shadow: rgba(0, 0, 0, 0.24);
}

.content-switch.light {
  --switch-layer: #f4f4f4;
  --switch-layer-hover: #ffffff;
  --switch-border: #e0e0e0;
  --switch-text-primary: #161616;
  --switch-text-secondary: #525252;
  --switch-link: #0f62fe;
  --switch-shadow: rgba(22, 22, 22, 0.12);
}

.switch-toggle {
  margin-bottom: 1rem;
}

.picker-shell {
  width: min(100%, 42rem);
  background: var(--switch-layer);
  border: 1px solid var(--switch-border);
  box-shadow: 0 18px 48px var(--switch-shadow);
}

.picker-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1rem 0.75rem;
}

.picker-title,
.article-title,
.detail-title {
  margin: 0;
  color: var(--switch-text-primary);
  font-family: 'IBM Plex Sans', sans-serif;
}

.picker-title {
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
}

.picker-copy,
.article-subtitle,
.article-meta,
.article-author,
.detail-body {
  margin: 0;
  color: var(--switch-text-secondary);
  font-family: 'IBM Plex Mono', monospace;
}

.picker-copy {
  max-width: 30rem;
  font-size: 0.8rem;
  line-height: 1.5;
}

.picker-close {
  min-inline-size: auto;
}

.picker-body {
  padding: 1rem;
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.875rem;
  margin-top: 1rem;
}

.article-card,
.detail-tile,
.detail-placeholder {
  background: var(--switch-layer);
  border: 1px solid var(--switch-border);
  color: var(--switch-text-primary);
}

.article-card {
  min-height: 11rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease, background-color 220ms ease;
}

.article-card:hover {
  transform: translateY(-4px);
  background: var(--switch-layer-hover);
  box-shadow: 0 10px 28px var(--switch-shadow);
}

.article-card.selected {
  box-shadow: inset 0 0 0 2px var(--switch-link);
}

.article-card-top {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
}

.tile-category {
  color: var(--switch-link);
  margin-bottom: 0.35rem;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.75rem;
}

.article-title {
  margin-bottom: 0.35rem;
  font-size: 1rem;
}

.article-subtitle,
.article-meta,
.article-author {
  font-size: 0.8rem;
  line-height: 1.45;
}

.article-card-footer {
  display: grid;
  gap: 0.125rem;
}

.selection-box {
  width: 1rem;
  height: 1rem;
  flex: 0 0 1rem;
  border: 1px solid currentColor;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--switch-text-primary);
  font-size: 0.7rem;
}

.detail-tile,
.detail-placeholder {
  margin: 0 1rem 1rem;
  min-height: 10rem;
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.detail-title {
  font-size: 1.15rem;
}

.detail-body {
  display: block;
  font-size: 0.85rem;
  line-height: 1.6;
}

.picker-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.picker-actions :deep(.bx--btn) {
  max-width: none;
}

.switcher-reveal-enter-active,
.switcher-reveal-leave-active,
.panel-fade-enter-active,
.panel-fade-leave-active,
.detail-slide-enter-active,
.detail-slide-leave-active {
  transition: opacity 220ms ease, transform 220ms ease;
}

.switcher-reveal-enter-from,
.switcher-reveal-leave-to {
  opacity: 0;
  transform: translateY(-12px) scale(0.985);
}

.panel-fade-enter-from,
.panel-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.detail-slide-enter-from,
.detail-slide-leave-to {
  opacity: 0;
  transform: translateX(16px);
}

@media (max-width: 768px) {
  .picker-shell {
    width: 100%;
  }

  .article-grid {
    grid-template-columns: 1fr;
  }

  .picker-header {
    flex-direction: column;
  }
}
</style>
