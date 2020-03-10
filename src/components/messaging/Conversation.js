import React from 'react'

import axios from 'axios'
import Card from 'react-bootstrap/Card'

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
    const convo = this.props.convo
    // debugger
    const userId = currentUser.id === convo[0].sender_id ? convo[0].reciever_id : convo[0].sender_id
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
    const userLink = `/messaging/${this.state.friend.id}`
    return (
      <Card style={{margin: '15px', padding: '15px'}}>
        <div className="d-flex">
          <div style={{width: '70px', marginRight: '15px'}}><img style={{width: '100%'}} src={this.state.friend.image} alt={this.state.friend.name} /></div>
          <div>
          <Card.Title>{this.state.friend.name}</Card.Title>
          <Card.Link href={userLink}>view conversation</Card.Link>
          </div>
        </div>
      </Card>
    )
  }
}