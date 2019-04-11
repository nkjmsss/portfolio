import { $sleep } from '~/plugins/sleep'

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

          store.commit('setHideFrameOutside', newValue)
        },

        // disable background scroll
        () => {
          const setOverflow = v => {
            document.documentElement.style.overflow = v
            document.body.style.overflow = v
          }

          if (newValue) {
            setOverflow('hidden')
          } else {
            setOverflow('auto')
          }
        },
      ].forEach(fn => {
        fn()
      })
    }
  )
}
