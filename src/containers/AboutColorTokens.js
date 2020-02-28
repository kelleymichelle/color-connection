import React from 'react'

import Card from 'react-bootstrap/Card'

export default function AboutColorTokens() {
 

  return (
    <div  style={{marginTop: '3%', marginLeft: '5%', color: '#444444'}}>
    <h1>Self Image of the Color Tokens</h1>
    <div style={{margin: '10px'}} className="d-flex flex-wrap">
      <Card style={{ borderStyle: 'none', margin: '7px', width: '45%', padding: '10px', backgroundColor: '#7dd957'}}>
        <h2>Green</h2>
        <p>Analytical, intuitive, and visionary. These are traits of the Green Personality type. “Greens” find innovative thinking and problem solving exciting. If you’re a Green, you tend to be able to see the big picture and able to effectively analyze situations. Thinking outside the box is a real strength. You also have an extreme need to be right.</p>
      </Card>
      
      <Card style={{ borderStyle: 'none', margin: '7px', width: '45%', padding: '10px', backgroundColor: '#38b6ff'}}>
        <h2>Blue</h2>
        <p>Empathetic, compassionate, and cooperative. “Blues” tend to be very social people. If you’re a Blue, you value relationships and harmony. Genuine kindness, sincerity, and compassion are important to you. You enjoy opportunities to work with others and collaborate and any opportunity to develop a connection.</p>
      </Card>

      <Card style={{ borderStyle: 'none', margin: '7px', width: '45%', padding: '10px', backgroundColor: '#fede58'}}>
        <h2>Gold</h2>
        <p>Punctual, organized, and precise. “Golds” tend to need structure and organization. If you’re a Gold, then order, rules, respect, and dependability are important to you. Time is a key part of your life if you’re a Gold personality type. You need to be on time and want others to be punctual as well. Following the plan or schedule it best for you.</p>
      </Card>

      <Card style={{ borderStyle: 'none', margin: '7px', width: '45%', padding: '10px', backgroundColor: '#fd914c'}}>
        <h2>Orange</h2>
        <p>Energetic, spontaneous, and charming. If you’re an Orange, you tend to be action-oriented and are comfortable taking risks. You probably also tend to be competitive and seek out adventures with opportunities to push the boundaries. Living in the moment and enjoying an adaptable time schedule are important to you.</p>
      </Card>
    </div>
    </div>
  )
}