import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./buttons.css";

export default class Buttons extends Component {
  render() {
    return (
      <div>
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/dashboard">
          <button>Demo</button>
        </Link>
      </div>
    );
  }
}
