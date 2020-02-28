import React from 'react'

// import Card from 'react-bootstrap/Card'

export default function UserImage(props) {

  return (
    <>
      <img variant="left" style={{width: '20%'}} src={props.image} alt="user" />
    </>
  )
}