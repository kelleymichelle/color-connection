import React from 'react'
import ColorToken from '../components/dashboard/ColorToken'
import Zodiac from '../components/profile/Zodiac'

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
    }
  }

  fetchUser = id => {

  }

  render() {
    // console.log(this.state.user)
    if (this.state.user) {
    const user = this.state.user
    return (
      <div>
        <h1>{user.name} Profile</h1>
        <ColorToken color={user.color} />
        <Zodiac zodiac={user.zodiac} />
      </div>
    )}
    return (
      <p>Loading...</p>
    )
  }
}