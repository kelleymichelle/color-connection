import React from 'react'

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'

import Zodiac from './profile/Zodiac'
import Location from './profile/Location'
// import LikeButton from './profile/LikeButton'

export default function UserCard(props) {

  const colorStyle = color => {
    switch(color) {
      case "orange":
        return "#fd914c"
      case "blue":
        return "#38b6ff"
      case "gold":
        return "#fede58"
      case "green":
        return "#7dd957"
      default:
        return color        
    }
  }

  const user = props.user
  const userPath = `/user/${user.id}`

  const userCardStyles = {
    width: '19em', 
    color: 'white',
    backgroundColor: colorStyle(user.color), 
    borderColor: colorStyle(user.color), 
    borderWidth: '4px', 
    margin: '10px'
  }

  return (
    <>
      <Card style={userCardStyles}>
      <Card.Body>
        <Link style={{textDecoration: 'none', color: 'white'}} to={{
          pathname: userPath,
          state: {
            user: user
          }
        }}>
          <center>
          <Card.Img style={{ width: '80%' }} variant="top" src={user.image} />
            <Card.Title>{user.name}</Card.Title></center>
        </Link>
            <div style={{margin: '5px'}} className="d-flex flex-row align-items-center justify-content-start">
              
              {/* <Card.Subtitle style={{marginLeft: '10px'}}> */}
                <Location location={user.location} />
              {/* </Card.Subtitle> */}
              <Zodiac zodiac={user.zodiac}/>
            </div>
              {/* <LikeButton user={user}/> */}
          </Card.Body>
      </Card>
    </>
  )
}