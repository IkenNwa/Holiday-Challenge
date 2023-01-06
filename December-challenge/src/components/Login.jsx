import React from 'react'
import { Link } from 'react-router-dom'

function Login() {

    function handleSubmit(e) {
        e.preventDefault()
    }


  return (
    <div className='loginPage'>
        <form onSubmit={handleSubmit} className="login">
            <label htmlFor="userEmail">Email: </label>
            <input type="email" id='userEmail' />
            <label htmlFor="userPassword">Password: </label>
            <input type="password" id='userPassword'  />
            <input type="submit" value="Submit" className='submit' />
        </form>
        <p>Need an Account?  <Link to="/register">Register</Link></p>
        <Link to="/dashboard">Dashboard</Link>
    </div>
  )
}

export default Login