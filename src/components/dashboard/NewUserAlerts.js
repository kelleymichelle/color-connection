import React, { useState } from 'react'
import Toast from 'react-bootstrap/Toast'
import ColorToken from './ColorToken'

export default function NewUserAlerts(props) {

  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);
  const [showC, setShowC] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
  const toggleShowC = () => setShowC(!showC);

  const toggleNewUserStatus = () => {
    if (!showA && !showB && !showC) {
      props.toggleNewUserStatus()
    }
  }
 
    return (

      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 10,
        marginTop: '2%',
        marginRight: '1%'
      }}>
        {toggleNewUserStatus()}
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <strong>Welcome!</strong>
          </Toast.Header>
          <Toast.Body>Thanks for signing up with Color Connection! We pride ourselves on providing our users with the resources neccesary to create lasting, meaningful connections. Please take the time to give your profile a personal touch.</Toast.Body>
        </Toast>

        <Toast show={showC} onClose={toggleShowC}>
          <Toast.Header>
            <strong>Color Token</strong>
          </Toast.Header>
          <Toast.Body >
            {<ColorToken color={props.color}/>} 
            <div style={{margin: '5px'}}>According to your color quiz, your color is {props.color}. Click on a color token to get info about that color. There's also more information in the 'About Color Tokens' link.</div>
            </Toast.Body>
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