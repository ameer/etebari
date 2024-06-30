<template>
  <v-dialog
    :value="value"
    :content-class="$isMobile() ? 'v-bottom-sheet overflow-auto rounded-lgg rounded-b-0' : 'rounded-lgg'"
    :width="width"
    transition="dialog-bottom-transition"
    @input="handleInput"
  >
    <v-card class="rounded-b-0 pa-3" :class="{'' : $isMobile()}">
      <v-card-title class="d-flex align-center pt-0 px-0">
        <span v-if="title" class="text-fs-18" v-text="title" />
        <v-spacer />
        <v-btn icon small @click.stop="handleInput(false)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle v-if="subtitle" class="px-0 text-body-1 pt-3">
        {{ subtitle }}
      </v-card-subtitle>
      <v-card-text class="pa-4">
        <slot name="default" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: 'CommonModal',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '600'
    },
    title: {
      type: [String, Boolean],
      default: false
    },
    subtitle: {
      type: [String, Boolean],
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
