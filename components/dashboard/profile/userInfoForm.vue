<template>
  <div class="pa-6">
    <h6 class="text-center text-h6 primary--text mb-6 mb-md-12">
      ویرایش اطلاعات
    </h6>
    <v-form ref="userInfoForm" v-model="valid" @submit.prevent="handleSubmit">
      <v-text-field
        v-for="(field, i) in fields"
        :key="`upf-${i}`"
        v-model="formData[field.name]"
        v-bind="field"
        outlined
        class="rounded-lg"
      />
      <div class="d-flex align-center">
        <v-spacer />
        <v-btn outlined @click="$emit('closeDialog')">
          انصراف
        </v-btn>
        <v-btn
          color="success"
          :disabled="!valid"
          :loading="loading"
          type="submit"
          min-width="128"
          class="mr-8"
        >
          ذخیره
        </v-btn>
      </div>
    </v-form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      valid: true,
      loading: false,
      formData: {
        first_name: this.$auth.user.firstName ?? '',
        last_name: this.$auth.user.lastName ?? '',
        email: this.$auth.user.email ?? ''
      }
    }
  },
  computed: {
    fields () {
      return [
        {
          name: 'first_name',
          label: 'نام',
          dir: 'rtl',
          type: 'text',
          persistentHint: true,
          hint: 'نام باید فقط شامل حروف فارسی باشد',
          rules: [this.$rules().required, this.$rules().onlyPersian]
        },
        {
          name: 'last_name',
          label: 'نام خانوادگی',
          dir: 'rtl',
          type: 'text',
          persistentHint: true,
          hint: 'نام خانوادگی باید فقط شامل حروف فارسی باشد',
          rules: [this.$rules().required, this.$rules().onlyPersian]
        },
        {
          name: 'email',
          label: 'ایمیل',
          dir: 'ltr',
          rules: [this.$rules().required, this.$rules().emailChecker]
        }
      ]
    }
  },
  methods: {
    ...mapActions('accounts', ['_setUserInfo']),
    handleSubmit () {
      if (!this.$refs.userInfoForm.validate()) {
        return false
      }
      this.loading = true
      this._setUserInfo(this.formData).then((resp) => {
        this.$toast.success('با موفقیت انجام شد')
        this.$auth.setUser(resp.data)
        this.$emit('closeDialog')
      }).catch((error) => {
        console.log(error)
        this.$toast.error('خطایی رخ داده است.')
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
<style>

</style>
