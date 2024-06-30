<template>
  <div class="d-flex flex-column align-start">
    <v-checkbox
      v-for="(option, i) in options"
      :key="`cb-${parentIndex}-${i}`"
      :value="option.value"
      large
      hide-details
      class="my-1 py-4"
      @change="$emit('change', {initValue: value, newValue: $event}, models[0])"
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
    formData: {
      type: Object,
      default: () => {}
    },
    parentIndex: {
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    },
    models: {
      type: Array,
      default: () => ['model']
    }
  }
}
</script>
<style>

</style>
