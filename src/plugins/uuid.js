let uuid = 54321

export default {
  install(Vue) {
    Vue.mixin({
      data: () => ({
        $uuid: ('000000' + uuid.toString(16)).slice(-4),
      }),
      beforeCreate() {
        // this.$uuid = ('000000' + uuid.toString(16)).slice(-4)
        uuid++
      },
    })
  },
}
