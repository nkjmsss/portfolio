import { $sleep } from '~/plugins/sleep'

const scrollable = bool => {
  const v = bool ? 'auto' : 'hidden'

  document.documentElement.style.overflow = v
  document.body.style.overflow = v
}

export default ({ store }) => {
  // watch menuOpen
  store.watch(
    state => state.menuOpen,
    (newValue, oldValue) => {
      ;[
        // auto hide outside of frame
        async () => {
          if (!newValue) {
            await $sleep(100)
          }

          store.commit('sethideContent', newValue)
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
}
