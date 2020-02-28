import React from 'react'

export default function Location(props) {

  return (
    <div style={{margin: '1em'}}>
      <span role="img" aria-label="world emoji">🌎</span>{props.location}
    </div>
  )
}