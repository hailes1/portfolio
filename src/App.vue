<template>
  <div>
    <Header
      :class="[isLeftRailOpen ? 'left-rail-toggled' : '']"
      @update:left-rail-open="onLeftRailToggle"
      @update:switch-state="onSwitchToggle"
    />
    <Home :isSwitchOn="isSwitchOn" />
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import HomeComponent from './components/Home.vue'

export default {
  name: 'MainPageLayout',
  components: {
    Header: HeaderComponent,
    Home: HomeComponent,
  },
  data() {
    return {
      isLeftRailOpen: false,
      isSwitchOn: false,
    }
  },
  methods: {
    onLeftRailToggle(val) {
      this.isLeftRailOpen = val
      console.log('Left Rail Toggled:', this.isLeftRailOpen)
    },
    onSwitchToggle(val) {
      this.isSwitchOn = val
      if (val) {
        document.body.classList.add('dark-mode')
      } else {
        document.body.classList.remove('dark-mode')
      }
      console.log('Switch Toggled:', this.isSwitchOn)
    },
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  transition: background-color 0.3s ease;
  background-color: #000000;
  overflow: auto; /* Ensure body is scrollable */
}

body.dark-mode {
  background-color: #d3d3d3;
}

/* Remove any constraints from .main */
.main {
  max-height: none;
}

.left-rail-toggled main {
  height: auto; /* Adjust if necessary */
}
</style>
