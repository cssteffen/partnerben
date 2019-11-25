import React, { Component } from "react";
//import TokenService from "../services/token-service";
import PaycheckApiService from "../../services/paycheck-api-service";
import PaycheckContext from "../../Components/contexts/PaycheckContext";
//import Moment from "react-moment";
//import { compareAsc, format } from 'date-fns'
import "./PaycheckForm.css";

export default class PaycheckForm extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  static contextType = PaycheckContext;

  state = { error: null };

  handleChange = ev => {
    ev.preventDefault();
    const { paycheck } = this.props.match.params;
    //this.setState({ value: ev.target.value });

    //this.setState({ error: null });

    /* ========= would like if selected to preLoad with data ======= 
    PaycheckApiService.getPaycheck(paycheck.id)
      .then(this.context.setPaycheck)
      .catch(this.context.setError);
    console.log("PAYSTUB_DATE", this.refs.paystub_date.value);*/
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const { paycheck } = this.context;
    const { paystub_date, ben_hours, vacation_hours, sick_hours } = ev.target;
    //console.log("REFS.PAYSTUB_DATE", this.refs.paystub_date.value);
    this.setState({ error: null });
    //console.log("PAYSTUB_DATE", paystub_date);

    PaycheckApiService.postPaycheck(
      paycheck.id,
      new Date(paystub_date.value),
      Number(ben_hours.value),
      Number(vacation_hours.value),
      Number(sick_hours.value)
    )
      .then(
        console.log(
          paystub_date.value,
          ben_hours.value,
          vacation_hours.value,
          sick_hours.value
        )
      )
      .then(this.context.setPaycheck())
      .then(this.context.addPaycheck())
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    //const startDate = new Date("2019-07-12T12:59-0500");
    //moment(startDate).format("MMMM Do YYYY, h:mm:ss a"); // November 23rd 2019, 11:53:52 pm
    //const date = new Date("2019-07-12T12:59-0500");

    return (
      <section>
        <form className="enterPaycheck" onSubmit={this.handleSubmit}>
          <div className="form-section">
            <div className="paycheck-date-div">
              <label htmlFor="paycheck-date">Paycheck Date</label>
              <select
                ref="paystub_date"
                required
                name="paystub_date"
                onChange={this.handleChange}
              >
                <option>--Select Date --</option>
                <option name="Paycheck 1" value="7/12/2019">
                  7/12/2019
                </option>
                <option name="Paycheck 2" value="7/26/2019">
                  7/26/2019
                </option>
                <option name="Paycheck 3" value="8/09/2019">
                  8/09/2019
                </option>
                <option name="Paycheck 4" value="8/23/2019">
                  8/23/2019
                </option>
                <option name="Paycheck 5" value="9/06/2019">
                  9/06/2019
                </option>
                <option name="Paycheck 6" value="9/20/2019">
                  9/20/2019
                </option>
                <option name="Paycheck 7" value="10/04/2019">
                  10/04/2019
                </option>
                <option name="Paycheck 8" value="10/18/2019">
                  10/18/2019
                </option>
                <option name="Paycheck 9" value="11/01/2019">
                  11/01/2019
                </option>
                <option name="Paycheck 10" value="11/15/2019">
                  11/15/2019
                </option>
                <option name="Paycheck 11" value="11/29/2019">
                  11/29/2019
                </option>
                <option name="Paycheck 12" value="12/13/2019">
                  12/13/2019
                </option>
                <option name="Paycheck 13" value="12/27/2019">
                  12/27/2019
                </option>
              </select>
            </div>

            <div className="ben-hrs-div">
              <label htmlFor="ben-hours">BEN hours</label>
              <input type="decimal" name="ben_hours" />
            </div>

            <div className="vacation-hrs-div">
              <label htmlFor="vacation-hours">Vacation hours</label>
              <input type="decimal" name="vacation_hours" />
            </div>

            <div className="sick-hrs-div">
              <label htmlFor="sick-hours">Sick hours</label>
              <input type="decimal" name="sick_hours" />
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    );
  }
}
