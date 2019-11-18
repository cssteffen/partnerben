import React, { Component } from "react";
import LoginForm from "../../Components/Login Form/LoginForm";
import "./LoginPage.css";

export default class LoginPage extends Component {
  render() {
    return (
      <div className="loginPage_div">
        <div>
          <h2>Login</h2>
        </div>

        <LoginForm></LoginForm>
      </div>
    );
  }
}
