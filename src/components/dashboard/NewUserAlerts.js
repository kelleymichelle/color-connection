import React from 'react'
import Toast from 'react-bootstrap/Toast'
// import ToastBody from 'react-bootstrap/ToastBody'

export default class NewUserAlerts extends React.Component {

  render() {
    return (
      <>
        <Toast>
          <Toast.Header>
            <strong>Welcome!</strong>
          </Toast.Header>
          <Toast.Body>Thanks for signing up with Color Connection! We pride ourselves on providing our users with the resources neccesary to create lasting, meaningful connections.</Toast.Body>
        </Toast>
        
        <Toast>
        <Toast.Header>
          <strong>Connect</strong>
        </Toast.Header>
        <Toast.Body>Please explore and grow as you learn about yourself and apply that wisdom to your daily life.</Toast.Body>
      </Toast>
    </>
    )
  }
}