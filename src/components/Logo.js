import React from 'react'
import logo from '../images/logo.png'

import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/">
      <div style={{padding: '0px', marginRight: '10px', maxWidth: '65px'}}>
        <img style={{width: '85%'}} src={logo} alt="logo" />
      </div>
    </Link>
  )
}