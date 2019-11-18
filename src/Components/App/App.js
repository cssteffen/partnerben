import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import DashboardPage from "../../routes/DashboardPage/DashboardPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import PaycheckPage from "../../routes/PaycheckPage/PaycheckPage";

class App extends Component {
  render() {
    return (
      <body>
        <div className="App">
          <nav>
            {" "}
            <Header />
          </nav>
          <header>
            {" "}
            <Nav />
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegistrationPage} />
              <Route path="/dashboard" component={DashboardPage} />
              <Route path="/paystub" component={PaycheckPage} />
            </Switch>
          </main>
        </div>
        <Footer></Footer>
      </body>
    );
  }
}

export default App;

/* ========== APP PAGE ==========

              <Route component={NotFoundPage} />

      <body>
        <main className="App">
          <Header></Header>
          <Nav></Nav>
          <LandingPage></LandingPage>
        </main>
        <Footer></Footer>
      </body>

*/
