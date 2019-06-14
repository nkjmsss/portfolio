let uuid = 54321

export default {
  install(Vue) {
    Vue.prototype.$uuid = () => ('000000' + uuid.toString(16)).slice(-4)

    Vue.mixin({
      beforeCreate() {
        uuid++
      },
    })
  },
}
