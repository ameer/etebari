<template>
  <div>
    <v-card v-for="({title, subtitle, img, to}, i) in options" :key="`ioc-${i}`" outlined class="rounded-lgg my-4" :to="to">
      <div class="d-flex align-center pa-4">
        <v-img :src="img" class="ml-3" contain max-width="52" />
        <div class="d-flex flex-column">
          <div class="text-body-1 text--primary font-weight-bolder" v-text="title" />
          <div class="text-body-2 text--secondary font-weight-light" v-text="subtitle" />
        </div>
        <v-spacer />
        <v-btn color="primary" class="elevation-0">
          انتخاب
        </v-btn>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'InvitationsOptions',
  computed: {
    options () {
      return [
        {
          title: 'درخواست با رمز یک‌بارمصرف',
          subtitle: 'ارسال رمزیکبارمصرف برای دریافت گزارش اعتباری',
          img: '/svg/otp.svg',
          to: '/dashboard/share/new-otp'
        },
        {
          title: 'درخواست با دعوتنامه ',
          subtitle: 'ارسال دعوتنامه پیامکی به مشتریان',
          img: '/svg/invite.svg',
          to: '/dashboard/share/new-invite'
        }
      ]
    }
  }
}
</script>
<style>

</style>
