import React from 'react'

export default function AnimalIcon(props) {

  const animal = {
    cats: '🐱 ',
    dogs: '🐶 '
  }

  return (
    <div style={{fontSize: '35px', maxWidth: '35px'}}>{animal[props.animal]} </div>
  )

}