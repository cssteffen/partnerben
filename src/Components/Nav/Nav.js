import React, { Component } from "react";
//import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <header role="banner">
        <div class="buttons-login-register">
          <li>
            <a href="./Login Form/loginForm.html">Log in</a>
          </li>
          <li>
            <a href="./Register Form/registerForm.html">Register</a>
          </li>
          <li>
            <a href="./Dashboard/dashboard.html">Demo</a>
          </li>
        </div>
      </header>
    );
  }
}
