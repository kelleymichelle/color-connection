import React from 'react'
import Horoscope from './dashboard/Horoscope'

export default class FetchHoroscope extends React.Component {
  state = {
    data: [],
    zodiac: ''
  }

  componentDidMount() {
    this.setZodiac(this.props)
    this.fetchData(this.state.zodiac)
  }

  setZodiac = props => {
    if (props.zodiac) {
      this.setState({
        zodiac: this.props.zodiac
      })
    }
  }

  componentDidUpdate(prevProps) {
    if ((this.props.zodiac !== prevProps.zodiac) || (this.state.data === [])) {
      const sign = this.props.zodiac ? (this.props.zodiac).toLowerCase() : null
      this.fetchData(sign)
    
    }
  }

  fetchData = (sign) => {
    if (sign !== undefined) {
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
  
    if (this.state.data) {
    return(
      <Horoscope data={this.state.data} zodiac={this.props.zodiac}/>
    )
    } else if ( this.state.zodiac && this.state.data === []) {
      return (
        this.fetchData(this.state.zodiac)
      )
    }
  }
  
}