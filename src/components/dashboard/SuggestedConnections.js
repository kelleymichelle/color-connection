import React from 'react'
import Card from 'react-bootstrap/Card'

export default class SuggestedConnections extends React.Component {
  
  
  render() {
    return (
      <div style={{marginLeft: '4px', marginRight: '0.75%'}}>
      <Card>
        <Card.Title style={{margin: '10px'}}>Suggested Connections</Card.Title>
      </Card>
      </div>
    )
  }
}