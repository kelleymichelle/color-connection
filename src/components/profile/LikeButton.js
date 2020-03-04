import React from 'react'

// import { connect } from 'react-redux'


export default class LikeButton extends React.Component {
  state = {
    user: '',
    following: ''
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      // debugger
      this.setState({
        user: this.props.user,
        following: this.props.following
      })
    }
  }
  
  render() {
    const user = this.state.user
    const following = this.state.following
    // debugger
    // console.log(user)
    const unheart = 'https://res.cloudinary.com/color-connection/image/upload/v1583002402/unheart_nnzhw0.png'
    const heart = 'https://res.cloudinary.com/color-connection/image/upload/v1583002402/heart_b794ji.png'
    // const currentUser = this.props.currentUser

    if ( following && following.find(u => u.id === user.id) ) {
      return (
        <img onClick={this.props.handleUnlikeClick} style={{ width: '5%', marginTop: '10px'}} src={heart} alt="heart" />
      )
    } else {
      return (
          <img onClick={this.props.handleLikeClick} style={{ width: '5%', marginTop: '10px'}} src={unheart} alt="unheart" />
      )
    }
  }
}
