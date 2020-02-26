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
      <div>
        <h1>Browse Possible Connections</h1>
        {this.state.users.map(u => <UserCard key={u.id} user={u} />
    )}
      </div>
    )
  }

} 
