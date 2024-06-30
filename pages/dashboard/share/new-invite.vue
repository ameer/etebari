<template>
  <div class="fill-height py-3 px-4 text-center">
    <div class="d-flex flex-column align-center pt-2">
      <v-img src="/svg/invite.svg" contain max-width="52" class="mb-2" />
      <span class="blue-grey--text text--lighten-2 text-body-2 font-weight-thin pb-2">گزارش اعتباری مشتریان من</span>
      <span class="text-body-1 text-md-h6 text-brandPrimary-main font-weight-bold">درخواست با دعوت‌نامه</span>
      <dashboard-invitations-empty-state />
      <v-btn outlined color="#455089" class="px-md-8">
        <v-icon left>
          mdi-plus
        </v-icon>
        <span class="text-body-1">افزودن دعوت‌نامه</span>
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'dashboard'
}
</script>
<style>

</style>
