import React, { Component } from "react";

const PaycheckListContext = React.createContext({
  paycheckList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setPaycheckList: () => {}
});
export default PaycheckListContext;

export class PaycheckListProvider extends Component {
  state = {
    paycheckList: [],
    error: null
  };

  setPaycheckList = paycheckList => {
    this.setState({ paycheckList });
    console.log("PAYCHECK0", paycheckList);
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      paycheckList: this.state.paycheckList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setPaycheckList: this.setPaycheckList
    };
    return (
      <PaycheckListContext.Provider value={value}>
        {this.props.children}
      </PaycheckListContext.Provider>
    );
  }
}
