<template>
  <div class="fill-height py-3 px-4 d-flex flex-column">
    <div class="d-flex align-center justify-space-between mb-2">
      <span class="text-body-1 text-md-h6 text-brandPrimary-black font-weight-bold">وضعیت درخواست‌ها</span>
      <v-btn class="rounded-lg" dark color="#4d5999" large>
        درخواست  جدید
      </v-btn>
    </div>
    <v-tabs v-model="tab" class="custom-tab">
      <v-tab class="">
        جاری
      </v-tab>
      <v-tab class="">
        تکمیل شده
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" class="fill-height">
      <v-tab-item class="fill-height">
        <dashboard-empty-report />
      </v-tab-item>
      <v-tab-item class="fill-height">
        <div class="d-flex flex-column align-center fill-height">
          <div class="d-flex align-center fill-width pa-4" style="gap:16px;">
            <div class="d-flex align-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="#454555" stroke-linecap="round" stroke-linejoin="round" /></svg><span class="pr-1">فیلترها</span>
            </div>
            <dashboard-filter-btn
              v-for="(filter, i) in filters"
              :id="`filter-btn-${i}`"
              :key="`fs-${i}`"
              :filter="filter"
              @submitFilter="submitFilter"
            />
          </div>
          <div v-if="Object.keys(activeFilters).length > 0" class="d-flex align-center justify-start fill-width flex-wrap">
            <v-chip
              v-for="(value, key, i) in activeFilters"
              :key="`af-${i}`"
              class="ma-2 custom-color-chip"
              close
              color="#4d5999"
              outlined
              :close-icon="'mdi-close'"
              @click:close="removeActiveFilter(key)"
            >
              <span class="ml-1">{{ t(key) }}:</span>
              <span v-if="typeof value === 'string'">{{ value }}</span>
              <div v-else-if="value instanceof Array" class="d-flex align-center">
                <span v-for="(v, j) in value" :key="`afv-${i}-${j}`" class="ml-1">
                  {{ t(key, v) }}
                  <template v-if="j + 1 < value.length">
                    <span>
                      ،
                    </span>
                  </template>
                </span>
              </div>
            </v-chip>
            <v-btn text color="error" @click="removeAllFilters">
              <v-icon left>
                mdi-delete-outline
              </v-icon>
              <span>حدف فیلترها</span>
            </v-btn>
          </div>
          <dashboard-empty-report />
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
export default {
  layout: 'dashboard',
  data () {
    return {
      activeFilters: {},
      tab: 1,
      comp: '',
      menuActivator: null,
      menu: false,
      filters: [
        { title: 'شماره ملی', comp: 'text-box', model: 'customer_national_code' },
        {
          title: 'نوع شخص',
          comp: 'check-box',
          model: 'customer_type',
          options: [
            { title: 'شخص حقیقی', id: 1 },
            { title: 'شخص حقوقی', id: 2 }
          ]
        },
        {
          title: 'وضعیت درخواست',
          comp: 'check-box',
          model: 'request_status',
          options: [
            {
              id: 1,
              title: 'ایجاد شده'
            },
            {
              id: 2,
              title: 'در انتظار پرداخت'
            },
            {
              id: 3,
              title: 'پرداخت ناموفق'
            },
            {
              id: 4,
              title: 'پرداخت موفق'
            },
            {
              id: 5,
              title: 'درخواست معتبر'
            },
            {
              id: 10,
              title: 'شروع درخواست'
            },
            {
              id: 11,
              title: 'خطا'
            },
            {
              id: 12,
              title: 'در حال آماده سازی گزارش'
            }
          ]
        },
        {
          title: 'نوع درخواست',
          comp: 'check-box',
          model: 'share_type',
          options: [
            {
              id: 1,
              title: 'گزارش اعتباری'
            },
            {
              id: 2,
              title: 'اشتراک گذاری با رمز یکبار مصرف'
            },
            {
              id: 3,
              title: 'دعوت به اشتراک گذاری'
            },
            {
              id: 4,
              title: 'اشتراک گذاری سریع'
            }
          ]
        },
        { title: 'شناسه یکتا گزارش', comp: 'text-box', model: 'report_code' }
        // { title: 'بازه زمانی درخواستی', comp: 'text-box', model: 'from_date' }
      ],
      translateObject: {
        customer_national_code: 'شماره ملی',
        customer_type: 'نوع شخص',
        request_status: 'وضعیت درخواست',
        share_type: 'نوع درخواست',
        report_code: 'شناسه یکتا گزارش',
        from_date: 'بازه زمانی درخواستی'
      },
      enumTranslate: {
        customer_type: {
          1: 'شخص حقیقی',
          2: 'شخص حقوقی'
        },
        request_status: {
          1: 'ایجاد شده',
          2: 'در انتظار پرداخت',
          3: 'پرداخت ناموفق',
          4: 'پرداخت موفق',
          5: 'درخواست معتبر',
          10: 'شروع درخواست',
          11: 'خطا',
          12: 'در حال آماده سازی گزارش'
        },
        share_type: {
          1: 'گزارش اعتباری',
          2: 'اشتراک گذاری با رمز یکبار مصرف',
          3: 'دعوت به اشتراک گذاری',
          4: 'اشتراک گذاری سریع'
        }
      }
    }
  },
  methods: {
    openFilterMenu (activatorId, filter) {
      if (this.menu === true && activatorId === this.menuActivator) {
        this.menu = false
      }
      if (activatorId !== this.menuActivator) {
        this.menuActivator = activatorId
        this.comp = filter
        setTimeout(() => {
          this.menu = true
        })
      }
    },
    handleMenuInput (e) {
      if (e === false) {
        this.menu = false
      }
    },
    submitFilter (formData) {
      if (Object.keys(formData).length !== 0) {
        this.activeFilters = Object.assign({}, this.activeFilters, formData)
      }
    },
    removeActiveFilter (key) {
      const temp = { ...this.activeFilters }
      delete temp[key]
      this.activeFilters = Object.assign({}, temp)
    },
    removeAllFilters () {
      this.activeFilters = Object.assign({}, {})
    },
    t (key, subkey = false) {
      if (subkey) {
        return this.enumTranslate[key][subkey]
      } else {
        return this.translateObject[key]
      }
    }
  }
}
</script>
<style>

</style>
