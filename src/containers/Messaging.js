import React from 'react'

export default class Messaging extends React.Component {
  state = {
    currentUser: '',
    friend: ''
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        currentUser: this.props.currentUser
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Messaging</h1>
      </div>
    )
  }
}