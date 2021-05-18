import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="navbar">
          <h2>E-commerce</h2>
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/">Add Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Navbar;
