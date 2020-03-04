import React from 'react'
import { connect } from 'react-redux'

function Status(props) {

  return (
    props.status ? <h5>"{props.status}"</h5> : null
  )
}

const mapStateToProps = state => ({ status: state.currentUser.status })

export default connect(mapStateToProps)(Status)