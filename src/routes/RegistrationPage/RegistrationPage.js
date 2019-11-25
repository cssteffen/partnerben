import React, { Component } from "react";
import RegistrationForm from "../../Components/RegistrationForm/RegistrationForm";
import "./RegistrationPage.css";

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleRegistrationSuccess = user => {
    const { history } = this.props;
    history.push("/login");
  };
  render() {
    return (
      <div className="registrationPage_div">
        <div>
          <h2>Create an Account</h2>
        </div>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </div>
    );
  }
}
