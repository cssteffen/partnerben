import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import LandingPage from "../LandingPage/LandingPage";
//import LoginPage from "../../routes/LoginPage/LoginPage";
//import PaycheckPage from "../../routes/PaycheckPage/PaycheckPage";
//import DashboardPage from "../../routes/DashboardPage/DashboardPage";
//import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";

class App extends Component {
  render() {
    return (
      <body>
        <main className="App">
          <Header></Header>
          <Nav></Nav>
          <LandingPage></LandingPage>
        </main>
        <Footer></Footer>
      </body>
    );
  }
}

export default App;

/* ========== APP PAGE ==========
      <body>
        <main className="App">
          <Header></Header>
          <Nav></Nav>
          <LandingPage></LandingPage>
        </main>
        <Footer></Footer>
      </body>

*/
