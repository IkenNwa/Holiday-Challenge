import React from 'react'
import Navigation from './Navigation'

function Dashboard() {
  return (
    <div className='disp'>
        <Navigation />
        <div className='main'>
          <h1 className='main-title'>Welcome Patient 👋</h1>
          <div className='grid'>
            <div className="grid-item" >
              <h4>Your last Blood Pressure level reading was</h4>
              <h1>Normal</h1>
              <p>120mmMg</p>
              <p>82mmMg</p>
            </div>
            <div className='grid-item' >
              <h4>Your last Sugar level is</h4>
              <h1>Normal</h1>
              <p>123mgdl</p>
            </div>
            <div className='grid-item'>
              <h4>Your last Heart rate Reading was</h4>
              <h1>High</h1>
              <p>110bpm</p>
            </div>
            <div className="grid-item">
              <h4>Your last Blood Cholestrol reading was</h4>
              <h1>Normal</h1>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard