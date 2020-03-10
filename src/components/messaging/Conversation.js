import React from 'react'

import axios from 'axios'

export default class Conversation extends React.Component {

  state = {
    friend: [],
    convo: []
  }

  componentDidMount() {
    if (this.props.convo && this.props.currentUser) {
      this.fetchUserData()
    }
  }

  fetchUserData = () => {
    const currentUser = this.props.currentUser
    const convo = this.props.convo[0]
    // debugger
    const userId = currentUser.id === convo.sender_id ? convo.reciever_id : convo.sender_id
    console.log(userId)

    axios.get(`http://localhost:3001/users/${userId}`,
      {withCredentials: true})
      .then(response => {
        console.log(response.data)
        this.setState({
          friend: response.data.user,
          convo: convo
        })
      })
  }

  render() {
    return (
      null
    )
  }
}