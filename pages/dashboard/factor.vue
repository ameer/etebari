<template>
  <div class="d-flex flex-column fill-height pa-4">
    <v-container>
      <v-row dense>
        <v-col cols="9" md="6" offset-md="3">
          <h3 class="text-h6 font-weight-bold text-brandPrimary-main text-center">
            پرداخت  گزارش  اعتباری
          </h3>
        </v-col>
        <v-col cols="3">
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
                  <span class=" font-weight-bold w-12 primaryBlack--text">5030049681</span>
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
            <img width="64" height="64" title="زرین پال" alt="زرین پال" src="data:image/png;base64, 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">
          </div>
          <div class="pa-3 border-gray-100 rounded-lg d-flex flex-column align-center mb-4">
            <div class="d-flex align-center justify-space-between fill-width">
              <span class="text-caption">مبلغ قابل پرداخت</span>
              <span class="d-flex align-center">
                <span class="font-weight-bold w-12 primaryBlack--text">8,000</span>
                <span class="text-gray-500 mx-6">ریال</span>
              </span>
            </div>
            <div class="d-flex align-center  fill-width">
              <span class="text-caption">موجودی کیف پول</span>
              <span class="text-caption error--text  mr-1">(موجودی ناکافی)</span>
              <v-spacer />
              <span class="d-flex align-center">
                <span class="font-weight-bold w-12 primaryBlack--text">0</span>
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
            <v-btn block color="success" height="52" class="rounded-lg">
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
export default {
  layout: 'dashboard',
  data () {
    return {
      termsDialog: false
    }
  },
  methods: {
    openTermsDialog () {
      this.termsDialog = true
    }
  }
}
</script>
<style>

</style>
