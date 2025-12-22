<template>
  <div>
    <CvDatePicker kind="single" date-format="Y-m-d" :style="datePickerStyle">
      <CvDatePickerInput placeholder="YYYY-MM-DD" :style="datePickerInputStyle" />
    </CvDatePicker>
  </div>
</template>

<script>
import { CvDatePicker, CvDatePickerInput } from '@carbon/vue'

export default {
  name: 'DateRangeStudy',
  components: {
    CvDatePicker,
    CvDatePickerInput,
  },
  props: {
    /**
     * true  -> light mode (grey10)
     * false -> dark mode (grey90)
     */
    isSwitchOn: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    datePickerStyle() {
      return {
        backgroundColor: this.isSwitchOn ? '#d3d3d3' : '#000000',
      }
    },
    datePickerInputStyle() {
      return {
        color: this.isSwitchOn ? '#000000' : '#d3d3d3',
      }
    },
  },
}
</script>

<style scoped>
.date-range-study {
  padding: 1rem;
  border-radius: 4px;
  width: 100%;
}
</style>
