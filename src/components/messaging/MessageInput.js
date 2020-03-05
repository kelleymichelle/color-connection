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

  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Control type="textarea" name="content" placeholder="Type message here..." value={this.state.content}/>
          </Form.Group>
          <Button type="submit">Send</Button>
        </Form>
      </div>
    )
  }
}

export default connect()(MessageInput)