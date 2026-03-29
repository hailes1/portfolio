<template>
  <div ref="scrollWrapperRef" :class="surfaceClass" class="experiment-scroll">
    <div ref="containerRef" class="scroll-container">
      <div class="sticky-panel">
        <section class="panel" :style="{ opacity: chapterOpacity(0) }">
          <h2 :class="['panel-heading', headingClass]">003 - Scroll as Narrative Motion</h2>
        </section>

        <section class="panel" :style="{ opacity: chapterOpacity(1) }">
          <h3 :class="['panel-heading', headingClass]">Introduction</h3>
          <cv-breadcrumb :class="['narrative-copy', breadcrumbClass]">
            Typography: The typography used in most of this project is IBM Plex Mono and IBM Plex
            Sans. I also intentionally used CvBreadcrumb to show how even a simple component can be
            used to create a narrative experience.
          </cv-breadcrumb>
        </section>
        <section class="panel" :style="{ opacity: chapterOpacity(2) }">
          <h3 :class="['panel-heading', headingClass]">Chapter One</h3>
          <cv-breadcrumb :class="['narrative-copy', breadcrumbClass]">
            Building a custom scroll animation allows for every scroll to tell a story. Each pixel
            moved reveals something new, creating a sense of progression and discovery. I made sure
            that scroll progress is tracked as a single value from 0 to 1, so every chapter can fade
            in and out at the right time.
          </cv-breadcrumb>
        </section>

        <section class="panel" :style="{ opacity: chapterOpacity(3) }">
          <h3 :class="['panel-heading', headingClass]">Chapter Two</h3>
          <cv-breadcrumb :class="['narrative-copy', breadcrumbClass]">
            Motion guides attention, creates rhythm, and transforms scrolling from a mechanical
            action into an experience. Each chapter uses small opacity windows, so content appears
            in sequence instead of competing for attention.
          </cv-breadcrumb>
        </section>

        <section class="panel" :style="{ opacity: chapterOpacity(4) }">
          <h3 :class="['panel-heading', headingClass]">The End</h3>
          <cv-breadcrumb :class="['narrative-copy', breadcrumbClass]">
            And just like that, the story is told. Scroll-based narrative creates engagement through
            controlled revelation. A lightweight animation frame loop keeps motion smooth while
            avoiding extra work during fast scrolling.
          </cv-breadcrumb>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { CvBreadcrumb } from '@carbon/vue'

export default {
  name: 'ExperimentScroll',
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
      return this.isSwitchOn ? 'experiment-scroll active' : 'experiment-scroll'
    },
    breadcrumbClass() {
      return this.isSwitchOn ? 'experiment-page-text active' : 'experiment-page-text'
    },
    headingClass() {
      return this.isSwitchOn ? 'experiment-heading active' : 'experiment-heading'
    },
  },
  setup() {
    const scrollWrapperRef = ref(null)
    const progress = ref(0)
    let frameId = null

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

    const segmentOpacity = (value, start, middle, end) => {
      if (value <= start || value >= end) {
        return 0
      }
      if (value <= middle) {
        return (value - start) / (middle - start)
      }
      return (end - value) / (end - middle)
    }

    const chapterOpacity = computed(() => {
      return (index) => {
        const p = progress.value
        if (index === 0) {
          // Full at start, fully gone before index 1 appears
          return clamp((0.16 - p) / 0.1, 0, 1)
        }
        if (index === 1) {
          return segmentOpacity(p, 0.2, 0.3, 0.42)
        }
        if (index === 2) {
          return segmentOpacity(p, 0.46, 0.55, 0.65)
        }
        if (index === 3) {
          return segmentOpacity(p, 0.69, 0.78, 0.88)
        }
        if (index === 4) {
          return clamp((p - 0.92) / 0.08, 0, 1)
        }
        return 0
      }
    })

    const updateProgress = () => {
      const el = scrollWrapperRef.value
      if (!el) {
        return
      }

      const totalScrollable = el.scrollHeight - el.clientHeight

      if (totalScrollable <= 0) {
        progress.value = 0
        return
      }

      progress.value = clamp(el.scrollTop / totalScrollable, 0, 1)
    }

    const onScroll = () => {
      if (frameId !== null) {
        return
      }

      frameId = window.requestAnimationFrame(() => {
        updateProgress()
        frameId = null
      })
    }

    onMounted(() => {
      updateProgress()
      scrollWrapperRef.value?.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll)
    })

    onBeforeUnmount(() => {
      scrollWrapperRef.value?.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
    })

    return {
      scrollWrapperRef,
      chapterOpacity,
    }
  },
}
</script>

<style scoped lang="scss">
.experiment-scroll {
  position: fixed;
  inset: 0;
  overflow-y: auto;
  z-index: 10;
  background: #000000;
  color: #d3d3d3;
  transition:
    background-color 180ms ease,
    color 180ms ease;
}

.experiment-scroll.active {
  background: #d3d3d3;
  color: #000000;
}

.scroll-container {
  height: 400vh;
  position: relative;
  width: 100%;
}

.sticky-panel {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.panel {
  position: absolute;
  text-align: center;
  width: min(90vw, 700px);
  padding: 2rem;
  transition: opacity 120ms linear;
}

.narrative-copy {
  display: inline-block;
  font-family:
    'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier', 'Monospace';
  font-size: clamp(1rem, 2.2vw, 1.125rem);
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.32px;
  color: inherit;
  margin-top: 1rem;
  max-width: 600px;
}

.experiment-page-text {
  color: #d3d3d3;
}

.experiment-page-text.active {
  color: #000000;
}

h2,
h3 {
  font-family: 'IBM Plex Sans', sans-serif;
  margin: 0;
}

.panel-heading {
  transition: color 180ms ease;
  color: #0f62fe;
}

.experiment-heading {
  color: #0f62fe;
}

.experiment-heading.active {
  color: #0f62fe;
}

h2 {
  font-size: clamp(2rem, 5vw, 3rem);
}

h3 {
  font-size: clamp(1.8rem, 4vw, 2rem);
  margin-bottom: 1rem;
}
</style>
