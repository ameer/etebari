<template>
  <v-menu
    bottom
    offset-y
    internal-activator
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
    <v-card min-height="200">
      {{ filter.comp }}
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
        comp: 'محتوای داخلش'
      })
    }
  }
}
</script>
<style>

</style>
