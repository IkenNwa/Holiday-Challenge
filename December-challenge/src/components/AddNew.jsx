import React from 'react'
import Navigation from './Navigation'
import Bp from "../assets/bp.svg"
import Hr from "../assets/icon1.svg"
import Bs from "../assets/bs.svg"
import Bc from "../assets/icon.svg"

function AddNew() {
  return (
    <div className="disp">
      <Navigation />
      <div className='main'>
        <div>
          <h1>Create New Record.</h1>
        </div>
        <div className="grid">
          <div className="grid-item">
            <img src={Bp} alt="" />
            <h2>Blood Pressure</h2>
          </div>
          <div className="grid-item">
            <img src={Hr} alt="" />
            <h2>Heart Rate</h2>
          </div>
          <div className="grid-item">
            <img src={Bs} alt="" />
            <h2>Blood Sugar</h2>
          </div>
          <div className="grid-item">
            <img src={Bc} alt="" />
            <h2>Blood Cholestorol</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNew