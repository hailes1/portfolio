<template>
  <section class="motion-lab">
    <header>
      <h2>Staggered Cards — Timing Study</h2>
      <cv-button @click="replay" size="sm">Replay</cv-button>
    </header>

    <div class="controls">
      <cv-slider v-model="duration" min="80" max="600" label="Animation duration (ms)" />
      <cv-slider v-model="stagger" min="0" max="300" label="Stagger delay per card (ms)" />
    </div>

    <cv-tile-group>
      <cv-tile v-for="card in cards" :key="card.id" class="stagger-card" :light="true">
        {{ card.title }}
      </cv-tile>
    </cv-tile-group>
  </section>
</template>
<script>
import { ref, onMounted } from 'vue'
import { CvTile, CvTileGroup, CvSlider } from '@carbon/vue'

export default {
  name: 'CardComponent',
  components: {
    CvTile,
    CvTileGroup,
    CvSlider,
  },
  setup() {
    const duration = ref(240) // ms
    const stagger = ref(90) // ms per card

    const cards = ref([
      { id: 1, title: 'Motion gives hierarchy' },
      { id: 2, title: 'Attention through timing' },
      { id: 3, title: 'Stagger = sequencing' },
      { id: 4, title: 'Duration expresses tone' },
      { id: 5, title: 'Fast feels productive' },
    ])
    const animate = () => {
      const tiles = document.querySelectorAll('.stagger-card')
      tiles.forEach((tile, i) => {
        tile.style.transition = `
          opacity ${duration.value}ms var(--cds-motion-ease-in-out),
          transform ${duration.value}ms var(--cds-motion-ease-in-out)
        `
        tile.style.transitionDelay = `${i * stagger.value}ms`
        requestAnimationFrame(() => {
          tile.style.opacity = 1
          tile.style.transform = 'translateY(0) scale(1)'
        })
      })
    }
    onMounted(animate)
    const replay = () => {
      const tiles = document.querySelectorAll('.stagger-card')
      tiles.forEach((tile) => {
        tile.style.opacity = 0
        tile.style.transform = 'translateY(12px) scale(.96)'
      })
      setTimeout(animate, 0)
    }
    return {
      cards,
      animate,
      replay,
    }
  },
}
</script>

<style scoped>
.motion-lab {
  padding: 2rem;
  font-family: var(--cds-font-sans);
}

header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.controls {
  margin: 1rem 0 2rem;
  max-width: 420px;
  display: grid;
  gap: 1rem;
}

/* initial state for animation */
.stagger-card {
  opacity: 0;
  transform: translateY(12px) scale(0.96);
}
</style>
