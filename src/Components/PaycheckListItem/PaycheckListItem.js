import React from "react";
//import { Link } from "react-router-dom";

export default class PaycheckListItem extends React.Component {
  render() {
    const { paycheck } = this.props;
    return (
      <div className="PaycheckListItem__details">
        <div className="PaycheckListItem__text">
          <h2 className="PaycheckListItem__heading">{paycheck.paystub_date}</h2>
          <p>User ID: {paycheck.user_id}</p>
          <p>BEN hours: {paycheck.ben_hours}</p>
          <p>Vacation hours: {paycheck.vacation_hours}</p>
          <p>Sick hours: {paycheck.sick_hours}</p>
          <p>Date Created: {paycheck.date_created}</p>
          <p>Date Modified: {paycheck.modified}</p>
          <button>Edit Paycheck</button>
        </div>
      </div>
    );
  }
}

/*
      <Link to={`/paystubs/${paycheck.id}`} className="PaycheckListItem">
      </Link>

*/
