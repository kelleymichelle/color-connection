import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { Link } from 'react-router-dom'

export default function NavbarLoggedOut() {
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