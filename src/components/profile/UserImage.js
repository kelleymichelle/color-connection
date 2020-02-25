import React from 'react'

export default function UserImage(props) {

  return (
    <div>
      <img style={{width: '20%'}} src={props.image} alt="user" />
    </div>
  )
}