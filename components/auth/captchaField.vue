<template>
  <div class="d-flex fill-width justify-space-between pt-3">
    <v-text-field outlined class="rounded fill-width text-center ml-2" placeholder="کد امنیتی" :value="value" @input="$emit('input', $event)" />
    <v-img
      contain
      max-height="56"
      width="90"
      lazy-src="/captcha.jpg"
      alt="captcha"
      :src="captchaImg"
    />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: {
    value: {
      type: [Number, String],
      default: ''
    }
  },
  data () {
    return {
      captchaResp: {}
    }
  },
  computed: {
    captchaImg () {
      return this.captchaResp.captcha ? `data:image/png;base64,${this.captchaResp.captcha}` : ''
    }
  },
  mounted () {
    this.getCaptcha()
  },
  methods: {
    ...mapActions('core', ['_getCaptcha']),
    async getCaptcha () {
      try {
        const resp = await this._getCaptcha()
        this.captchaResp = Object.assign({}, resp.data)
        this.$emit('updateKey', this.captchaResp.key)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style>

</style>
