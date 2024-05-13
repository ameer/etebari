<template>
  <v-card class="rounded-xxl white tw-box-shadow pa-6 fill-width">
    <v-form ref="registerForm" @submit.prevent="loginOTP">
      <div class="d-flex flex-column align-center fill-width">
        <span class="primary--text font-weight-bold text-h5 pt-2 pb-0 py-sm-2">ورود به سامانه</span>
        <span class="text-brandSecondary-light font-weight-bold text-center lh-32">
          شماره موبایل {{ phone_number }}
        </span>
        <span class="text-brandSecondary-light text-body-2 gray-500--text text-center py-10 lh-32 py-sm-5">یک کد برای شماره موبایل شما پیامک شد. آن را در کادر زیر وارد نموده و دکمه ورود به سامانه را بزنید.
        </span>
      </div>
      <div class="text-body-2 text-gray-500 d-flex justify-center align-center pt-4 pb-2 pb-sm-10">
        <span>شماره اشتباه است؟</span>
        <v-btn text @click="$router.replace({ name: 'auth-register-mobile', params: { national_id: national_id, editNumber: true }})">
          <span
            class="text-brandPrimary-main"
          >اصلاح شماره
          </span>
        </v-btn>
      </div>
      <div class="d-flex flex-column">
        <v-text-field
          v-model="otp"
          autocomplete="off"
          maxlength="5"
          :rules="[$rules().required, $rules().numeric, $rules(5).min, $rules(5).max]"
          label=""
          placeholder="- - - - -"
          outlined
          class="rounded custom-otp-input"
          type="tel"
        />
        <!-- <div class="pt-3">
          <auth-captcha-field v-model="formData.captcha" @updateKey="key = $event" />
        </div> -->
        <v-btn block type="submit" color="primary" height="52" class="text-body-1 rounded-lg">
          ورود به سامانه
        </v-btn>
        <v-btn
          block
          text
          color="primary"
          height="52"
          class="font-weight-medium mt-4 text-body-1 rounded-lg"
          @click="$router.go(-1)"
        >
          بازگشت
        </v-btn>
      </div>
    </v-form>
  </v-card>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  layout: 'auth',
  auth: false,
  middleware: 'authSteps',
  data () {
    return {
      otp: ''
    }
  },
  computed: {
    national_id () {
      return this.$route.params.national_id
    },
    phone_number () {
      return this.$route.params.phone_number
    }
  },
  methods: {
    ...mapActions('accounts', ['_loginOTP']),
    loginOTP () {
      const data = { national_id: this.national_id, otp: this.otp }
      this._loginOTP(data).then((resp) => {
        this.$auth.setUserToken(resp.data.access, resp.data.refresh)
      })
    }
  }
}
</script>
