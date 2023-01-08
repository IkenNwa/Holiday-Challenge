import React, { useContext } from 'react'
import Navigation from './Navigation'
import UserContext from "../contexts/UserContext";
import { Navigate } from 'react-router-dom';


function Dashboard() {
  let reading;

    const { user, setUser } = useContext(UserContext);
    if (user) {
      const bp = user.userHistory.bP.map((use) => use);
      reading = bp.map(his => his.reading)
    }
  return (
    <div className='disp'>
        {user ? (<>
        <Navigation />
        <div className='main'>
          <h1 className='main-title'>Welcome {user.userName}👋</h1>
          <div className='grid'>
            <div className="grid-item" >
              <h4>Your last Blood Pressure level reading was</h4>
              <h1>{reading.slice(-1)}</h1>
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
        </>) : (
          <>
          <Navigate replace to="/" />
          </>
        )
        }
    </div>
  )
}

export default Dashboard