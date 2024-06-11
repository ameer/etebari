<template>
  <div class="fill-height py-3 py-md-8">
    <div class="d-flex align-center justify-space-between pb-2 px-4">
      <span class="text-body-1 text-md-h6 text-brandPrimary-main font-weight-bold">تکمیل اطلاعات کسب‌وکار</span>
      <v-btn class="rounded-lg" text @click="$router.go(-1)">
        <span>بازگشت</span>
        <v-icon right>
          mdi-arrow-left
        </v-icon>
      </v-btn>
    </div>
    <v-form ref="businessForm" v-model="valid" @submit.prevent="handleSubmitBusiness">
      <v-container class="px-4">
        <v-row>
          <template v-for="(section, i) in sections">
            <v-col :key="`sbtdc-${i}`" cols="12" md="3">
              <span class="font-weight-bold pb-2">{{ section.title }}</span>
              <div class="text-body-2 text-brandPrimary-black leading-7">
                {{ section.desc }}
              </div>
            </v-col>
            <v-col :key="`sbfc-${i}`" cols="12" md="9">
              <v-row>
                <v-col v-for="(field, j) in section.fields" :key="`sbf-${j}`" cols="12" :md="field.md">
                  <v-select
                    v-if="field.type === 'select'"
                    v-model="formData[field.name]"
                    :items="field.items"
                    v-bind="field"
                    dense
                    hide-details
                    outlined
                    class="custom-text-field"
                    :class="{'required' : field.required}"
                  />
                  <dashboard-profile-file-uploader v-else-if="field.type === 'file'" :class="{'required' : field.required}" v-bind="field" @fileToUpload="setFileToUpload(field.name, $event)" />
                  <v-text-field
                    v-else
                    v-model="formData[field.name]"
                    v-bind="field"
                    outlined
                    class="custom-text-field"
                    :class="{'required' : field.required}"
                  />
                </v-col>
              </v-row>
            </v-col>
            <v-col :key="`sbd-${i}`" cols="12">
              <v-divider class="my-3" />
            </v-col>
          </template>
          <v-col cols="6">
            <v-checkbox large class="mr-4" :rules="[$rules().required]">
              <template #label>
                <div>
                  <span class="text-brandPrimary-main pointer whitespace-nowrap text-underline" @click.stop="openTermsDialog"> قوانین و مقررات</span> را مطالعه نمودم و پذیرفتم.
                </div>
              </template>
            </v-checkbox>
          </v-col>
          <v-col cols="6" class="text-center text-md-left">
            <v-btn
              color="indigo"
              height="46"
              :disabled="!valid"
              type="submit"
              class="rounded-lg white--text"
              :loading="loading"
            >
              ذخیره و ارسال درخواست بررسی اطلاعات
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <dashboard-profile-terms-dialog v-model="termsDialog" />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  layout: 'dashboard',
  data () {
    return {
      valid: true,
      formData: {
        national_id: this.$auth.user.nationalId ?? '',
        phone_number: this.$auth.user.phoneNumber ?? '',
        business_name: '',
        business_activity: ''
      },
      termsDialog: false,
      loading: false
    }
  },
  computed: {
    sections () {
      return [
        {
          title: 'اطلاعات هویتی',
          desc: 'اطلاعات مربوط به شناسه ملی، شماره ملی مدیرعامل و شماره تماس به صورت خودکار از پروفایل شما تکمیل می‌شود و امکان تغییر ندارد.',
          fields: [
            {
              name: 'national_id',
              label: 'شماره ملی',
              dir: 'rtl',
              type: 'text',
              readonly: true,
              rules: [this.$rules().required, this.$rules().numeric],
              md: 4
            },
            {
              name: 'phone_number',
              label: 'شماره تماس',
              dir: 'rtl',
              type: 'text',
              readonly: true,
              rules: [this.$rules().required, this.$rules().numeric],
              md: 4
            },
            {
              name: 'business_name',
              label: 'نام کسب‌وکار',
              dir: 'rtl',
              type: 'text',
              rules: [this.$rules().required, this.$rules().onlyPersian],
              md: 4,
              required: true
            },
            {
              name: 'business_activity',
              label: 'حوزه فعالیت شرکت',
              dir: 'rtl',
              type: 'select',
              items: [{ text: 'لوازم خانگی', value: 1 }, { text: 'صنعت', value: 2 }, { text: 'خدمات', value: 3 }, { text: 'پزشکی و زیبایی', value: 4 }, { text: 'مواد غذایی', value: 5 }, { text: 'مالی', value: 6 }, { text: 'کالای دیجیتال', value: 7 }, { text: 'فناوری اطلاعات', value: 8 }, { text: 'حمل و نقل', value: 9 }, { text: 'فرهنگی', value: 10 }],
              rules: [this.$rules().required],
              md: 4,
              required: true
            }
          ]
        },
        {
          title: 'اطلاعات نماینده',
          desc: 'برای ارتباط و انجام هماهنگی‌ها، در صورت لزوم اطلاعات نماینده خود را تکمیل نمایید.',
          fields: [
            {
              name: 'representative_fist_name',
              label: 'نام نماینده',
              dir: 'rtl',
              type: 'text',
              rules: [this.$rules().onlyPersian],
              md: 4
            },
            {
              name: 'representative_last_name',
              label: 'نام خانوادگی نماینده',
              dir: 'rtl',
              type: 'text',
              rules: [this.$rules().onlyPersian],
              md: 4
            },
            {
              name: 'representative_phone_number',
              label: 'شماره تماس نماینده',
              dir: 'rtl',
              type: 'text',
              maxlength: 11,
              rules: [this.$rules().mobilePhoneChecker],
              md: 4
            }
          ]
        },
        {
          title: 'اطلاعات مکانی',
          desc: '',
          fields: [
            {
              name: 'address',
              label: 'آدرس',
              dir: 'rtl',
              type: 'text',
              rules: [this.$rules().required],
              md: 12,
              required: true
            },
            {
              name: 'postal_code',
              label: 'کد پستی',
              dir: 'rtl',
              type: 'text',
              maxlength: 10,
              rules: [this.$rules().required, this.$rules().numeric],
              md: 4,
              required: true
            }
          ]
        },
        {
          title: 'لوگو یا تصویر کسب‌وکار',
          desc: `تصویر لوگوی خود را بارگذاری کنید.
(فرمت های قابل قبول JPG, JPEG, PNG, SVG)`,
          fields: [
            {
              name: 'logo',
              label: 'لوگو یا تصویر کسب‌وکار',
              type: 'file',
              rules: [this.$rules().required],
              md: 3,
              accept: '.jpg,.jpeg,.png,.svg',
              required: true
            }
          ]
        },
        {
          title: 'مدارک',
          desc: `جواز کسب و تصویر کارت ملی خود را بارگذاری کنید.
(فرمت‌های قابل قبول PDF , PNG , JPG, JPEG)`,
          fields: [
            {
              name: 'business_license',
              label: 'جواز کسب',
              type: 'file',
              rules: [this.$rules().required],
              md: 3,
              accept: '.jpg,.jpeg,.png,.pdf',
              required: true
            },
            {
              name: 'national_card_image',
              label: 'تصویر کارت ملی',
              type: 'file',
              rules: [this.$rules().required],
              md: 3,
              accept: '.jpg,.jpeg,.png,.pdf',
              required: true
            }
          ]
        }
      ]
    }
  },
  methods: {
    ...mapActions('business', ['_updateBusiness']),
    openTermsDialog () {
      this.termsDialog = true
    },
    setFileToUpload (name, file) {
      if (file === null) {
        delete this.formData[name]
      } else {
        this.formData[name] = file
      }
    },
    handleSubmitBusiness () {
      if (!this.$refs.businessForm.validate()) {
        return false
      }
      this.loading = true
      this._updateBusiness(this.formData).then((resp) => {
        this.$toast.success('اطلاعات کسب و کار با موفقیت بارگذاری شد.')
        this.$router.push('/dashboard/user/profile')
      }).catch((err) => {
        this.$toast.error(err)
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
<style>

</style>
