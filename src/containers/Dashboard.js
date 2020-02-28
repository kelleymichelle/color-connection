import React from 'react'

import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'

import { Link } from 'react-router-dom'

// import Horoscope from '../components/dashboard/Horoscope'
import ColorToken from '../components/dashboard/ColorToken'
import FetchHoroscope from '../components/FetchHoroscope'

import ImageUploader from '../components/profile/ImageUploader'

class Dashboard extends React.Component {

  
  render() {
  
      const user = this.props.user
      const userProfile = `/user/${user.id}`
      return(
        <div style={{color: '#444444'}}>
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
            
            
            <FetchHoroscope zodiac={user.zodiac}/>
            <ColorToken color={user.color} />
            <ImageUploader user={user}/>
          </div>
      </div>
    )
  }

}

const mapStateToProps = state => ({currentUser: state.currentUser})

export default connect(mapStateToProps)(Dashboard)