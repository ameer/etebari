<template>
  <v-text-field
    outlined
    class="rounded custom-text-field"
    :value="formData[models[0]]"
    v-bind="$attrs"
    @input="$emit('input', $event, models[0])"
  />
</template>
<script>
export default {
  props: {
    formData: {
      type: Object,
      default: () => {}
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
