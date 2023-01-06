import React from 'react'
import { Outlet } from 'react-router-dom';
import MiniNav from './MiniNav';
import Navigation from './Navigation'

function Tests() {
  return (
    <div className="disp">
      <Navigation />
      <div className='main-test'>
      <MiniNav />
      <div className='test-disp'>
      <Outlet />
      </div>
      </div>
    </div>
  );
}

export default Tests