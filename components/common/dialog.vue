<template>
  <v-dialog
    :value="value"
    :content-class="$isMobile() ? 'v-bottom-sheet overflow-auto' : ''"
    :width="width"
    transition="dialog-bottom-transition"
    @input="handleInput"
  >
    <v-sheet class="rounded-12">
      <v-card-text class="pa-4">
        <div class="d-flex align-center">
          <v-spacer />
          <v-btn icon small @click.stop="handleInput(false)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <slot name="default" />
      </v-card-text>
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
    },
    width: {
      type: String,
      default: '600'
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
