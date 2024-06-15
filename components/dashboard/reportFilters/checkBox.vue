<template>
  <div class="d-flex flex-column align-start">
    <v-checkbox
      v-for="(option, i) in options"
      :key="`cb-${parentIndex}-${i}`"
      :value="option.id"
      large
      class="pl-12"
      @change="$emit('change', {initValue: value, newValue: $event})"
    >
      <template #label>
        <div v-text="option.title" />
      </template>
    </v-checkbox>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [String, Number, Array],
      default: () => []
    },
    parentIndex: {
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>

</style>
