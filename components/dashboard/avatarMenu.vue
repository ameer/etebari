<template>
  <v-menu
    :value="value"
    :close-on-content-click="true"
    :min-width="203"
    right
    bottom
    offset-y
    nudge-right="-16"
    content-class="shadow_ shadow_"
    @input="$emit('input', $event)"
  >
    <template #activator="{ on, attrs }">
      <div
        v-bind="attrs"
        class="d-flex flex-column justify-space-between py-1 pointer"
        v-on="on"
      >
        <div class="d-flex align-center">
          <v-img contain src="/icons/user.svg" />
          <div class="text-body-2 font-weight-bold mono pr-2 pl-3 text-brandPrimary-black text-truncate" style="padding-top: 3px;width: 112px;" v-text="userFullName ?? nationalCode" />
          <v-icon size="20" class="text-brandPrimary-black">
            mdi-chevron-down
          </v-icon>
        </div>
        <div class="d-flex align-center">
          <v-img contain src="/icons/wallet.svg" max-width="18" max-heigh="19" />
          <span class="text-body-2 font-weight-bold mono pr-2 pl-3 text-brandPrimary-black" style="padding-top: 3px;" v-text="$auth.user.amount" />
          <v-spacer />
          <span class="text-caption text--disabled">ريال</span>
        </div>
      </div>
    </template>

    <v-card class="shadow_" flat>
      <v-list class="elevation-0">
        <v-list-item v-for="(item, i) in items" :key="`ami-${i}`" :to="item.to" @click="item.action ? evoke(item.action) : false">
          <v-list-item-title class="text-body-2 text-brandPrimary-black">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      items: [
        { title: 'اطلاعات کاربری', to: '/dashboard/user/profile' },
        { title: 'مدیریت کیف پول', to: '/dashboard/user/wallet' },
        { title: 'خروج', action: 'logout' }
      ]
    }
  },
  computed: {
    nationalCode () {
      try {
        return this.$auth.user.nationalId
      } catch (error) {
        return false
      }
    },
    userFullName () {
      try {
        return `${this.$auth.user.firstName} ${this.$auth.user.lastName}`
      } catch (error) {
        return false
      }
    }
  },
  methods: {
    evoke (action) {
      if (action === 'logout') {
        this.$auth.logout()
      }
    }
  }
}
</script>
<style>

</style>
