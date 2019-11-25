import React, { Component } from "react";
import PaycheckListContext from "../../Components/contexts/PaycheckListContext";
import PaycheckApiService from "../../services/paycheck-api-service";
import PaycheckListItem from "../../Components/PaycheckListItem/PaycheckListItem";

export default class PaycheckListPage extends Component {
  static contextType = PaycheckListContext;

  componentDidMount() {
    this.context.clearError();
    PaycheckApiService.getPaychecks()
      .then(this.context.setPaycheckList)
      .catch(this.context.setError);
  }

  renderPaychecks() {
    const { paycheckList = [] } = this.context;
    return paycheckList.map(paycheck => (
      <PaycheckListItem key={paycheck.id} paycheck={paycheck} />
    ));
  }

  render() {
    const { error } = this.context;
    return (
      <section>
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          this.renderPaychecks()
        )}
      </section>
    );
  }
}
