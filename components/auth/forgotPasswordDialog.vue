<template>
  <common-dialog v-bind="$attrs" @input="close">
    <h3 class="text-center text-brandPrimary-main pb-6">
      تغییر رمز عبور
    </h3>
    <div class="my-10 m-auto px-6 lh-32 text-center">
      <p>
        در صورتیکه رمز عبور خود را فراموش کرده‌اید از روش <span color="" class="px-0 primary--text text--lighten-2 pointer" text @click="$nuxt.$emit('setLoginMode', false)">
          ورود با شماره ملی و رمز یک‌بار‌مصرف
        </span> وارد شوید سپس با ورود به منوی اطلاعات کاربری، فرم تغییر نام کاربری و رمز عبور را انتخاب کرده و رمز جدید ثبت نمایید
      </p>
      <div class="d-flex align-center justify-center pa-4">
        <v-btn
          class="flex-1"
          outlined
          style="border-width: 2px !important;"
          width="50%"
          height="46px"
          @click="close(false)"
        >
          بستن
        </v-btn>
      </div>
    </div>
  </common-dialog>
</template>
<script>
export default {
  methods: {
    close (value) {
      this.$emit('input', value)
    }
  }
}
</script>
  <style></style>
