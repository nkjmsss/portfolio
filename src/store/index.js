export const state = () => ({
  hideFrameOutside: false,
  menuOpen: false,
})

export const mutations = {
  setHideFrameOutside(state, bool) {
    state.hideFrameOutside = bool
  },

  setMenuOpen(state, bool) {
    state.menuOpen = bool
  },
}
