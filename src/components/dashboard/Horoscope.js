import React from 'react'

import Card from 'react-bootstrap/Card'

export default class Horoscope extends React.Component {
  // state = {
  //   zodiac: '',
  //   data: []
  // }
 

  render() {
    // {this.fetchData()}
    const data = this.props.data
    
    if (data.description) {
      return (
        <Card style={{ width: '19em', color: '#444444' }}>
          <Card.Body id="horoscope">
            <Card.Title><span role="img" aria-label="crystal ball">🔮</span>Your Daily Horoscope</Card.Title>
            <Card.Subtitle>{this.props.zodiac}</Card.Subtitle>
            <div>
              {/* <Card.Text>{data.current_date}</Card.Text> */}
              <Card.Text>{data.description}</Card.Text>
              <Card.Text>Mood: {data.mood}</Card.Text>
              <Card.Text>Compatibility: {data.compatibility}</Card.Text>
              <Card.Text>Lucky Number: {data.lucky_number}</Card.Text>
            </div>
          </Card.Body>
        </Card>
      )
    }
    return (
      null
    )
    
  }

}