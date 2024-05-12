export const $URL = {
  captcha: 'captcha',
  menus: 'menus',
  codes: 'codes',
  version: 'version'
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
  _getCaptcha ({ dispatch }) {
    return dispatch('$post', { url: $URL.captcha, key: 'captcha' }, { root: true })
  },
  _getMenus ({ dispatch }) {
    return dispatch('$get', { url: $URL.menus, key: 'menus' }, { root: true })
  },
  _getCodes ({ dispatch }) {
    return dispatch('$get', { url: $URL.codes, key: 'codes' }, { root: true })
  },
  _getVersion ({ dispatch }) {
    return dispatch('$get', { url: $URL.version, key: 'version' }, { root: true })
  }
}
export const getters = {
  loading: state => state.loading
}
