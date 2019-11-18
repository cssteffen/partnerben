import React, { Component } from "react";
import RegistrationForm from "../../Components/RegistrationForm/RegistrationForm";
import "./RegistrationPage.css";

export default class RegistrationPage extends Component {
  render() {
    return (
      <div className="registrationPage_div">
        <div>
          <h2>Create an Account</h2>
        </div>
        <RegistrationForm></RegistrationForm>
      </div>
    );
  }
}
