import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
//import "./Nav.css";

export default class Nav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };
  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <Link onClick={this.handleLogoutClick} to="/">
          <li>Logout</li>
        </Link>
        <Link to="/dashboard">
          <li>Dashboard</li>
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
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
    );
  }
  render() {
    return (
      <header role="banner">
        <div className="buttons-login-register">
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
      </header>
    );
  }
}

/*
          <Link to="/login">
            <li>Log in</li>
          </Link>

          <Link to="/register">
            <li>Register</li>
          </Link>

*/
