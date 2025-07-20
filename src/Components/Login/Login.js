import React, { useState } from "react";
import './Login.css';


function LoginSection() {

const [loginDetails,setLoginDetails] = useState({
    userName: "",
    passWord: ""
  })

  console.log(loginDetails,'login deatils')
  function handleLogin(event) {
    const name = event.target.name;
    const value = event.target.value;
    setLoginDetails({
      ...loginDetails,
      [name]: value
    })
  }
  return (
    <>
    <div className="login">
      <div className="login-main-section">
        <h3>Login Section</h3>
        <div className="login-section">
          <input type="text" placeholder="UserName or email" className="username-input" name="userName" onChange={handleLogin} />
          <input type="password" placeholder="Password" className="password-input" name="passWord" onChange={handleLogin}/>
          <button className="login-button">Login</button>
        </div>
      </div>
      </div>
    </>
  )
}


export default LoginSection;