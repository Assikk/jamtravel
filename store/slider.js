export const state = () => ({
  images: [
    {
      id: 1,
      url: '1.png'
    },
    {
      id: 2,
      url: '2.png'
    },
    {
      id: 3,
      url: '3.png'
    },
    {
      id: 4,
      url: '4.png'
    },
    {
      id: 5,
      url: '5.png'
    },
  ],
  activeImage: {}
})
export const mutations = {
  SET_ACTIVEIMAGE(state, payload) {
    state.activeImage = payload
  }
}

export const getters = {
}
export const actions = {
}
