import React, { Component } from "react";
import "./PaycheckPage.css";
import PaycheckForm from "../../Components/PaycheckForm/PaycheckForm";

export default class PaycheckPage extends Component {
  render() {
    return (
      <div className="paycheckPage_div">
        <div>
          <h2>PayStub</h2>
          <p className="subtitle">
            Enter a new paystub or edit an existing one.
          </p>
        </div>
        <PaycheckForm></PaycheckForm>
      </div>
    );
  }
}
