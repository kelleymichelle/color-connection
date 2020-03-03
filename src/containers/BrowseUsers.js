import React from 'react'
import axios from 'axios'

import UserCard from '../components/UserCard'

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
          <div style={{margin: '5px'}}>Color Token</div>
          <div style={{margin: '5px'}}>Zodiac</div>
          <div style={{margin: '5px'}}>Keyword</div>
        </div>
        <div className="d-flex flex-row flex-wrap">
          {this.state.users.map(u => <UserCard key={u.id} user={u} />)}
        </div>
      </div>
    )
  }

} 
