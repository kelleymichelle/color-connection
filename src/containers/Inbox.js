import React from 'react'
import axios from 'axios'
import Conversation from '../components/messaging/Conversation'

import Spinner from 'react-bootstrap/Spinner'

export default class Inbox extends React.Component {
  state = {
    currentUser: [],
    conversations: [],
    fetched: false
  }

  // async componentDidMount() {
  //   await this.setCurrentUser(this.props)
  //   this.fetchInbox()
  // }

  // setCurrentUser = props => {
  //   if (props.currentUser) {
  //     this.setState({
  //       currentUser: props.currentUser
  //     })
  //   }
  // }

  componentDidUpdate(prevProps) {
    if ((this.props.currentUser !== prevProps.currentUser) || (this.state.currentUser && this.state.conversations === [])){
      
    const userId = this.props.currentUser.id

      axios.get(`http://localhost:3001/users/${userId}/inbox`, {withCredentials: true})
        .then(response => this.setState({
          currentUser: this.props.currentUser,
          conversations: response.data.conversations,
          fetched: true
        }))
    }
  }

  fetchInbox = () => {
    const userId = this.props.currentUser.id
    if (userId !== undefined) { 
      axios.get(`http://localhost:3001/users/${userId}/inbox`, {withCredentials: true})
        .then(response => this.setState({
          currentUser: this.props.currentUser,
          conversations: response.data.conversations,
          fetched: true
        }))
    }    
  }

  render() {
    if (this.state.fetched === false) {
      return (
        <>
        <Spinner animation="grow" variant="primary"/> <h1>Loading Inbox...</h1>
        </>
      )
    }
    // } else {
    return (
      <div style={{margin: '1%'}}>
        <h1 style={{margin: '2%'}}>Inbox</h1>
        { this.state.fetched === true ? null : this.fetchInbox() }
        <div>{ this.state.conversations.map(c => <Conversation  key={c[0].id} currentUser={this.state.currentUser} convo={c} /> ) }</div>
      </div>
    )
    // }
  }
}