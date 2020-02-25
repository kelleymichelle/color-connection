import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
import { Redirect } from 'react-router-dom'

import SignUp from './components/SignUp'
import ColorQuiz from './components/ColorQuiz'
import Dashboard from './containers/Dashboard'
import Home from './containers/Home'
import Login from './components/Login'
import NavbarLoggedOut from './components/NavbarLoggedOut'
import Profile from './containers/Profile'
import UserAboutForm from './components/dashboard/UserAboutForm'
// import NavbarLoggedIn from './components/NavbarLoggedIn'

import axios from 'axios'
import { connect } from 'react-redux'

class App extends React.Component {
  state= {
    isLoggedIn: false,
    user: {}
  }

  componentDidMount() {
    this.loginStatus()
  }

  componentWillUnmount() {
    
  }

  // componentDidUpdate() {
  //   // this.loginStatus()
  //   this.setState({
  //     user: this.props.user[0]
  //   })
  // }

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
  handleLogin = (obj) => {
    // window.location.reload()
    // await obj.user
    
    if (obj.user) {
      const user = obj.user
      this.keepGoing(user)
      // this.props.dispatch({ type: 'LOGIN_USER', payload: user})
    } else if (obj.data.user) {
      const user = obj.data.user
      this.keepGoing(user)
      // this.props.dispatch({ type: 'LOGIN_USER', payload: user})
    }
    // debugger
    // this.props.dispatch({ type: 'LOGIN_USER', payload: user})
    // this.setState({
    //   isLoggedIn: true
    //   // user: this.props.currentUser
      
    // })
    // console.log(this.props)
    // window.location.reload()
    // debugger
    // this.history.push("/dashboard")
    // history.push("/dashboard")
  }

  keepGoing = user => {
    this.props.dispatch({ type: 'LOGIN_USER', payload: user})
    this.setState({
      isLoggedIn: true,
      user: this.props.user
      
    })
    // console.log(this.props)
  }

  handleLogout = () => {
    this.props.dispatch({ type: 'LOGOUT_USER', payload: '' })
    this.setState({
      isLoggedIn: false,
      user: {}
    })
    // return (<Redirect to="/" />)
  }

  render() {
    return (
      <Router>
    
        <NavbarLoggedOut isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout}/>

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
            render={props => {
              return this.state.isLoggedIn ? (
                <Redirect to="/dashboard" /> ) : ( <Login {...props}
                handleLogin={this.handleLogin}
                loggedInStatus={this.state.isLoggedIn} />
              )
            }} />
          <Route exact path="/dashboard" 
            render={props => (
              <Dashboard {...props}
                user={this.state.user} />
            )} />
          <Route exact path="/colorquiz" 
            render={props => (
              <ColorQuiz {...props}
                user={this.state.user} />
            )} />
          <Route exact path="/edit-about-me" component={UserAboutForm} />
          <Route exact path="/user/:userId" component={Profile} />
        </Switch>
    </Router>
      
    )
  }
}

const mapStateToProps = state => ({ user: state.currentUser })

export default connect(mapStateToProps)(App);
