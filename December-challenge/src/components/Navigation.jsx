import React from "react";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import {RxChatBubble, RxPlusCircled} from "react-icons/rx"

function Navigation() {
  return (
    <div className="navbar">
      <Link to="/dashboard" className="nav-item">
        <MdSpaceDashboard />
        <p>DashBoard</p>
      </Link>
      <Link to="/tests" className="nav-item">
        <RxChatBubble />
        <p>Tests</p>
      </Link>
      <Link to="/addNew" className="nav-item">
        <RxPlusCircled />
        <p>New</p>
      </Link>
    </div>
  );
}

export default Navigation;
