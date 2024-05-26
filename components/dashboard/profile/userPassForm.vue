<template>
  <div class="pa-4">
    <h6 class="text-center text-h6 primary--text mb-6 mb-md-12">
      تعیین نام کاربری و رمز عبور
    </h6>
    <v-form ref="userPassForm" v-model="valid" @submit.prevent="handleSubmit">
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
        username: '',
        new_password: ''
      }
    }
  },
  computed: {
    fields () {
      return [
        {
          name: 'username',
          label: 'نام کاربری',
          type: 'text',
          hint: 'تعیین نام کاربری الزامی است. (فقط حروف انگلیسی و اعداد)',
          rules: [this.$rules().required, this.$rules().onlyEnglish]
        },
        {
          name: 'new_password',
          label: 'رمز عبور',
          type: 'password',
          rules: [this.$rules().required]
        },
        {
          name: 'confirm_password',
          label: 'تایید رمز عبور',
          type: 'password',
          rules: [this.$rules().required, this.$rules(this.formData.new_password).confirmPassword]
        }
      ]
    }
  },
  methods: {
    ...mapActions('accounts', ['_setUserPass']),
    handleSubmit () {
      if (!this.$refs.userPassForm.validate()) {
        return false
      }
      this.loading = true
      this._setUserPass(this.formData).then((resp) => {
        this.$toast.success('با موفقیت انجام شد')
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
