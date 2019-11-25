import React, { Component } from "react";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import "./loginForm.css";

// =================
//import { Button, Input } from "../Utils/Utils";
// ==================

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null };

  handleSubmitBasicAuth = ev => {
    ev.preventDefault();
    const { user_name, password } = ev.target;

    //console.log('login form submitted')
    //console.log({ user_email, password })

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    );

    user_name.value = "";
    password.value = "";
    this.props.onLoginSuccess();
  };
  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_email, password } = ev.target;

    AuthApiService.postLogin({
      user_email: user_email.value,
      password: password.value
    })
      .then(res => {
        user_email.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error.message });
      });
  };
  render() {
    const { error } = this.state;

    return (
      <section>
        <div role="alert">
          <p className="red">{error}</p>
        </div>

        <form id="sign-in" onSubmit={this.handleSubmitJwtAuth}>
          <div className="form-section">
            <div className="username-login">
              <label htmlFor="username-login">Email</label>
              <input type="email" name="user_email" required />
            </div>

            <div className="password-login">
              <label htmlFor="password-login">Password</label>
              <input type="password" name="password" required />
            </div>

            <button type="submit">Submit</button>
          </div>
        </form>
        <p>
          Request password{" "}
          <a href="/login" className="reset-link">
            reset link
          </a>
        </p>
      </section>
    );
  }
}

/*

          <div role="alert">{error && <p className="red">{error}</p>}</div>


export default class LoginForm extends Component {
  render() {
    return (
      <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="user_name">
          <label htmlFor="LoginForm__user_name">User name</label>
          <Input required name="user_name" id="LoginForm__user_name"></Input>
        </div>
        <div className="password">
          <label htmlFor="LoginForm__password">Password</label>
          <Input
            required
            name="password"
            type="password"
            id="LoginForm__password"
          ></Input>
        </div>
        <Button type="submit">Login</Button>
      </form>
    );
  }
}
 */
