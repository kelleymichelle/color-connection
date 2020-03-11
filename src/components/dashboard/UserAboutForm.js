import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import axios from 'axios'

import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

 class UserAboutForm extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
       birthday: props.user.birthday,
       gender: props.user.gender,
       location: props.user.location,
       bio: props.user.bio,
       animal: props.user.animal,
       loveLanguage: props.user.loveLanguage,
       redirect: ''
       
     }
   }
  // state = {
  //   birthday: '',
  //   gender: '',
  //   location: '',
  //   bio: '',
  //   redirect: ''
  // }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // handleAnimalClick = e => {
  //   // console.log(e.target.innerText)
  //   const animal = e.target.innerText
  //   this.setState({
  //     animal: animal
  //   })
  // }

  handleOnSubmit = e => {
    e.preventDefault()

    let user =  this.props.user
    let userInfo = this.state

    axios.patch(`http://localhost:3001/users/${user.id}`, {userInfo, user}, {withCredentials: true})
      .then(response => {
        if (response.data) {
          // debugger
          // const { birthday, gender, location } = response.data
          this.props.dispatch({ type: 'UPDATE_USER_INFO', payload: response.data })
          // this.redirect()
          this.setState({
            redirect: "/dashboard"
        })
       } else {
          this.setState({
            errors: response.data.errors
          })
        }
      })
      .catch(error => console.log('api errors:', error))
  }

 

  render() {
    
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      
      <div>
        <h2>Edit your personal details</h2>
        <Form style={{width: '35em'}} onSubmit={this.handleOnSubmit}>
          <Form.Group>
            <Form.Label>Birthday:</Form.Label>
            <Form.Control type="text" name="birthday" value={this.state.birthday} onChange={this.handleOnChange} placeholder={this.props.user.birthday || "MM/DD/YYYY"}/>
          </Form.Group>

          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <Form.Control type="text" name="gender" value={this.state.gender} onChange={this.handleOnChange} placeholder={this.props.user.gender}/>
          </Form.Group>

          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" name="location" value={this.state.location} onChange={this.handleOnChange} placeholder={this.props.user.location}/>
          </Form.Group>

          {/* <Form.Group>
            <Form.Label>Cat person or Dog person?</Form.Label>

              <p value="cats" name="cats" onClick={this.handleAnimalClick}>Cats</p>

              <p value="dogs" name="dogs" onClick={this.handleAnimalClick}>Dogs</p>

          </Form.Group> */}

          <Form.Group>
            <Form.Label>Pick one:</Form.Label>
            <Form.Check
              // required
              type="radio"
              value="cats"
              name="animal"
              onChange={this.handleOnChange}
              label="Cats"
            />
            <Form.Check
              // required
              type="radio"
              value="dogs"
              name="animal"
              onChange={this.handleOnChange}
              label="Dogs"
            />
         </Form.Group>

         <Form.Group>
            <Form.Label>What's your primary love language?</Form.Label>
            <Form.Check
              // required
              type="radio"
              value="Physical Touch"
              name="loveLanguage"
              onChange={this.handleOnChange}
              label="Physical Touch"
            />
            <Form.Check
              // required
              type="radio"
              value="Words of Affirmation"
              name="loveLanguage"
              onChange={this.handleOnChange}
              label="Words of Affirmation"
            />
            <Form.Check
              // required
              type="radio"
              value="Acts of Service"
              name="loveLanguage"
              onChange={this.handleOnChange}
              label="Acts of Service"
            />
            <Form.Check
              // required
              type="radio"
              value="Quality Time"
              name="loveLanguage"
              onChange={this.handleOnChange}
              label="Quality Time"
            />
            <Form.Check
              // required
              type="radio"
              value="Recieving Gifts"
              name="loveLanguage"
              onChange={this.handleOnChange}
              label="Recieving Gifts"
            />
         </Form.Group>

          {/* <Form.Group>
            <Form.Label>Are you a Night Owl or a Morning Person?</Form.Label>
            <Form.Control type="text" name="question1" value={this.state.question1} />
          </Form.Group>

          <Form.Group>
            <Form.Label>What do your Saturdays usually look like?</Form.Label>
            <Form.Control type="textarea" name="question2" value={this.state.question2} />
          </Form.Group> */}

          {/* <Form.Group>
            <Form.Label>Tell me a joke...</Form.Label>
            <Form.Control type="textarea" name="question3" value={this.state.question3} />
          </Form.Group> */}

          <Form.Group>
            <Form.Label>Bio:</Form.Label>
            <Form.Control type="textarea" name="bio" value={this.state.bio} onChange={this.handleOnChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Pick 5 keywords that you would use to describe yourself:</Form.Label>
            <Form.Control type="textarea" name="questions5" value={this.state.question5} />
          </Form.Group>

          <Button type="submit">Save</Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({ user: state.currentUser })

export default connect(mapStateToProps)(UserAboutForm)