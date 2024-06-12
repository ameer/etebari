export const $URL = {
  getBusinesses: 'businesses/',
  createUpdateBusiness: 'businesses/',
  getBusinessesInShareList: 'businesses/shares/'
}

function initialState () {
  return {
    loading: {
    },
    userBusiness: {}
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
  _getBusinessForUser ({ dispatch, commit }) {
    return dispatch('$get', { url: $URL.getBusinesses, key: 'getBusiness' }, { root: true }).then((resp) => {
      commit('setObject', { key: 'userBusiness', value: resp.data })
      return resp
    }).catch((error) => {
      throw error
    })
  },
  _updateBusiness ({ dispatch, commit }, data) {
    return dispatch('$post', { url: $URL.createUpdateBusiness, data, key: 'business', headers: { 'Content-Type': 'multipart/form-data' } }, { root: true }).then((resp) => {
      commit('setObject', { key: 'userBusiness', value: resp.data })
    })
  }
}
export const getters = {
  loading: state => state.loading,
  userBusiness: state => state.userBusiness,
  businessStatus: (state, { userBusiness }) => userBusiness.status ?? false
}
