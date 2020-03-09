import React from 'react'

import axios from 'axios'
import moment from 'moment'

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
        <p>From: {this.state.sender.name}</p>
        <p>{content}</p>
        <p>{ time }</p>
      </div>

    )
  }
}