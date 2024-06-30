<template>
  <div class="d-flex flex-column fill-height pa-4">
    <v-container class="pa-4 fill-height text-center">
      <v-row justify="center" class="fill-height">
        <v-col cols="12" md="9" lg="6" xl="5">
          <h3 class="text-h6 font-weight-bold text-brandPrimary-main pt-md-4">
            گزارش اعتباری من
          </h3>
          <div class="text-body-2 lh-32 mt-5 mb-2">
            در هر لحظه و زمان می‌توانید جدیدترین گزارش اعتباری خود را درخواست نمایید یا گزارش‌های دریافت شده‌ی قبلی خود را مشاهده کنید.
          </div>
          <v-btn
            min-width="384"
            max-width="384"
            color="primary"
            class="text-body-1 font-weight-bold rounded-lg my-6"
            height="52"
            :loading="loading"
            @click="handleNewInquiry"
          >
            درخواست گزارش جدید
          </v-btn>
          <div class="text-h6 font-weight-bold text--secondary">
            یا
          </div>
          <v-btn
            min-width="384"
            max-width="384"
            outlined
            color="#454555"
            class="text-body-1 font-weight-bold rounded-lg my-6"
            style="border-width: 2px;"
            height="52"
            to="/dashboard/inquiry/inquiry-list"
          >
            مشاهده گزارش‌های قبلی
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <div class="bg-brandPrimary-silver py-4 px-4 mt-auto">
      <h3 class="text-body-1 font-weight-bold text-brandPrimary-main">
        مراحل دریافت گزارش اعتباری
      </h3>
      <v-container class="text-brandPrimary-black">
        <v-row>
          <v-col cols="12" md="5" class="d-flex align-center">
            <v-avatar size="64" color="#70718f" class="ml-3">
              <v-icon size="32" color="white">
                mdi-credit-card
              </v-icon>
            </v-avatar>
            <div class="d-flex flex-column">
              <span class="font-weight-bold text-body-2">پرداخت  هزینه</span>
              <span class="text-caption">بعد از<b> “درخواست گزارش جدید” </b>و مشاهده تعرفه گزارش به صفحه درگاه پرداخت اینترنتی منتقل خواهید شد تا هزینه گزارش را پرداخت نمایید"</span>
            </div>
          </v-col>
          <v-col cols="12" md="5" offset-md="2" class="d-flex align-center">
            <v-avatar size="64" color="#70718f" class="ml-3">
              <v-icon size="32" color="white">
                mdi-receipt
              </v-icon>
            </v-avatar>
            <div class="d-flex flex-column">
              <span class="font-weight-bold text-body-2">مشاهده گزارش اعتباری</span>
              <span class="text-caption">سامانه، گزارش اعتباری و رتبه شما را نمایش خواهد داد. شما می‌توانید این گزارش را چاپ یا دریافت نمایید
              </span>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'InquiryIndex',
  layout: 'dashboard',
  data () {
    return {
      loading: false
    }
  },
  methods: {
    ...mapActions('requests', ['_getUserRequests', '_initUserRequest']),
    async handleNewInquiry () {
      try {
        // Check if user has unseen inquiry
        const resp = await this._getUserRequests({ unseen: true })
        if (resp.data.totalRowsCount > 0) {
          this.$router.push('/dashboard/inquiry/inquiry-list')
        } else {
          const initResponse = await this._initUserRequest()
          this.$router.push({ name: 'dashboard-factor', params: { initialData: initResponse.data }, query: { from: 'inquiry' } })
        }
      } catch (error) {

      }
    }
  }
}
</script>
<style>

</style>
