import React from 'react'

import axios from 'axios'

// import Toast from 'react-bootstrap/Toast'
import Notify from './Notify'
// import { render } from '@testing-library/react'

export default class Notifications extends React.Component {

  state = {
    currentUser: '',
    notifications: []
  }

  componentDidMount() {
    if (this.props.currentUser) {
      const user = this.props.currentUser
      this.fetchNotifications(user)
     
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
          console.log("notifications fetched")
          this.setState({
            notifications: response.data.notifications
          })
        }
      })
      .catch(error => console.log(error))
      }
  }

  parseNotifications = () => {
    return this.state.notifications.map(note => {
      return (
        <Notify note={note} />
      )
    })
  }
  
  render() {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 10,
        marginTop: '2%',
        marginRight: '1%'
      }}>
        { this.parseNotifications() }
      </div>
    )
  }
}