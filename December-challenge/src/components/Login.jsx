import { userData } from "../Api/UserData";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
function Login() {
  const { user, setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")

  const emails = userData.find(user => user.email ===  email)

    function handleSubmit(e) {
        e.preventDefault()
        if(password){
          if (emails.password === password) {
            setUser(emails)
          }
        }
    }


  return (
    <div className="loginPage">
      <h1>HMonitor</h1>
      <form onSubmit={handleSubmit} className="login">
        <label htmlFor="userEmail">Email: </label>
        <input
          type="email"
          id="userEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="userPassword">Password: </label>
        <input
          type="password"
          id="userPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>{error}</p>
        <input type="submit" value="Submit" className="submit" />
      </form>
      <p>
        Need an Account? <Link to="/register">Register</Link>
      </p>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}

export default Login;
