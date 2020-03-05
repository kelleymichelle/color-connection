import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
// import homeImage from '../images/home-image.png'
// import homeImage2 from '../images/home-image2.png'
import newPic from '../images/cc.png'

export default function Jumbo() {

  return (
    <Jumbotron style={{padding: '0px', backgroundColor: 'white'}}>
      <img style={{width: '100%', maxWidth: '1200px'}} src={newPic} alt="color connection />" />
    </Jumbotron>
  )

}