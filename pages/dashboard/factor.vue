<template>
  <div class="d-flex flex-column fill-height pa-4">
    <v-container>
      <v-row dense>
        <v-col cols="9" md="6" offset-md="3">
          <h3 class="text-h6 font-weight-bold text-brandPrimary-main text-center">
            پرداخت  گزارش  اعتباری
          </h3>
        </v-col>
        <v-col cols="3" class="text-left">
          <v-btn color="gray lighten-1" :ripple="false" text to="/dashboard/inquiry">
            بازگشت و اصلاح
            <v-icon right>
              mdi-arrow-left
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" xl="5">
          <div class="rounded-lg silver pa-4 pr-md-6">
            <div class="rounded-lg rounded-tr-none">
              <div class="whitespace-nowrap text-sm font-weight-bold mt-3" /><div class="my-4">
                <div class="d-flex justify-start align-center">
                  <span class="w-72">شماره ملی</span>
                  <span class=" font-weight-bold w-12 primaryBlack--text">{{ $auth.user.nationalId }}</span>
                </div>
              </div>
              <div class="my-4">
                <div class="w-full d-flex justify-start align-center">
                  <span class="w-72">قیمت گزارش اعتباری </span>
                  <span class="d-flex align-center">
                    <span class=" font-weight-bold w-12 primaryBlack--text">73,400</span>
                    <span class="text-gray-500 mx-6">ریال</span>
                  </span>
                </div>
              </div>
              <div class="my-4">
                <div class="w-full d-flex justify-start  align-center">
                  <span class="w-72">مالیات بر ارزش افزوده </span>
                  <span class="d-flex align-center">
                    <span class="font-weight-bold w-12 primaryBlack--text">6,600</span>
                    <span class="text-gray-500 mx-6">ریال</span>
                  </span>
                </div>
              </div>
              <div class="my-4">
                <div class="w-full d-flex justify-start  align-center">
                  <span class="w-72">تخفیف </span>
                  <span class="d-flex align-center">
                    <span class=" font-weight-bold w-12 primaryBlack--text">0</span>
                    <span class="text-gray-500 mx-6">ریال</span>
                  </span>
                </div>
              </div>
              <div class="my-4">
                <div class="mb-2">
                  <v-divider class="border-b-2 border-dashed ml-10 border-[#4D599933]" style="border-color: rgb(77 89 153 / 20%);border-style: dashed;border-width: 0;border-bottom-width: 2px;" />
                </div><div class="w-full d-flex justify-start  align-center">
                  <span class="w-72 font-weight-bold">مبلغ کل </span>
                  <span class="d-flex align-center">
                    <span class="font-weight-bold w-12 text-h6 text-brandPrimary-main">80,000</span>
                    <span class="text-gray-500 mx-6">ریال</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" xl="5" offset-xl="2">
          <div class="pa-3 border-gray-100 rounded-lg d-flex align-center mb-4">
            <span class="text-caption">کد تخفیف دارید؟</span>
            <v-spacer />
            <v-btn outlined color="primary">
              <v-icon left>
                mdi-percent
              </v-icon>
              <span>ثبت کد تخفیف</span>
            </v-btn>
          </div>
          <div class="pa-3 border-gray-100 rounded-lg d-flex align-center mb-4">
            <span class="text-caption">درگاه پرداخت</span>
            <v-spacer />
            <dashboard-gateways v-model="formData.gateway_id" :gateways="gateways" />
          </div>
          <div class="pa-3 border-gray-100 rounded-lg d-flex flex-column align-center mb-4">
            <div class="d-flex align-center justify-space-between fill-width">
              <span class="text-caption">مبلغ قابل پرداخت</span>
              <span class="d-flex align-center">
                <span class="font-weight-bold w-12 primaryBlack--text">80,000</span>
                <span class="text-gray-500 mx-6">ریال</span>
              </span>
            </div>
            <div class="d-flex align-center  fill-width">
              <span class="text-caption">موجودی کیف پول</span>
              <span v-if="userBalance < 80000" class="text-caption error--text  mr-1">(موجودی ناکافی)</span>
              <v-spacer />
              <span class="d-flex align-center">
                <span class="font-weight-bold w-12 primaryBlack--text">{{ $addTSP(userBalance) }}</span>
                <span class="text-gray-500 mx-6">ریال</span>
              </span>
            </div>
            <div class="fill-width">
              <v-divider class="border-b-2 border-dashed my-4 border-[#4D599933]" style="border-color: rgb(77 89 153 / 20%);border-style: dashed;border-width: 0;border-bottom-width: 2px;" />
            </div>
            <div class="d-flex align-center fill-width mb-4">
              <span class="text-caption">مبلغ  مورد نیاز شارژ  حساب</span>
              <v-spacer />
              <span class="d-flex align-center">
                <span class="font-weight-bold w-12 text-h6 success--text">80,000</span>
                <span class="text-gray-500 mx-6">ریال</span>
              </span>
            </div>
            <v-btn
              block
              color="success"
              height="52"
              class="rounded-lg"
              :loading="loading"
              @click="submitFactor"
            >
              <div class="text-body-1">
                پرداخت (80,000 ریال)
              </div>
            </v-btn>
            <span class="mt-4 text-caption text-brandPrimary-black text-center">ضمن تأیید هزینه گزارش، موافقت خود را با <span class="text-brandPrimary-main pointer whitespace-nowrap" @click.stop="openTermsDialog"> قوانین و مقررات </span> سامانه اعلام می‌نمایم.</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <dashboard-terms-dialog v-model="termsDialog" />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  layout: 'dashboard',
  data () {
    return {
      loading: false,
      termsDialog: false,
      gateways: [],
      formData: {
        amount: 80000,
        gateway_id: 0,
        callback_url: 'string'
      }
    }
  },
  async fetch () {
    try {
      const resp = await this._getGateways()
      this.gateways = resp.data
    } catch (error) {
    }
  },
  computed: {
    ...mapGetters('accounts', ['userBalance']),
    ...mapGetters('payments', ['callbackURL'])
  },
  methods: {
    ...mapActions('payments', ['_getGateways', '_initUserPayment']),
    openTermsDialog () {
      this.termsDialog = true
    },
    async submitFactor () {
      this.loading = true
      this.formData.callback_url = this.callbackURL
      try {
        const resp = await this._initUserPayment(this.formData)
        if (resp.data) {
          window.location.href = resp.data.redirectUrl
        }
      } catch (error) {
        this.$toast.error('خطا در اتصال به درگاه')
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
