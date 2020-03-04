import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBaXSGYfg_MmP1RACUs6aRkZtIub5RwiyA",
  authDomain: "color-connection.firebaseapp.com",
  databaseURL: "https://color-connection.firebaseio.com",
  projectId: "color-connection",
  storageBucket: "color-connection.appspot.com",
  messagingSenderId: "930789923253",
  appId: "1:930789923253:web:5746e4f93436e2c75421fc",
  measurementId: "G-M2HTCQZQ5Z"
}

firebase.initializeApp(config)

export default firebase