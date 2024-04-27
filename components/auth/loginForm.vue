<template>
  <v-form ref="loginForm" v-model="isFormValid" @submit.prevent="userLogin">
    <div class="d-flex flex-column align-center fill-width">
      <span class="primary--text font-weight-bold text-h5 pt-2 pb-0 py-sm-2">
        ورود به سامانه
      </span>
      <span class="text-brandSecondary-light text-body-2 gray-500--text text-center py-10 lh-32 py-sm-5">لطفاً نام کاربری و رمز عبور خود را وارد نمایید و دکمه ورود به سامانه را بزنید.
      </span>
    </div>
    <div class="d-flex flex-column">
      <v-text-field
        v-model="formData.username"
        label="نام کاربری"
        :rules="[$rules().required]"
        outlined
        class="rounded"
      />
      <v-text-field
        v-model="formData.password"
        :rules="[$rules().required]"
        label="رمز عبور"
        autocomplete="new-password"
        outlined
        :append-icon="!showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword"
      />
      <div class="text-left">
        <v-btn
          color="primary"
          text
          plain
          :ripple="false"
          class="px-0"
          height="32"
          @click="forgotPasswordDialog = true"
        >
          <span class="text-body-2">فراموشی رمز عبور</span>
        </v-btn>
      </div>
      <div class="pt-3">
        <div class="d-flex fill-width justify-space-between pt-3">
          <v-text-field outlined class="rounded fill-width text-center p-2" placeholder="کد امنیتی" />
          <v-img contain max-height="56" alt="captcha" src="/captcha.jpg" />
        </div>
      </div>
      <v-btn
        block
        type="submit"
        color="primary"
        height="52"
        class="text-body-1 rounded-lg"
        :loading="loading"
      >
        تأیید و ادامه
      </v-btn>
      <v-btn
        block
        text
        color="primary"
        height="52"
        class="font-weight-medium mt-4 text-body-1 rounded-lg"
        @click="$nuxt.$emit('setLoginMode', false)"
      >
        ورود با رمز یک‌بار مصرف
      </v-btn>
    </div>
    <auth-forgot-password-dialog v-model="forgotPasswordDialog" />
  </v-form>
</template>
<script>
export default {
  data () {
    return {
      showPassword: false,
      formData: {
        username: 'kminchelle',
        password: '0lelplR'
      },
      loading: false,
      isFormValid: false,
      forgotPasswordDialog: false
    }
  },
  methods: {
    async userLogin () {
      try {
        this.loading = true
        const response = await this.$auth.loginWith('local', {
          data: this.formData
        })
        console.log(response)
      } catch (err) {
        console.log(err)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
  <style>

  </style>
