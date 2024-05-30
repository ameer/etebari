<template>
  <default-layout>
    <dashboard-app-bar />
    <v-main class="dashboard-layout">
      <v-container class="pa-4 fill-height">
        <v-row no-gutters justify="center" class="fill-height">
          <v-col
            cols="12"
            class="d-flex flex-column justify-center rounded-xl flex-1 white shadow_ relative"
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
import { mapActions } from 'vuex'
import DefaultLayout from '~/layouts/default.vue'
export default {
  name: 'DashboardLayout',
  components: {
    DefaultLayout
  },
  middleware: 'auth',
  mounted () {
    this._getMenus()
  },
  methods: {
    ...mapActions('core', ['_getMenus'])
  }
}
</script>
