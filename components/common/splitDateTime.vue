<template>
  <div class="text-center">
    <div v-text="split[0]" />
    <div class="text-gray-400 text-body-2" v-text="split[1]" />
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: '1 2',
      required: true
    }
  },
  computed: {
    split () {
      try {
        return this.value.split(' ')
      } catch (error) {
        return this.value
      }
    }
  }
}
</script>
