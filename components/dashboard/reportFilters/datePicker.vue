<template>
  <div>
    <v-text-field
      placeholder="از تاریخ"
      title="از تاریخ"
      :label="formData['from_date'] && formData['from_date'] !== '' ? 'از تاریخ' : ''"
      :class="'picker-from_date'"
      outlined
      dense
      style="min-height: 40px !important;"
      class="rounded custom-text-field"
      :value="formData['from_date']"
      append-icon="mdi-calendar"
    />
    <datePicker
      :min="min"
      :max="formData['to_date'] ?? max"
      auto-submit
      popover="bottom-right"
      :value="formData['from_date']"
      :custom-input="'.picker-from_date'"
      :append-to="'#modal-container'"
      @input="$emit('input', $event, 'from_date')"
    />
    <v-text-field
      placeholder="تا تاریخ"
      title="تا تاریخ"
      :label="formData['to_date'] && formData['to_date'] !== '' ? 'تا تاریخ' : ''"
      :class="'picker-to_date'"
      outlined
      dense
      style="min-height: 40px !important;"
      class="rounded custom-text-field"
      :value="formData['to_date']"
      append-icon="mdi-calendar"
    />
    <datePicker
      :min="formData['from_date']"
      :max="max"
      auto-submit
      popover="bottom-right"
      :value="formData['to_date']"
      :custom-input="'.picker-to_date'"
      :append-to="'#modal-container'"
      @input="$emit('input', $event, 'to_date')"
    />
    <v-divider class="mb-3" />
    <div class="d-flex flex-column">
      <v-btn
        v-for="(btn, i) in quickDateButtons"
        :key="`qdb-${i}`"
        class="mb-2 px-0"
        text
        min-height="60"
        @click="setQuickDate(btn)"
      >
        <div class="d-flex flex-column align-start flex-grow-1 pa-2">
          <span class="lh-24 text-body-1 text--primary" v-text="btn.text" />
          <span class="lh-20 text-body-2 text--secondary">از {{ btn.from }} تا {{ btn.to }}</span>
        </div>
      </v-btn>
    </div>
  </div>
</template>
<script>
import VuePersianDatetimePicker from 'vue-persian-datetime-picker'
export default {
  components: {
    datePicker: VuePersianDatetimePicker
  },
  props: {
    formData: {
      type: Object,
      default: () => {}
    },
    models: {
      type: Array,
      default: () => ['model']
    }
  },
  computed: {
    min () {
      const oneYearAgo = new Date()
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)
      return this.$df(oneYearAgo)
    },
    max () {
      return this.$df(this.currentDate)
    },
    currentDate () {
      return new Date()
    },
    quickDateButtons () {
      const today = this.getPastDate(0)
      const lastWeek = this.getPastDate(7)
      const lastMonth = this.getPastDate(30)
      const lastYear = this.getPastDate(365)
      const btns = [
        { text: 'هفته گذشته', from: lastWeek, to: today },
        { text: 'ماه گذشته', from: lastMonth, to: today },
        { text: 'سال گذشته', from: lastYear, to: today }
      ]
      return btns
    }
  },
  methods: {
    getPastDate (daysAgo) {
      const date = new Date()
      date.setDate(date.getDate() - daysAgo)
      return this.$df(date)
    },
    setQuickDate (btn) {
      this.$emit('input', btn.from, 'from_date')
      this.$emit('input', btn.to, 'to_date')
    }
  }
}
</script>
<style>

</style>
