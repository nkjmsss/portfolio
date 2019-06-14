import sleep from '~/lib/helpers/sleep.js'
import scrollable from '~/lib/helpers/scrollable.js'

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

export const actions = {
  init({ commit }) {
    // watch menuOpen
    this.watch(
      state => state.menuOpen,
      newValue => {
        ;[
          // auto hide outside of frame
          async () => {
            if (!newValue) {
              await sleep(100)
            }

            commit('setHideContent', newValue)
          },

          // disable background scroll
          () => {
            if (newValue) {
              scrollable(false)
            } else {
              scrollable(true)
            }
          },
        ].forEach(fn => {
          fn()
        })
      }
    )
  },
}
