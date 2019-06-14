import firebase from 'firebase/app'
import 'firebase/firestore'
import config from '~/../firebase/config'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default {
  install(Vue) {
    Vue.prototype.$firebase = firebase
  },
}
