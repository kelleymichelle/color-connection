import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class SignUp extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }  

  handleSubmit = e => {
    e.preventDefault();
    console.log(e)
  }

  render() {
    return (
      <div>
        
        <Form style={{width: "17em"}} onSubmit={this.handleSubmit}>
          <Form.Group controlId="signup-form-name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleOnChange} placeholder="Enter Name" />
          </Form.Group>

          <Form.Group controlId="signup-form-email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleOnChange} placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="signup-form-password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleOnChange} placeholder="Enter Password" />
          </Form.Group>

          <Form.Group controlId="signup-form-password-confirmation">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleOnChange} placeholder="Confirm Password" />
          </Form.Group>

          <Button type="submit">Sign Up Now!</Button>
        </Form>
        
      </div>
    )
  }

}