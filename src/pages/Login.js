import React, { useState } from "react";
import "./../styles/login.css";
//import { MdArrowBackIos } from "react-icons/md";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
    
    setUsername('');
    setPassword('');
  };
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <p>User {username} successfully registered!!</p>
      </div>
    );
  };
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <p>Please enter all the fields</p>
      </div>
    );
  };

  return (
    <div className="center">
      <div className="container">
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
        
        <div>
          <h3 className="text">
            {"Welcome Back "}
            <br />
            {"Sign In with your already Registered Email or Gmail Account "}
          </h3>
          <form onSubmit={handleSubmit} className="loginform">
            <div className="data">
              <label>User Name</label>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e)=> {setUsername(e.target.value); setSubmitted(false)}}
                
              />
            </div>
            <div className="data">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value); setSubmitted(false)}}
                
              />
            </div>
            <div className="forgot-pass">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit"  className="btn">LOGIN</button>
            <br/>
            <p>------------------OR--------------------</p>
            <button className="down-btn">GO TO MONSOOQ</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
