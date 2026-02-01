<template>
  <section class="tile-canvas">
    <cv-tile
      v-for="tile in tiles"
      :key="tile.id"
      kind="clickable"
      class="floating-tile"
      :style="tile.style"
    >
      <h4 class="tile-title">{{ tile.title }}</h4>
      <p class="tile-meta">{{ tile.meta }}</p>
    </cv-tile>
  </section>
</template>

<script>
export default {
  name: 'FloatingTiles',
  setup() {
    const tiles = [
      {
        id: 1,
        title: 'arena',
        meta: '2023–',
        style: {
          top: '12%',
          left: '8%',
          transform: 'rotate(-4deg)',
        },
      },
      {
        id: 2,
        title: 'hensyss',
        meta: '2022–23',
        style: {
          top: '38%',
          left: '42%',
          transform: 'rotate(3deg)',
        },
      },
      {
        id: 3,
        title: 'pokéSearch',
        meta: '2022',
        style: {
          top: '18%',
          left: '62%',
          transform: 'rotate(-2deg)',
        },
      },
    ]

    return { tiles }
  },
}
</script>

<style>
.tile-canvas {
  position: relative;
  height: 80vh;
  background: var(--cds-background);
  overflow: hidden;
}

.floating-tile {
  position: absolute;
  width: 260px;
  padding: 1rem;

  border: 1px solid var(--cds-border-subtle);
  background: var(--cds-layer);
  cursor: pointer;

  transition:
    transform 160ms cubic-bezier(0.2, 0, 0, 1),
    box-shadow 160ms ease;
}

.floating-tile:hover {
  transform: translateY(-4px) scale(1.01);
  z-index: 10;
}

.tile-title {
  font-size: 1rem;
  font-weight: 600;
}

.tile-meta {
  font-size: 0.75rem;
  color: var(--cds-text-secondary);
}
</style>
