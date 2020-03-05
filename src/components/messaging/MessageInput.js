import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { connect } from 'react-redux'
import axios from 'axios'

class MessageInput extends React.Component {
  state = {
    content: '',
    user: ''
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        user: this.props.user
      })
    }
  }

  handleSubmit = e => {
    e.preventDefault();

  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Control type="textarea" name="content" onChange={this.handleOnChange} placeholder="Type message here..." value={this.state.content}/>
          </Form.Group>
          <Button type="submit">Send</Button>
        </Form>
      </div>
    )
  }
}

export default connect()(MessageInput)