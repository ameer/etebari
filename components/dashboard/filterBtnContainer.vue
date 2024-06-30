<template>
  <div class="d-flex align-center fill-width pa-4" style="gap:16px;">
    <div class="d-flex align-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="#454555" stroke-linecap="round" stroke-linejoin="round" /></svg><span class="pr-1">فیلترها</span>
    </div>
    <div v-for="(filterObject, i) in filters" :id="filterObject.id" :key="`fs-${i}`" class="relative min-w-fit">
      <v-btn
        outlined
        class="filter-btn px-2"
        @click.stop="openMenu(filterObject)"
      >
        {{ filterObject.title }}
        <v-icon right :class="{'rotate-chervron' : filter.id === filterObject.id }">
          mdi-chevron-down
        </v-icon>
      </v-btn>
    </div>
    <div v-if="filter.id">
      <v-menu
        v-model="open"
        v-click-outside="onClickOutsideStandard"
        :transition="false"
        internal-activator
        content-class="min-w-fit w-72 unset-position d-block"
        :attach="`#${filter.id}`"
        :close-on-click="false"
        :close-on-content-click="false"
      >
        <v-card class="pa-4" min-width="288px">
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
              class="rounded-lg mt-4"
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
    </div>
  </div>
</template>
<script>
export default {
  props: {
    filters: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      valid: true,
      open: false,
      filter: {},
      formData: {}
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
        console.log(e)
        if (!e.target.closest(`#${this.filter.id}`) && !e.target.closest('#modal-container') && !e.target.closest('.v-menu__content.theme--light.menuable__content__active') && !e.target.classList.value.startsWith('vpd')) {
          this.closeMenu()
        }
      } catch (error) {

      }
    },
    openMenu (filterObject) {
      if (this.filter.id !== filterObject.id) {
        this.filter = Object.assign({}, filterObject)
        this.open = true
      } else if (this.open === true) {
        this.closeMenu()
      }
    },
    closeMenu () {
      this.open = false
      this.filter = Object.assign({}, {})
    },
    handleSubmit () {
      if (this.filter.comp === 'check-box' && this.formData[this.filter.model].length === 0) {
        this.closeMenu()
        return false
      } else {
        this.$emit('submitFilter', { ...this.formData })
        this.closeMenu()
      }
    },
    handleInput (value, model) {
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
