import React from 'react'

import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

export default function ColorToken(props) {

  const style = {
    backgroundColor: `${props.color}`,
    width: '50px',
    height: '50px',
    borderRadius: '50%'
  }

  const colorTokenInfo = color => {

    switch(color) {
    case "orange":
      return "Energetic, Spontaneous, Charming"
    case "blue":
      return "Empathetic, Compassionate, Cooperative"
    case "gold":
      return "Punctual, Organized, Precise"
    case "green":
      return "Analytical, Intuitive, Visionary"    
    default:
      return "unable to find Color Token info"    

    } 
  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{props.color}</Popover.Title>
      <Popover.Content>
        {colorTokenInfo(props.color)}
      </Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <div style={style}>

      </div>
    </OverlayTrigger>

  )

}