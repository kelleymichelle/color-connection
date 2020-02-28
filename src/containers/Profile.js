import React from 'react'
import ColorToken from '../components/dashboard/ColorToken'
import Zodiac from '../components/profile/Zodiac'
import UserBio from '../components/profile/UserBio'
import Location from '../components/profile/Location'
import Gender from '../components/profile/Gender'
// import UserImage from '../components/profile/UserImage'

import axios from 'axios'

import Card from 'react-bootstrap/Card'


export default class Profile extends React.Component {
  state = {
    user: []
  }

  componentDidMount() {
    if (this.props.location.state) {
      const user = this.props.location.state.user
      this.setState({
        user: user
      })
    } else {
      const userId = this.props.match.params.userId
      this.fetchUser(userId)
    }
  }

  fetchUser = id => {
    axios.get(`http://localhost:3001/users/${id}`,
    {withCredentials: true})
    .then(response => {
      this.setState({
        user: response.data.user
      })
    })
    .catch(error => console.log(error))

  }

  render() {
    // console.log(this.state.user)
    if (this.state.user) {
    const user = this.state.user
    return (
      <Card className="d-flex flex-row flex-wrap" style={{padding: '2em'}}>
        
        <Card.Img variant="left" style={{width: '25%'}} src={user.image} alt="user" />
       
        <Card.Body>

          <div className="d-flex flex-row align-items-center">
            <Card.Title style={{margin: '3px'}}>{user.name} Profile</Card.Title>
            <div style={{margin: '3px'}}><ColorToken color={user.color} /></div>
            <div style={{margin: '3px'}}><Zodiac zodiac={user.zodiac} /></div>
          </div>  
          
          <Location location={user.location} />
          <UserBio bio={user.bio} />
          <Gender gender={user.gender} />
        </Card.Body>
        
      </Card>
    )}
    return (
      <p>Loading...</p>
    )
  }
}