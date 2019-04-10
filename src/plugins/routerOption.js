export default ({ app, store }) => {
  app.router.afterEach((to, from) => {
    store.commit('setMenuOpen', false)
  })
}
