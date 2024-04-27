<template>
  <v-app class="default-layout">
    <Nuxt v-if="!$slots.default" />
    <slot />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
