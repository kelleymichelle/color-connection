import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { connect } from 'react-redux'
// import axios from 'axios'

class MessageInput extends React.Component {
  state = {
    content: '',
    currentUser: '',
    recipient: ''
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        currentUser: this.props.currentUser,
        recipient: this.props.recipient
      })
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleMessageSubmit(this.state)
    this.setState({
      content: ''
    })
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div style={{margin: '15px'}}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Control style={{width: '75%'}} type="textarea" name="content" onChange={this.handleOnChange} placeholder="Type message here..." value={this.state.content}/>
          </Form.Group>
          <Button type="submit">Send</Button>
        </Form>
      </div>
    )
  }
}

export default connect()(MessageInput)