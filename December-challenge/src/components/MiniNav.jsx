import React from 'react'
import { NavLink } from 'react-router-dom';

function MiniNav() {
  return (
    <div className="flex-nav">
      <NavLink to="/tests/bp">
        <div className="item">
          <p>Blood Pressure</p>
        </div>
      </NavLink>
      <NavLink to="/tests/hr">
        <div className="item">
          <p>Heart Rate</p>
        </div>
      </NavLink>
      <NavLink to="/tests/bs">
        <div className="item">
          <p>Blood Sugar</p>
        </div>
      </NavLink>
      <NavLink to="/tests/bc">
        <div className="item">
          <p>Blood Cholesterol</p>
        </div>
      </NavLink>
    </div>
  );
}

export default MiniNav