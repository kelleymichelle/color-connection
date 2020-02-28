import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// import Status from './Status'

import axios from 'axios'

// import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

class StatusForm extends React.Component {
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

    let userInfo = { status: this.state.status }
    let user = this.props.user


    axios.patch(`http://localhost:3001/users/${user.id}`, {userInfo, user}, {withCredentials: true})
      .then(response => {
        if (response.data) {
          // debugger
          // const { birthday, gender, location } = response.data
          this.props.dispatch({ type: 'UPDATE_USER_INFO', payload: response.data })
          // this.redirect()
          console.log("after dispatch")
          this.setState({
            show: false
        })
       } else {
          this.setState({
            errors: response.data.errors
          })
        }
      })
      .catch(error => console.log('api errors:', error))
  }

  updateStatus = () => {
    this.setState({
      show: true
    })
  } 

  render() {

    if (this.state.show) {
    return (
      <div style={{width: '80%', margin: '10px'}}> 
        <Form onSubmit={this.handleOnSubmit} className="d-flex">
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

export default connect()(StatusForm)