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
    state.loading = Object.assign({}, state.loading, { [key]: value })
  },
  setObject (state, { key, value }) {
    state[key] = Object.assign({}, value)
  },
  setArray (state, { key, value }) {
    state[key] = value
  }
}
export const actions = {
  _resetState ({ commit }) {
    commit('business/resetState')
  },
  $get ({ commit }, { url, key }) {
    if (key) {
      commit('setLoading', { key, value: true })
    }
    return new Promise((resolve, reject) => {
      this.$axios
        .get(url)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
          return error
        })
        .finally(() => {
          if (key) {
            commit('setLoading', { key, value: false })
          }
        })
    })
  },
  $post ({ commit }, { url, data, key, headers = {} }) {
    if (key) {
      commit('setLoading', { key, value: true })
    }
    return new Promise((resolve, reject) => {
      this.$axios
        .post(url, data, { headers })
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
        .finally(() => {
          if (key) {
            commit('setLoading', { key, value: false })
          }
        })
    })
  },
  $put ({ commit }, { url, data, key, headers = {}, config = {} }) {
    if (key) {
      commit('setLoading', { key, value: true })
    }
    config = Object.assign({ headers }, config)
    return new Promise((resolve, reject) => {
      this.$axios
        .put(url, data, config)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
        .finally(() => {
          if (key) {
            commit('setLoading', { key, value: false })
          }
        })
    })
  },
  $delete ({ commit }, { url, data, mutation = false, key }) {
    if (key) {
      commit('setLoading', { key, value: true })
    }
    return new Promise((resolve, reject) => {
      this.$axios
        .delete(url, { data })
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
        .finally(() => {
          if (key) {
            commit('setLoading', { key, value: false })
          }
        })
    })
  }
}
export const getters = {
  loading: state => state.loading
}
