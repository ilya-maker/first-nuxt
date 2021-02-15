const state = () => ({
  token: null,
})

const getters = {
  hasToken: s => !!s.token
}

const actions = {
  logIn({commit}) {
    commit('setToken', 'true')
  },
  logOut({commit}) {
    commit('setToken', null)
  }
}

const mutations = {
  setToken(state, token) {
    state.token = token;
  }
}

export {
  state,
  getters,
  actions,
  mutations,
}
