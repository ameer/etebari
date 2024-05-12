/* eslint-disable camelcase */
export const $URL = {
  // check account registered before
  accounts: 'accounts',
  register: 'register'
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
    return dispatch('$get', { url, key: 'accounts' }, { root: true })
  },
  _registerUser ({ dispatch }, data) {
    return dispatch('$post', { url: $URL.register, data }, { root: true })
  }
}
export const getters = {
  loading: state => state.loading
}
