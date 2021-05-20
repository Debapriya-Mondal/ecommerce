import React, { Component } from "react";
import Banner from "../../Banner/Banner";
import { login } from "../../../Services/userService";
import "./Login.css";
class Login extends Component {
  state = {
    user: {
      email: "",
      password: "",
    },
  };
  handelChange = ({ target }) => {
    const user = { ...this.state.user };
    user[target.name] = target.value;
    this.setState({ user });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state.user;
    login(email, password);
  };
  render() {
    const { email, password } = this.state.user;
    return (
      <>
        <Banner name="Login" />
        <form onSubmit={this.handelSubmit}>
          <div className="loginContainer">
            <p>Email:</p>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handelChange}
            />
            <p>Password:</p>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handelChange}
            />
            <button type="submit" className="button">
              Login
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default Login;
