export default ({ app, store }) => {
  app.router.beforeEach((to, from, next) => {
    // eslint-disable-next-line
    console.log(to)
    next()
  })

  app.router.afterEach((to, from) => {
    store.commit('setMenuOpen', false)
  })
}
