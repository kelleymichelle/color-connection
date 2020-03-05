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
import UserNavbar from './components/UserNavbar'
import Profile from './containers/Profile'
import UserAboutForm from './components/dashboard/UserAboutForm'
import BrowseUsers from './containers/BrowseUsers'
import AboutColorTokens from './containers/AboutColorTokens'
import Messaging from './containers/Messaging'

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
        // debugger
        this.handleLogin(response)
        // console.log(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  handleLogin = (obj) => {
    // window.location.reload()
    // await obj.user
    console.log(obj)
    const user = obj.user ? obj.user : obj.data.user
    // const user = (((obj || {}).user || {}).data || {})
    const following = obj.following ? obj.following : obj.data.following || []
    const followers = obj.followers ? obj.followers : obj.data.followers || []
    // debugger
    this.props.dispatch({ type: 'LOGIN_USER', payload: { user: user, following: following, followers: followers }})
    this.setState({
      isLoggedIn: true,
      user: this.props.user
      // followers: followers,
      // following: following
    })
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
    
        <UserNavbar isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout}/>

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
                user={this.state.user} 
                followers={this.props.followers}
                following={this.props.following}/>
            )} />
          <Route exact path="/colorquiz" 
            render={props => (
              <ColorQuiz {...props}
                user={this.state.user} />
            )} />
          <Route exact path="/browse-users" component={BrowseUsers} />
          <Route exact path="/edit-about-me" component={UserAboutForm} />
          <Route exact path="/user/:userId" 
            render={props => (
              <Profile {...props}
              currentUser={this.state.user} />
            )} 
            />
          <Route exact path="/messaging/:userId"
            render={props => (
              <Messaging {...props}
                currentUser={this.state.user} />
            )}  
          />
          <Route exact path="/color-info" component={AboutColorTokens} />
        </Switch>
    </Router>
      
    )
  }
}

const mapStateToProps = state => ({ user: state.currentUser, following: state.following, followers: state.followers })

export default connect(mapStateToProps)(App);
