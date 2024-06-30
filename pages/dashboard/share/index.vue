<template>
  <div class="fill-height py-3 px-4 d-flex flex-column">
    <div class="d-flex align-center justify-space-between mb-2">
      <span class="text-body-1 text-md-h6 text-brandPrimary-black font-weight-bold">وضعیت درخواست‌ها</span>
      <v-btn class="rounded-lg" dark color="#4d5999" large @click.stop="newRequestModal = true">
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
    <v-tabs-items v-model="tab" class="fill-height overflow-unset">
      <v-tab-item class="fill-height">
        <common-modal v-model="newRequestModal" v-bind="requestModalConfig">
          <dashboard-invitations-options />
        </common-modal>
        <dashboard-empty-report />
      </v-tab-item>
      <v-tab-item class="fill-height">
        <div class="d-flex flex-column align-center fill-height">
          <dashboard-filter-btn-container
            :filters="filters"
            @submitFilter="submitFilter"
          />
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
              <span class="ml-1">{{ $t(key) }}:</span>
              <span v-if="typeof value === 'string'">{{ value }}</span>
              <div v-else-if="value instanceof Array" class="d-flex align-center">
                <span v-for="(v, j) in value" :key="`afv-${i}-${j}`" class="ml-1">
                  {{ $t(key, v) }}
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
              <span>حذف فیلترها</span>
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
      tab: 0,
      newRequestModal: false,
      requestModalConfig: {
        title: 'درخواست گزارش اعتباری مشتریان من',
        subtitle: 'برای ارسال درخواست گزارش اعتباری می توانید یکی از روش های زیر را انتخاب نمایید'
      },
      filters: [
        {
          title: 'شماره ملی',
          id: 'national_code',
          comp: 'text-box',
          model: 'customer_national_code'
        },
        {
          title: 'نوع شخص',
          id: 'customer_type',
          comp: 'check-box',
          model: 'customer_type',
          options: [
            { title: 'شخص حقیقی', id: 1 },
            { title: 'شخص حقوقی', id: 2 }
          ]
        },
        {
          title: 'وضعیت درخواست',
          id: 'request_status',
          comp: 'check-box',
          model: 'request_status',
          options: [
            {
              order: 1,
              value: 5,
              title: 'دریافت شده'
            },
            {
              order: 2,
              value: 11,
              title: 'خطا'
            },
            {
              order: 3,
              value: 13,
              title: 'منقضی شده پیش از دریافت مشتری'
            }
          ]
        },
        {
          title: 'نوع درخواست',
          id: 'share_type',
          comp: 'check-box',
          model: 'share_type',
          options: [
            {
              order: 1,
              value: 2,
              title: 'اشتراک گذاری مستقیم'
            },
            {
              order: 2,
              value: 3,
              title: 'اشتراک گذاری با رمز یکبار مصرف'
            },
            {
              order: 3,
              value: 1,
              title: 'دعوت به اشتراک گذاری'
            }
          ]
        },
        {
          title: 'شناسه یکتا گزارش',
          id: 'report_code',
          comp: 'text-box',
          model: 'report_code'
        },
        {
          title: 'بازه زمانی درخواستی',
          id: 'date_range',
          comp: 'date-picker',
          model: ['from_date', 'to_date']
        }
      ]
    }
  },
  methods: {
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
    }
  }
}
</script>
<style>

</style>
