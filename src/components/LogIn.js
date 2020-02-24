import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import axios from 'axios'

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    errors: '',
    dashboardRoute: "/dashboard",
    redirect: null
  }

  componentDidUpdate() {
    return this.props.loggedInStatus ? this.redirect() : null
  }

  // redirect = () => {
  //   this.props.history.push('/')
  // }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    
    
    const { email, password} = this.state

    let user = {
      email: email,
      password: password
    }
    
    axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
      .then(response => {
        if (response.data.logged_in) {
          // debugger
          const history = this.props.history
          this.props.handleLogin(response.data, history)
          const userData = response.data.user
          this.props.dispatch({ type: 'LOGIN_USER', payload: userData })
          // this.redirect()
          this.setState({
            redirect: "/dashboard"
        })
       } else {
          this.setState({
            errors: response.data.errors
          })
        }
      })
      .catch(error => console.log('api errors:', error))

    
  }

  errorMessage = () => {
    if (this.props.location.state !== undefined) {
      return <Alert variant="danger">{this.props.location.state.error}</Alert>
    } else if (this.state.errors) {
      return this.state.errors.map(err => (
         <Alert variant="danger">{err}</Alert>
      ))
      
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    } 
    // if (this.props.loggedInStatus === true) {
    //   this.setState({
    //     redirect: "/dashboard"
    //   })
    // }
    return(
      <div>
        {this.errorMessage()}
        <Form style={{width: "17em"}} onSubmit={this.handleSubmit} id="form">
          <Form.Group controlId="login-form-email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" name="email" value={this.state.email} onChange={this.handleOnChange}/>
          </Form.Group>
          <Form.Group controlId="login-form-password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleOnChange}/>
          </Form.Group>
          <Button type="submit">Log In</Button>
        </Form>
      </div>
    )
  }
}

export default connect()(Login)