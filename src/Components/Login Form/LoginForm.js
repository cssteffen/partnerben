import React, { Component } from "react";
import "./loginForm.css";

export default class LoginForm extends Component {
  render() {
    return (
      <section>
        <form id="sign-in">
          <div class="form-section">
            <div class="username-login">
              <label for="username-login">Email</label>
              <input type="email" name="email" required />
            </div>

            <div class="password-login">
              <label for="password-login">Password</label>
              <input type="password" name="password" required />
            </div>

            <button type="submit">Submit</button>
          </div>
        </form>
        <p>
          Request password{" "}
          <a href="/login" class="reset-link">
            reset link
          </a>
        </p>
      </section>
    );
  }
}
