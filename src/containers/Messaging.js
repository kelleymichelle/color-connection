import React from 'react'
import axios from 'axios'

import { connect } from 'react-redux'

import Message from '../components/messaging/Message'

import MessageInput from '../components/messaging/MessageInput'

class Messaging extends React.Component {
  state = {
    currentUser: '',
    recipient: '',
    conversation: []
    
  }

  componentDidMount() {
    if (this.props.location.state) {
      const recipientId = this.props.location.state.recipient.id
      return this.fetchUser(recipientId)
    }

  }

  componentDidUpdate(prevProps) {
    if ( (this.props.currentUser !== prevProps.currentUser) || (this.state.recipient && this.state.conversation === []) ) {
      const userId = this.props.match.params.userId
      this.fetchUser(userId)
    }
  }

  fetchUser = id => {
    // if (this.props.location.state.convo && this.props.location.state.user) {
    //   this.setState({
    //     convo: this.props.location.state.convo,
    //     recipient: this.props.location.state.user
    //   })
    // } else {
    const currentUser = this.props.currentUser.id
    axios.get(`http://localhost:3001/users/${id}`, { params: { currentUser } } ,
    {withCredentials: true})
    .then(response => {
      // debugger
      console.log("fetched conversation")
      this.setState({
        recipient: response.data.user,
        conversation: response.data.conversation || [],
        currentUser: this.props.currentUser
       
      })
    })
    .catch(error => console.log(error))
    // }
  }

  handleMessageSubmit = data => {
    // console.log(data)
    const { recipient } = data

    axios.post(`http://localhost:3001/messages/${recipient.id}/new`, { data },
      {withCredentials: true})
      .then(response => {
        if (response.data.conversation) {
          // console.log(response)
          const convo = response.data.conversation
          this.props.dispatch({ type: 'LOAD_CONVERSATION', payload: convo })
          this.setState({
            conversation: convo
          })
      }
    })
      // .catch(error => console.log(error))

      
      //need to connect component to store and dispatch conversation to store
  }

  render() {
    return (
      <div style={{margin: '25px'}}>
        <h1>Conversation with {this.state.recipient.name}</h1>
        <div>
          { this.state.conversation ? this.state.conversation.map(m => <Message key={m.id} content={m} /> ) : "What are you waiting for? Break the ice!"}
        </div>
        <MessageInput handleMessageSubmit={this.handleMessageSubmit} currentUser={this.props.currentUser} recipient={this.state.recipient}/>
      </div>
    )
  }
}

export default connect()(Messaging)