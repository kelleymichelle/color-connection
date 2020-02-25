import React from 'react'

import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'

import { Link } from 'react-router-dom'

import Horoscope from '../components/dashboard/Horoscope'
import ColorToken from '../components/dashboard/ColorToken'

import ImageUploader from '../components/profile/ImageUploader'

class Dashboard extends React.Component {

  
  render() {
    // if (this.props.user.color === null) {
    //   return (this.props.history.push('/colorquiz'))
    // }
    
    // const user = this.props.currentUser[0]
      const user = this.props.user
      const userProfile = `/user/${user.id}`
      return(
        <>
          <h1>Welcome, {user.name}</h1>
          <div>
            <Link to=
              {{
                pathname: userProfile,
                state: {
                  user: user
                }
              }}>
                View my Profile</Link>
            <Link to="/edit-about-me">Edit my Details</Link>
            <Link to="/color-info">Learn more about Color Tokens</Link>
            <Horoscope/>
            <ColorToken color={user.color} />
            <ImageUploader user={user}/>
          </div>
      </>
    )
  }

}

const mapStateToProps = state => ({currentUser: state.currentUser})

export default connect(mapStateToProps)(Dashboard)