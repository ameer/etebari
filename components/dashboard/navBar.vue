<template>
  <nav class="d-flex pl-6 header_shadow rounded-xl w-full justify-space-around pr-4 white">
    <div class="d-flex align-center justify-space-between flex-grow-1">
      <v-btn
        v-for="(item, i) in items"
        :key="`dn-${i}`"
        text
        plain
        :to="item.to"
        class="pa-2 fill-height"
        height="64px"
        active-class="active-nav-link font-weight-bold"
      >
        <span v-text="item.title" />
      </v-btn>
    </div>
    <v-spacer />
    <dashboard-avatar-menu />
  </nav>
</template>
<script>
export default {
  data () {
    return {
      items: [
        { title: 'پیشخوان', to: '/dashboard' },
        { title: 'گزارش اعتباری من', to: '/dashboard/inquiry' },
        // { title: 'گزارش اعتباری مشتریان من', to: '/dashboard/share' },
        { title: 'اعتراض', to: '/dashboard/objection' }
      ]
    }
  }
}
</script>
<style>

</style>
