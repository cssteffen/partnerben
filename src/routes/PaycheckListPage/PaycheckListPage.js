import React, { Component } from "react";
import PaycheckListContext from "../../Components/contexts/PaycheckListContext";
import PaycheckApiService from "../../services/paycheck-api-service";
import PaycheckListItem from "../../Components/PaycheckListItem/PaycheckListItem";
import "./PaycheckListPage.css";

export default class PaycheckListPage extends Component {
  static contextType = PaycheckListContext;

  componentDidMount() {
    this.context.clearError();
    PaycheckApiService.getPaychecks()
      .then(this.context.setPaycheckList)
      .then(this.context.paycheckList)
      .catch(this.context.setError);
  }

  /*
    paycheckList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setPaycheckList: () => {}
  */

  renderPaychecks() {
    const { paycheckList } = this.context;

    return paycheckList.map(paycheck => (
      <PaycheckListItem key={paycheck.id} paycheck={paycheck} />
    ));
  }

  render() {
    const { error } = this.context;

    return (
      <div className="paycheckList_div">
        <div>
          <h2>Existing PayStubs</h2>
        </div>

        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          this.renderPaychecks()
        )}
      </div>
    );
  }
}
