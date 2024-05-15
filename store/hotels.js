export const state = () => ({
  hotels: [],
  hotel: {}
})
export const mutations = {
  SET_HOTELS(state, payload) {
    state.hotels = payload
  },
  SET_HOTEL(state, payload) {
    state.hotel = payload
  }
}

export const getters = {
}
export const actions = {
  async get_hotelsByCountry({commit}, slug) {
    commit('SET_HOTELS', [])
    let res = await this.$axios.get(`countries/${slug}/hotels`)
    commit('SET_HOTELS', res.data)
  },
  async get_hotel({commit}, id) {
    commit('SET_HOTEL', {})
    let res = await this.$axios.get(`hotels/${id}`)
    commit('SET_HOTEL', res.data)
  },
  async booking_hotel({commit}, form) {
    commit('SET_HOTEL', {})
    let res = await this.$axios.post('requests', form)
      commit('SET_HOTEL', res.data)
  }
}
