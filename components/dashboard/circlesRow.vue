<template>
  <div class="circles-row">
    <div class="d-flex">
      <span v-for="i in 8" :key="`cr-${i}`" class="circle" />
    </div>
    <div class="d-flex">
      <span v-for="i in 8" :key="`cr-${i}`" class="circle" />
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style>

</style>
