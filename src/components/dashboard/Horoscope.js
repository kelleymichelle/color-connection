import React from 'react'

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
        <div>
          <div id="horoscope">
            <h3>Your Daily Horoscope</h3>
            <div>Leo</div>
            <p>{data.current_date}</p>
            <p>{data.description}</p>
            <p>Mood: {data.mood}</p>
            <p>Compatibility: {data.compatibility}</p>
            <p>Lucky Number: {data.lucky_number}</p>
          </div>
        </div>
      )
    }
    return (
      null
    )
  }

}