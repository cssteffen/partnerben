import React, { Component } from "react";
import "../RegistrationForm/RegistrationForm.css";

export default class RegistrationForm extends Component {
  render() {
    return (
      <section>
        <form id="enterPaycheck">
          <div class="form-section">
            <div class="firstName-div">
              <label for="firstName">First Name</label>
              <input type="text" name="firstName" required />
            </div>

            <div class="lastName-div">
              <label for="lastName">Last Name</label>
              <input type="text" name="lastName" required />
            </div>

            <div class="email-div">
              <label for="email">Email</label>
              <input type="email" name="email" required />
            </div>

            <div class="password-div">
              <label for="password">Password</label>
              <input type="password" name="password" required />
            </div>

            <button type="submit">Submit</button>
          </div>
        </form>
        <p>
          Already have an account? <a class="reset-link">Sign-in</a>
        </p>
      </section>
    );
  }
}
