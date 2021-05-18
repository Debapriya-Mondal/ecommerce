import React, { Component } from "react";
import Banner from "../../Banner/Banner";
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
          <p>Password:</p>
          <input type="password" placeholder="Password" />
          <button type="submit" className="button">
            Login
          </button>
        </div>
      </>
    );
  }
}

export default Login;
