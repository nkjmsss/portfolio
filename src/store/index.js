export const state = () => ({
  hideFrameOutside: false,
})

export const mutations = {
  setHideFrameOutside(state, bool) {
    state.hideFrameOutside = bool
  },
}
