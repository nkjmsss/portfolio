import firebase from 'firebase'
import config from '~/../firebase/config'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
