export default ({ app, store }) => {
  app.router.beforeEach((to, from, next) => {
    console.log(to) // TODO
    next()
  })

  app.router.afterEach((to, from) => {
    store.commit('setMenuOpen', false)
  })
}
