import React, { useState } from 'react'
import Toast from 'react-bootstrap/Toast'

export default function Notify(props) {

  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
    <Toast show={showA} key={props.note.id} onClose={toggleShowA}>
      <Toast.Header>
        <strong>Notification</strong>
      </Toast.Header>
      <Toast.Body>
        {props.note.content}
      </Toast.Body>
    </Toast>
  )
}