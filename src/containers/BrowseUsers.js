import React from 'react'
import axios from 'axios'

import UserCard from '../components/UserCard'
import { Dropdown } from 'react-bootstrap'

export default class BrowseUsers extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/users`,
      {withCredentials: true})
      .then(response => {
        this.setState({
          users: response.data.users
        })
      })
    }   
  
  parseUsers = users => {
    users.map(u => 
      <UserCard user={u} />
    )
  }

  render() {
   
    return (
      <div style={{margin: '25px'}}>
        <h1>Browse Possible Connections</h1>
        <div className="d-flex">
          <div style={{margin: '5px'}}>Search By</div>
          <div style={{margin: '5px'}}>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                Color Token
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Blue</Dropdown.Item>
                <Dropdown.Item>Green</Dropdown.Item>
                <Dropdown.Item>Orange</Dropdown.Item>
                <Dropdown.Item>Gold</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div style={{margin: '5px'}}>
          <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                Zodiac
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Aries</Dropdown.Item>
                <Dropdown.Item>Taurus</Dropdown.Item>
                <Dropdown.Item>Gemini</Dropdown.Item>
                <Dropdown.Item>Cancer</Dropdown.Item>
                <Dropdown.Item>Leo</Dropdown.Item>
                <Dropdown.Item>Virgo</Dropdown.Item>
                <Dropdown.Item>Libra</Dropdown.Item>
                <Dropdown.Item>Scorpio</Dropdown.Item>
                <Dropdown.Item>Sagittarius</Dropdown.Item>
                <Dropdown.Item>Aquarius</Dropdown.Item>
                <Dropdown.Item>Pisces</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div style={{margin: '5px'}}>Keyword</div>
        </div>
        <div className="d-flex flex-row flex-wrap">
          {this.state.users.map(u => <UserCard key={u.id} user={u} />)}
        </div>
      </div>
    )
  }

} 
