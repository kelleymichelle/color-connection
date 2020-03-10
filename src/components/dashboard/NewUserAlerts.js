import React, { useState } from 'react'
import Toast from 'react-bootstrap/Toast'
// import ToastBody from 'react-bootstrap/ToastBody'

export default function NewUserAlerts() {

  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

 
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 10,
        marginTop: '2%'
      }}>
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <strong>Welcome!</strong>
          </Toast.Header>
          <Toast.Body>Thanks for signing up with Color Connection! We pride ourselves on providing our users with the resources neccesary to create lasting, meaningful connections.</Toast.Body>
        </Toast>

      <Toast show={showB} onClose={toggleShowB}>
        <Toast.Header>
          <strong>Connect</strong>
        </Toast.Header>
        <Toast.Body>Please explore and grow as you learn about yourself and apply that wisdom to your daily life.</Toast.Body>
      </Toast>
    </div>
    )
  
}