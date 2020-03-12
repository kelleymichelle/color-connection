import React from 'react'
import { Link } from 'react-router-dom'

export default function Following(props) {

  const user = props.user
  const userPath = `/user/${user.id}`
  const userMessagePath = `/messaging/${user.id}`
  return (
    <div className="d-flex align-items-center" style={{margin: '10px'}}>
      <Link to={userPath} style={{width: '25%', marginLeft: '10px'}}>
        <img style={{width: '100%', border: '3px solid', borderColor: user.color }}src={user.image} alt={user.name}/>
      </Link>
      <p style={{size: "20px", margin: '5px'}}>{user.name}</p>
      <Link to={{
            pathname: userMessagePath,
              state: {
                recipient: user
              }
          }} style={{textDecoration: 'none'}}>
        <span style={{ fontSize: '35px', margin: '5px'}} role="img" aria-label="envelope">✉️</span>
      </Link>
    </div>
  )

}