import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'

import SignUp from './components/SignUp'
import ColorQuiz from './components/ColorQuiz'
import Dashboard from './containers/Dashboard'
import Home from './containers/Home'
import Login from './components/Login'
import NavbarLoggedOut from './components/NavbarLoggedOut'

import axios from 'axios'

class App extends React.Component {
  state= {
    isLoggedIn: false,
    user: {}
  }

  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
    {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }
  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  render() {
    return (
      <Router>
    
        <NavbarLoggedOut />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route 
            exact path="/signup"
            render={props => (
              <SignUp {...props} 
                handleLogin={this.handleLogin}
                loggedInStatus={this.state.isLoggedIn} />
            )} />
          <Route 
            exact path="/login" 
            render={props => (
              <Login {...props}
              handleLogin={this.handleLogin}
              loggedInStatus={this.state.isLoggedIn} />
            )} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/colorquiz" component={ColorQuiz} />
        </Switch>
    </Router>
      
    )
  }
}

export default App;
