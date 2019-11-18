import React, { Component } from "react";
import coffeeCup from "../../images/coffeeCup.svg";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <nav role="navigation" class="header">
        <img
          className="logo-cup"
          src={coffeeCup}
          alt="coffee cup"
          height="35px"
        />
        <a href="../index.html">
          <div className="logo">
            <h1>PartnerBEN</h1>
          </div>
        </a>
        <span className="header-tagline">
          Track your hours. Keep your benefits.
        </span>
      </nav>
    );
  }
}