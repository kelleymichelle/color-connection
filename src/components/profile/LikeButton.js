import React from 'react'

import { connect } from 'react-redux'


class LikeButton extends React.Component {

  render() {
    const user = this.props.user
    const unheart = 'https://res.cloudinary.com/color-connection/image/upload/v1583002402/unheart_nnzhw0.png'
    const heart = 'https://res.cloudinary.com/color-connection/image/upload/v1583002402/heart_b794ji.png'
    const currentUser = this.props.currentUser
    return (
      <>
        <img style={{ width: '15%', marginTop: '10px'}} src={heart} alt="heart" />
      </>
    )
  }
}

const mapStateToProps = state => ({ currentUser: state.currentUser })

export default connect(mapStateToProps)(LikeButton)