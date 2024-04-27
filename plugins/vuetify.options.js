import colors from 'vuetify/es5/util/colors'
import fa from 'vuetify/lib/locale/fa'
export default {
  lang: {
    locales: { fa },
    current: 'fa'
  },
  rtl: true,
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#404079',
        'gray-500': '#6b7280',
        main: colors.blue
      },
      dark: {
        primary: colors.blue.darken2
      }
    }
  }
}
