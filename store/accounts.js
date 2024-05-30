/* eslint-disable camelcase */
export const $URL = {
  // check account registered before
  accounts: 'accounts',
  register: 'accounts/register',
  loginOTP: 'authentication/login/otp',
  setUserPass: 'accounts/profiles/password/',
  setProfileImage: 'accounts/profiles/image/',
  setUserInfo: 'accounts/profiles/'
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
  _checkIsRegistered ({ dispatch }, { national_id, captcha, key }) {
    const url = `${$URL.accounts}?captcha=${captcha}&key=${key}&national_id=${national_id}`
    return dispatch('$get', { url, key: 'checkIsRegistered' }, { root: true })
  },
  _registerUser ({ dispatch }, { data, key }) {
    const url = `${$URL.register}/?key=${key}`
    return dispatch('$post', { url, data, key: 'registerUser' }, { root: true })
  },
  _loginOTP ({ dispatch }, data) {
    return dispatch('$post', { url: $URL.loginOTP, data, key: 'loginOtp' }, { root: true })
  },
  _setUserPass ({ dispatch }, data) {
    return dispatch('$put', { url: $URL.setUserPass, data }, { root: true })
  },
  _setUserImage ({ dispatch }, data) {
    const headers = {
      'Content-Type': 'multipart/form-data'
    }
    return dispatch('$put', { url: $URL.setProfileImage, data, headers }, { root: true })
  },
  _setUserInfo ({ dispatch }, data) {
    return dispatch('$put', { url: $URL.setUserInfo, data }, { root: true })
  }

}
export const getters = {
  loading: state => state.loading
}
