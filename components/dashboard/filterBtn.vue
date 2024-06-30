<template>
  <v-menu
    v-click-outside="onClickOutsideStandard"
    :value="open"
    bottom
    offset-y

    internal-activator
    :close-on-click="false"
    :close-on-content-click="false"
  >
    <template #activator="{ }">
      <v-btn
        :id="$attrs.id"
        outlined
        class="filter-btn px-2"
        @click="open = true"
      >
        {{ filter.title }}
        <v-icon right :class="{'rotate-chervron' : open}">
          mdi-chevron-down
        </v-icon>
      </v-btn>
    </template>
    <v-card class="pa-4" min-width="288">
      <v-form ref="filterForm" v-model="valid" @submit.prevent="handleSubmit">
        <component
          :is="`dashboard-report-filters-${filter.comp}`"
          :parent-index="filter.model"
          :models="models"
          :form-data="formData"
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
  computed: {
    models () {
      if (typeof this.filter.model === 'string') {
        return [this.filter.model]
      } else if (this.filter.model instanceof Array) {
        return this.filter.model
      } else {
        return []
      }
    }
  },
  methods: {
    onClickOutsideStandard (e) {
      try {
        if (!e.target.closest(`#${this.$attrs.id}`) && !e.target.closest('#modal-container') && !e.target.closest('.v-menu__content.theme--light.menuable__content__active') && !e.target.className.startsWith('vpd')) {
          this.open = false
        }
      } catch (error) {

      }
    },
    handleSubmit () {
      if (this.filter.comp === 'check-box' && this.formData[this.filter.model].length === 0) {
        this.open = false
        return false
      } else {
        this.$emit('submitFilter', { ...this.formData })
        this.open = false
      }
    },
    handleInput (value, model) {
      console.log(value, model)
      this.formData = Object.assign({}, this.formData, { [model]: value })
    },
    handleChange ({ initValue, newValue }, model) {
      if (this.formData[model] instanceof Array) {
        if (newValue === null) {
          const toDeleteIndex = this.formData[model].findIndex(i => i === initValue)
          this.formData[model].splice(toDeleteIndex, 1)
        } else {
          this.formData[model].push(newValue)
        }
      } else {
        this.formData[model] = []
        this.formData[model].push(newValue)
      }
    }
  }
}
</script>
<style>

</style>
