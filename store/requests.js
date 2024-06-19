/* eslint-disable camelcase */
export const $URL = {
  requests: (request_id = false) => {
    let url = 'requests/'
    if (request_id !== false) {
      url = `requests/?request_id=${request_id}`
    }
    return url
  },
  initRequest: 'requests/init/'
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
  _getUserRequests ({ dispatch }) {
    return dispatch('$get', { url: $URL.requests(), key: 'userRequests' }, { root: true })
  },
  _createUpdateUserRequests ({ dispatch }, request_id) {
    return dispatch('$post', { url: $URL.requests(request_id), key: 'updateUserRequests' }, { root: true })
  },
  _initUserRequests ({ dispatch }) {
    return dispatch('$post', { url: $URL.initRequest, key: 'initUserRequests' }, { root: true })
  }
}
export const getters = {
  loading: state => state.loading
}
