<template>
  <v-form ref="registerForm" @submit.prevent="checkRegister">
    <div class="d-flex flex-column align-center fill-width">
      <span class="primary--text font-weight-bold text-h5 pt-2 pb-0 py-sm-2">ورود / ثبت‌نام</span>
      <span class="text-brandSecondary-light text-body-2 gray-500--text text-center py-10 lh-32 py-sm-5">لطفاً شماره ملی یا شناسه ملی خود را بدون خط فاصله در کادر زیر وارد نمایید. سپس دکمه تأیید و ادامه را بزنید.
      </span>
    </div>
    <div class="d-flex flex-column">
      <v-text-field v-model="formData.national_id" label="کد ملی | شناسه ملی" outlined class="rounded" />
      <div class="pt-3">
        <auth-captcha-field v-model="formData.captcha" @updateKey="formData.key = $event" />
      </div>
      <v-btn block type="submit" color="primary" height="52" class="text-body-1 rounded-lg">
        تأیید و ادامه
      </v-btn>
      <v-btn
        block
        text
        color="primary"
        height="52"
        class="font-weight-medium mt-4 text-body-1 rounded-lg"
        @click="$nuxt.$emit('setLoginMode', true)"
      >
        ورود با نام کاربری
      </v-btn>
    </div>
  </v-form>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formData: {
        national_id: '',
        captcha: '',
        key: ''
      }
    }
  },
  methods: {
    ...mapActions('accounts', ['_checkIsRegistered']),
    checkRegister () {
      this._checkIsRegistered(this.formData).then((resp) => {
        // Go to OTP
        console.log(resp)
      }).catch((err) => {
        if (err.response?.data?.code === 2000) {
          this.$router.push({ name: 'auth-register-mobile', params: { national_id: this.formData.national_id } })
        }
      })
    }
  }
}
</script>
<style>

</style>
