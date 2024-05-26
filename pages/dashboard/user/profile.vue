<template>
  <div class="fill-height">
    <span class="bg-gradianPrimay absolute pa-4 rounded-t-xl h-32 flex text-body-1 text-md-h5 font-weight-bold white--text w-full">اطلاعات کاربری</span>
    <div class="d-flex flex-column w-full pt-16 px-4">
      <div class="d-flex w-full pa-4">
        <v-avatar size="112" color="gray-100">
          <v-icon size="80" color="indigo">
            mdi-account-outline
          </v-icon>
        </v-avatar>
      </div>
      <div class="container d-flex align-center px-4 pb-8">
        <div class="d-flex">
          <v-icon>mdi-account</v-icon>
          <span class="mr-2">{{ nationalCode }}</span>
        </div>
        <div class="d-flex mr-8">
          <v-icon>mdi-email-outline</v-icon>
          <span class="mr-2">{{ userEmail }}</span>
        </div>
        <v-spacer />
        <v-btn large outlined color="iceBlue" class="rounded-lg ">
          <span class="black--text">
            ویرایش اطلاعات پروفایل
          </span>
        </v-btn>
        <v-btn large color="primary" class="rounded-lg elevation-0 mr-8" @click.stop="openUserPassDialog">
          تعیین نام کاربری و رمز عبور
        </v-btn>
      </div>
    </div>
    <common-dialog v-model="dialog">
      <component :is="dialogComponent" @closeDialog="dialog = false" />
    </common-dialog>
  </div>
</template>
<script>
export default {
  layout: 'dashboard',
  data () {
    return {
      dialog: false,
      dialogComponent: 'dashboardProfileUserPassForm'
    }
  },
  computed: {
    nationalCode () {
      try {
        return this.$auth.user.nationalId
      } catch (error) {
        return '---'
      }
    },
    userEmail () {
      try {
        return this.$auth.user.email
      } catch (error) {
        return '---'
      }
    }
  },
  methods: {
    openUserPassDialog () {
      this.dialogComponent = 'dashboardProfileUserPassForm'
      this.dialog = true
    }
  }
}
</script>
<style>

</style>
