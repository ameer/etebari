<template>
  <v-menu
    v-model="open"
    bottom
    offset-y
    internal-activator
    :close-on-content-click="false"
  >
    <template #activator="{ attrs, on }">
      <v-btn
        v-bind="attrs"
        outlined
        class="filter-btn px-2"
        v-on="on"
      >
        {{ filter.title }}
        <v-icon right>
          mdi-chevron-down
        </v-icon>
      </v-btn>
    </template>
    <v-card class="pa-4">
      <v-form ref="filterForm" v-model="valid" @submit.prevent="handleSubmit">
        <component
          :is="`dashboard-report-filters-${filter.comp}`"
          :parent-index="filter.model"
          :value="formData[filter.model]"
          :label="filter.title"
          v-bind="filter"
          @input="handleInput"
          @change="handleChange"
        />
        <v-btn
          class="rounded-lg"
          dark
          color="#4d5999"
          large
          block
          type="submit"
        >
          تایید
        </v-btn>
      </v-form>
    </v-card>
  </v-menu>
</template>
<script>
export default {
  props: {
    filter: {
      type: Object,
      default: () => ({
        title: 'عنوان فیلتر',
        model: 'filter',
        comp: 'text-box'
      })
    }
  },
  data () {
    return {
      valid: true,
      formData: {},
      open: false
    }
  },
  methods: {
    handleSubmit () {
      if (this.filter.comp === 'check-box' && this.formData[this.filter.model].length === 0) {
        this.open = false
        return false
      } else {
        this.$emit('submitFilter', { ...this.formData })
        this.open = false
      }
    },
    handleInput (value) {
      this.formData[this.filter.model] = value
    },
    handleChange ({ initValue, newValue }) {
      if (this.formData[this.filter.model] instanceof Array) {
        if (newValue === null) {
          const toDeleteIndex = this.formData[this.filter.model].findIndex(i => i === initValue)
          this.formData[this.filter.model].splice(toDeleteIndex, 1)
        } else {
          this.formData[this.filter.model].push(newValue)
        }
      } else {
        this.formData[this.filter.model] = []
        this.formData[this.filter.model].push(newValue)
      }
    }
  }
}
</script>
<style>

</style>
