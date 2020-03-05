import React from 'react'
import axios from 'axios'

export default class Messaging extends React.Component {
  state = {
    currentUser: '',
    friend: ''
  }

  componentDidMount() {
    const userId = this.props.match.params.userId
    this.fetchUser(userId)
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        currentUser: this.props.currentUser
      })
    }
  }

  fetchUser = id => {
    axios.get(`http://localhost:3001/users/${id}`,
    {withCredentials: true})
    .then(response => {
      console.log(response.data.user)
      this.setState({
        friend: response.data.user
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <h1>Messaging</h1>
      </div>
    )
  }
}