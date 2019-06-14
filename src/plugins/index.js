import Vue from 'vue'
import ComponentsPlugin from './components.js'
import CreateHeadPlugin from './createHead.js'
import FirebasePlugin from './firebase.js'
import UuidPlugin from './uuid.js'

Vue.use({
  install(Vue) {
    Vue.use(ComponentsPlugin)
    Vue.use(CreateHeadPlugin)
    Vue.use(FirebasePlugin)
    Vue.use(UuidPlugin)
  },
})
