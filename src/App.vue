<template>
  <div :class="{ 'side-nav-expanded': isLeftRailOpen }" class="main-container">
    <Header @update:left-rail-open="onLeftRailToggle" @update:switch-state="onSwitchToggle" />
    <div class="content">
      <div class="blueprint-container">
        <div class="blueprint-grid"></div>
        <div
          v-for="index in 15"
          :key="'box-' + index"
          class="blueprint-box"
          :class="'box-' + index + (blueprintVisible ? ' show-blueprint' : '')"
        ></div>
      </div>
      <div>
        <!-- <Home :isSwitchOn="isSwitchOn" /> -->
        <router-view v-slot="{ Component, route }">
          <component :is="Component" :isSwitchOn="isSwitchOn" />
        </router-view>
      </div>
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
      blueprintVisible: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.blueprintVisible = true
    }, 500) // Trigger blueprint visibility
  },
  methods: {
    onLeftRailToggle(val) {
      this.isLeftRailOpen = val
      console.log('Left Rail Toggled:', this.isLeftRailOpen)
    },
    onSwitchToggle(val) {
      this.isSwitchOn = val
      if (val) {
        document.body.classList.add('light-mode')
      } else {
        document.body.classList.remove('light-mode')
      }
    },
  },
}
</script>

<style>
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

body {
  margin: 0;
  padding: 0;
  transition: background-color 0.3s ease;
  background-color: #000000;
  overflow: auto; /* Ensure body is scrollable */
}

body.light-mode {
  background-color: #d3d3d3;
}

/* Remove any constraints from .main */
.main {
  max-height: none;
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
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
  z-index: 0;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: transparent;
}

.show-blueprint {
  opacity: 1;
}

.box-1 {
  top: 15%;
  left: 8%;
  width: 180px;
  height: 240px;
  transition-delay: 0.1s;
}
.box-2 {
  top: 45%;
  left: 12%;
  width: 320px;
  height: 150px;
  border: none;
  transition-delay: 0.2s;
}
.box-3 {
  top: 25%;
  right: 20%;
  width: 250px;
  height: 380px;
  transition-delay: 0.3s;
}
.box-4 {
  top: 60%;
  left: 35%;
  width: 140px;
  height: 140px;
  border-style: dashed;
  border-color: rgba(255, 255, 255, 0.2);
  transition-delay: 0.4s;
}
.box-5 {
  top: 10%;
  left: 50%;
  width: 420px;
  height: 200px;
  border-width: 2px;
  transition-delay: 0.5s;
}
.box-6 {
  bottom: 25%;
  right: 15%;
  width: 190px;
  height: 290px;
  border: none;
  transition-delay: 0.6s;
}
.box-7 {
  top: 70%;
  left: 20%;
  width: 280px;
  height: 120px;
  border-style: dotted;
  transition-delay: 0.7s;
}
.box-8 {
  top: 35%;
  right: 8%;
  width: 160px;
  height: 160px;
  transition-delay: 0.8s;
}
.box-9 {
  bottom: 15%;
  left: 45%;
  width: 350px;
  height: 180px;
  border-width: 1.5px;
  border-style: dashed;
  transition-delay: 0.9s;
}
.box-10 {
  top: 5%;
  left: 30%;
  width: 200px;
  height: 320px;
  border: none;
  transition-delay: 1s;
}
.box-11 {
  top: 15%;
  right: 10%;
  width: 220px;
  height: 260px;
  transition-delay: 1.1s;
}
.box-12 {
  bottom: 20%;
  left: 25%;
  width: 300px;
  height: 230px;
  border-style: solid;
  transition-delay: 1.2s;
}
.box-13 {
  top: 50%;
  right: 5%;
  width: 180px;
  height: 180px;
  transition-delay: 1.3s;
}
.box-14 {
  bottom: 10%;
  left: 60%;
  width: 250px;
  height: 100px;
  border-style: dashed;
  border-color: rgba(255, 255, 255, 0.3);
  transition-delay: 1.4s;
}
.box-15 {
  top: 8%;
  left: 40%;
  width: 150px;
  height: 350px;
  border-width: 2.5px;
  transition-delay: 1.5s;
}
</style>
