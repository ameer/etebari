<template>
  <span class="d-flex align-center">
    <span class="font-weight-bold w-12" :class="cssClass">{{ $addTSP(price) }}</span>
    <span :class="suffixClass">{{ isToman ? 'تومان': 'ریال' }}</span>
  </span>
</template>
<script>
export default {
  name: 'PriceFormatter',
  props: {
    price: {
      type: Number,
      default: 0
    },
    isToman: {
      type: Boolean,
      default: false
    },
    cssClass: {
      type: String,
      default: 'primaryBlack--text'
    },
    suffixClass: {
      type: String,
      default: 'text-gray-500 mx-6'
    }
  }
}
</script>
<style>

</style>
