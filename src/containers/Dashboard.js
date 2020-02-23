import React from 'react'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends React.Component {

  render() {
      if (this.props.currentUser[0] === undefined) {
        return <Redirect to={{pathname: "/login", state: {error: "Please log in or sign up"} }}/>
      }

      return(
      <div>Dashboard</div>
    )
  }

}

const mapStateToProps = state => ({currentUser: state.currentUser})

export default connect(mapStateToProps)(Dashboard)