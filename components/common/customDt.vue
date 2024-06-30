<template>
  <v-data-table
    :headers="tableHeaders"
    :items="items"
    :items-per-page="-1"
    hide-default-footer
    :item-key="itemKey"
    fixed-header
    :height="tableHeight"
    :headers-length="$attrs['headers-length']"
  >
    <!-- <template #header="{ props: {headers} }">
        <thead class="v-data-table-header">
          <tr>
            <th v-for="(header, i) in headers" :key="`cdt-h-${i}`" :colspan="header.colspan">
              {{ header.text }} sss
            </th>
          </tr>
        </thead>
      </template> -->
    <template #item="{item, headers, index}">
      <tr>
        <template v-for="(header, i) in headers">
          <td v-if="header.type === undefined" :key="`cdt-simple-${i}`">
            <div
              v-if="item[header.value] && !isNaN(item[header.value])"
              class="mono"
              :class="header.cellClass ?? 'text-center'"
            >
              {{ $addTSP(item[header.value]) }}
              <span v-if="header.suffix" v-text="header.suffix" />
            </div>
            <div v-else :title="header.hasTitle ? item[header.value] : ''" :class="header.cellClass ?? 'text-center'">
              {{ item[header.value] }} <span v-if="header.suffix" v-text="header.suffix" />
            </div>
          </td>
          <td v-else-if="header.type === 'customSlot'" :key="`cdt-cslot-${i}`">
            <slot
              :name="header.value"
              :header="header"
              :item="item"
              :index="index"
              :value="item[header.value]"
            />
          </td>
          <slot
            v-else-if="header.type === 'customTd'"
            :name="header.value"
            :header="header"
            :item="item"
            :index="index"
            :value="item[header.value]"
          />
          <td v-else :key="`cdt-has-type-${i}`" :class="header.cellClass ?? 'text-center'">
            <div :class="header.type === 'number' ? 'ltr mono' : ''">
              {{ formatter(header, item[header.value]) }}
              <span v-if="header.suffix" v-text="header.suffix" />
            </div>
          </td>
        </template>
      </tr>
    </template>
  </v-data-table>
</template>
<script>
export default {
  props: {
    tableHeaders: {
      type: Array,
      default: () => []
    },
    items: {
      type: Array,
      default: () => []
    },
    itemKey: {
      type: String,
      default: 'id'
    },
    tableHeight: {
      type: [String, Number],
      default: '100%'
    }
  },
  methods: {
    formatter (header, value) {
      if (!value) {
        return '---'
      }
      if (header.type === 'boolean') {
        return value === true ? header.booleanLabels[0] : header.booleanLabels[1]
      } else if (header.type === 'time') {
        return new Date(value).toLocaleTimeString('fa', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      } else if (header.type === 'number') {
        return this.$convertBigNumber(value)
      } else if (header.type === 'integer') {
        return isNaN(value) ? value : parseInt(value)
      } else {
        return value ?? '---'
      }
    }
  }
}
</script>
<style>

</style>
