export const state = () => ({
  hideContent: false,
  menuOpen: false,
})

export const mutations = {
  setHideContent(state, bool) {
    state.hideContent = bool
  },

  setMenuOpen(state, bool) {
    state.menuOpen = bool
  },
}
