import React from 'react'

import axios from 'axios'
import { render } from '@testing-library/react'

// import Toast from 'react-bootstrap/Toast'

export default class Notifications extends React.Component {

  state = {
    currentUser: '',
    notifications: []
  }

  componentDidMount() {
    if (this.props.currentUser) {
      const user = this.props.currentUser
      this.fetchNotifications(user)
      // this.setState({
      //   currentUser: this.props.currentUser
      // })
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const user = this.props.currentUser
      this.fetchNotifications(user)
    }
  }

  fetchNotifications = user => {
    
    if (user.id !== undefined) {
    axios.get(`http://localhost:3001/users/${user.id}/notifications`, {withCredentials: true})
      .then(response => {
        if (response.data.notifications) {
          this.setState({
            notifications: response.data.notifications
          })
        }
      })
      .catch(error => console.log(error))
      }
  }
  
  render() {
    return (
      null
    )
  }
}