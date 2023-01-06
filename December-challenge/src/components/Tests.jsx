import React from 'react'
import Navigation from './Navigation'

function Tests() {
  return (
    <div className="disp">
      <Navigation />
      <div>
      <div className="grid">
        <div className="item">
          <h1>Blood Pressure</h1>
        </div>
        <div className="item">
          <h1>Heart Rate</h1>
        </div>
        <div className="item">
          <h1>Blood Sugar</h1>
        </div>
        <div className="item">
          <h1>Blood Cholesterol</h1>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Tests