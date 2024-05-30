<template>
  <v-card class="rounded-xxl white tw-box-shadow pa-6 fill-width">
    <auth-login-form v-if="loginWithUsername" />
    <auth-register-form v-else />
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      loginWithUsername: false
    }
  },
  created () {
    this.$nuxt.$on('setLoginMode', this.setLoginMode)
  },
  beforeDestroy () {
    this.$nuxt.$off('setLoginMode', this.setLoginMode)
  },
  methods: {
    setLoginMode (value) {
      this.loginWithUsername = value
    }
  }
}
</script>
<style>

</style>
