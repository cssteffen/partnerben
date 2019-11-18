import React, { Component } from "react";
//import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <header role="banner">
        <div class="buttons-login-register">
          <a href="./login">
            <li>Log in</li>
          </a>
          <a href="./register">
            <li>Register</li>
          </a>
          <a href="./dashboard">
            <li>Demo</li>
          </a>
        </div>
      </header>
    );
  }
}
