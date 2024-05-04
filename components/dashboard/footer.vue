<template>
  <v-footer app paddless color="#f9fafb">
    <v-container>
      <div class="d-flex flex-column fill-width justify-center align-center py-3 text-center">
        <div class="d-flex mb-3 justify-center items-center">
          <dashboard-circles-row />
          <v-img
            contain
            max-width="40"
            class="mx-6"
            src="/logo.svg"
            alt="logo"
            loading="lazy"
          />
          <dashboard-circles-row />
        </div>
        <span class="text-gray-500 text-caption" style="max-width: 448px;">تمامی حقوق سامانه اعتباریتو متعلق به شرکت مشاوره رتبه‌بندی اعتباری ایران است و استفاده از محتوای آن تنها برای «اهداف غیرتجاری» با ذکر «منبع» مجاز است.</span>
      </div>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  name: 'DashboardFooter'
}
</script>
<style>

</style>
