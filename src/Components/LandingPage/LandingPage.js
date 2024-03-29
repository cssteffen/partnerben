import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faRunning,
  faLevelUpAlt
} from "@fortawesome/free-solid-svg-icons";
//import { li} from "@fortawesome/free-brands-svg-icons";
import "./LandingPage.css";
import "./animate.css";
import Buttons from "../Buttons/Buttons";
import paycheckEntry from "../../images/paycheckEntry.png";
import FireShotCapture from "../../images/FireShotCapture.png";
import coffeeCup from "../../images/coffeeCup.svg";
//import partnerBenDashboardScroll from "../../images/partnerBenDashboardScroll.mpeg-4";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landingPage_div">
        <section>
          <h2>
            <span className="welcomeFont">Welcome to PartnerBen</span>
          </h2>
          <p className="subtitle">
            An online management system to easily track <br />
            vacation, sick + BEN hours for maintaining benefits eligibility.
          </p>
          <div className="box1 animated rotateIn ">
            <img
              className="spinny-logo-cup"
              src={coffeeCup}
              alt="coffee cup"
              height="100px"
            />
          </div>
        </section>
        <section>
          <h2>Why PartnerBen</h2>

          <p>
            Starbucks is known for their generous benefits <br />
            to part-time and full-time employees.
          </p>
          <p>
            <b>• 30,000+ locations worldwide </b>
          </p>

          <p>
            <b>• 183,000+ employees across America </b>
          </p>

          <p>
            Partners can now easily track their hours <br />
            to ensure they keep their benefits.
          </p>
        </section>

        <section>
          <h2>Advantages</h2>
          <div className="flex_container">
            <p>Always be in the know</p>
            <div className="box animated pulse">
              <FontAwesomeIcon
                icon={faLightbulb}
                size={"7x"}
                color={"orange"}
              />
            </div>
            <p>Worry less with pace setter</p>
            <div className="box animated swing">
              <FontAwesomeIcon icon={faRunning} size={"7x"} color={"orange"} />
            </div>
            <p>Leverage accrued time off</p>
            <div className="box animated pulse">
              <FontAwesomeIcon
                icon={faLevelUpAlt}
                size={"7x"}
                color={"orange"}
              />
            </div>
          </div>
        </section>

        <section>
          <h2>How it Works</h2>
          <p>
            <a href="/" className="reset-link">
              Sign up
            </a>{" "}
            for an account
          </p>
          <p>Enter paycheck data</p>
          <img
            className="paycheckImg"
            src={paycheckEntry}
            alt="paycheck entry form screenshot"
            width="300px"
          />

          <p>View personalized dashboard</p>
          <img
            className="scrollImg"
            src={FireShotCapture}
            alt="paycheck entry form screenshot"
            width="300px"
          />
        </section>

        <section>
          <Buttons></Buttons>
        </section>
      </div>
    );
  }
}
/*

*/
