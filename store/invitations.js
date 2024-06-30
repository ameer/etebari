export const $URL = {
  initOTP: 'customers/shares/otp/init/',
  resendOTP: 'customers/shares/otp/resend/'
}

function initialState () {
  return {
    loading: {
    }
  }
}
export const state = initialState

export const mutations = {
  resetState (state) {
    // acquire initial state
    const s = initialState()
    Object.keys(s).forEach((key) => {
      state[key] = s[key]
    })
  },
  setLoading (state, { key, value }) {
    state.loading[key] = value
  },
  setObject (state, { key, value }) {
    state[key] = Object.assign({}, value)
  },
  setArray (state, { key, value }) {
    state[key] = value
  }
}
export const actions = {
  _initOTP ({ dispatch }, data) {
    return dispatch('$post', { url: $URL.initOTP, data }, { root: true })
  }
}
export const getters = {
  loading: state => state.loading
}
