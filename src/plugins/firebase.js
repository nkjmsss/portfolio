import firebase from 'firebase'
import config from '~/../firebase/config'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const firestoreSettings = {
  // timestampsInSnapshots: true,
}

firebase.firestore().settings(firestoreSettings)

export default firebase
