import React from 'react'

export default function Zodiac(props) {

  const sign = {
    Aries: '♈',
    Taurus: '♉',
    Gemini: '♊',
    Cancer: '♋',
    Leo: '♌',
    Virgo: '♍',
    Libra: '♎',
    Scorpio: '♏',
    Sagittarius: '♐',
    Capricorn: '♑',
    Aquarius: '♒',
    Pisces: '♓'
  }

  return (
    <div>
      <h2>{sign[props.zodiac]}</h2>
    </div>
  )
}

