export const state = () => ({
  hideContent: false,
  menuOpen: false,
  primaryColor: '#d9333f',
  loading: false,
})

export const mutations = {
  setHideContent(state, bool) {
    state.hideContent = bool
  },

  setMenuOpen(state, bool) {
    state.menuOpen = bool
  },

  setLoading(state, bool) {
    state.loading = bool
  },
}
