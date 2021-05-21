import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ user }) => {
  return (
    <nav className="navbar">
      <h2>E-commerce</h2>
      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>
        {user && user.isAdmin && (
          <li>
            <Link to="/addProduct">Add Products</Link>
          </li>
        )}

        {!user && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {user && (
          <>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
