<template>
  <div class="d-flex fill-width justify-space-between pt-3">
    <v-text-field
      maxlength="4"
      outlined
      class="rounded fill-width text-center ml-2"
      placeholder="کد امنیتی"
      :value="value"
      :rules="$attrs.rules"
      @input="$emit('input', $event)"
    >
      <template #append>
        <v-btn icon :loading="loading" @click.stop="getCaptcha">
          <v-icon>
            mdi-reload
          </v-icon>
        </v-btn>
      </template>
    </v-text-field>
    <v-img
      contain
      max-height="56"
      :loading="loading"
      width="90"
      lazy-src="/captcha.jpg"
      alt="captcha"
      :src="captchaImg"
    >
      <template #placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          />
        </v-row>
      </template>
    </v-img>
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
      captchaResp: {},
      loading: false
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
        this.loading = true
        const resp = await this._getCaptcha()
        this.captchaResp = Object.assign({}, resp.data)
        this.$emit('updateKey', this.captchaResp.key)
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
<style>

</style>
