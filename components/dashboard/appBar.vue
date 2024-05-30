<template>
  <v-app-bar
    class="auth-app-bar"
    fixed
    app
    flat
    color="#f9fafb"
    elevate-on-scroll
    height="112"
  >
    <v-container class="px-0 px-sm-3">
      <div class="toolbar-container d-flex align-center">
        <v-toolbar-title>
          <div class="d-flex align-center justify-center ml-4">
            <svg
              width="47"
              height="36"
              viewBox="0 0 47 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ml-2"
            ><path d="M34 3H10.9297C8.17575 3 2.73461 6.74182 3.01008 14.0727C3.28554 21.4036 8.40462 23.7455 10.9297 24H34" stroke="#4D5999" stroke-width="5" stroke-linecap="round" /><path d="M14 14H36.5C40.413 14 44 17.8 44 23.8276C44 29.8552 40.413 33 36.5 33H26.7174" stroke="#8E9DBF" stroke-width="5" stroke-linecap="round" /></svg>
            <span class="primary--text text-h6 font-weight-bold">اعتباریتو</span>
          </div>
        </v-toolbar-title>
        <v-spacer />
        <dashboard-nav-bar />
        <auth-about-dialog v-model="helpDialog" />
      </div>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      helpDialog: false
    }
  }
}
</script>
  <style></style>
