import React, { Component } from "react";
import "./PaycheckPage.css";
import PaycheckForm from "../../Components/PaycheckForm/PaycheckForm";
import PaycheckContext from "../../Components/contexts/PaycheckContext";
//import PaycheckApiService from "../../services/paycheck-api-service";

export default class PaycheckPage extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  static contextType = PaycheckContext;
  /*
  componentDidMount() {
    const { paycheckId } = this.props.match.params;
    this.context.clearError();
    PaycheckApiService.getPaycheck(paycheckId)
      .then(this.context.setPaycheck)
      .catch(this.context.setError);
  }
  */

  componentWillUnmount() {
    this.context.clearPaycheck();
  }
  /*
  renderPaycheck() {
    const { paycheck } = this.context;
    return (
      <>
        <PaycheckContent paycheck={paycheck} />
        <PaycheckForm />
      </>
    );
  }
  */

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
