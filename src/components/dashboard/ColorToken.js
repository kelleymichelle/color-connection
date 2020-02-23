import React from 'react'

export default function ColorToken(props) {

  const style = {
    backgroundColor: `${props.color}`,
    width: '50px',
    height: '50px',
    borderRadius: '50%'
  }

  return (
    <div style={style}>

    </div>

  )

}