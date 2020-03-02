import React from 'react'
import { connect } from 'react-redux'

function Status(props) {

  return (
    <h5>"{props.status}"</h5>
  )
}

const mapStateToProps = state => ({ status: state.currentUser.status })

export default connect(mapStateToProps)(Status)