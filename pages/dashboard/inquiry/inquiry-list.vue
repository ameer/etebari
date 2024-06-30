<template>
  <div class="fill-height py-3 px-4 d-flex flex-column">
    <div class="d-flex align-center justify-space-between mb-2">
      <span class="text-body-1 text-md-h6 text-brandPrimary-black font-weight-bold">تاریخچه گزارش‌های من</span>
    </div>
    <v-tabs v-model="tab" class="custom-tab">
      <v-tab class="">
        استعلام‌های من
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" class="fill-height overflow-unset">
      <v-tab-item class="fill-height">
        <div class="d-flex flex-column align-center">
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
        </div>
        <dashboard-empty-report v-if="requests.length === 0" />
        <common-custom-dt v-else :table-headers="tableHeaders" :items="requests" class="bordered custom-height">
          <template #rank="{item}">
            <div class="text-center rank">
              <div class="custom-chip text-fs-18" :class="rankColor(item.rank)">
                {{ item.rank }}
              </div>
            </div>
          </template>
          <template #requestRegisterDatetime="{value}">
            <common-split-date-time :value="value" />
          </template>
          <template #actions="{item}">
            <div class="d-flex align-center justify-space-around">
              <v-btn icon color="primaryBlack" title="مشاهده گزارش" @click="view(item.url)">
                <v-icon>mdi-eye-outline</v-icon>
              </v-btn>
              <v-btn icon color="primaryBlack" title="اشتراک گذاری" @click="share(item)">
                <v-icon>mdi-share-variant-outline</v-icon>
              </v-btn>
              <v-btn icon color="primaryBlack" title="کپی کردن لینک گزارش" @click="share(item)">
                <v-icon>mdi-content-copy</v-icon>
              </v-btn>
            </div>
          </template>
        </common-custom-dt>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  layout: 'dashboard',
  data () {
    return {
      activeFilters: {},
      tab: 0,
      requests: [],
      tableHeaders: [
        {
          text: 'رتبه اعتباری',
          value: 'rank',
          align: 'center',
          class: 'text-body-2 silver text-brandPrimary-black font-weight-bold',
          type: 'customSlot',
          cellClass: 'text-body-1 text-center',
          sortable: false
        },
        {
          text: 'امتیاز اعتباری',
          value: 'score',
          align: 'center',
          class: 'text-body-2 silver text-brandPrimary-black font-weight-bold',
          type: 'text',
          cellClass: 'text-body-1 text-center',
          sortable: false
        },
        {
          text: 'شناسه یکتای گزارش',
          value: 'creditCode',
          align: 'center',
          class: 'text-body-2 silver text-brandPrimary-black font-weight-bold',
          type: 'text',
          cellClass: 'text-body-1 text-center',
          sortable: false
        },
        {
          text: 'تاریخ استعلام',
          value: 'requestRegisterDatetime',
          align: 'center',
          class: 'text-body-2 silver text-brandPrimary-black font-weight-bold',
          type: 'customSlot',
          cellClass: 'text-body-1 text-center',
          sortable: false
        },
        {
          text: 'اعتبار گزارش',
          value: 'expireDateState',
          align: 'center',
          class: 'text-body-2 silver text-brandPrimary-black font-weight-bold',
          type: 'text',
          cellClass: 'text-body-1 text-center',
          sortable: false
        },
        {
          text: '',
          value: 'actions',
          align: 'center',
          class: 'text-body-2 silver text-brandPrimary-black font-weight-bold',
          type: 'customSlot',
          cellClass: 'text-body-1 text-center',
          sortable: false
        }
      ],
      filters: [
        {
          title: 'بازه زمانی درخواستی',
          id: 'date_range',
          comp: 'date-picker',
          model: ['from_date', 'to_date']
        },
        {
          title: 'شناسه یکتا گزارش',
          id: 'report_code',
          comp: 'text-box',
          model: 'report_code'
        }
        // {
        //   title: 'رتبه اعتباری',
        //   id: 'rank',
        //   comp: 'check-box',
        //   model: 'share_type',
        //   options: [
        //     {
        //       order: 1,
        //       value: 2,
        //       title: 'اشتراک گذاری مستقیم'
        //     },
        //     {
        //       order: 2,
        //       value: 3,
        //       title: 'اشتراک گذاری با رمز یکبار مصرف'
        //     },
        //     {
        //       order: 3,
        //       value: 1,
        //       title: 'دعوت به اشتراک گذاری'
        //     }
        //   ]
        // }
      ]
    }
  },
  async fetch () {
    try {
      const resp = await this._getUserRequests()
      this.requests = resp.data.credits
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    ...mapActions('requests', ['_getUserRequests']),
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
    share (item) {
      console.log(item)
    },
    rankColor (rank) {
      if (!rank) {
        return 'bg-gray-100 text-gray-300 text-fs-18'
      }
      switch (rank = rank.replace(/[0-9۰-۹]/g, '')) {
        case 'A':
          return 'bg-green-600 white--text'
        case 'B':
          return 'bg-green-200 text-brandPrimary-black'
        case 'C':
          return 'bg-orange-400 white--text'
        case 'D':
          return 'bg-red-400 white--text'
        case 'E':
          return 'bg-red-600 white--text'
        default:
          return 'bg-green-500 white--text'
      }
    }
  }
}
</script>
<style>

</style>
