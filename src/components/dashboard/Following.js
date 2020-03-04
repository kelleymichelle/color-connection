import React from 'react'

export default function Following(props) {

  const user = props.user
  return (
    <div className="d-flex align-items-center" style={{margin: '10px'}}>
      <img style={{width: '25%', border: '3px solid', borderColor: user.color }}src={user.image} alt={user.name}/>
      <p style={{size: "20px", margin: '5px'}}>{user.name}</p>
      <span style={{ fontSize: '35px', margin: '5px'}} role="img" aria-label="envelope">✉️</span>
    </div>
  )

}