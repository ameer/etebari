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
        'gray-100': '#f3f4f6',
        indigo: '#455089',
        iceBlue: '#eaedf4',
        silver: '#f4f5f9',
        primaryBlack: '#454555',
        main: colors.blue
      },
      dark: {
        primary: colors.blue.darken2
      }
    }
  }
}
