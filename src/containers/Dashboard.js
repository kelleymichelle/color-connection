import React from 'react'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { Link } from 'react-router-dom'

import Horoscope from '../components/dashboard/Horoscope'
import ColorToken from '../components/dashboard/ColorToken'

class Dashboard extends React.Component {

  
  render() {
    if (this.props.currentUser[0] === undefined) {
      return <Redirect to={{pathname: "/login", state: {error: "Please log in or sign up"} }}/>
    }
    
    const user = this.props.currentUser[0]
      return(
        <>
          <h1>Welcome, {user.name}</h1>
          <div>
            <Link to="/edit-about-me">Edit my Details</Link>
            <Link to="/color-info">Learn more about Color Tokens</Link>
            <Horoscope/>
            <ColorToken color={user.color} />
          </div>
      </>
    )
  }

}

const mapStateToProps = state => ({currentUser: state.currentUser})

export default connect(mapStateToProps)(Dashboard)