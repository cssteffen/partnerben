import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import { Link } from "react-router-dom";
import "../RegistrationForm/RegistrationForm.css";

/* ============================================== */
//import React, { Component } from "react";
//import { Button, Input, Required } from "../Utils/Utils";
/* =============================================== */
export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = { error: null };

  handleSubmit = ev => {
    ev.preventDefault();
    const {
      first_name,
      last_name,
      state_location,
      user_email,
      password
    } = ev.target;

    //console.log('registration form submitted')
    //console.log({ full_name, nick_name, user_name, password })

    this.setState({ error: null });
    AuthApiService.postUser({
      first_name: first_name.value,
      last_name: last_name.value,
      state_location: state_location.value,
      user_email: user_email.value,
      password: password.value
    })
      .then(user => {
        first_name.value = "";
        last_name.value = "";
        state_location.value = "";
        user_email.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <section>
        <form id="enterPaycheck" onSubmit={this.handleSubmit}>
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <div className="form-section">
            <div className="firstName-div">
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="first_name" required />
            </div>

            <div className="lastName-div">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="last_name" required />
            </div>

            <div className="state-div">
              <label htmlFor="state">State</label>
              <select name="state_location" required>
                <option>-- State --</option>
                <option>Alabama</option>
                <option>Alaska</option>
                <option>Arizona</option>
                <option>Arkansas</option>
                <option>California</option>
                <option>Colorado</option>
                <option>Connecticut</option>
                <option>Delaware</option>
                <option>Florida</option>
                <option>Georgia</option>

                <option>Hawaii</option>
                <option>Idaho</option>
                <option>Illinois</option>
                <option>Indiana</option>
                <option>Iowa</option>
                <option>Kansas</option>
                <option>Kentucky</option>
                <option>Louisiana</option>
                <option>Maine</option>
                <option>Maryland</option>

                <option>Massachusetts</option>
                <option>Michigan</option>
                <option>Minnesota</option>
                <option>Mississippi</option>
                <option>Missouri</option>
                <option>Montana</option>
                <option>Nebraska</option>
                <option>Nevada</option>
                <option>New Hampshire</option>
                <option>New Jersey</option>

                <option>New Mexico</option>
                <option>New York</option>
                <option>North Carolina</option>
                <option>North Dakota</option>
                <option>Ohio</option>
                <option>Oklahoma</option>
                <option>Oregon</option>
                <option>Pennsylvania</option>
                <option>Rhode Island</option>
                <option>South Carolina</option>

                <option>South Dakota</option>
                <option>Tennessee</option>
                <option>Texas</option>
                <option>Utah</option>
                <option>Vermont</option>
                <option>Virginia</option>
                <option>Washington</option>
                <option>West Virginia</option>
                <option>Wisconsin</option>
                <option>Wyoming</option>
              </select>{" "}
            </div>

            <div className="email-div">
              <label htmlFor="email">Email</label>
              <input type="email" name="user_email" required />
            </div>

            <div className="password-div">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" required />
            </div>

            <button type="submit">Submit</button>
          </div>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="reset-link">
            Sign-in
          </Link>
        </p>
      </section>
    );
  }
}

/*

export default class RegistrationForm extends Component {
  render() {
    const { error } = this.state;
    return (
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="full_name">
          <label htmlFor="RegistrationForm__full_name">
            Full name <Required />
          </label>
          <Input
            name="full_name"
            type="text"
            required
            id="RegistrationForm__full_name"
          ></Input>
        </div>
        <div className="user_name">
          <label htmlFor="RegistrationForm__user_name">
            User name <Required />
          </label>
          <Input
            name="user_name"
            type="text"
            required
            id="RegistrationForm__user_name"
          ></Input>
        </div>
        <div className="password">
          <label htmlFor="RegistrationForm__password">
            Password <Required />
          </label>
          <Input
            name="password"
            type="password"
            required
            id="RegistrationForm__password"
          ></Input>
        </div>
        <div className="nick_name">
          <label htmlFor="RegistrationForm__nick_name">Nickname</label>
          <Input
            name="nick_name"
            type="text"
            required
            id="RegistrationForm__nick_name"
          ></Input>
        </div>
        <Button type="submit">Register</Button>
      </form>
    );
  }
}

*/
