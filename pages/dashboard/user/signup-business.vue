<template>
  <div class="fill-height py-3 py-md-8">
    <div class="d-flex align-center justify-space-between pb-2 px-4">
      <span class="text-body-1 text-md-h6 text-brandPrimary-main font-weight-bold">تکمیل اطلاعات کسب‌وکار</span>
      <v-btn class="rounded-lg" text>
        <span>بازگشت</span>
        <v-icon right>
          mdi-arrow-left
        </v-icon>
      </v-btn>
    </div>
    <v-container class="px-4">
      <v-row>
        <v-col cols="12" md="3">
          <span class="font-weight-bold pb-2">اطلاعات هویتی</span>
          <div class="text-body-2 text-brandPrimary-black leading-7">
            اطلاعات مربوط به شناسه ملی، شماره ملی مدیرعامل و شماره تماس به صورت خودکار از پروفایل شما تکمیل می‌شود و امکان تغییر ندارد.
          </div>
        </v-col>
        <v-col cols="12" md="9">
          <v-row>
            <v-col v-for="(field, i) in fields.identification" :key="`sbf-${i}`" cols="12" md="4">
              <v-select
                v-if="field.type === 'select'"
                :items="field.items"
                v-bind="field"
                dense
                hide-details
                outlined
              />
              <v-text-field
                v-else
                v-model="formData[field.name]"
                v-bind="field"
                outlined
                class="custom-text-field rounded-lg"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  layout: 'dashboard',
  data () {
    return {
      formData: {
        national_id: this.$auth.user.nationalId ?? '',
        phone_number: this.$auth.user.phoneNumber ?? '',
        business_name: '',
        business_activity: ''
      }
    }
  },
  computed: {
    fields () {
      return {
        identification: [
          {
            name: 'national_id',
            label: 'شماره ملی',
            dir: 'rtl',
            type: 'text',
            readonly: true,
            rules: [this.$rules().required, this.$rules().numeric]
          },
          {
            name: 'phone_number',
            label: 'شماره تماس',
            dir: 'rtl',
            type: 'text',
            readonly: true,
            rules: [this.$rules().required, this.$rules().numeric]
          },
          {
            name: 'business_name',
            label: 'نام کسب‌وکار',
            dir: 'rtl',
            type: 'text',
            rules: [this.$rules().required, this.$rules().onlyPersian]
          },
          {
            name: 'business_activity',
            label: 'حوزه فعالیت شرکت',
            dir: 'rtl',
            type: 'select',
            items: [
              'لوازم خانگی',
              'صنعت',
              'خدمات',
              'پزشکی و زیبایی',
              'مواد غذایی',
              'مالی',
              'کالای دیجیتال',
              'فناوری اطلاعات',
              'حمل و نقل',
              'فرهنگی'
            ],
            rules: [this.$rules().required]
          }
        ]
      }
    }
  }
}
</script>
<style>

</style>
