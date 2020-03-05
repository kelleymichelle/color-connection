import React from 'react'
import Horoscope from './dashboard/Horoscope'

export default class FetchHoroscope extends React.Component {
  state = {
    data: []
  }

  componentDidUpdate(prevProps) {
    if (this.props.zodiac !== prevProps.zodiac && this.props.zodiac !== null) {
      const sign = (this.props.zodiac).toLowerCase()
      // console.log(sign)
      // const sign = "leo"
      // const sign = this.props.zodiac
      const horoscopeURL = `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=today`
      fetch(horoscopeURL, {
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
  }

  render() {
    // if (this.props.zodiac) {
    //   this.fetch()
    // }
    if (this.state.data) {
    return(
      <Horoscope data={this.state.data} zodiac={this.props.zodiac}/>
    )
  }
}
  
}