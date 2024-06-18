export const $URL = {
  gateways: 'payments/gateways/',
  depositHistory: 'payments/deposits/history/',
  transactionHistory: 'payments/transactions/history/',
  paymentParameters: 'payments/{list_type}/parameters/',
  initUserPayment: 'payments/pay/',
  validateUserPayment: 'payments/validation/',
  paymentValidationCallback: 'payments/validation/callback/',
  manualCallback: 'payments/validation/callback/manual/'
}

function initialState () {
  return {
    loading: {
    },
    callbackURL: '/dashboard/factor'
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
  _getGateways ({ dispatch }) {
    return dispatch('$get', { url: $URL.gateways, key: 'gateways' }, { root: true })
  },
  _initUserPayment ({ dispatch }, data) {
    return dispatch('$post', { url: $URL.initUserPayment, data, key: 'initUserPayment' }, { root: true })
  }
}
export const getters = {
  loading: state => state.loading,
  callbackURL: state => state.callbackURL
}
