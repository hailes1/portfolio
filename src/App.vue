<template>
  <div>
    <Header
      :class="[isLeftRailOpen ? 'left-rail-toggled' : '']"
      @update:left-rail-open="onLeftRailToggle"
      @update:switch-state="onSwitchToggle"
    />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'Main Page',
  components: {
    Header,
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
}

body.dark-mode {
  background-color: #d3d3d3;
}
</style>

<style scoped>
.left-rail-toggled {
  padding-left: 400px;
}

.left-rail {
  position: fixed;
  left: 0;
  top: 0;
  width: 400px;
  height: 100%;
  background-color: #fbfcf8;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  transform: translateX(-100%);
}

.left-rail.open {
  transform: translateX(0);
}
</style>
