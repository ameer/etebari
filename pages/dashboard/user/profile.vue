<template>
  <div class="fill-height">
    <span class="bg-gradianPrimay absolute pa-4 rounded-t-xl h-32 flex text-body-1 text-md-h5 font-weight-bold white--text w-full">اطلاعات کاربری</span>
    <div class="d-flex flex-column w-full pt-16 px-4">
      <div class="d-flex w-full pa-4">
        <v-badge
          overlap
          bottom
          left
          color="transparent"
          offset-y="36"
        >
          <template #badge>
            <v-btn :loading="isUploading" fab x-small color="gray-100 lighten-2" @click.stop="openFileUploader">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </template>
          <v-avatar size="112" color="gray-100">
            <v-img v-if="userImage" :src="userImage" contain />
            <v-icon v-else size="80" color="indigo">
              mdi-account-outline
            </v-icon>
          </v-avatar>
        </v-badge>
      </div>
      <div class="container d-flex align-center px-4 pb-8">
        <div class="d-flex">
          <v-icon>mdi-account</v-icon>
          <span v-if="userFullName" class="mr-2">{{ userFullName }}</span>
          <span v-else class="mr-2">{{ nationalCode }}</span>
        </div>
        <div class="d-flex mr-8">
          <v-icon>mdi-email-outline</v-icon>
          <span class="mr-2">{{ userEmail }}</span>
        </div>
        <v-spacer />
        <v-btn large outlined color="iceBlue" class="rounded-lg" @click.stop="openUserInfoDialog">
          <span class="black--text">
            ویرایش اطلاعات پروفایل
          </span>
        </v-btn>
        <v-btn large color="primary" class="rounded-lg elevation-0 mr-8" @click.stop="openUserPassDialog">
          {{ editUsernameBtnText }}
        </v-btn>
      </div>
    </div>
    <common-dialog v-model="dialog" width="468">
      <component :is="dialogComponent" :edit-mode="editMode" @closeDialog="dialog = false" />
    </common-dialog>
    <v-form>
      <!-- Only accept jpg/jpeg -->
      <v-file-input
        ref="fileInput"
        v-model="fileToUpload"
        :rules="[$rules().required]"
        truncate-length="15"
        class="d-none"
        :accept="'.png, .jpg, .jpeg'"
      />
    </v-form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  layout: 'dashboard',
  data () {
    return {
      dialog: false,
      dialogComponent: 'dashboardProfileUserPassForm',
      fileToUpload: null,
      isUploading: false,
      editMode: false
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
    userFullName () {
      try {
        return `${this.$auth.user.firstName} ${this.$auth.user.lastName}`
      } catch (error) {
        return false
      }
    },
    userEmail () {
      try {
        return this.$auth.user.email
      } catch (error) {
        return '---'
      }
    },
    userImage () {
      try {
        let image = ''
        if (this.$auth.user.imageType) {
          image = `data:image/${this.$auth.user.imageType};base64, ${this.$auth.user.image}`
        } else {
          return false
        }
        return image
      } catch (error) {
        return false
      }
    },
    editUsernameBtnText () {
      return this.$auth.user.userHasCurrentPass && this.$auth.user.username !== null ? 'ویرایش نام کاربری و رمز عبور' : 'تعیین نام کاربری و رمز عبور'
    }
  },
  watch: {
    fileToUpload (n, o) {
      if (n) {
        this.uploadFile()
      }
    }
  },
  methods: {
    ...mapActions('accounts', ['_setUserImage']),
    openUserPassDialog () {
      this.editMode = true
      this.dialogComponent = 'dashboardProfileUserPassForm'
      this.dialog = true
    },
    openUserInfoDialog () {
      this.dialogComponent = 'dashboardProfileUserInfoForm'
      this.dialog = true
    },
    openFileUploader () {
      this.$refs.fileInput.$refs.input.click()
    },
    async uploadFile () {
      if (this.fileToUpload) {
        this.isUploading = true
        const formdata = new FormData()
        formdata.append('image', this.fileToUpload)
        try {
          const resp = await this._setUserImage(formdata)
          if (resp) {
            this.$toast.success('بارگذاری با موفقیت انجام شد', {
              timeout: 2500
            })
            this.$auth.setUser(resp.data)
          }
        } catch (error) {
          this.$toast.error('خطا در بارگذاری')
        } finally {
          this.isUploading = false
        }
      }
    }

  }
}
</script>
<style>

</style>
