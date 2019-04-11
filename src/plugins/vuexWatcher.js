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
      ].forEach(fn => {
        fn()
      })
    }
  )
}
