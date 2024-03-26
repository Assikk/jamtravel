export const state = () => ({
  tours: []
})
export const mutations = {
  GET_TOURS(state, payload) {
    state.tours = payload
  }
}

export const getters = {
}
export const actions = {
  async get_tours({commit}, search) {
    commit('GET_TOURS', [])
    let filter = ''
    for (let key in search) {
      if (search[key]) {
        filter = filter + `${key}=${search[key]}&`
      }
    }
    let res = await this.$axios.get(`tours?${filter}`)
    commit('GET_TOURS', res.data)
  }
}
