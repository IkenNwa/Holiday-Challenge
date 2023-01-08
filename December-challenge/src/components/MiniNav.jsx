import React from 'react'
import { NavLink } from 'react-router-dom';
import Bp from "../assets/bp.svg"
import Hr from "../assets/icon1.svg"
import Bs from "../assets/bs.svg"
import Bc from "../assets/icon.svg"

function MiniNav() {
  return (
    <div className="flex-nav">
      <NavLink
        to="/tests/bp"
        className={({ isActive }) => (isActive ? "active" : "item")}
      >
        <img src={Bp} alt="" />
        <p>Blood Pressure</p>
      </NavLink>
      <NavLink
        to="/tests/hr"
        className={({ isActive }) => (isActive ? "active" : "item")}
      >
        <img src={Hr} alt="" />
        <p>Heart Rate</p>
      </NavLink>
      <NavLink
        to="/tests/bs"
        className={({ isActive }) => (isActive ? "active" : "item")}
      >
        <img src={Bs} alt="" />
        <p>Blood Sugar</p>
      </NavLink>
      <NavLink
        to="/tests/bc"
        className={({ isActive }) => (isActive ? "active" : "item")}
      >
        <img src={Bc} alt="" />
        <p>Blood Cholesterol</p>
      </NavLink>
    </div>
  );
}

export default MiniNav