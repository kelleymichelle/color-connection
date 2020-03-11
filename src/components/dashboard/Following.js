import React from 'react'
import { Link } from 'react-router-dom'

export default function Following(props) {

  const user = props.user
  const userPath = `/messaging/${user.id}`
  return (
    <div className="d-flex align-items-center" style={{margin: '10px'}}>
      <img style={{width: '25%', border: '3px solid', borderColor: user.color }}src={user.image} alt={user.name}/>
      <p style={{size: "20px", margin: '5px'}}>{user.name}</p>
      <Link to={{
            pathname: userPath,
              state: {
                recipient: user
              }
          }} style={{textDecoration: 'none'}}>
        <span style={{ fontSize: '35px', margin: '5px'}} role="img" aria-label="envelope">✉️</span>
      </Link>
    </div>
  )

}