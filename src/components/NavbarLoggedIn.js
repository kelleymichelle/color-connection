import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { Link } from 'react-router-dom'

export default function NavbarLoggedIn() {
  return (
    <Navbar id="nabber" className="border-bottom">
      <Nav className="ml auto">
        <Link id="nav-link" to="/dashboard">My Dashboard</Link>
        <Link id="nav-link" to="/browse-people">Browse People</Link>
        <Link id="nav-link" to="/logout">Log Out</Link>
        <Link id="nav-link" to="/settings">Settings</Link>
      </Nav>
    </Navbar>
  )
}