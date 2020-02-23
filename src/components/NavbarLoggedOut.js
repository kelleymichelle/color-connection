import React from 'react'

import axios from 'axios'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { Link } from 'react-router-dom'

export default function NavbarLoggedOut(props) {

  const handleClick = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then(response => {
      props.handleLogout()
      props.history.push('/')
    })
    .catch(error => console.log(error))
  }

  if (props.isLoggedIn === true) {
    return (
      <Navbar id="nabber" className="border-bottom">
      <Navbar.Brand href="/">Color Connection</Navbar.Brand>
      <Nav className="ml auto">
        <Link id="nav-link" to="/dashboard">My Dashboard</Link>
        <Link id="nav-link" to="/browse-people">Browse People</Link>
        <Link id="nav-link" to="/logout" onClick={handleClick}>Log Out</Link>
        <Link id="nav-link" to="/settings">Settings</Link>
      </Nav>
    </Navbar>
    )
  }
  return (
    <Navbar id="nabber" className="border-bottom">
    <Navbar.Brand href="/">Color Connection</Navbar.Brand>
        <Nav className="ml auto">
          <Link id="nav-link" to="/signup">Sign Up</Link>
          <Link id="nav-link" to="/login">Log In</Link>
          <Link id="nav-link" to="/about">About Us</Link>
        </Nav>
    </Navbar>
  )

}