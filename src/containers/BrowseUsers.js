import React from 'react'
import axios from 'axios'

import UserCard from '../components/UserCard'
import { Dropdown } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'


export default class BrowseUsers extends React.Component {
  state = {
    users: [],
    title: 'Browse Possible Connections'
  }

  componentDidMount() {
    this.fetchAllUsers()
    }
    
  fetchAllUsers = () => {
    axios.get(`http://localhost:3001/users`,
      {withCredentials: true})
      .then(response => {
        this.setState({
          users: response.data.users,
          title: 'Browse Possible Connections'
        })
      })
  }  
  
  parseUsers = users => {
    users.map(u => 
      <UserCard user={u} />
    )
  }

  handleColorSearch = e => {
    e.preventDefault()
    // console.log(e.target.innerText)
    const query = e.target.innerText.toLowerCase()

    axios.get(`http://localhost:3001/users/search/color/${query}`,
      {withCredentials: true})
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data,
            title: `Showing Users by ${query}`
          })
        } else {
          this.setState({
            users: [],
            title: "Sorry, no users currently match your search!"
          })
        }
      })
  }

  handleZodiacSearch = e => {
    e.preventDefault()
   
    // console.log(e.target.innerText)
    const query = e.target.innerText

    axios.get(`http://localhost:3001/users/search/zodiac/${query}`,
      {withCredentials: true})
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data,
            title: `Showing Users by ${query}`
          })
        } else {
          this.setState({
            users: [],
            title: "Sorry, no users currently match your search!"
          })
        }
      })
  }

  render() {
   
    return (
      <div style={{margin: '25px'}}>
        <h1>{this.state.title}</h1>
        <div className="d-flex">
          <div style={{margin: '5px'}}>Search By</div>
            <div style={{margin: '5px'}}><Button onClick={() => this.fetchAllUsers()}>Show All Users</Button></div>
          <div style={{margin: '5px'}}>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                Color Token
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={this.handleColorSearch}>Blue</Dropdown.Item>
                <Dropdown.Item onClick={this.handleColorSearch}>Green</Dropdown.Item>
                <Dropdown.Item onClick={this.handleColorSearch}>Orange</Dropdown.Item>
                <Dropdown.Item onClick={this.handleColorSearch}>Gold</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div style={{margin: '5px'}}>
          <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                Zodiac
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={this.handleZodiacSearch}>Aries</Dropdown.Item>
                <Dropdown.Item onClick={this.handleZodiacSearch}>Taurus</Dropdown.Item>
                <Dropdown.Item onClick={this.handleZodiacSearch}>Gemini</Dropdown.Item>
                <Dropdown.Item onClick={this.handleZodiacSearch}>Cancer</Dropdown.Item>
                <Dropdown.Item onClick={this.handleZodiacSearch}>Leo</Dropdown.Item>
                <Dropdown.Item onClick={this.handleZodiacSearch}>Virgo</Dropdown.Item>
                <Dropdown.Item onClick={this.handleZodiacSearch}>Libra</Dropdown.Item>
                <Dropdown.Item onClick={this.handleZodiacSearch}>Scorpio</Dropdown.Item>
                <Dropdown.Item onClick={this.handleZodiacSearch}>Sagittarius</Dropdown.Item>
                <Dropdown.Item onClick={this.handleZodiacSearch}>Aquarius</Dropdown.Item>
                <Dropdown.Item onClick={this.handleZodiacSearch}>Pisces</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div style={{margin: '5px'}}>Keyword</div>
        </div>
        <div className="d-flex flex-row flex-wrap">
          {this.state.users.map(u => u.color ? <UserCard key={u.id} user={u} /> : null )}
        </div>
      </div>
    )
  }

} 
