import React from 'react'
import { Outlet } from 'react-router-dom';
import MiniNav from './MiniNav';
import Navigation from './Navigation'
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function Tests() {

  const user = useContext(UserContext)
  
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