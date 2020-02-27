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

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{props.color}</Popover.Title>
      <Popover.Content>
        Some info about color token here.
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