<template>
  <cv-header :style="headerStyle">
    <template #header-global>
      <cv-header-global-action aria-label="Switch" @click="onSwitch">
        <Sun20 />
      </cv-header-global-action>
      <cv-header-global-action aria-label="Archive" @click="onSidebar">
        <Archive20 />
      </cv-header-global-action>
    </template>
  </cv-header>
</template>

<script>
import { CvHeader, CvHeaderName, CvHeaderGlobalAction } from '@carbon/vue'
import { Sun20, Archive20 } from '@carbon/icons-vue'

export default {
  name: 'Header',
  components: {
    CvHeader,
    CvHeaderGlobalAction,
    Archive20,
    Sun20,
  },
  data() {
    return {
      isSwitchOn: false,
      isLeftRailOpen: false,
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundColor: this.isSwitchOn ? '#d3d3d3' : '',
      }
    },
  },
  methods: {
    onSwitch() {
      this.isSwitchOn = !this.isSwitchOn
      this.$emit('update:switch-state', this.isSwitchOn)
      console.log('Switch clicked')
    },
    onSidebar() {
      this.isLeftRailOpen = !this.isLeftRailOpen
      this.$emit('update:left-rail-open', this.isLeftRailOpen)
    },
  },
}
</script>

<style scoped>
.cv-header-name,
.cv-header-global-action {
  font-family: 'code-saver', sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
}
</style>
