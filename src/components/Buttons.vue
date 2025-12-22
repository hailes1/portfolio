<template>
  <CvButton
    kind="primary"
    size="md"
    class="personality-button"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <span class="label">
      {{ hovered.value ? 'Okay, go ahead →' : 'Submit' }}
    </span>
    <span class="icon"><Bee20 /></span>
  </CvButton>
</template>

<script>
import { ref } from 'vue'
import { CvButton } from '@carbon/vue'
import { Bee20 } from '@carbon/icons-vue'

export default {
  name: 'PersonalityButton',
  components: {
    CvButton,
    Bee20,
  },
  setup() {
    const hovered = ref(false)
    return {
      hovered,
    }
  },
}
</script>

<style scoped>
.personality-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition:
    background-color 220ms ease,
    transform 180ms ease;
}

.personality-button:hover {
  transform: translateY(-1px);
}

.label {
  display: inline-block;
  transition:
    transform 180ms ease,
    letter-spacing 180ms ease;
}

.personality-button:hover .label {
  transform: translateX(2px);
  letter-spacing: 0.02em;
}

.icon {
  display: inline-block;
  transition:
    transform 180ms ease,
    letter-spacing 180ms ease;
  margin-left: 8px; /* Adjust margin as needed */
}
</style>
