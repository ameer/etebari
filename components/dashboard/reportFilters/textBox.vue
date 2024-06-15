<template>
  <v-text-field
    outlined
    class="rounded custom-text-field"
    :value="value"
    v-bind="$attrs"
    @input="$emit('input', $event)"
  />
</template>
<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>
<style>

</style>
