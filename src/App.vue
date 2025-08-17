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
import { CvHeader, CvHeaderName, CvHeaderNav, CvHeaderNavItem, CvHeaderGlobalAction } from '@carbon/vue';
import { Sun20, Archive20 } from '@carbon/icons-vue';

export default {
  name: 'Header',
  components: {
    CvHeader,
    CvHeaderName,
    CvHeaderNav,
    CvHeaderNavItem,
    CvHeaderGlobalAction,
    Archive20,
    Sun20,
  },
  data(){
    return {
      isWhiteHeader: false,
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundColor: this.isWhiteHeader ? '#eef2f9' : '',
      };
    },
  },
  methods: {
    onSwitch() {
      this.isWhiteHeader = !this.isWhiteHeader;
      console.log("Switch clicked");
    },
    onSidebar() {
      console.log("Archive clicked");
    },
  },
}
</script>
