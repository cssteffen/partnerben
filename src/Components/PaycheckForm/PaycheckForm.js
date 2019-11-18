import React, { Component } from "react";
import "./PaycheckForm.css";

export default class PaycheckForm extends Component {
  render() {
    return (
      <section>
        <form id="enterPaycheck">
          <div class="form-section">
            <div class="paycheck-date-div">
              <label for="paycheck-date">Paycheck Date</label>
              <select required>
                <option>--Select Date --</option>
                <option>Paycheck Date 1</option>
                <option>Paycheck Date 2</option>
                <option>Paycheck Date 3</option>
                <option>Paycheck Date 4</option>
                <option>Paycheck Date 5</option>
                <option>Paycheck Date 6</option>
                <option>Paycheck Date 7</option>
                <option>Paycheck Date 8</option>
                <option>Paycheck Date 9</option>
                <option>Paycheck Date 10</option>
                <option>Paycheck Date 11</option>
                <option>Paycheck Date 12</option>
                <option>Paycheck Date 13</option>
              </select>
            </div>

            <div class="ben-hrs-div">
              <label for="ben-hours">BEN hours</label>
              <input type="number" name="ben-hours" placeholder="127" />
            </div>

            <div class="vacation-hrs-div">
              <label for="vacation-hours">Vacation hours</label>
              <input type="number" name="vacation-hours" placeholder="23" />
            </div>

            <div class="sick-hrs-div">
              <label for="sick-hours">Sick hours</label>
              <input type="number" name="sick-hours" placeholder="8" />
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    );
  }
}
