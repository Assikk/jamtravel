export const state = () => ({
  countries: [],
  country: {}
})
export const mutations = {
  SET_COUNTRIES(state, payload) {
    state.countries = payload
  },
  SET_COUNTRY(state, payload) {
    state.country = payload
  }
}

export const getters = {
}
export const actions = {
  async get_countries({commit}) {
    commit('SET_COUNTRIES', [])
    let res = await this.$axios.get('countries')
    commit('SET_COUNTRIES', res.data)
  },
  async get_country({commit}, slug) {
    commit('SET_COUNTRY', {})
    let res = await this.$axios.get(`/countries/${slug}`)
    commit('SET_COUNTRY', res.data)
  }
}
