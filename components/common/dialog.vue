<template>
  <v-dialog
    :value="value"
    :content-class="$isMobile() ? 'v-bottom-sheet overflow-auto' : ''"
    width="600"
    transition="dialog-bottom-transition"
    @input="handleInput"
  >
    <v-sheet>
      <div class="pa-3">
        <div class="d-flex align-center">
          <v-spacer />
          <v-btn icon small @click.stop="handleInput(false)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <slot name="default" />
      </div>
    </v-sheet>
  </v-dialog>
</template>
<script>
export default {
  name: 'CommonDialog',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput (value) {
      this.$emit('input', value)
    }
  }
}
</script>
<style>

</style>
