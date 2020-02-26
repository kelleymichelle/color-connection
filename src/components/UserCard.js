import React from 'react'

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'

export default function UserCard(props) {
  const user = props.user
  const userPath = `/user/${user.id}`
  return (
    <Link to={{
      pathname: userPath,
      state: {
        user: user
      }
    }}>
      <Card style={{ width: '19em' }}>
        <Card.Body>
          <Card.Img style={{ width: '80%' }} variant="top" src={user.image} />
          <Card.Title>{user.name}</Card.Title>
          <Card.Subtitle>{user.location}</Card.Subtitle>
        </Card.Body>
      </Card>
    </Link>
  )
}