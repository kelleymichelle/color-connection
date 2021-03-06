import React from 'react'

import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'

// import Spinner from 'react-bootstrap/Spinner'

// import Horoscope from '../components/dashboard/Horoscope'
import ColorToken from '../components/dashboard/ColorToken'
import FetchHoroscope from '../components/FetchHoroscope'

import ImageUploader from '../components/profile/ImageUploader'
import StatusForm from '../components/dashboard/StatusForm'
import Status from '../components/dashboard/Status'
import Following from '../components/dashboard/Following'
import NewUserAlerts from '../components/dashboard/NewUserAlerts'
import SuggestedConnections from '../components/dashboard/SuggestedConnections'

// import Messaging from './Messaging'

// import Chat from '../components/Chat'

class Dashboard extends React.Component {
  state = {
    user: '',
    loading: true
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.setState({
        user: this.props.currentUser,
        loading: false
      })
    }
  }

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

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        user: this.props.currentUser,
        loading: false
      })
    }
  }

  toggleNewUserStatus = () => {
    this.props.dispatch({ type: 'TOGGLE_NEW_USER_STATUS', payload: false })
  }
  
  render() {
  
      const user = this.state.user
      const userProfile = `/user/${user.id}`

      // if (this.state.loading === true) {
      //   return (
      //     <Spinner animation="grow"/>
      //   )
      // }

      return(
        <div style={{color: '#444444'}}>
          { user.newUser ? <NewUserAlerts color={user.color} toggleNewUserStatus={this.toggleNewUserStatus}/> : null }
        <div style={{margin: '10px'}} className="d-flex">
          <h2 style={{marginRight: '10px'}}>{this.userGreeting()}, {user.name}</h2> 
          { user.color ? <ColorToken color={user.color} /> : 
            <Link style={{margin: '5px', color: '#444444'}} to=
              {{
                pathname: "/colorquiz",
                state: {
                  user: user
                }
              }}>
                Take Color Quiz to recieve Color Token!
            </Link> }
        </div>

        <div style={{margin: '10px', marginBottom: '15px'}}>
          <Status />
          <StatusForm user={user} />
        </div>

        <div className="d-flex">

          <Card style={{padding: '10px', width: '33%', marginLeft: '4px'}}>
            
            <div style={{width: '300px', margin: '10px'}}>
              { user.image ? <img style={{width: '70%'}} src={user.image} alt="user" /> : <img style={{width: '70%'}} src="https://res.cloudinary.com/color-connection/image/upload/v1584032700/default-user-img_kdefff.png" alt="default user" /> } 
            </div>
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
                <div>{this.props.following.map(u => <Following user={u} key={u.id} />)}</div>
          </Card>

          { user.zodiac !== '' ? <FetchHoroscope zodiac={user.zodiac}/> : null }
        
        </div>
          
          <ImageUploader user={user}/>

          <SuggestedConnections />
          
      </div>
            // }
    )
  }
  }
// }

const mapStateToProps = state => ({currentUser: state.currentUser})

export default connect(mapStateToProps)(Dashboard)