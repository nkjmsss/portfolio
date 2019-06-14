import Vue from 'vue'
import ComponentsPlugin from './components.js'
import CreateHeadPlugin from './createHead.js'
import FirebasePlugin from './firebase.js'
import UuidMixin from './uuid.js'

Vue.use({
  install(Vue) {
    Vue.use(ComponentsPlugin)
    Vue.use(CreateHeadPlugin)
    Vue.use(FirebasePlugin)
    Vue.use(UuidMixin)
  },
})
