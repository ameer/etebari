<template>
  <v-dialog
    :value="value"
    width="430"
    transition="scale-transition"
    content-class="rounded-xl overflow-y-hidden"
    scrollable
    persistent
    @input="$emit('input', $event)"
  >
    <v-card class="d-flex flex-column fill-height rounded-xl pa-6">
      <div class="d-flex align-center mb-6">
        <span class="text-body-1 font-weight-medium lh-24">بارگذاری فایل</span>
        <v-spacer />
        <v-btn icon width="32" height="32" @click="$emit('input', false)">
          <v-icon>icon-close</v-icon>
        </v-btn>
      </div>
      <v-card class="fill-height elevation-0">
        <v-card-text class="pa-0">
          <v-file-input
            ref="fileInput"
            v-model="fileToUpload"
            :rules="[$rules().required]"
            truncate-length="15"
            class="d-none"
            :accept="'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'"
          />
          <div
            class="upload-area"
            :class="{ 'drag-over': dragover }"
            @dragenter="handleDragEnter"
            @dragover="handleDragEnter"
            @dragleave="handleDragLeave"
            @drop="handleDrop"
          >
            <div class="drop-outline-wrapper">
              <svg class="drop-outline" preserveAspectRatio="none" viewBox="0 0 666 369.20001220703125" width="100%" height="100%">
                <path class="drop-outline-path" d="M333,5 H651 A10,10 0 0,1 661,15 V354.20001220703125 A10,10 0 0,1 651,364.20001220703125 H15 A10,10 0 0,1 5,354.20001220703125 V15 A10,10 0 0,1 15,5 Z" />
              </svg>
            </div>

            <svg-upload-icon />
            <div class="mt-2 text-caption font-weight-medium">
              <span class="d-inline-block lh-20">فایل را در این قسمت بکشید و رها کنید.</span>
              <v-btn text color="primary" class="px-1" height="24" @click="openFileBrowser">
                <span class="text-caption font-weight-medium">
                  انتخاب فایل
                </span>
              </v-btn>
            </div>
          </div>
          <div class="mt-1 text-left text-caption font-weight-medium text--secondary">
            محدودیت بارگذاری: ۲ مگابایت
          </div>
          <div v-if="hasFile" class="file-uploader-box rounded-xl pa-2 mt-2 grey lighten-4">
            <div class="d-flex align-center">
              <img height="16" width="16" src="/icon-excel.svg">
              <span class="mr-1 text-caption text-truncate" v-text="fileName" />
              <v-spacer />
              <v-btn icon @click="removeFile">
                <v-icon size="16">
                  icon-close
                </v-icon>
              </v-btn>
            </div>
            <div v-if="isUploading" class="d-flex align-center">
              <v-progress-linear class="rounded" color="#5481F0" background-color="#fff" background-opacity="1" :value="uploadProgress" />
              <span class="text-caption font-weight-medium text--secondary px-2" style="flex: 1 0 44px;" v-text="uploadProgress + ' %'" />
            </div>
          </div>
        </v-card-text>
        <v-card-actions v-if="hasFile" class="pa-0 mt-7">
          <v-spacer />
          <v-btn
            outlined
            color="primary"
            class="rounded-lg"
            height="32"
            style="border-width: 2px;"
            @click="$emit('input', false)"
          >
            انصراف
          </v-btn>
          <v-btn color="primary" class="elevation-0 rounded-lg px-5 text-caption font-weight-medium" height="32" :loading="isUploading" @click="uploadFile">
            ارسال فایل
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'TempFile',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      dragover: false,
      fileToUpload: null,
      uploadProgress: 0,
      isUploading: false
    }
  },
  computed: {
    fileName () {
      try {
        return this.fileToUpload.name
      } catch (error) {
        return ''
      }
    },
    hasFile () {
      return this.fileToUpload !== null
    }
  },
  watch: {
    value (val) {
      if (!val) {
        this.fileToUpload = null
        this.isUploading = false
        this.uploadProgress = 0
      }
    }
  },
  methods: {
    ...mapActions('services', ['_uploadFile']),
    handleDragEnter (e) {
      e.preventDefault()
      this.dragover = true
    },
    handleDragLeave (e) {
      e.preventDefault()
      this.dragover = false
    },
    handleDrop (e) {
      e.preventDefault()
      this.dragover = false
      if (this.fileChecker(e.dataTransfer.files[0])) {
        this.fileToUpload = e.dataTransfer.files[0]
      }
    },
    removeFile () {
      this.fileToUpload = null
    },
    fileChecker (file) {
      if (file.size > 2097152) {
        this.$toast.error('حجم فایل باید کمتر از ۲ مگابایت باشد')
        return false
      }
      if (file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' && file.type !== 'application/vnd.ms-excel') {
        this.$toast.error('فایل انتخابی باید اکسل باشد')
        return false
      }
      return true
    },
    openFileBrowser () {
      this.$refs.fileInput.$refs.input.click()
    },
    async uploadFile () {
      if (this.fileToUpload) {
        this.isUploading = true
        this.uploadProgress = 0
        const formdata = new FormData()
        formdata.append('file', this.fileToUpload)
        try {
          // Update progress value as the file is uploaded
          const config = {
            onUploadProgress: (progressEvent) => {
              const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
              this.uploadProgress = percentCompleted
            }
          }
          const resp = await this._uploadFile({ file: formdata, url: this.url, config })
          if (resp) {
            this.$toast.success('بارگذاری شما با موفقیت انجام شد', {
              timeout: 2500,
              onClose: () => {
                window.location.reload()
              }
            })
            this.$emit('input', false)
          }
        } catch (error) {
          this.$toast.error('بارگذاری انجام نشد')
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
