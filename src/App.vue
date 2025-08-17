<template>
  <div>
    <Header 
      :class="[isLeftRailOpen ? 'left-rail-toggled' : '']" 
      @update:left-rail-open="onLeftRailToggle" 
    />
    <div class="left-rail" :class="{ open: isLeftRailOpen }">
      <!-- <SidePanel /> -->
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue';

  export default {
    name: 'Main Page', 
    components: {
      Header,
    },
    data() {
      return {
        isLeftRailOpen: false,
      };
    },
    methods: {
      onLeftRailToggle(val) {
        this.isLeftRailOpen = val;
        console.log("Left Rail Toggled:", this.isLeftRailOpen);
      }
    }
  }
</script>

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