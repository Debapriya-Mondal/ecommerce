import React, { Component } from "react";
import Banner from "./Banner";
import "./Login.css";
class Login extends Component {
  state = {};
  render() {
    return (
      <>
        <Banner name="Login" />
        <div className="container">
          <p>Email:</p>
          <input type="email" placeholder="Email" />
          <p>Password</p>
          <input type="password" placeholder="Password" />
          <input type="submit" value="Login" />
        </div>
      </>
    );
  }
}

export default Login;
