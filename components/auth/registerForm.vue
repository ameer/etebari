<template>
  <v-form ref="registerForm" @submit.prevent="() => false">
    <div class="d-flex flex-column align-center fill-width">
      <span class="primary--text font-weight-bold text-h5 pt-2 pb-0 py-sm-2">ورود / ثبت‌نام</span>
      <span class="text-brandSecondary-light text-body-2 gray-500--text text-center py-10 lh-32 py-sm-5">لطفاً شماره ملی یا شناسه ملی خود را بدون خط فاصله در کادر زیر وارد نمایید. سپس دکمه تأیید و ادامه را بزنید.
      </span>
    </div>
    <div class="d-flex flex-column">
      <v-text-field label="کد ملی | شناسه ملی" outlined class="rounded" />
      <div class="pt-3">
        <div class="d-flex fill-width justify-space-between pt-3">
          <v-text-field outlined class="rounded fill-width text-center p-2" placeholder="کد امنیتی" />
          <v-img contain max-height="56" alt="captcha" src="/captcha.jpg" />
        </div>
      </div>
      <v-btn block type="submit" color="primary" height="52" class="text-body-1 rounded-lg">
        تأیید و ادامه
      </v-btn>
      <v-btn
        block
        text
        color="primary"
        height="52"
        class="font-weight-medium mt-4 text-body-1 rounded-lg"
        @click="$nuxt.$emit('setLoginMode', true)"
      >
        ورود با نام کاربری
      </v-btn>
    </div>
  </v-form>
</template>
<script>
export default {

}
</script>
<style>

</style>
