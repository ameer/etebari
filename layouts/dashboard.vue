<template>
  <default-layout>
    <dashboard-app-bar />
    <v-main class="dashboard-layout">
      <v-container class="pa-4 fill-height">
        <v-row no-gutters justify="center" class="fill-height">
          <v-col
            cols="12"
            class="d-flex flex-column justify-center rounded-xl flex-1 white py-4 shadow_"
          >
            <Nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <dashboard-footer />
  </default-layout>
</template>

<script>
import DefaultLayout from '~/layouts/default.vue'
export default {
  name: 'DashboardLayout',
  components: {
    DefaultLayout
  },
  middleware: 'auth'
}
</script>
