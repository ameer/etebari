<template>
  <v-card
    class="d-flex flex-column rounded-lg elevation-0 upload-area overflow-hidden"
    :class="{ 'drag-over': dragover }"
    width="176px"
    height="176px"
    @dragenter="handleDragEnter"
    @dragover="handleDragEnter"
    @dragleave="handleDragLeave"
    @drop="handleDrop"
    @click="openFileBrowser"
  >
    <v-hover v-slot="{ hover }">
      <div class="d-flex flex-column align-center justify-center flex-grow-1 overflow-hidden fill-width">
        <v-file-input
          ref="fileInput"
          v-model="fileToUpload"
          :rules="rules"
          truncate-length="15"
          class="d-none"
          :required="required"
          :accept="accept"
        />
        <v-img
          v-if="base64ImageToPreview"
          contain
          :width="ext === 'pdf'? '64px' : '100%'"
          :height="ext === 'pdf'? '64px' : '100%'"
          :src="base64ImageToPreview"
        />
        <v-overlay v-if="base64ImageToPreview" :value="hover" absolute opacity=".8">
          <div class="fill-height d-flex align-center justify-space-between">
            <v-btn
              icon
              class="mx-3"
              @click.stop="openFileBrowser"
            >
              <v-icon>
                mdi-pencil
              </v-icon>
            </v-btn>
            <v-btn
              icon
              class="mx-3"
              @click.stop="removeFile"
            >
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </div>
        </v-overlay>
        <div v-else class="d-flex flex-column align-center justify-center px-4">
          <svg-upload-icon />
          <span class="text-caption mt-2 select-none text-center">برای بارگذاری، فایل را اینجا بکشید و یا فایل را انتخاب کنید.</span>
        </div>
      </div>
    </v-hover>
    <label class="bg-brandPrimary-main fill-width text-center white--text mt-auto text-body-2 lh-32">
      {{ label }}
    </label>
  </v-card>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: 'label'
    },
    rules: {
      type: Array,
      default: () => ([this.$rules().required])
    },
    accept: {
      type: String,
      default: '*.*'
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dragover: false,
      fileToUpload: null
    }
  },
  computed: {
    humanReadableExtensions () {
      return this.accept.split(',').map(e => e.split('.').pop()).join(' یا ')
    },
    base64ImageToPreview () {
      if (this.ext === 'pdf') { return '/icons/pdf.svg' }
      return this.fileToUpload ? URL.createObjectURL(this.fileToUpload) : null
    },
    ext () {
      return this.fileToUpload ? this.fileToUpload.name.split('.').pop() : null
    }
  },
  watch: {
    fileToUpload (n, o) {
      if (n) {
        if (this.fileChecker(n)) {
          this.$emit('fileToUpload', n)
        }
      } else {
        this.$emit('fileToUpload', null)
      }
    }
  },
  methods: {
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
      if (!this.accept.includes(`.${this.ext}`)) {
        this.$toast.error(`فایل انتخابی باید یکی از پسوندهای ${this.humanReadableExtensions} باشد`)
        return false
      }
      return true
    },
    openFileBrowser () {
      this.$refs.fileInput.$refs.input.click()
    }
  }
}
</script>
  <style>

  </style>
