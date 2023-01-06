import React from 'react'
import Navigation from './Navigation'

function AddNew() {
  return (
    <div className="disp">
      <Navigation />
      <div>
        <div>
          <h1>Create New Record.</h1>
        </div>
        <div className="grid">
          <div className="item">
            <h2>Blood Pressure</h2>
          </div>
          <div className="item">
            <h2>Heart Rate</h2>
          </div>
          <div className="item">
            <h2>Blood Sugar</h2>
          </div>
          <div className="item">
            <h2>Blood Cholestorol</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNew