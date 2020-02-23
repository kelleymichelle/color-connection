import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import {Redirect} from 'react-router-dom';

import { connect } from 'react-redux';

import axios from 'axios'

// import ColorQuiz from './ColorQuiz'

class SignUp extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    errors: '',
    redirect: null
  }

  componentWillMmount() {
    return this.props.loggedInStatus ? this.redirect() : null
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }  

  handleSubmit = e => {
    e.preventDefault();
    // this.props.dispatch({ type: 'ADD_NEW_USER', payload: this.state })
    // console.log(this.state)
    // this.setState({
    //   redirect: "/colorquiz"
    // })
    const { name, email, password, passwordConfirmation} = this.state

    let user = {
      name: name,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation
    }
    axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
      .then(response => {
        if (response.data.status === 'created') {
          this.props.handleLogin(response.data)
          // debugger
          const userData = response.data.user
          this.props.dispatch({ type: 'ADD_NEW_USER', payload: userData })
          this.redirectHome()
        } else {
          this.setState({
            errors: response.data.errors
          })
        }
      })
      .catch(error => console.log('api errors:', error))
      };

  redirectHome = () => {
    this.props.history.push('/dashboard')
  }

  redirect = () => {
    this.props.history.push('/')
  }

  render() {
    
      if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      } 
      return(
      <div>
        
        <Form style={{width: "17em"}} onSubmit={this.handleSubmit} id="form">
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

// const mapDispatchToProps = dispatch => {
//   return {
//     addUser: formdata => dispatch({type: 'ADD_NEW_USER', payload: formdata})
//   }
// }

export default connect()(SignUp)