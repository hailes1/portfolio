<template>
  <div class="new-page">
    <h1>Welcome to the New Page</h1>
    <p>This is a new page mimicking the Home component structure.</p>
    <cv-breadcrumb class="new-page-breadcrumb"> New Page - Experiments and Learning </cv-breadcrumb>
    <cv-button @click="goHome" aria-label="Home button" default="sm" size="sm">
      Go to Home
    </cv-button>
  </div>
</template>

<script>
import { CvBreadcrumb, CvButton } from '@carbon/vue'

export default {
  name: 'MotionComponent',
  components: {
    CvBreadcrumb,
    CvButton,
  },
  methods: {
    goHome() {
      this.$router.push('/')
    },
  },
  mounted() {
    window.scrollTo(0, 0) // Ensure the window scrolls to the top
  },
}
</script>

<style scoped>
.new-page {
  padding: 20px;
}
.new-page-breadcrumb {
  font-size: 0.75rem;
  margin-bottom: 10px;
}
</style>
