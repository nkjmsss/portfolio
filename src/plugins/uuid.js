import Vue from 'vue'

let uuid = 54321

Vue.mixin({
  beforeCreate() {
    this.$uuid = ('000000' + uuid.toString(16)).slice(-4)
    uuid++
  },
})
