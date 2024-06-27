<template>
  <div>
    <v-text-field
      label="از تاریخ"
      :class="`picker-${model}`"
      outlined
      class="rounded custom-text-field "
      :value="value"
    />
    <datePicker
      :min="min"
      :max="max"
      auto-submit
      popover="bottom-right"
      :value="value"
      :custom-input="`.picker-${model}`"
      :append-to="'#modal-container'"
      @input="$emit('input', $event, model)"
    />
  </div>
</template>
<script>
import VuePersianDatetimePicker from 'vue-persian-datetime-picker'
export default {
  components: {
    datePicker: VuePersianDatetimePicker
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    model: {
      type: String,
      default: 'model'
    }
  },
  computed: {
    min () {
      const oneYearAgo = new Date()
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)
      return oneYearAgo.toLocaleDateString('fa-IR', { numberingSystem: 'latn' })
    },
    max () {
      return this.currentDate.toLocaleDateString('fa-IR', { numberingSystem: 'latn' })
    },
    currentDate () {
      return new Date()
    }
  }
}
</script>
<style>

</style>
