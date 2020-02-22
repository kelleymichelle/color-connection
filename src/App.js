import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import SignUp from './components/SignUp'
import ColorQuiz from './components/ColorQuiz'
// import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
    <Navbar id="nabber" className="border-bottom">
    <Navbar.Brand href="/">Color Connection</Navbar.Brand>
        <Nav className="ml auto">
          <Link id="nav-link" to="/signup">Sign Up</Link>
          <Link id="nav-link" to="/login">Log In</Link>
          <Link id="nav-link" to="/about">About Us</Link>
        </Nav>
    </Navbar>

    {/* <Route exact path="/" component={App} /> */}
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/colorquiz" component={ColorQuiz} />
  </Router>
    
  );
}

export default App;
