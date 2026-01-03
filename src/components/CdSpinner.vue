<template>
  <div class="cd" :class="{ paused }" :style="cdStyle">
    <img :src="src" alt="Now playing artwork" />
  </div>
  <!-- <cv-breadcrumb :class="breadcrumbClass"> [Currently Listening To] </cv-breadcrumb> -->
</template>

<script>
import { CvBreadcrumb } from '@carbon/vue'

export default {
  name: 'CdSpinner',
  components: {
    CvBreadcrumb,
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 30,
    },
    speed: {
      type: Number,
      default: 10, // seconds per rotation
    },
    paused: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cdStyle() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
        animationDuration: `${this.speed}s`,
      }
    },
  },
}
</script>

<style scoped>
.cd {
  position: relative; /* Add this to position the pseudo-element */
  border-radius: 50%;
  overflow: hidden;
  animation: spin linear infinite;
  box-shadow:
    0 0 1px rgba(0, 0, 0, 0.1),
    0 2px 8px rgba(0, 0, 0, 0.15);
}

.cd::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20%; /* Adjust the size of the cutout */
  height: 20%; /* Adjust the size of the cutout */
  background-color: #d3d3d3; /* Use the provided color */
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.cd img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.cd.paused {
  animation-play-state: paused;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
