import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import axios from 'axios'

import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

export default class StatusForm extends React.Component {
  state = {
    status: '',
    show: false
    
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()
  }

  updateStatus = () => {
    this.setState({
      show: true
    })
  } 

  render() {

    if (this.state.show) {
    return (
      <div>
        <Form>
          <Form.Group>
            {/* <Form.Label>Update status:</Form.Label> */}
            <Form.Control 
              type="text" 
              name="status" 
              value={this.state.status} 
              onChange={this.handleOnChange} 
              placeholder="Update Status..." 
            />
          </Form.Group>
          <Button type="submit">Save</Button>
        </Form>
      </div>
    ) } else {
      return (
        <Button onClick={this.updateStatus}>Update Status</Button>
      )
    }
  }
}