<template>
  <v-container class="fill-height align-start text-center">
    <v-row justify="center">
      <v-col cols="12" md="9" lg="7" xl="4">
        <div>
          <div class="d-flex flex-column align-center pt-2">
            <v-img src="/svg/invite.svg" contain max-width="52" class="mb-2" />
            <span class="blue-grey--text text--lighten-2 text-body-2 font-weight-thin pb-2">گزارش اعتباری مشتریان من</span>
            <span class="text-body-1 text-md-h6 text-brandPrimary-main font-weight-bold">درخواست با رمز یک‌بار‌مصرف</span>
          </div>
          <v-form ref="inviteOTPForm" v-model="valid" class="mt-8 mx-auto max-w-sm" @submit.prevent="handleSubmit">
            <v-text-field
              v-model="formData.national_id"
              maxlength="10"
              :rules="[$rules().required, $rules().nationalCodeChecker]"
              label="شماره ملی"
              outlined
              class="rounded mb-4"
            />
            <v-text-field
              v-model="formData.phone_number"
              maxlength="11"
              :rules="[$rules().required, $rules().mobilePhoneChecker]"
              label="شماره موبایل (مثلا: 09123333333)"
              outlined
              class="rounded mb-4"
            />
            <v-btn
              :loading="loading"
              :disabled="!valid || checkIdentical"
              block
              type="submit"
              color="primary"
              height="52"
              class="text-body-1 rounded-lg"
            >
              احراز هویت
            </v-btn>
            <v-alert
              v-if="checkIdentical"
              border="left"
              dense
              colored-border
              type="error"
              elevation="2"
              class="mt-4 rounded-lg"
            >
              <div class="text-right text-caption font-weight-light" v-text="checkIdentical" />
            </v-alert>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  layout: 'dashboard',
  data () {
    return {
      valid: true,
      loading: false,
      formData: {}
    }
  },
  computed: {
    checkIdentical () {
      if (this.formData.national_id === this.$auth.user.nationalId) {
        return 'شماره ملی درخواست دهنده با شماره ملی مشتری نمی تواند یکسان باشد'
      } else if (this.formData.phone_number === this.$auth.user.phoneNumber) {
        return 'شماره موبایل درخواست دهنده با شماره موبایل مشتری نمی تواند یکسان باشد'
      }
      return false
    }
  },
  methods: {
    ...mapActions('invitations', ['_initOTP']),
    async handleSubmit () {
      try {
        this.loading = true
        const resp = await this._initOTP(this.formData)
        console.log(resp)
      } catch (error) {
        this.$toast.error(error.msg)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
<style>

</style>
