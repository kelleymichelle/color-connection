import React from 'react'
import axios from 'axios'

import MessageInput from '../components/messaging/MessageInput'

export default class Messaging extends React.Component {
  state = {
    currentUser: '',
    recipient: ''
    
  }

  componentDidMount() {
    const userId = this.props.match.params.userId
    this.fetchUser(userId)
  }

  fetchUser = id => {
    axios.get(`http://localhost:3001/users/${id}`,
    {withCredentials: true})
    .then(response => {
      console.log(response.data.user)
      this.setState({
        recipient: response.data.user
       
      })
    })
    .catch(error => console.log(error))
  }

  handleMessageSubmit = data => {
    console.log(data)
    const { content, currentUser, recipient } = data
  }

  render() {
    return (
      <div style={{margin: '25px'}}>
        <h1>Conversation with {this.state.recipient.name}</h1>
        <div>
          { this.state.conversation ? null : "What are you waiting for? Break the ice!"}
        </div>
        <MessageInput handleMessageSubmit={this.handleMessageSubmit} currentUser={this.props.currentUser} recipient={this.state.recipient}/>
      </div>
    )
  }
}