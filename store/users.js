const state = () => ({
  users: []
})

const mutations = {
  setUsers(state, users) {
    state.users = users;
  }
}

const actions = {
  async fetch({commit}) {
    const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users');
    commit('setUsers', users);
  },
}

const getters = {
  getUsers(state) {
    return state.users;
  }
}

export {
  state,
  mutations,
  actions,
  getters,
}
