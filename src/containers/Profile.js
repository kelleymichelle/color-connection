import React from 'react'

export default class Profile extends React.Component {
  state = {
    user: []
  }

  componentDidMount() {
    if (this.props.location.state) {
      const user = this.props.location.state.user.user
      this.setState({
        user: user
      })
    }
  }

  fetchUser = id => {

  }

  render() {
    const user = this.state.user
    return (
    <h1>{user.name} Profile</h1>
    )
  }
}