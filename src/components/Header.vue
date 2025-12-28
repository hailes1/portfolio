<template>
  <cv-header :style="headerStyle">
    <template #header-global>
      <cv-header-global-action aria-label="Menu" :style="headerItemStyle">
        <Home20 />
      </cv-header-global-action>
      <cv-header-global-action aria-label="Switch" @click="onSwitch" :style="headerItemStyle">
        <Sun20 />
      </cv-header-global-action>
    </template>
  </cv-header>
</template>

<script>
import {
  CvHeader,
  CvHeaderGlobalAction,
  CvSideNav,
  CvSideNavItems,
  CvSideNavLink,
  CvSideNavMenuItem,
  CvSideNavMenuDivider,
  CvSideNavMenu,
} from '@carbon/vue'
import { Sun20, Home20 } from '@carbon/icons-vue'

export default {
  name: 'HeaderComponent',
  components: {
    CvHeader,
    CvHeaderGlobalAction,
    Sun20,
    Home20,
    CvSideNav,
    CvSideNavItems,
    CvSideNavMenuItem,
    CvSideNavLink,
    CvSideNavMenuDivider,
    CvSideNavMenu,
  },
  data() {
    return {
      isSwitchOn: false,
      expandedSideNav: false,
      useFixed: true,
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundColor: this.isSwitchOn ? '#d3d3d3' : '#000000',
      }
    },
    headerItemStyle() {
      return {
        color: this.isSwitchOn ? '#000000' : '#d3d3d3',
      }
    },
  },
  methods: {
    onSwitch() {
      this.isSwitchOn = !this.isSwitchOn
      this.$emit('update:switch-state', this.isSwitchOn)
    },
    onSidebar() {
      this.expandedSideNav = !this.expandedSideNav
      this.$emit('update:left-rail-open', this.isLeftRailOpen)
    },
    onPanelResize() {
      // Handle panel resize if needed
    },
  },
}
</script>

<style scoped>
.cv-header-name {
  font-family: 'Garamond', 'code-saver', sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
}

.cv-header-global-action {
  font-family: 'code-saver', sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
}
</style>
