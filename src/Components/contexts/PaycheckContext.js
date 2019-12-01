import React, { Component } from "react";

export const nullPaycheck = {
  user_id: {},
  id: {}
};

const PaycheckContext = React.createContext({
  paycheck: nullPaycheck,
  error: null,
  setError: () => {},
  clearError: () => {},
  setPaycheck: () => {},
  clearPaycheck: () => {},
  addPaycheck: () => {}
});

export default PaycheckContext;

export class PaycheckProvider extends Component {
  state = {
    paycheck: nullPaycheck,
    error: null
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setPaycheck = paycheck => {
    this.setState({ paycheck });
  };

  addPaycheck = paycheck => {
    this.setPaycheck([...this.state.paycheck, paycheck]);
  };

  clearPaycheck = () => {
    this.setPaycheck(nullPaycheck);
  };

  render() {
    const value = {
      paycheck: this.state.paycheck,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setPaycheck: this.setPaycheck,
      //setUser: this.setUser,
      clearPaycheck: this.clearPaycheck
    };
    return (
      <PaycheckContext.Provider value={value}>
        {this.props.children}
      </PaycheckContext.Provider>
    );
  }
}
