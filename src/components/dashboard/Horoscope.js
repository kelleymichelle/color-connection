import React from 'react'

import Card from 'react-bootstrap/Card'

export default class Horoscope extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    fetch("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=leo&day=today", {
      "method": "POST",
      "headers": {
        "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
        "x-rapidapi-key": "c3ef217e69msh026e456e9121fbdp1cde79jsn3daf9d88f670",
        "content-type": "application/x-www-form-urlencoded"
      },
      "body": {}
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        data: data
      })
    })
    .catch(err => {
      console.log(err);
    });
      }

  render() {
    const data = this.state.data
    if (data.description) {
      return (
        <Card style={{ width: '19em' }}>
          <Card.Body id="horoscope">
            <Card.Title>Your Daily Horoscope</Card.Title>
            <Card.Subtitle>Leo</Card.Subtitle>
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