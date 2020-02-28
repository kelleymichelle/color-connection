import React from 'react'

import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'

// import Horoscope from '../components/dashboard/Horoscope'
import ColorToken from '../components/dashboard/ColorToken'
import FetchHoroscope from '../components/FetchHoroscope'

import ImageUploader from '../components/profile/ImageUploader'
// import UserImage from '../components/profile/UserImage'

class Dashboard extends React.Component {

  userGreeting = () => {
    const time = new Date()
    const currentHour = time.getHours()

    if (currentHour < 12) {
      return "Good Morning"
    } else if (currentHour < 18) {
      return "Good Afternoon"
    } else {
      return "Good Evening"
    }
  }
  
  render() {
  
      const user = this.props.user
      const userProfile = `/user/${user.id}`

      return(
        <div style={{color: '#444444'}}>

        <div style={{margin: '10px'}} className="d-flex">
          <h1 style={{marginRight: '10px'}}>{this.userGreeting()}, {user.name}</h1> 
          <ColorToken color={user.color} />
        </div>

        <div style={{margin: '10px', marginBottom: '15px'}}>
          <h4>User Status</h4>
        </div>

        <div className="d-flex">

          <Card style={{padding: '10px', width: '33%', marginLeft: '4px'}}>
            
            <div style={{width: '300px', margin: '10px'}}><img style={{width: '70%'}} src={user.image} alt="user" /></div>
            <Link style={{margin: '5px', color: '#444444'}} to=
              {{
                pathname: userProfile,
                state: {
                  user: user
                }
              }}>
                View my Profile</Link>
            <Link style={{margin: '5px', color: '#444444'}} to="/edit-about-me">Edit my Details</Link>
          </Card>
          
          <Card style={{width: '33%'}}>
              <Card.Title>Your Connections</Card.Title>
              <div>Click here to view people who have connected with you</div>
          </Card>

          <FetchHoroscope zodiac={user.zodiac}/>
        
        </div>
          
          <ImageUploader user={user}/>
          
      </div>
    )
  }

}

const mapStateToProps = state => ({currentUser: state.currentUser})

export default connect(mapStateToProps)(Dashboard)