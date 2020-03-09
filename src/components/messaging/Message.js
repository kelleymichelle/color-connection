import React from 'react'

import axios from 'axios'
import moment from 'moment'

import Card from 'react-bootstrap/Card'

export default class Message extends React.Component {

  state = {
    sender: ''
  }

  componentDidMount() {
   
      const senderId = this.props.content.sender_id
      axios.get(`http://localhost:3001/users/${senderId}`,
    {withCredentials: true})
    .then(response => {
      // debugger
      // console.log(response.data.user)
      this.setState({
        sender: response.data.user,
      })
    })
    .catch(error => console.log(error))
    
  }
  
  render() {
    const content = this.props.content.content
    const time = moment(this.props.content.created_at).format('LLLL')
    // console.log(time)
    return (
      <div>
        <Card>
        <div className="d-flex">
          <div style={{maxWidth: '80px', margin: '10px'}}>
          <img style={{width: '100%'}} src={this.state.sender.image} alt={this.state.sender.name}/>
          </div>
          <Card.Body>
            <Card.Text>From: {this.state.sender.name}</Card.Text>
            <Card.Title>{content}</Card.Title>
          </Card.Body>
          </div>
            <Card.Footer>sent { time }</Card.Footer>
        </Card>
      </div>
    )
  }
}