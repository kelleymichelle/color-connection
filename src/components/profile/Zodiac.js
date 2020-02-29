import React from 'react'

import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

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

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{props.zodiac}</Popover.Title>
      {/* <Popover.Content>
        {zodiacInfo(props.zodiac)}
      </Popover.Content> */}
    </Popover>
  )

  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      
        <div style={{fontSize: '35px', maxWidth: '35px'}}>{sign[props.zodiac]}</div>
      
    </OverlayTrigger>
  )
}

