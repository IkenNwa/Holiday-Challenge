import React from 'react'
import { Outlet } from 'react-router-dom';
import MiniNav from './MiniNav';
import Navigation from './Navigation'

function Tests() {
  return (
    <div className="disp">
      <Navigation />
      <div>
      <MiniNav />
      <Outlet />
      </div>
    </div>
  );
}

export default Tests