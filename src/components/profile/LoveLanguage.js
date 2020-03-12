import React from 'react'

export default function LoveLanguage(props) {
  return (
    <div style={{margin: '5px'}}>
      <span role="img" aria-label="lips emoji">💋 My Love Language is '</span>{props.loveLanguage}'.
    </div>
  )
}