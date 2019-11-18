import React, { Component } from "react";
import LoginForm from "../../Components/Login Form/LoginForm";

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Login</h2>
        </div>

        <LoginForm></LoginForm>
      </div>
    );
  }
}
