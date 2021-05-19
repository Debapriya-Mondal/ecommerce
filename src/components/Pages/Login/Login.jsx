import React, { Component } from "react";
import Banner from "../../Banner/Banner";
import "./Login.css";
class Login extends Component {
  state = {
    data: {
      email: "",
      password: "",
    },
  };
  handelChange = ({ target }) => {
    const data = { ...this.state.data };
    data[target.name] = target.value;
    this.setState({ data });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.data);
  };
  render() {
    const { email, passowrd } = this.state.data;
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
              value={passowrd}
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
