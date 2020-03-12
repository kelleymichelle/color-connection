import React from 'react'
import ColorToken from '../components/dashboard/ColorToken'
import Zodiac from '../components/profile/Zodiac'
import AnimalIcon from '../components/profile/AnimalIcon'
import UserBio from '../components/profile/UserBio'
import Location from '../components/profile/Location'
import Gender from '../components/profile/Gender'
// import UserImage from '../components/profile/UserImage'
import LikeButton from '../components/profile/LikeButton'
import LoveLanguage from '../components/profile/LoveLanguage'

import { connect } from 'react-redux'

import axios from 'axios'

import Card from 'react-bootstrap/Card'


class Profile extends React.Component {
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

  handleLikeClick = e => {
    console.log("clicked")

    const currentUser = this.props.currentUser.id
    const user = this.state.user
       
       axios.post(`http://localhost:3001/users/${user.id}/follow`, {currentUser},
        {withCredentials: true})
        .then(response => {
          if (response.data) {
            this.props.dispatch({ type: 'LIKE_USER', payload: user })
            console.log(response)
          } else {
            console.log(response)
          }
        })
        .catch(error => console.log('api errors:', error))

  }

  handleUnlikeClick = e => {
    const currentUser = this.props.currentUser.id
    const user = this.state.user
      // this.props.dispatch({ type: 'UNLIKE_USER', payload: user })
      axios.post(`http://localhost:3001/users/${user.id}/follow`, {currentUser},
        {withCredentials: true})
        .then(response => {
          if (response.data) {
            this.props.dispatch({ type: 'UNLIKE_USER', payload: user })
            console.log(response)
          } else {
            console.log(response)
          }
        })
        .catch(error => console.log('api errors:', error))
  }

  render() {
    // console.log(this.state.user)
    if (this.state.user) {
    const user = this.state.user
    return (
      <Card className="d-flex flex-row" style={{padding: '2em'}}>
        
        { user.image ? <Card.Img variant="left" style={{width: '30%'}} src={user.image} alt="user" /> : <Card.Img variant="left" style={{width: '30%'}} src="https://res.cloudinary.com/color-connection/image/upload/v1584032700/default-user-img_kdefff.png" alt="user" /> }
       {/* <div> */}
        <Card.Body>

          <div className="d-flex flex-row align-items-center">
            <Card.Title as="h3" style={{margin: '3px'}}>{user.name}</Card.Title>
            <div style={{margin: '3px'}}><ColorToken color={user.color} /></div>
            <div style={{margin: '3px'}}><Zodiac zodiac={user.zodiac} /></div>
          </div>  
          <div style={{margin: "8px"}} className="d-flex flex-row flex-wrap align-items-center">
            { user.status ? <> <h6 style={{marginRight: "5px"}}>Current Status: </h6> <h5>"{user.status}"</h5> </> : null }
          </div>
          <Location location={user.location} />
          <UserBio bio={user.bio} />
          <Gender gender={user.gender} />

          { user.animal ? (<div style={{margin: '5px'}} className="d-flex align-items-center"><AnimalIcon animal={user.animal} /> person</div>) : null}
          { user.loveLanguage ? <LoveLanguage loveLanguage={user.loveLanguage} /> : null }
          <LikeButton currentUser={this.props.currentUser} following={this.props.following} user={user} handleLikeClick={this.handleLikeClick} handleUnlikeClick={this.handleUnlikeClick}/>
        </Card.Body>
        {/* </div> */}
      </Card>
    )}
    return (
      <p>Loading...</p>
    )
  }
}

const mapStateToProps = state => ({ following: state.following, followers: state.followers })

export default connect(mapStateToProps)(Profile)