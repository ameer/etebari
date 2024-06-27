<template>
  <v-text-field
    outlined
    class="rounded custom-text-field"
    :value="value"
    v-bind="$attrs"
    @input="$emit('input', $event, model)"
  />
</template>
<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    model: {
      type: String,
      default: 'model'
    }
  }
}
</script>
<style>

</style>
