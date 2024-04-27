<template>
  <default-layout>
    <dashboard-app-bar />
    <v-main class="dashboard-layout">
      <v-container class="pa-4">
        <v-row no-gutters justify="center" class="">
          <v-col
            cols="12"
            class="d-flex flex-column justify-center rounded-xl flex-1 white py-4 shadow_"
          >
            <Nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer absolute app paddless color="#f9fafb">
      <v-container>
        <div class="d-flex flex-column fill-width justify-center align-center py-3 text-center">
          <span class="primary--text mb-2 d-flex">
            <v-img
              contain
              max-width="24"
              class="ml-2"
              src="/logo.svg"
              alt="logo"
              loading="lazy"
            />
            <a class="text-body-1 font-weight-bold" rel="noreferrer" href="https://irancreditscoring.com/" target="_blank">وبسایت شرکت مشاور رتبه بندی اعتباری ایران</a>
          </span>
          <span class="text-gray-500 text-sm">استفاده از محتوای این سامانه تنها برای «اهداف غیرتجاری» با ذکر «منبع» مجاز است.</span>
        </div>
      </v-container>
    </v-footer>
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
