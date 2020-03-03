import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import {Redirect} from 'react-router-dom';

import { connect } from 'react-redux'

import axios from 'axios'

class ColorQuiz extends React.Component {

  state = {
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    question8: '',
    question9: '',
    question10: '',
    question11: '',
    redirect: null
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    // this.props.dispatch({type: 'UPDATE_USER_COLOR', payload: this.state})
    // console.log(this.state)
    // this.setState({
    //   redirect: "/dashboard"
    // })
    let colorAnswers = this.state
    let user =  this.props.user

    axios.patch(`http://localhost:3001/users/${user.id}`, {colorAnswers, user}, {withCredentials: true})
      .then(response => {
        if (response.data) {
          // debugger
          const color = response.data.color
          this.props.dispatch({ type: 'UPDATE_USER_COLOR', payload: color })
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

    // if (this.props.currentUser[0] === undefined) {
    //   return <Redirect to={{pathname: "/login", state: {error: "Please log in or sign up"} }}/>
    // // } else if (this.props.currentUser[0].color !== null) {
    // //   return <Redirect to={{pathname: "/dashboard", state: {error: "You've already been assigned a color"}}} />
    // } else 
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
    
      <div style={{margin: '20px'}}>
        <h3>Welcome! Please take the Color Quiz to determine your main personality color!</h3>
        <Form id="color-quiz" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>When I make decisions…</Form.Label>
            <Form.Check
              // required
              type="radio"
              value="a"
              name="question1"
              onChange={this.handleChange}
              label="I do it quickly and go with the first impressions."
            />
            <Form.Check
              // required
              type="radio"
              value="b"
              name="question1"
              onChange={this.handleChange}
              label="I think about it, consider the options, and then decide."
            />
            <Form.Check
              // required
              type="radio"
              value="c"
              name="question1"
              onChange={this.handleChange}
              label="I listen to my feelings and consider how my decision will affect others."
            />
            <Form.Check
              // required
              type="radio"
              value="d"
              name="question1"
              onChange={this.handleChange}
              label=" I take it seriously and always try to make the right decision."
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>The best way for others to show me they care about me is to…</Form.Label>
            <Form.Check
              required
              type="radio"
              value="a"
              name="question2"
              onChange={this.handleChange}
              label="Do fun things with me."
            />
            <Form.Check
              required
              type="radio"
              value="b"
              name="question2"
              onChange={this.handleChange}
              label="Give me space to be by myself."
            />
            <Form.Check
              required
              type="radio"
              value="c"
              name="question2"
              onChange={this.handleChange}
              label="Spend time with me doing whatever."
            />
            <Form.Check
              required
              type="radio"
              value="d"
              name="question2"
              onChange={this.handleChange}
              label="Do what I want to do; not let me down or go back on their word. "
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>When I’m with my friends, I like to provide…</Form.Label>
            <Form.Check
              required
              type="radio"
              value="a"
              name="question3"
              onChange={this.handleChange}
              label="The excitement; the fun; the jokes. "
            />
            <Form.Check
              required
              type="radio"
              value="b"
              name="question3"
              onChange={this.handleChange}
              label="Questions; answers; a logical way of looking at things. "
            />
            <Form.Check
              required
              type="radio"
              value="c"
              name="question3"
              onChange={this.handleChange}
              label="Concern for others; a lot of caring."
            />
            <Form.Check
              required
              type="radio"
              value="d"
              name="question3"
              onChange={this.handleChange}
              label=" The planning; a sense of security; a good standard."
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>I like to…</Form.Label>
            <Form.Check
              required
              type="radio"
              value="a"
              name="question4"
              onChange={this.handleChange}
              label="Act on a moment’s notice; do risky things."
            />
            <Form.Check
              required
              type="radio"
              value="b"
              name="question4"
              onChange={this.handleChange}
              label="Provide answers or give thought to people’s questions."
            />
            <Form.Check
              required
              type="radio"
              value="c"
              name="question4"
              onChange={this.handleChange}
              label="Help maintain a sense of harmony and togetherness."
            />
            <Form.Check
              required
              type="radio"
              value="d"
              name="question4"
              onChange={this.handleChange}
              label="Be responsible, dependable, and helpful to others."
            />
          </Form.Group>


          <Form.Group>
            <Form.Label>One thing I am really good at is…</Form.Label>
            <Form.Check
              required
              type="radio"
              value="a"
              name="question5"
              onChange={this.handleChange}
              label="Acting courageously"
            />
            <Form.Check
              required
              type="radio"
              value="b"
              name="question5"
              onChange={this.handleChange}
              label="Thinking. "
            />
            <Form.Check
              required
              type="radio"
              value="c"
              name="question5"
              onChange={this.handleChange}
              label="Being sensitive."
            />
            <Form.Check
              required
              type="radio"
              value="d"
              name="question5"
              onChange={this.handleChange}
              label="Organizing."
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Friends who know me best would say that I am…</Form.Label>
            <Form.Check
              required
              type="radio"
              value="a"
              name="question6"
              onChange={this.handleChange}
              label="Competitive."
            />
            <Form.Check
              required
              type="radio"
              value="b"
              name="question6"
              onChange={this.handleChange}
              label="Reserved, thoughtful."
            />
            <Form.Check
              required
              type="radio"
              value="c"
              name="question6"
              onChange={this.handleChange}
              label="Emotional, friendly."
            />
            <Form.Check
              required
              type="radio"
              value="d"
              name="question6"
              onChange={this.handleChange}
              label="Neat, prepared."
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>My basic approach to life is…</Form.Label>
            <Form.Check
              required
              type="radio"
              value="a"
              name="question7"
              onChange={this.handleChange}
              label="To take one day at a time and have fun."
            />
            <Form.Check
              required
              type="radio"
              value="b"
              name="question7"
              onChange={this.handleChange}
              label="To figure out what life is all about."
            />
            <Form.Check
              required
              type="radio"
              value="c"
              name="question7"
              onChange={this.handleChange}
              label="To help others and be happy and succeed."
            />
            <Form.Check
              required
              type="radio"
              value="d"
              name="question7"
              onChange={this.handleChange}
              label="To plan for the future and make it as good as possible."
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>When I am feeling discouraged or “down in the dumps”…</Form.Label>
            <Form.Check
              required
              type="radio"
              value="a"
              name="question8"
              onChange={this.handleChange}
              label="I often become rude, mad, or sometimes even mean."
            />
            <Form.Check
              required
              type="radio"
              value="b"
              name="question8"
              onChange={this.handleChange}
              label="I withdraw, don’t talk very much, and try to think my way out of the problem."
            />
            <Form.Check
              required
              type="radio"
              value="c"
              name="question8"
              onChange={this.handleChange}
              label="I feel emotional, am sad, and usually like to talk it over with someone close to me."
            />
            <Form.Check
              required
              type="radio"
              value="d"
              name="question8"
              onChange={this.handleChange}
              label="I try to figure out what’s causing the problem and fix it."
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>I feel good about myself when…</Form.Label>
            <Form.Check
              required
              type="radio"
              value="a"
              name="question9"
              onChange={this.handleChange}
              label=" I can do things that are difficult. "
            />
            <Form.Check
              required
              type="radio"
              value="b"
              name="question9"
              onChange={this.handleChange}
              label="I can solve problems or figure things out."
            />
            <Form.Check
              required
              type="radio"
              value="c"
              name="question9"
              onChange={this.handleChange}
              label="I can help other people."
            />
            <Form.Check
              required
              type="radio"
              value="d"
              name="question9"
              onChange={this.handleChange}
              label="I am appreciated or rewarded for things I do. "
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Teachers at school who saw me when I wasn’t on my best behavior might describe me as…</Form.Label>
            <Form.Check
              required
              type="radio"
              value="a"
              name="question10"
              onChange={this.handleChange}
              label="Rowdy or a little wild."
            />
            <Form.Check
              required
              type="radio"
              value="b"
              name="question10"
              onChange={this.handleChange}
              label="Arrogant."
            />
            <Form.Check
              required
              type="radio"
              value="c"
              name="question10"
              onChange={this.handleChange}
              label="Talkative."
            />
            <Form.Check
              required
              type="radio"
              value="d"
              name="question10"
              onChange={this.handleChange}
              label="Someone who wants things my way; dominant; worrying."
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Teachers at school (who like me and in whose class I do pretty well) would probably describe me
                as…</Form.Label>
            <Form.Check
              required
              type="radio"
              value="a"
              name="question11"
              onChange={this.handleChange}
              label="Charming, a natural leader, clever, someone who is fun to have around."
            />
            <Form.Check
              required
              type="radio"
              value="b"
              name="question11"
              onChange={this.handleChange}
              label="Thoughtful, someone who has good answers, someone who likes to figure out
              problems."
            />
            <Form.Check
              required
              type="radio"
              value="c"
              name="question11"
              onChange={this.handleChange}
              label="Nice, friendly, someone who gets along with other students and is helpful to the
              teacher and others."
            />
            <Form.Check
              required
              type="radio"
              value="d"
              name="question11"
              onChange={this.handleChange}
              label="Neat, organized, prepared, someone who does assignments and is a good student."
            />
          </Form.Group>

          <Button type="submit">Submit</Button>
        </Form>
      </div>
    )
  }

}

const mapStateToProps = state => ({currentUser: state.currentUser})

export default connect(mapStateToProps)(ColorQuiz)