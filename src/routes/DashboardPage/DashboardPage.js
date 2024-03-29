import React, { Component } from "react";
//import PaycheckApiService from "../../services/paycheck-api-service";
import PaycheckContext from "../../Components/contexts/PaycheckContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faClock,
  faBullseye,
  faSun,
  faBandAid,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import "./DashboardPage.css";
//import { PaycheckListProvider } from "../../Components/contexts/PaycheckListContext";

export default class DashboardPage extends Component {
  static defaultProps = {
    match: { params: {} },
    location: {},
    history: {
      push: () => {}
    }
  };

  handlePaycheckEntrySuccess = () => {
    const { history } = this.props;
    history.push("/dashboard");
  };

  static contextType = PaycheckContext;

  componentDidMount() {
    //const { paycheckId } = 6;
    //const { paycheck } = this.context;
    //console.log("paycheckId", paycheckId);
    //console.log("paycheck", paycheck);
    //this.context.clearError();
    //PaycheckApiService.getPaycheck(paycheckId)
    //.then(this.context.setPaycheck)
    //.then(this.context.paycheck)
    //.catch(this.context.setError);
  }

  /*
    componentDidMount() {
    this.context.clearError();
    PaycheckApiService.getPaychecks()
      .then(this.context.setPaycheckList)
      .then(this.context.paycheckList)
      .catch(this.context.setError);
  }
  */

  componentWillUnmount() {
    //this.context.clearPaycheck();
  }

  render() {
    //function callPaycheck() {
    //PaycheckApiService.getPaycheck(paycheck.id)
    //.then(this.context.setPaycheck)
    //.catch(this.context.setError);

    //const { paycheck = {} } = this.context;
    //}

    return (
      <div className="dashboardPage_div">
        <section>
          <div className="ListItem__icon">
            <div className="ListItem__circle">
              <FontAwesomeIcon icon={faCoffee} size={"lg"} />
            </div>
          </div>
          <h2>BEN Hours</h2>
          <p>
            <span className="ben_hours">421</span>
          </p>
          <p>
            (as of{" "}
            <span className="ben_hours_paycheck_date">Nov. 15, 2019</span>)
          </p>
        </section>

        <section>
          <div className="ListItem__icon">
            <div className="ListItem__circle">
              <FontAwesomeIcon icon={faClock} size={"lg"} />
            </div>
          </div>
          <h2>Weekly Average</h2>
          <p className="subtitle">Current average of hours working per week.</p>
          <p>
            <span className="weekly_average">21.03</span> hrs
          </p>
        </section>

        <section>
          <div className="ListItem__icon">
            <div className="ListItem__circle">
              <FontAwesomeIcon icon={faBullseye} size={"lg"} />
            </div>
          </div>
          <h2>
            Goal Status: <span className="goal_status_status">BEHIND</span>
          </h2>
          <p className="subtitle">
            Total number of hours ahead or behind pace of goal.
          </p>
          <p>
            <span className="goal_status_hours">5</span> hrs
          </p>
        </section>

        <section>
          <div className="ListItem__icon">
            <div className="ListItem__circle">
              <FontAwesomeIcon icon={faSun} size={"lg"} />
            </div>
          </div>
          <h2>Vacation Hours</h2>
          <p className="subtitle">Accrued vacation hours available.</p>
          <p>
            <span className="vacation_hours">25</span> hrs
          </p>
        </section>

        <section>
          <div className="ListItem__icon">
            <div className="ListItem__circle">
              <FontAwesomeIcon icon={faBandAid} size={"lg"} />
            </div>
          </div>
          <h2>Sick Hours</h2>
          <p className="subtitle">Accrued sick hours available.</p>
          <p>
            <span className="sick_hours">9</span> hrs
          </p>
        </section>
        <section>
          <div className="ListItem__icon">
            <div className="ListItem__circle">
              <FontAwesomeIcon icon={faCheck} size={"lg"} />
            </div>
          </div>
          <h2>Paycheck</h2>
          <p className="subtitle">
            Enter a new paystub or edit an existing one
          </p>

          <Link to="/paystub">
            <button className="paystub-btn">Enter PayStubs</button>
          </Link>

          <Link to="/paystubList">
            {" "}
            <button>Edit PayStubs </button>
          </Link>
        </section>
      </div>
    );
  }
}
/*
        <div className="ListItem">
          <div className="ListItem__icon">
            <div className="ListItem__circle">
              <FontAwesomeIcon icon={faCoffee} />
            </div>
          </div>
          <div className="ListItem__content">
            <div className="ListItem__heading">
              <div className="ListItem__title">Enter Paystub</div>
              <div className="ListItem__size">Size</div>
              <button class="paystub-btn">
                <a href="../Paystub Entry Form/paystubForm.html">
                  Enter PayStubs
                </a>
              </button>
            </div>
            <div className="ListItem__actions">
              <div className="ListItem__status">
                Enter a new paystub or edit an existing one
              </div>
            </div>
          </div>
        </div>
*/
