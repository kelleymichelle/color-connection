import React from 'react'
import firebase from '../firebase.js'
// import Firechat from 'firechat'
// import FirechatUI from 'firechat'
// import * as admin from 'firebase-admin'


export default function Chat(props) {

  // componentDidMount() {
  //   this.createToken()
  // }

  // const createToken = () => {
  
  //   firebase.auth().signInAnonymously().catch(function(error) {
  //     console.log(error)
  //   })
  //   firebase.auth().onAuthStateChanged(function(user) {
  //     if (user) {
  //       console.log(user)
  //       const uid = user.uid
  //       initChat(uid)
  //     }
  //   })
  // }

  const initChat = () => {
    const email = props.user.email
    const user = props.user.name
    const database = firebase.firestore()
    database.collection("users").add({
      name: user,
      userEmail: email
    })
    .then(docRef => console.log(docRef))
    .catch(error => console.log(error))
    

  }


    return (
      <div id="firechat-wrapper">
        {initChat()}
      </div>
    )
  
}