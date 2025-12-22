<template>
  <div>
    <CvTextInput
      label="Email"
      placeholder="name@example.com"
      v-model="value"
      @blur="touched = true"
      :invalid="touched && !value.includes('@')"
      invalidText="Feels incomplete"
    />
  </div>
</template>
<script>
import { ref } from 'vue'
import { CvTextInput } from '@carbon/vue'

export default {
  name: 'FieldStudy',
  components: {
    CvTextInput,
  },
  setup() {
    const value = ref('')
    const touched = ref(false)
    return {
      value,
      touched,
    }
  },
}
</script>

<style scoped>
.field-study :deep(.bx--text-input) {
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease;
}

.field-study :deep(.bx--text-input:focus) {
  box-shadow: 0 0 0 2px rgba(15, 98, 254, 0.25);
}
</style>
