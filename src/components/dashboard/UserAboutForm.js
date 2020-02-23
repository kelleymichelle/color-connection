import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

class UserAboutForm extends React.Component {
  state = {
    info: []
  }

  render() {
    return (
      <div>
        <h2>Edit your personal details</h2>
        <Form>
          <Form.Group>
            <Form.Label>Birthday:</Form.Label>
            <Form.Control type="text" name="birthday" value={this.state.birthday} placeholder="MM/DD/YYYY"/>
          </Form.Group>

          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <Form.Control type="text" name="gender" value={this.state.gender} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" name="location" value={this.state.location} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Favorite Quote</Form.Label>
            <Form.Control type="text" name="quote" value={this.state.quote} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Signature drink?</Form.Label>
            <Form.Control type="text" name="drink" value={this.state.drink} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Favorite Animal?</Form.Label>
            <Form.Control type="text" name="animal" value={this.state.animal} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Are you a Night Owl or a Morning Person?</Form.Label>
            <Form.Control type="text" name="question1" value={this.state.question1} />
          </Form.Group>

          <Form.Group>
            <Form.Label>What do your Saturdays usually look like?</Form.Label>
            <Form.Control type="textarea" name="question2" value={this.state.question2} />
          </Form.Group>

          <Form.Group>
            <Form.Label>What makes you laugh?</Form.Label>
            <Form.Control type="textarea" name="question3" value={this.state.question3} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Where is home for you?</Form.Label>
            <Form.Control type="textarea" name="question4" value={this.state.question4} />
          </Form.Group>

          <Form.Group>
            <Form.Label>What interests you?</Form.Label>
            <Form.Control type="textarea" name="questions5" value={this.state.question5} />
          </Form.Group>
        </Form>
      </div>
    )
  }
}