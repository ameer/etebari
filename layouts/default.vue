<template>
  <v-app class="default-layout">
    <Nuxt v-if="!$slots.default" />
    <slot />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  middleware: 'redirectIndex',
  beforeMount () {
    this.$axios.defaults.baseURL = window.location.origin + '/api/v1/'
    // if (window.location.host === 'localhost:3000') {
    //   this.$axios.defaults.baseURL = 'http://192.168.246.2/api/v1/'
    // } else {
    //   this.$axios.defaults.baseURL = window.location.origin + '/api/v1/'
    // }
  }
}
</script>
