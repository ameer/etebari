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
        })
        .finally(() => {
          commit('setLoading', { key, value: false })
        })
    })
  },
  $post ({ commit }, { url, data, key, headers = {} }) {
    commit('setLoading', { key, value: true })
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
          commit('setLoading', { key, value: false })
        })
    })
  },
  $put ({ commit }, { url, data, key }) {
    commit('setLoading', { key, value: true })
    return new Promise((resolve, reject) => {
      this.$axios
        .put(url, data)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
        .finally(() => {
          commit('setLoading', { key, value: false })
        })
    })
  },
  $delete ({ commit }, { url, data, mutation = false, key }) {
    commit('setLoading', { key, value: true })
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
          commit('setLoading', { key, value: false })
        })
    })
  }
}
export const getters = {
  loading: state => state.loading
}
