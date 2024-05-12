<template>
  <v-card class="rounded-xxl white tw-box-shadow pa-6 fill-width">
    <v-form ref="registerForm" @submit.prevent="registerUser">
      <div class="d-flex flex-column align-center fill-width">
        <span class="primary--text font-weight-bold text-h5 pt-2 pb-0 py-sm-2">ثبت نام کاربر حقیقی</span>
        <span class="text-brandSecondary-light font-weight-bold text-center lh-32">
          شماره ملی {{ national_id }}
        </span>
        <span class="text-brandSecondary-light text-body-2 gray-500--text text-center py-10 lh-32 py-sm-5">جهت دریافت کد تأیید، شماره موبایل خود را وارد نمایید و دکمه تأیید و ادامه را بزنید.
        </span>
      </div>
      <div class="d-flex flex-column">
        <v-text-field v-model="formData.national_id" label="شماره موبایل (مثلا: 09123333333)" outlined class="rounded" />
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
  </v-card>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  layout: 'auth',
  auth: false,
  data () {
    return {
      formData: {
        national_id: '',
        phone_number: '',
        captcha: ''
      }
    }
  },
  computed: {
    national_id () {
      return this.$route.params.national_id
    }
  },
  methods: {
    ...mapActions('accounts', ['_registerUser']),
    registerUser () {
      this._registerUser(this.formData).then((resp) => {
        // Try with number
      })
    }
  }
}
</script>
