import React, { Component } from "react";
import LoginForm from "../../Components/Login Form/LoginForm";
import "./LoginPage.css";

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
  };

  render() {
    return (
      <div className="loginPage_div">
        <div>
          <h2>Login</h2>
        </div>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </div>
    );
  }
}
