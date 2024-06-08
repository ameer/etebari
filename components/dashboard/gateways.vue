<template>
  <v-item-group class="custom-item-group" mandatory :value="value" @change="$emit('input', $event)">
    <div class="d-flex align-center">
      <v-item
        v-for="(gw, i) in gateways"
        :key="`ggi-${i}`"
        v-slot="{ toggle }"
        :value="gw.id"
        class="v-item pointer"
      >
        <div class="mx-2 rounded-lg pa-1" @click="toggle">
          <v-img
            contain
            width="56"
            height="56"
            :title="gw.title"
            :alt="gw.title"
            :src="imageFinder(gw)"
          />
        </div>
      </v-item>
    </div>
  </v-item-group>
</template>
<script>
export default {
  name: 'GatewaysGroup',
  props: {
    gateways: {
      type: Array,
      default: () => []
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    imageFinder (gw) {
      if (gw.image) {
        return gw.image
      } else if (gw.title === 'بانک سامان') {
        return '/logos/saman.svg'
      } else if (gw.title === 'زرین پال') { return '/logos/zpal.png' }
    }
  }
}
</script>
<style>

</style>
