import React from 'react'
import ColorToken from '../components/dashboard/ColorToken'
import Zodiac from '../components/profile/Zodiac'
import UserBio from '../components/profile/UserBio'
import Location from '../components/profile/Location'
import Gender from '../components/profile/Gender'
import UserImage from '../components/profile/UserImage'

import axios from 'axios'

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
      <div>
        <h1>{user.name} Profile</h1>
        <UserImage image={user.image} />
        <Location location={user.location} />
        <ColorToken color={user.color} />
        <Zodiac zodiac={user.zodiac} />
        <UserBio bio={user.bio} />
        <Gender gender={user.gender} />
      </div>
    )}
    return (
      <p>Loading...</p>
    )
  }
}