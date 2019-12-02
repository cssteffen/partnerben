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
 === NEED: to set user_id to signed in UserID!!
 === then select LAST paycheck INFO for Dashboard - KEEP Saved until changed!!
  */

  renderPaychecks() {
    const { paycheckList } = this.context;
    //const filteredpaycheckList = paycheckList.filter(
    //item => item.user_id === 21
    //);

    return paycheckList.map(paycheck => (
      <PaycheckListItem key={paycheck.id} paycheck={paycheck} />
    ));
  }

  render() {
    /*
    const userPadding = 5;
    const padding = 520 + userPadding;
    const weeklyAverage = benHours / (paycheckCodeNum * 2);
    const goalStatus = current - weekgoal;*/

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
