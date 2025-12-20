<template>
  <div>
    <cv-button-set>
      <cv-button
        kind="primary"
        :style="{ backgroundColor: '#8A3FFC', borderColor: '#8A3FFC', minWidth: '340px' }"
      />
      <cv-button
        kind="primary"
        :style="{ backgroundColor: '#0F62FE', borderColor: '#0F62FE', minWidth: '340px' }"
      />
      <cv-button
        kind="primary"
        :style="{ backgroundColor: '#24A148', borderColor: '#24A148', minWidth: '340px' }"
      />
    </cv-button-set>
  </div>
</template>

<script>
import { CvButtonSet, CvButton } from '@carbon/vue'
export default {
  name: 'FooterComponent',
  components: {
    CvButtonSet,
    CvButton,
  },
}
</script>

<style scoped>
/* Global styles to respond to side nav toggle */
.side-nav-expanded .quiet-subfooter {
  right: calc(32px + 300px);
}
</style>
