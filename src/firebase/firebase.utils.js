import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDWEAF8mYnkk2tOtYHRrl1tGHcE8n9xKso',
  authDomain: 'crwn-db-2e2cf.firebaseapp.com',
  projectId: 'crwn-db-2e2cf',
  storageBucket: 'crwn-db-2e2cf.appspot.com',
  messagingSenderId: '357915782107',
  appId: '1:357915782107:web:1dc27d44f2d5ba48a995fe',
  measurementId: 'G-7MHSRREZFT',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const sighInWithGoole = () => auth.signInWithPopup(provider)

export default firebase
