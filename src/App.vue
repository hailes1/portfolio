<template>
  <div :class="{ 'side-nav-expanded': isLeftRailOpen }">
    <Header @update:left-rail-open="onLeftRailToggle" @update:switch-state="onSwitchToggle" />
    <div class="blueprint-container">
      <div class="blueprint-grid"></div>
      <!-- Randomized blueprint boxes -->
      <div class="blueprint-box box-1"></div>
      <div class="blueprint-box box-2"></div>
      <div class="blueprint-box box-3"></div>
      <div class="blueprint-box box-4"></div>
      <div class="blueprint-box box-5"></div>
      <div class="blueprint-box box-6"></div>
      <div class="blueprint-box box-7"></div>
      <div class="blueprint-box box-8"></div>
      <div class="blueprint-box box-9"></div>
      <div class="blueprint-box box-10"></div>
    </div>
    <div>
      <Home :isSwitchOn="isSwitchOn" />
    </div>
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

.footer {
  right: 0;
  bottom: 0;
  z-index: 10;
  transition: right 0.3s ease;
  color: #fff; /* Optional: Ensure text is visible against background */
  padding: 10px;
}

.side-nav-expanded main {
  height: auto; /* Adjust if necessary */
}
.blueprint-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
  overflow: hidden;
}

.blueprint-grid {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.6;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size:
    47px 52px,
    73px 61px,
    23px 29px,
    31px 37px;
  background-position:
    23px 31px,
    41px 19px,
    67px 83px,
    97px 53px;
}

.blueprint-box {
  position: fixed;
  pointer-events: none;
  z-index: 0;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: transparent;
}

.box-1 {
  top: 15%;
  left: 8%;
  width: 180px;
  height: 240px;
}

.box-2 {
  top: 45%;
  left: 12%;
  width: 320px;
  height: 150px;
  border: none;
}

.box-3 {
  top: 25%;
  right: 20%;
  width: 250px;
  height: 380px;
}

.box-4 {
  top: 60%;
  left: 35%;
  width: 140px;
  height: 140px;
  border-style: dashed;
  border-color: rgba(255, 255, 255, 0.2);
}

.box-5 {
  top: 10%;
  left: 50%;
  width: 420px;
  height: 200px;
  border-width: 2px;
}

.box-6 {
  bottom: 25%;
  right: 15%;
  width: 190px;
  height: 290px;
  border: none;
}

.box-7 {
  top: 70%;
  left: 20%;
  width: 280px;
  height: 120px;
  border-style: dotted;
}

.box-8 {
  top: 35%;
  right: 8%;
  width: 160px;
  height: 160px;
}

.box-9 {
  bottom: 15%;
  left: 45%;
  width: 350px;
  height: 180px;
  border-width: 1.5px;
  border-style: dashed;
}

.box-10 {
  top: 5%;
  left: 30%;
  width: 200px;
  height: 320px;
  border: none;
}
</style>
