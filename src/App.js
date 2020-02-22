import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function App() {
  return (
    <Router>
      <Navbar>
      <Navbar.Brand href="/">Color Connection</Navbar.Brand>
          <Nav className="ml auto">
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
            <Link to="/about">About Us</Link>
          </Nav>
      </Navbar>
    </Router>
  );
}

export default App;
