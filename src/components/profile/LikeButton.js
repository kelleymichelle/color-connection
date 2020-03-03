import React from 'react'

import { connect } from 'react-redux'


class LikeButton extends React.Component {
  // constructor(props) {
  //   super(props)
  //     this.state = {
  //       likes: [...props.likes],
  //       user: props.user
  //     }
  // }


  // likeOnClick = user => {
  //   console.log("clicked")
  //   this.props.dispatch({ type: 'LIKE_USER', payload: user })
  //   // this.setState({
  //   //   likes: [...this.state.likes, user]
  //   // })
  // }

  // unlikeOnClick = user => {
  //   console.log("unliked")
  //   // const likes = this.state.likes
  //   this.props.dispatch({ type: 'UNLIKE_USER', payload: user })
  //   // this.setState({
  //   //   likes: likes.filter(l => l !== user)
  //   // })
  // }

  render() {
    const user = this.props.user
    const likes = this.props.likes
    const unheart = 'https://res.cloudinary.com/color-connection/image/upload/v1583002402/unheart_nnzhw0.png'
    const heart = 'https://res.cloudinary.com/color-connection/image/upload/v1583002402/heart_b794ji.png'
    // const currentUser = this.props.currentUser

    if ( likes && likes.includes(user.id)) {
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

const mapStateToProps = state => ({ likes: state.likes })

export default connect(mapStateToProps)(LikeButton)