import React, { Component } from "react";
import { Link } from "react-router-dom";
//import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <header role="banner">
        <div className="buttons-login-register">
          <Link to="/login">
            <li>Log in</li>
          </Link>

          <Link to="/register">
            <li>Register</li>
          </Link>

          <Link to="/dashboard">
            <li>Demo</li>
          </Link>
        </div>
      </header>
    );
  }
}
